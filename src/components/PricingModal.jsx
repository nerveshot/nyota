import React from 'react';
import { Sparkles, Check, Crown, ShieldCheck, X, Zap, Heart } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/templates';

export default function PricingModal({ isOpen, onClose, onSelectPlan }) {
  if (!isOpen) return null;

  const pkg = PRICING_PACKAGES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-champagne-400" />
            <span>One Package • Everything Included</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
            All-Inclusive <span className="gold-gradient-text">₹1001 Shagun Money</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            No complicated tiers or hidden fees. Pay ₹1001 auspicious Shagun once, and unlock every feature forever.
          </p>
        </div>

        {/* Single Luxury Package Card */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#1E1838] via-[#141026] to-[#0D0A1B] border-2 border-champagne-400 shadow-glow-gold space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow-md">
                All-Inclusive Shagun 🕉️
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-2">
                {pkg.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {pkg.description}
              </p>
            </div>

            <div className="text-left sm:text-right flex-shrink-0">
              <div className="flex items-baseline gap-1.5 sm:justify-end">
                <span className="text-3xl sm:text-4xl font-cinzel font-bold gold-gradient-text">
                  ₹1001
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹2,501
                </span>
              </div>
              <span className="text-[11px] text-champagne-300/80 font-mono">
                One-time Shagun • Lifetime Access
              </span>
            </div>
          </div>

          {/* Features in 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onSelectPlan(pkg);
                onClose();
              }}
              className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-glow-gold bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 hover:opacity-95 flex items-center justify-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Pay ₹1001 Shagun & Unlock Everything</span>
            </button>
          </div>

        </div>

        {/* Bottom Trust Badge */}
        <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-3 flex-wrap pt-1">
          <span className="flex items-center gap-1 text-champagne-300">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne-400" />
            <span>Direct PhonePe UPI QR Code</span>
          </span>
          <span>•</span>
          <span>Google 1-Click Login</span>
          <span>•</span>
          <span>1-Click Admin Verification</span>
        </div>

      </div>
    </div>
  );
}
