import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Phone, User, Key, Sparkles, CheckCircle2, 
  AlertCircle, ArrowRight, Shield, Send, Smartphone, RefreshCw, Lock
} from 'lucide-react';
import { 
  setupRecaptcha, 
  sendPhoneOtp, 
  verifyPhoneOtp,
  loginAsAdmin
} from '../firebase/nyotaDb';

export default function AuthModal({ isOpen, onClose, onSuccess, initialMode = 'phone' }) {
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [otpCode, setOtpCode] = useState('');
  
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(0);

  const recaptchaRef = useRef(null);

  // Resend OTP Countdown timer
  useEffect(() => {
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  if (!isOpen) return null;

  const fullPhone = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;

  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const cleanNum = phoneNumber.replace(/\D/g, '');
    if (!cleanNum || cleanNum.length < 8) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Immediately navigate to OTP input step so the page asks for OTP
    setStep('otp');
    setCountdown(60);
    setLoading(true);

    try {
      const res = await sendPhoneOtp(fullPhone);

      if (res.confirmationResult) {
        setConfirmationResult(res.confirmationResult);
      }

      if (res.success) {
        setSuccessMessage(`OTP sent successfully via SMS to ${res.formattedPhone || fullPhone}`);
      } else {
        setErrorMessage(res.error || 'Failed to send SMS OTP. Please check your number.');
      }
    } catch (err) {
      console.error('Send OTP error:', err);
      setErrorMessage('Failed to send SMS OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!otpCode || otpCode.trim().length < 4) {
      setErrorMessage('Please enter the 6-digit OTP code received on your phone.');
      return;
    }

    setLoading(true);

    try {
      const res = await verifyPhoneOtp(confirmationResult, otpCode.trim(), displayName.trim(), fullPhone);

      if (res.success && res.user) {
        setSuccessMessage('Phone verified successfully! Welcome to Nyota.');
        if (onSuccess) onSuccess(res.user);
        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        setErrorMessage(res.error || 'Invalid OTP code. Please try again.');
      }
    } catch (err) {
      console.error('Verify OTP error:', err);
      setErrorMessage('OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminBypass = async () => {
    setLoading(true);
    try {
      const res = await loginAsAdmin();
      if (res.success) {
        setSuccessMessage('Signed in as Super Admin.');
        if (onSuccess) onSuccess(res.user);
        setTimeout(() => onClose(), 600);
      }
    } catch (err) {
      setErrorMessage('Admin login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl border border-champagne-500/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-[#0E0C1C] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* reCAPTCHA container for Firebase Phone Auth */}
        <div id="auth-recaptcha-container" ref={recaptchaRef} className="flex justify-center my-1"></div>

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
            <Smartphone className="w-3.5 h-3.5 text-champagne-400" />
            <span>Mobile OTP Authentication</span>
          </div>
          <h2 className="text-2xl font-cinzel font-bold text-white">
            {step === 'phone' ? 'Sign In with Phone' : 'Enter 6-Digit OTP'}
          </h2>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            {step === 'phone' 
              ? 'Enter your mobile number to receive a one-time SMS verification code.' 
              : `We sent a 6-digit verification code to ${fullPhone}.`}
          </p>
        </div>

        {/* Step 1: Phone Number Input */}
        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            
            {/* Display Name (Optional) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-champagne-400" />
                <span>Your Name / Couple Names (Optional)</span>
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Rohan & Ananya"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
              />
            </div>

            {/* Phone Number with Country Code */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-champagne-400" />
                <span>Mobile Number *</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-champagne-400 font-mono cursor-pointer"
                >
                  <option value="+91" className="bg-[#0E0C1C] text-white">🇮🇳 +91</option>
                  <option value="+1" className="bg-[#0E0C1C] text-white">🇺🇸 +1</option>
                  <option value="+44" className="bg-[#0E0C1C] text-white">🇬🇧 +44</option>
                  <option value="+971" className="bg-[#0E0C1C] text-white">🇦🇪 +971</option>
                  <option value="+966" className="bg-[#0E0C1C] text-white">🇸🇦 +966</option>
                  <option value="+65" className="bg-[#0E0C1C] text-white">🇸🇬 +65</option>
                  <option value="+61" className="bg-[#0E0C1C] text-white">🇦🇺 +61</option>
                  <option value="+1" className="bg-[#0E0C1C] text-white">🇨🇦 +1</option>
                </select>
                <input
                  type="tel"
                  required
                  autoFocus
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="98765 43210"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-mono"
                />
              </div>
            </div>

            {/* Error Message & Troubleshooting Guidance */}
            {errorMessage && (
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block">{errorMessage}</span>
                    <span className="text-[11px] text-slate-300 block">
                      💡 Tip: For testing without SMS carrier delays, add test phone numbers in Firebase Console &gt; Authentication &gt; Sign-in method &gt; Phone.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Send OTP Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Sending SMS OTP...</span>
                </>
              ) : (
                <>
                  <span>Send OTP via SMS</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Step 2: OTP Verification */
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            
            <div className="space-y-1.5 text-center">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-champagne-400" />
                <span>Enter 6-Digit SMS Code</span>
              </label>
              <input
                type="text"
                required
                autoFocus
                maxLength={6}
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                placeholder="• • • • • •"
                className="w-full text-center tracking-[0.5em] px-4 py-3.5 rounded-xl bg-black/60 border border-champagne-400/50 text-white placeholder-slate-600 text-xl font-mono focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all"
              />
            </div>

            {/* Error & Success Messages */}
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

            {/* Verify Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 text-slate-950 font-bold text-sm shadow-glow-emerald hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Verifying Code...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Verify & Sign In</span>
                </>
              )}
            </button>

            {/* Resend OTP / Change Number */}
            <div className="flex items-center justify-between text-xs pt-1">
              <button
                type="button"
                onClick={() => { setStep('phone'); setErrorMessage(''); setSuccessMessage(''); }}
                className="text-slate-400 hover:text-white cursor-pointer underline"
              >
                Change Phone Number
              </button>

              <button
                type="button"
                disabled={countdown > 0 || loading}
                onClick={handleSendOtp}
                className={`cursor-pointer ${countdown > 0 ? 'text-slate-500' : 'text-champagne-400 hover:text-amber-300 font-semibold'}`}
              >
                {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend SMS OTP'}
              </button>
            </div>
          </form>
        )}

        {/* Super Admin Quick Switch (Optional helper) */}
        <div className="pt-2 border-t border-white/10 text-center flex items-center justify-between">
          <div className="text-[11px] text-slate-400 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-champagne-400" />
            <span>Encrypted SMS Authentication</span>
          </div>

          <button
            type="button"
            onClick={handleAdminBypass}
            className="text-[10px] font-mono text-slate-500 hover:text-amber-400 transition-colors cursor-pointer"
          >
            Admin Login
          </button>
        </div>

      </div>
    </div>
  );
}
