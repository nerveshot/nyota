import React, { useState } from 'react';
import { 
  X, Mail, Lock, User, Key, Eye, EyeOff, Sparkles, 
  CheckCircle2, AlertCircle, ArrowRight, Shield, Send
} from 'lucide-react';
import { 
  loginWithFirebaseEmail, 
  registerWithFirebaseEmail, 
  sendFirebasePasswordReset 
} from '../firebase/nyotaDb';

export default function AuthModal({ isOpen, onClose, onSuccess, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup' | 'reset'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (mode === 'reset') {
      setLoading(true);
      try {
        const res = await sendFirebasePasswordReset(email);
        if (res.success) {
          setSuccessMessage(res.message || 'Password reset email sent! Check your inbox.');
        } else {
          setErrorMessage(res.error || 'Failed to send reset email.');
        }
      } catch (err) {
        setErrorMessage('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
      return;
    }

    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    if (mode === 'signup') {
      if (!displayName.trim()) {
        setErrorMessage('Please enter your full name.');
        return;
      }
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      setLoading(true);
      try {
        const res = await registerWithFirebaseEmail(email, password, displayName);
        if (res.success) {
          setSuccessMessage('Account created successfully!');
          if (onSuccess) onSuccess(res.user);
          setTimeout(() => onClose(), 1000);
        } else {
          setErrorMessage(res.error || 'Registration failed.');
        }
      } catch (err) {
        setErrorMessage('Failed to create account. Please try again.');
      } finally {
        setLoading(false);
      }
      return;
    }

    // Sign In mode
    setLoading(true);
    try {
      const res = await loginWithFirebaseEmail(email, password);
      if (res.success) {
        setSuccessMessage('Signed in successfully!');
        if (onSuccess) onSuccess(res.user);
        setTimeout(() => onClose(), 800);
      } else {
        setErrorMessage(res.error || 'Incorrect email or password.');
      }
    } catch (err) {
      setErrorMessage('Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl border border-champagne-500/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-[#0E0C1C] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-[11px] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Nyota Client Portal</span>
          </div>
          <h2 className="text-2xl font-cinzel font-bold text-white">
            {mode === 'signup' && 'Create Your Account'}
            {mode === 'signin' && 'Welcome Back'}
            {mode === 'reset' && 'Reset Password'}
          </h2>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            {mode === 'signup' && 'Sign up with your email to manage, edit, and publish your invitations.'}
            {mode === 'signin' && 'Sign in to access your purchased invitations and live RSVP tracking.'}
            {mode === 'reset' && 'Enter your registered email to receive a password reset link.'}
          </p>
        </div>

        {/* Tabs (Sign In / Sign Up) */}
        {mode !== 'reset' && (
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setMode('signin'); setErrorMessage(''); setSuccessMessage(''); }}
              className={`py-2.5 rounded-xl transition-all ${
                mode === 'signin' 
                  ? 'bg-gradient-to-r from-champagne-400 to-amber-500 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setErrorMessage(''); setSuccessMessage(''); }}
              className={`py-2.5 rounded-xl transition-all ${
                mode === 'signup' 
                  ? 'bg-gradient-to-r from-champagne-400 to-amber-500 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Display Name (Only in Sign Up) */}
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-champagne-400" />
                <span>Your Full Name / Couple Names</span>
              </label>
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Rohan & Ananya"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
              />
            </div>
          )}

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-champagne-400" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
            />
          </div>

          {/* Password Field (Sign In & Sign Up) */}
          {mode !== 'reset' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Password</span>
                </label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => { setMode('reset'); setErrorMessage(''); setSuccessMessage(''); }}
                    className="text-[11px] text-champagne-400 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all pr-10 font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-champagne-400" /> : <Eye className="w-4 h-4 text-slate-500" />}
                </button>
              </div>
            </div>
          )}

          {/* Confirm Password (Sign Up) */}
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-champagne-400" />
                <span>Confirm Password</span>
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
              />
            </div>
          )}

          {/* Feedback Messages */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
          >
            {loading ? (
              <span>Please wait...</span>
            ) : mode === 'signup' ? (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : mode === 'signin' ? (
              <>
                <Lock className="w-4 h-4" />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Reset Link</span>
              </>
            )}
          </button>

          {/* Reset password cancel button */}
          {mode === 'reset' && (
            <button
              type="button"
              onClick={() => { setMode('signin'); setErrorMessage(''); setSuccessMessage(''); }}
              className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
            >
              Back to Sign In
            </button>
          )}
        </form>

        {/* Security Footer */}
        <div className="pt-2 border-t border-white/10 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Shield className="w-3.5 h-3.5 text-champagne-400" />
            <span>Encrypted & Secured Client Authentication</span>
          </div>
        </div>

      </div>
    </div>
  );
}
