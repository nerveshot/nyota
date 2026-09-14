import React, { useState } from 'react';
import { 
  MessageSquare, Sparkles, HelpCircle, Phone, ArrowRight, 
  Clock, ShieldCheck, CheckCircle2, MessageCircle, Send, HeartHandshake
} from 'lucide-react';

// Configure the primary WhatsApp contact number here (with country code, e.g. 91 for India)
export const OWNER_WHATSAPP_NUMBER = '918302929248'; // Owner's WhatsApp number (+918302929248)

export default function ContactSection({ whatsappNumber = OWNER_WHATSAPP_NUMBER }) {
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Custom Order message link
  const customOrderText = encodeURIComponent(
    "Hi! ✨ I would like to order a bespoke custom invitation webpage with specialized requirements. Please share design options and custom pricing for my event."
  );
  const customOrderUrl = `https://wa.me/${whatsappNumber}?text=${customOrderText}`;

  // Support / Help message link
  const supportText = encodeURIComponent(
    "Hi! 🛠️ I need assistance with my Nyota invitation / ₹1001 payment verification / editor setup."
  );
  const supportUrl = `https://wa.me/${whatsappNumber}?text=${supportText}`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(`+${whatsappNumber}`);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2500);
  };

  return (
    <section id="contact-section" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0B0914] via-[#100C22] to-[#0B0914]">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct WhatsApp Concierge & Support</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white">
            Need Custom Work or <span className="gold-gradient-text">Instant Help?</span>
          </h2>
          
          <p className="text-sm text-slate-300 leading-relaxed">
            Reach out directly on WhatsApp for bespoke custom invitation designs, unique animation requirements, or fast customer support.
          </p>
        </div>

        {/* 2-Column Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: BESPOKE CUSTOM INVITATION ORDERS */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#16122C] via-[#110D24] to-[#0A0817] border-2 border-amber-400/40 shadow-glow-gold flex flex-col justify-between space-y-6 group hover:border-amber-400/80 transition-all">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-glow-gold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-mono font-bold uppercase">
                  Bespoke Design
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  Order Custom Invitations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Looking for custom caricature artwork, complex multi-event schedules, 3D palace themes, video intros, or tailored royal animations?
                </p>
              </div>

              {/* Note about custom pricing */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/20 text-xs text-amber-200/90 space-y-1">
                <div className="font-semibold flex items-center gap-1.5 text-amber-300">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Tailored Pricing Policy:</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Custom handcrafted invitations are priced individually based on design complexity, custom assets, and specific client requirements.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1-on-1 direct designer collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited design iterations & custom music</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated custom domain & private hosting</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={customOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold text-sm shadow-glow-emerald hover:opacity-95 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp for Custom Order</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* CARD 2: INSTANT SUPPORT & ASSISTANCE */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#121828] via-[#0E1320] to-[#080B14] border-2 border-emerald-500/30 shadow-luxury flex flex-col justify-between space-y-6 group hover:border-emerald-500/70 transition-all">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-glow-emerald">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-mono font-bold uppercase">
                  Fast Support
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                  Need Help or Facing Any Issue?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Have a question about your ₹1001 Shagun payment verification, photo uploads, RSVP management, or invitation link sharing? We are here to help!
                </p>
              </div>

              {/* Fast response badge */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/20 text-xs text-emerald-200/90 space-y-1">
                <div className="font-semibold flex items-center gap-1.5 text-emerald-300">
                  <Clock className="w-4 h-4" />
                  <span>Prompt Response Time:</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  We reply directly on WhatsApp within minutes to resolve any doubts, approve payments, or assist with editing.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Instant payment & UTR verification help</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance with audio tracks & photo sizing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>RSVP guest list export & technical support</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-glow-emerald transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Support on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Quick Contact Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">WhatsApp Helpline</div>
              <div className="text-[11px] text-slate-400 font-mono">+{whatsappNumber}</div>
            </div>
          </div>

          <button
            onClick={handleCopyNumber}
            className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-champagne-300 border border-white/15 transition-all"
          >
            {copiedNumber ? 'Copied Number!' : 'Copy Phone Number'}
          </button>
        </div>

      </div>
    </section>
  );
}
