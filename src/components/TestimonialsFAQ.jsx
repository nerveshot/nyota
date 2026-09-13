import React, { useState } from 'react';
import { Sparkles, Star, ChevronDown, ChevronUp, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export default function TestimonialsFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Claire & Marcus Sterling',
      role: 'Bride & Groom (Napa Valley Wedding)',
      event: 'Royal Emerald Wedding',
      stars: 5,
      content: 'Our wedding guests were completely blown away by the 3D wax seal unboxing and soft serenade music! Over 95% of our 180 guests RSVP\'d within the first 48 hours. Worth every single penny.',
      avatar: 'CS',
      accentColor: '#D4AA64',
    },
    {
      id: 2,
      name: 'Julian Vance',
      role: 'Event Host & Producer',
      event: 'Milestone 30th Rooftop Soirée',
      stars: 5,
      content: 'The live RSVP tracker and DJ song request collection made party planning effortless. The neon aesthetic was stunning and we saved hundreds compared to traditional paper printing.',
      avatar: 'JV',
      accentColor: '#E879F9',
    },
    {
      id: 3,
      name: 'Amanda Lin-Holt',
      role: 'Executive Director, Horizon Foundation',
      event: 'Annual Black Tie Charity Gala',
      stars: 5,
      content: 'We used the VIP print and QR code suite for our 400-person gala. The typography, platinum foil accents, and dietary tracking dashboard were world-class and flawless.',
      avatar: 'AL',
      accentColor: '#94A3B8',
    }
  ];

  const faqs = [
    {
      q: 'How do my guests receive and experience their digital invitation?',
      a: 'You receive a personalized, private web link (e.g. nyota.invites/e/your-event) that you can send via WhatsApp, iMessage, Email, or Instagram. When guests tap the link on their phones or computers, they see a personalized wax-sealed envelope. Tapping the seal triggers an elegant 3D flap unboxing animation with ambient background music, followed by event details and the interactive RSVP form.'
    },
    {
      q: 'Can I order a custom bespoke invitation design with special requirements?',
      a: 'Yes! You can contact us directly on WhatsApp for bespoke custom invitations with custom caricature art, complex multi-day schedules, personalized palace themes, and tailored animations. Custom orders are priced individually based on your requirements.'
    },
    {
      q: 'How do I collect and export RSVP responses and dietary preferences?',
      a: 'Your host dashboard updates in real time whenever a guest accepts or declines. You can view total attendee counts, plus-ones, meal requirements (Vegan, Gluten-Free, Halal, etc.), DJ song requests, and heartfelt guestbook notes from your live host portal.'
    },
    {
      q: 'Does the ambient background music work on all smartphones?',
      a: 'Yes! Our custom Web Audio engine is fully compatible with iOS (iPhone/iPad), Android, macOS, and Windows browsers without requiring any third-party app installations or heavy audio files.'
    },
    {
      q: 'Is this a monthly subscription or a one-time purchase?',
      a: 'It is strictly a one-time flat payment per event with zero recurring subscription charges. Your event webpage, guestbook, and RSVP tracker remain active with lifetime hosting.'
    },
    {
      q: 'Can I edit the event details, date, or venue after I purchase?',
      a: 'Absolutely! You retain full access to your customizer studio to adjust dates, times, dress codes, or itinerary steps anytime before your event day.'
    }
  ];

  return (
    <section id="faq-section" className="py-20 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* TESTIMONIALS SECTION */}
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-roseGold-400" />
              <span>Loved By Hosts & Event Planners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white">
              Real Stories of <span className="gold-gradient-text">Cherished Celebrations</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              See why thousands of couples, birthday celebrants, and event planners choose Nyota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="glass-panel p-6 rounded-3xl border border-champagne-500/20 shadow-xl flex flex-col justify-between space-y-4 hover:border-champagne-500/40 transition-all"
              >
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-champagne-400 text-champagne-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-slate-950 shadow-md"
                    style={{ backgroundColor: t.accentColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5 text-champagne-400" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-3xl font-cinzel font-bold text-white">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:text-champagne-300 transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
