import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Menu, X, ArrowRight,
  User, LogOut, CheckCircle2, Clock, Play
} from 'lucide-react';
import { logoutUser, subscribeToAuthUser } from '../firebase/nyotaDb';

export default function Navbar({ 
  onOpenStudio, 
  onOpenPricing, 
  activeSection, 
  onNavigate, 
  onOpenWebpageDemo,
  onOpenCheckout,
  onOpenDashboard,
  onOpenAuthModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to user auth
  useEffect(() => {
    const unsub = subscribeToAuthUser((user) => {
      setCurrentUser(user);
    });
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUserDropdownOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0914]/95 backdrop-blur-md border-b border-champagne-500/20 py-3 shadow-xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-champagne-400 via-champagne-600 to-amber-700 p-[1px] shadow-glow-gold transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0E0C1C] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-champagne-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-cinzel text-xl font-bold tracking-wider gold-gradient-text block">
              NYOTA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-champagne-300/70 block -mt-1 font-sans">
              LUXURY INVITATIONS
            </span>
          </div>
        </button>

        {/* Clean, Streamlined Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={onOpenWebpageDemo}
            className="text-champagne-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 font-semibold cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-champagne-400 fill-champagne-400" />
            <span>Live Demo</span>
          </button>

          <button 
            onClick={onOpenStudio}
            className={`transition-colors hover:text-champagne-400 cursor-pointer ${
              activeSection === 'studio' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Customizer Studio
          </button>

          <button 
            onClick={onOpenPricing}
            className={`transition-colors hover:text-champagne-400 flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'pricing' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            <span>Pricing (₹1001)</span>
          </button>

          {currentUser && (
            <button
              onClick={onOpenDashboard}
              className={`transition-colors hover:text-champagne-400 flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'dashboard' ? 'text-champagne-400 font-semibold' : 'text-champagne-300'
              }`}
            >
              <span>My Invites</span>
            </button>
          )}
        </div>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* If user is logged in, show their compact profile badge */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full bg-white/5 hover:bg-white/10 border border-champagne-400/40 transition-colors cursor-pointer"
              >
                <img
                  src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`}
                  alt={currentUser.displayName}
                  className="w-7 h-7 rounded-full border border-champagne-400/80"
                />
                <span className="text-xs font-semibold text-white max-w-[100px] truncate">
                  {currentUser.displayName}
                </span>
                {currentUser.accessGranted && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-panel p-3 rounded-2xl border border-white/15 shadow-2xl space-y-3 z-50 animate-fadeIn bg-[#0E0C1C]">
                  <div className="border-b border-white/10 pb-2">
                    <div className="text-xs font-bold text-white truncate">{currentUser.displayName}</div>
                    <div className="text-[11px] text-slate-400 font-mono truncate">{currentUser.phoneNumber || currentUser.email}</div>
                    
                    <div className="mt-1.5">
                      {currentUser.accessGranted ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Editor Verified & Active</span>
                        </span>
                      ) : currentUser.paymentStatus === 'pending_verification' ? (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Awaiting ₹1001 Verification</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-300 text-[10px]">
                          Free Client Account
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenDashboard && onOpenDashboard();
                    }}
                    className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-semibold text-white hover:bg-white/5 flex items-center justify-between cursor-pointer"
                  >
                    <span>My Invitations Dashboard</span>
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                  </button>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenCheckout && onOpenCheckout();
                    }}
                    className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-semibold text-champagne-300 hover:bg-white/5 flex items-center justify-between cursor-pointer"
                  >
                    <span>Pay ₹1001 Shagun</span>
                    <span className="text-[10px] text-champagne-400 font-mono">₹1001</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-semibold text-rose-300 hover:bg-rose-500/10 flex items-center justify-between cursor-pointer"
                  >
                    <span>Sign Out</span>
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => onOpenAuthModal && onOpenAuthModal('signin')}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-semibold transition-colors cursor-pointer"
            >
              Sign In
            </button>
          )}

          {/* Create Custom Invite Button */}
          <button
            onClick={onOpenStudio}
            className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs sm:text-sm transition-transform active:scale-95 shadow-glow-gold cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 rounded-full animate-shimmer"></span>
            <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0E0C1C] text-champagne-300 group-hover:bg-opacity-80 transition-all font-semibold">
              <span>Create Invite</span>
              <ArrowRight className="w-3.5 h-3.5 text-champagne-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-champagne-500/20 px-4 pt-3 pb-6 mt-3 space-y-3 bg-[#0E0C1C]">
          {currentUser ? (
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2.5">
                <img
                  src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`}
                  alt={currentUser.displayName}
                  className="w-8 h-8 rounded-full border border-champagne-400"
                />
                <div>
                  <div className="text-xs font-bold text-white">{currentUser.displayName}</div>
                  <div className="text-[10px] text-slate-400">{currentUser.email}</div>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="text-xs text-rose-400 font-semibold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onOpenAuthModal && onOpenAuthModal('signin');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/15"
            >
              Sign In to Your Account
            </button>
          )}

          <button
            onClick={() => {
              onOpenWebpageDemo();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-champagne-300 font-semibold text-xs flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-champagne-400 fill-champagne-400" />
            <span>Live Arabic Demo</span>
          </button>

          <button
            onClick={() => {
              onOpenStudio();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium text-xs"
          >
            Customizer Studio
          </button>

          <button
            onClick={() => {
              onOpenPricing();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium text-xs"
          >
            Pricing (₹1001 Shagun)
          </button>

          {currentUser && (
            <button
              onClick={() => {
                onOpenDashboard();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-amber-300 font-semibold text-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>My Invitations Dashboard</span>
            </button>
          )}

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenStudio();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champagne-500 to-amber-600 text-slate-950 font-bold text-xs shadow-glow-gold"
            >
              Start Creating Custom Invitation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
