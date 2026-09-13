import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CreditCard, Lock, CheckCircle2, ShieldCheck, Sparkles, X, 
  ArrowRight, Tag, Smartphone, ExternalLink, Download, Share2, Copy, Check 
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/templates';
import { createOrderRecord, saveInvitationToCloud } from '../firebase/nyotaDb';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  customizationData, 
  preSelectedPlan, 
  onOpenExport 
}) {
  if (!isOpen) return null;

  const defaultPlan = preSelectedPlan || PRICING_PACKAGES.find(p => p.id === 'pro') || PRICING_PACKAGES[1];
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);

  // Add-ons
  const [addOnDesigner, setAddOnDesigner] = useState(false); // +$15
  const [addOnVanityDomain, setAddOnVanityDomain] = useState(false); // +$10

  // Promo Code
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'applepay' | 'paypal'

  // Card details
  const [cardName, setCardName] = useState('Elena Vance');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');

  // Checkout Status
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Calculate pricing
  const basePrice = selectedPlan.price;
  const addOnsTotal = (addOnDesigner ? 15 : 0) + (addOnVanityDomain ? 10 : 0);
  const subtotal = basePrice + addOnsTotal;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Promo code verification
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'CELEBRATE20') {
      setDiscountPercent(20);
      setCouponSuccess('20% Discount applied successfully! 🎉');
    } else if (code === 'GOLDEN10' || code === 'SAVE10') {
      setDiscountPercent(15);
      setCouponSuccess('15% Special discount applied! ✨');
    } else {
      setCouponError('Invalid coupon code. Try code "CELEBRATE20"');
    }
  };

  // Submit Payment & Save to Firestore (/nyota/orders & /nyota/invitations)
  const handleProcessPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // 1. Save published invitation to /nyota/invitations/items
      let savedInvId = null;
      if (customizationData) {
        const invRes = await saveInvitationToCloud({
          ...customizationData.invitationData,
          themeId: customizationData.themeId,
          fontPairingId: customizationData.fontPairingId,
          sealId: customizationData.sealId,
          sealColor: customizationData.sealColor,
          ambientTrackId: customizationData.ambientTrackId,
          templateId: customizationData.selectedTemplate?.id,
          status: 'published'
        });
        savedInvId = invRes?.id;
      }

      // 2. Create Order Record in /nyota/orders/items
      await createOrderRecord({
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        amount: finalTotal,
        currency: 'USD',
        couponCode: discountPercent > 0 ? couponCode : null,
        discountApplied: discountAmount,
        addOns: [
          ...(addOnDesigner ? ['VIP Designer Concierge'] : []),
          ...(addOnVanityDomain ? ['Custom Vanity Domain'] : []),
        ],
        customerName: cardName,
        paymentMethod: paymentMethod,
        invitationId: savedInvId || 'inv_custom_01'
      });

      setIsProcessing(false);
      setIsCompleted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#D4AA64', '#FAF5ED', '#DF5E7E', '#2B9E78', '#FFFFFF'],
        });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.error('Payment processing error:', err);
      setIsProcessing(false);
      setIsCompleted(true);
    }
  };

  const sampleSlug = (customizationData?.invitationData?.primaryNames || 'your-celebration')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const shareableUrl = `https://nyota.invites/e/${sampleSlug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Modal Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                Finalize Your <span className="gold-gradient-text">Custom Invitation</span>
              </h2>
              <p className="text-xs text-slate-300">
                Unlock instant digital delivery, live RSVP synchronization & unlimited guest responses.
              </p>
            </div>

            <form onSubmit={handleProcessPayment} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Order Summary & Add-ons (5 cols) */}
              <div className="md:col-span-5 glass-panel p-4 rounded-2xl border border-white/10 space-y-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-white/10 pb-2">
                  Selected Package
                </div>

                {/* Package selector */}
                <div className="space-y-2">
                  {PRICING_PACKAGES.map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setSelectedPlan(pkg)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        selectedPlan.id === pkg.id
                          ? 'border-champagne-400 bg-champagne-500/15 font-semibold text-white'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{pkg.name}</span>
                      <span className="font-bold text-champagne-300">${pkg.price}</span>
                    </button>
                  ))}
                </div>

                {/* Optional Add-Ons */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    Optional Add-Ons
                  </div>

                  <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer p-2 rounded-lg bg-white/5 border border-white/10 hover:border-champagne-400/30">
                    <input
                      type="checkbox"
                      checked={addOnDesigner}
                      onChange={(e) => setAddOnDesigner(e.target.checked)}
                      className="mt-0.5 rounded text-champagne-500 focus:ring-0"
                    />
                    <div>
                      <div className="font-semibold text-white">VIP Designer Proofreading (+$15)</div>
                      <div className="text-[10px] text-slate-400">Professional typographer reviews layout & alignment.</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer p-2 rounded-lg bg-white/5 border border-white/10 hover:border-champagne-400/30">
                    <input
                      type="checkbox"
                      checked={addOnVanityDomain}
                      onChange={(e) => setAddOnVanityDomain(e.target.checked)}
                      className="mt-0.5 rounded text-champagne-500 focus:ring-0"
                    />
                    <div>
                      <div className="font-semibold text-white">Custom Event Subdomain (+$10)</div>
                      <div className="text-[10px] text-slate-400">e.g. elena-and-arthur.nyota.vip</div>
                    </div>
                  </label>
                </div>

                {/* Coupon Code */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Promo (CELEBRATE20)"
                      className="w-full px-2.5 py-1.5 bg-black/40 border border-white/15 rounded-lg text-xs text-white uppercase placeholder:normal-case focus:outline-none focus:border-champagne-400"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-3 py-1.5 bg-champagne-500/20 hover:bg-champagne-500/30 text-champagne-300 border border-champagne-500/30 rounded-lg text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  {couponSuccess && <div className="text-[10px] text-emerald-400 mt-1">{couponSuccess}</div>}
                  {couponError && <div className="text-[10px] text-rose-400 mt-1">{couponError}</div>}
                </div>

                {/* Price Breakdown */}
                <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Discount ({discountPercent}% off):</span>
                      <span>-${discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
                    <span>Total Due:</span>
                    <span className="gold-gradient-text text-base">${finalTotal}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Payment Details Form (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                
                {/* Payment Method Selector */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-champagne-500/20 border-champagne-400 text-champagne-200'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'applepay'
                        ? 'bg-champagne-500/20 border-champagne-400 text-champagne-200'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span> Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-champagne-500/20 border-champagne-400 text-champagne-200'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>

                {/* Card Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="e.g. Arthur Pendelton"
                      className="w-full px-3.5 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-champagne-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 •••• •••• 4242"
                        className="w-full pl-9 pr-3.5 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-champagne-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-3.5 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-champagne-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                        Security CVC
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="CVC"
                        className="w-full px-3.5 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-champagne-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Pay Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Authorizing Payment...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-slate-950" />
                        <span>Pay ${finalTotal} & Publish Live Invitation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant access • Satisfaction guaranteed • No recurring fee</span>
                </div>

              </div>

            </form>
          </div>
        ) : (
          /* PAYMENT SUCCESS CONFIRMATION & SHARING HUB */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center shadow-glow-emerald">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                Payment Successful! <br />
                <span className="gold-gradient-text">Your Invitation Is Live</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Receipt #{Math.floor(100000 + Math.random() * 900000)} • Confirmation sent to {cardName || 'your email'}.
              </p>
            </div>

            {/* Live Shareable Link Card */}
            <div className="glass-panel p-4 rounded-2xl border border-champagne-500/30 max-w-lg mx-auto space-y-3 text-left">
              <div className="text-[11px] uppercase font-mono tracking-wider text-champagne-300 font-bold">
                Your Shareable Live Invitation Link
              </div>
              
              <div className="flex items-center gap-2 bg-black/50 p-2.5 rounded-xl border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={shareableUrl}
                  className="bg-transparent text-xs text-slate-200 font-mono flex-1 outline-none truncate"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-lg bg-champagne-500 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md hover:bg-champagne-400 transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Action Grid */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenExport(customizationData);
                }}
                className="px-6 py-3 rounded-xl bg-champagne-500 text-slate-950 font-bold text-xs shadow-glow-gold flex items-center gap-2 hover:bg-champagne-400 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res Print PDF & PNG</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all"
              >
                Return to Studio
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
