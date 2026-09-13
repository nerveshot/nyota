import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, Clock, Sparkles, X, Copy, Check, 
  Smartphone, ShieldCheck, ArrowRight, User, AlertCircle, RefreshCw
} from 'lucide-react';
import { 
  loginWithGoogle, 
  subscribeToAuthUser, 
  submitShagunPaymentOrder, 
  subscribeToUserAccess 
} from '../firebase/nyotaDb';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  customizationData, 
  onOpenStudio 
}) {
  if (!isOpen) return null;

  const [currentUser, setCurrentUser] = useState(null);
  const [utr, setUtr] = useState('');
  const [payerName, setPayerName] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [isVerifiedByAdmin, setIsVerifiedByAdmin] = useState(false);

  // Subscribe to auth state
  useEffect(() => {
    const unsubscribe = subscribeToAuthUser((user) => {
      setCurrentUser(user);
      if (user?.accessGranted || user?.paymentStatus === 'verified') {
        setIsVerifiedByAdmin(true);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Listen to user verification status in real time
  useEffect(() => {
    if (!currentUser?.uid) return;

    const unsubscribe = subscribeToUserAccess(currentUser.uid, (userData) => {
      if (userData?.accessGranted || userData?.paymentStatus === 'verified') {
        setIsVerifiedByAdmin(true);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 },
            colors: ['#D4AA64', '#FAF5ED', '#DF5E7E', '#2B9E78', '#FFFFFF'],
          });
        } catch (e) {
          console.log(e);
        }
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [currentUser?.uid]);

  const handleGoogleLogin = async () => {
    setErrorMessage('');
    try {
      const res = await loginWithGoogle();
      if (res.success && res.user) {
        setCurrentUser(res.user);
        if (res.user.accessGranted) {
          setIsVerifiedByAdmin(true);
        }
      }
    } catch (err) {
      console.error('Google Sign-in error:', err);
      setErrorMessage('Google Sign-In failed. Please try again.');
    }
  };

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText('faizansalam@phonepe');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!currentUser) {
      setErrorMessage('Please sign in with Google first so we can tie the payment to your account.');
      return;
    }

    if (!utr || utr.trim().length < 4) {
      setErrorMessage('Please enter a valid 12-digit UPI Transaction Reference / UTR Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitShagunPaymentOrder({
        user: currentUser,
        templateId: customizationData?.selectedTemplate?.id || 'wedding-emerald-luxury',
        templateName: customizationData?.selectedTemplate?.name || 'Royal Emerald & Gold Foil Wedding Invitation',
        utr: utr.trim(),
        payerName: payerName.trim() || currentUser.displayName,
        invitationData: customizationData?.invitationData || null,
      });

      if (res.success) {
        setOrderSubmitted(true);
        setCurrentOrderId(res.orderId);
      }
    } catch (err) {
      console.error('Error submitting payment:', err);
      setErrorMessage(err.message || 'Failed to submit payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-5 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-500/15 border border-champagne-500/30 text-champagne-300 text-[11px] font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3 h-3 text-champagne-400" />
            <span>Auspicious Shagun Ceremony</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            Unlock Full Customizer & Live Webpage
          </h2>
          <p className="text-xs text-slate-300">
            Pay auspicious <span className="font-bold gold-gradient-text text-sm">₹501 Shagun Money</span> to customize, live-edit, and publish your wedding invitation.
          </p>
        </div>

        {/* STEP 1: SINGLE-CLICK GOOGLE SIGN IN */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-champagne-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">1</span>
              <span>Google Account Connection</span>
            </span>
            {currentUser && (
              <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Connected</span>
              </span>
            )}
          </div>

          {!currentUser ? (
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>1-Click Sign in with Google to Link Invitation</span>
            </button>
          ) : (
            <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10">
              <img
                src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`}
                alt={currentUser.displayName}
                className="w-9 h-9 rounded-full border border-champagne-400/60"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">{currentUser.displayName}</div>
                <div className="text-[11px] text-slate-400 font-mono truncate">{currentUser.email}</div>
              </div>
            </div>
          )}
        </div>

        {/* ALREADY VERIFIED STATE */}
        {isVerifiedByAdmin ? (
          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400/40 shadow-glow-emerald">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-1">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Payment Verified & Editor Unlocked!
              </h3>
              <p className="text-xs text-slate-300">
                Your ₹501 Shagun payment has been verified by the admin. You have full access to live customization, 3D unboxing, and publishing.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onOpenStudio) onOpenStudio();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 text-slate-950 font-bold text-sm shadow-glow-emerald hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Open Customizer Studio Now</span>
            </button>
          </div>
        ) : orderSubmitted ? (
          /* STEP 3: AWAITING ADMIN VERIFICATION */
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/40 bg-amber-950/20 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-400/40 animate-pulse">
              <Clock className="w-8 h-8 text-amber-400" />
            </div>

            <div className="space-y-1">
              <h3 className="font-cinzel text-lg font-bold text-white">
                Payment Submitted! Awaiting Admin Verification
              </h3>
              <p className="text-xs text-slate-300">
                We received your UTR: <span className="font-mono text-amber-300 font-bold">{utr}</span>.
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                The admin is verifying your ₹501 Shagun payment. This screen will automatically unlock as soon as verified!
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-champagne-300 flex items-center justify-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-champagne-400" />
              <span>Listening to Live Firestore Approval...</span>
            </div>
          </div>
        ) : (
          /* STEP 2: SCAN QR CODE & ENTER UTR */
          <form onSubmit={handleSubmitPayment} className="space-y-5">
            
            {/* Payment Card with PhonePe QR Code */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-champagne-500/30 bg-black/50 flex flex-col sm:flex-row items-center gap-5">
              
              {/* QR Code Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-champagne-400/60 p-2 bg-white flex-shrink-0 shadow-glow-gold">
                <img
                  src="./payment-qr.jpg"
                  alt="PhonePe UPI Payment QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to direct absolute asset path if needed
                    e.target.src = '/payment-qr.jpg';
                  }}
                />
              </div>

              {/* QR Details */}
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="text-[11px] uppercase font-mono tracking-wider text-champagne-400 font-semibold">
                  Scan & Pay ₹501 Shagun
                </div>
                <div className="font-cinzel text-2xl font-bold gold-gradient-text">
                  ₹501 INR
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Scan this QR code with <strong>PhonePe, Google Pay, Paytm, BHIM</strong>, or any UPI app to transfer ₹501 Shagun.
                </p>

                <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] text-slate-400 font-mono">Accepted:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white font-mono">PhonePe</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white font-mono">GPay</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white font-mono">Paytm</span>
                </div>
              </div>

            </div>

            {/* UTR Input Form */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-champagne-300 mb-1 uppercase tracking-wider">
                  UPI Reference ID / 12-Digit UTR Number *
                </label>
                <input
                  type="text"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  placeholder="e.g. 425983710294 (from payment receipt)"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-champagne-400/40 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-champagne-400"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  You can find the 12-digit UTR / UPI Transaction ID in your PhonePe/GPay payment receipt.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Payer Name / Phone Number (Optional)
                </label>
                <input
                  type="text"
                  value={payerName}
                  onChange={(e) => setPayerName(e.target.value)}
                  placeholder={currentUser?.displayName || "e.g. Rohan Sharma"}
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400 text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>{isSubmitting ? 'Submitting Payment...' : 'Submit Payment for Verification'}</span>
            </button>

            <div className="text-[10px] text-center text-slate-400">
              🔒 Safe & Direct Peer-to-Peer UPI Payment • Verified automatically by Nyota Admin
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
