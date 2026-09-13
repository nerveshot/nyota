import React from 'react';
import { Sparkles, Check, Crown, ShieldCheck, X, Zap } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/templates';

export default function PricingModal({ isOpen, onClose, onSelectPlan }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-champagne-400" />
            <span>Transparent One-Time Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white">
            Choose Your <span className="gold-gradient-text">Celebration Package</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            No subscriptions or hidden fees. Pay once per event, enjoy unlimited guest responses and lifetime hosting.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#1E1838] via-[#141026] to-[#0D0A1B] border-2 border-champagne-400 shadow-glow-gold transform lg:-translate-y-2'
                  : 'bg-[#141124] border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular Choice ⭐
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-white/10">
                  <span className="text-4xl font-cinzel font-bold text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ${pkg.originalPrice}
                  </span>
                  <span className="text-xs text-champagne-300 font-medium">
                    / one-time
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-2.5 pt-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() => {
                    onSelectPlan(pkg);
                    onClose();
                  }}
                  className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 shadow-glow-gold hover:opacity-95'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Money-Back Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-champagne-400" />
            <span>Instant File Generation & Hosting</span>
          </div>
        </div>

      </div>
    </div>
  );
}
