import React, { useState } from 'react';
import { Sparkles, Heart, Shield, Send, Check, Lock } from 'lucide-react';
import { subscribeNewsletterToCloud } from '../firebase/nyotaDb';

export default function Footer({ onNavigate, onOpenStudio, onOpenPricing, onOpenAdminPortal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await subscribeNewsletterToCloud(email, 'footer');
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      console.error('Subscription error:', err);
    }
  };

  return (
    <footer className="bg-[#07050E] border-t border-champagne-500/20 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-champagne-400 to-amber-700 p-[1px] shadow-glow-gold">
                <div className="w-full h-full bg-[#0E0C1C] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-champagne-400" />
                </div>
              </div>
              <span className="font-cinzel text-lg font-bold gold-gradient-text tracking-wider">
                NYOTA INVITES
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier luxury custom digital invitation platform. 
              Specializing in cinematic royal wedding webpages with 3D curtain entrances, sacred Arabic calligraphy, and real-time RSVPs.
            </p>

            <div className="text-[11px] text-champagne-400/80 font-mono">
              ✦ Worldwide Instant Delivery • ₹1001 Shagun Lifetime Access
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Ceremonies
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-champagne-300 transition-colors">
                  Holy Nikah & Vows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-champagne-300 transition-colors">
                  Dawat-e-Khas Reception
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-champagne-300 transition-colors">
                  Grand Walima Banquet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-champagne-300 transition-colors">
                  Rukhsati & Duas
                </button>
              </li>
            </ul>
          </div>

          {/* Platform (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Platform
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenStudio} className="hover:text-champagne-300 transition-colors">
                  Customizer Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenPricing} className="hover:text-champagne-300 transition-colors">
                  Shagun Pricing (₹1001)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-300 text-emerald-400/90 font-medium transition-colors">
                  WhatsApp Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-champagne-300 transition-colors">
                  Help & FAQ
                </button>
              </li>
              {onOpenAdminPortal && (
                <li>
                  <button 
                    onClick={onOpenAdminPortal} 
                    className="hover:text-amber-300 text-amber-400/80 font-medium transition-colors flex items-center gap-1 pt-1 border-t border-white/5"
                  >
                    <Shield className="w-3 h-3 text-amber-400" />
                    <span>Admin Portal</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Wedding Inspiration & Updates
            </div>
            <p className="text-slate-400 text-xs">
              Subscribe to receive royal event aesthetics, Arabic calligraphy guides, and wedding planning tips.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-champagne-500 text-slate-950 font-bold text-xs shadow-md hover:bg-champagne-400 transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Subscribed' : 'Join'}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright & Admin Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Nyota Luxury Invitations. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-400">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-roseGold-400 fill-roseGold-400" />
              <span>for unforgettable celebrations.</span>
            </div>

            {onOpenAdminPortal && (
              <button
                onClick={onOpenAdminPortal}
                className="text-slate-500 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer pl-2 border-l border-white/10"
                title="Super Admin Portal"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Login</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
