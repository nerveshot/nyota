import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateGallery from './components/TemplateGallery';
import CustomizerStudio from './components/CustomizerStudio';
import EnvelopeExperience from './components/EnvelopeExperience';
import RsvpSection from './components/RsvpSection';
import PricingModal from './components/PricingModal';
import CheckoutModal from './components/CheckoutModal';
import ShareExportModal from './components/ShareExportModal';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import Footer from './components/Footer';
import PremiumWebpageInvitation from './components/PremiumWebpageInvitation';
import AdminPortal from './components/AdminPortal';
import ContactSection from './components/ContactSection';
import { INVITATION_TEMPLATES, PRICING_PACKAGES } from './data/templates';
import { Sparkles, ArrowRight, X, Heart, Shield, Music } from 'lucide-react';
import { subscribeToAuthUser } from './firebase/nyotaDb';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'studio' | 'admin'
  const [selectedTemplate, setSelectedTemplate] = useState(INVITATION_TEMPLATES[0]);
  const [currentUser, setCurrentUser] = useState(null);

  // Modals state
  const [pricingOpen, setPricingOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [quickPreviewOpen, setQuickPreviewOpen] = useState(false);
  const [demoEnvelopeOpen, setDemoEnvelopeOpen] = useState(false);
  const [webpageDemoOpen, setWebpageDemoOpen] = useState(false);

  // Selected Plan for Checkout
  const [preSelectedPlan, setPreSelectedPlan] = useState(PRICING_PACKAGES[0]);
  const [customizationPayload, setCustomizationPayload] = useState(null);

  // Listen to auth user state
  useEffect(() => {
    const unsub = subscribeToAuthUser((user) => {
      setCurrentUser(user);
    });
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Navigation Handlers
  const handleOpenStudio = (template = null) => {
    if (template) {
      setSelectedTemplate(template);
    }
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGallery = () => {
    setCurrentView('landing');
    setTimeout(() => {
      const el = document.getElementById('templates-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigate = (sectionId) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(`${sectionId}-section`) || document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(`${sectionId}-section`) || document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = (payload = null) => {
    if (payload) {
      setCustomizationPayload(payload);
    } else {
      setCustomizationPayload({
        selectedTemplate,
        invitationData: selectedTemplate?.defaults,
      });
    }
    setCheckoutOpen(true);
  };

  const handleOpenExport = (payload) => {
    setCustomizationPayload(payload);
    setExportOpen(true);
  };

  const handleSelectPlanFromPricing = (plan) => {
    setPreSelectedPlan(plan);
    setPricingOpen(false);
    handleOpenCheckout({
      selectedTemplate,
      invitationData: selectedTemplate?.defaults,
    });
  };

  const handleQuickPreview = (template) => {
    setSelectedTemplate(template);
    setQuickPreviewOpen(true);
  };

  // If viewing Admin Portal
  if (currentView === 'admin') {
    return (
      <AdminPortal
        onBackToSite={() => setCurrentView('landing')}
        onPreviewInvitation={(draft) => {
          setSelectedTemplate({ ...selectedTemplate, defaults: draft });
          setWebpageDemoOpen(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0914] text-slate-100 flex flex-col justify-between selection:bg-champagne-500/30 selection:text-champagne-300">
      
      {/* Top Navbar */}
      <Navbar
        onOpenStudio={() => handleOpenStudio()}
        onOpenPricing={() => setPricingOpen(true)}
        activeSection={currentView === 'studio' ? 'studio' : 'landing'}
        onNavigate={handleNavigate}
        onOpenWebpageDemo={() => setWebpageDemoOpen(true)}
        onOpenAdminPortal={() => setCurrentView('admin')}
        onOpenCheckout={() => handleOpenCheckout()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'landing' ? (
          <div>
            {/* Hero Section */}
            <Hero
              onOpenStudio={() => handleOpenStudio()}
              onExploreTemplates={() => handleNavigate('events')}
              onPreviewDemoEnvelope={() => setDemoEnvelopeOpen(true)}
              onPreviewZareqiaWebpage={() => setWebpageDemoOpen(true)}
            />

            {/* Custom Events & Occasions Showcase */}
            <TemplateGallery
              onOpenStudio={() => handleOpenStudio()}
              onOpenWebpageDemo={() => setWebpageDemoOpen(true)}
            />

            {/* Interactive RSVP & Guest Portal Demo Section */}
            <RsvpSection
              invitationData={selectedTemplate.defaults}
            />

            {/* Monetization & Pricing Section Preview (Single All-in-One ₹501 Shagun Package) */}
            <section id="pricing-section" className="py-20 relative">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                    <span>One Simple Price • Everything Included</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white">
                    All-Inclusive <span className="gold-gradient-text">₹501 Shagun Money</span>
                  </h2>
                  <p className="text-sm text-slate-300">
                    Scan our PhonePe UPI QR code, pay ₹501 auspicious Shagun, and get instant 1-click admin verification to customize, live-edit, and publish your wedding invitation.
                  </p>
                </div>

                {/* Single Grand Spotlight Card */}
                <div className="max-w-2xl mx-auto">
                  {PRICING_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#1E1838] via-[#141026] to-[#0D0A1B] border-2 border-champagne-400 shadow-glow-gold space-y-6"
                    >
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                        {pkg.shagunBadge || 'All-Inclusive Shagun ₹501 🕉️'}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 pt-2">
                        <div>
                          <h3 className="font-cinzel text-2xl font-bold text-white">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-slate-300 mt-1 max-w-sm">
                            {pkg.description}
                          </p>
                        </div>

                        <div className="text-left sm:text-right flex-shrink-0">
                          <div className="flex items-baseline gap-2 sm:justify-end">
                            <span className="text-4xl font-cinzel font-bold gold-gradient-text">
                              ₹501
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              ₹2,100
                            </span>
                          </div>
                          <span className="text-[11px] text-champagne-300/80 font-mono">
                            One-time Shagun • Lifetime Access
                          </span>
                        </div>
                      </div>

                      {/* 2-Column Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <span className="text-champagne-400 font-bold">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setPreSelectedPlan(pkg);
                            handleOpenCheckout({
                              selectedTemplate,
                              invitationData: selectedTemplate?.defaults,
                            });
                          }}
                          className="w-full py-4 rounded-2xl text-sm font-bold transition-all shadow-glow-gold bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 hover:opacity-95 flex items-center justify-center gap-2 active:scale-95"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>{pkg.ctaText}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials & FAQ Accordion */}
            <TestimonialsFAQ />

            {/* Direct WhatsApp Concierge, Custom Orders & Support Section */}
            <ContactSection />

            {/* Bottom CTA Banner */}
            <section className="py-16 relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1C1636] via-[#2A1D45] to-[#16102D] border border-champagne-400/40 shadow-glow-gold text-center space-y-6 overflow-hidden">
                  <div className="space-y-3 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white">
                      Ready to Create Your <span className="gold-gradient-text">Dream Wedding Invitation?</span>
                    </h2>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto">
                      Scan the QR code, pay ₹501 Shagun, and get instant admin verification to live-edit and publish your luxury cinematic webpage invitation.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                    <button
                      onClick={() => handleOpenCheckout()}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Pay ₹501 Shagun & Unlock Editor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* Studio View */
          <CustomizerStudio
            selectedTemplate={selectedTemplate}
            onBackToGallery={handleBackToGallery}
            onOpenCheckout={handleOpenCheckout}
            onOpenExport={handleOpenExport}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStudio={() => handleOpenStudio()}
        onOpenPricing={() => setPricingOpen(true)}
      />

      {/* MODAL 1: PRICING COMPARISON */}
      <PricingModal
        isOpen={pricingOpen}
        onClose={() => setPricingOpen(false)}
        onSelectPlan={handleSelectPlanFromPricing}
      />

      {/* MODAL 2: CHECKOUT & UPI SHAGUN PAYMENT */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        customizationData={customizationPayload}
        onOpenStudio={() => {
          setCheckoutOpen(false);
          handleOpenStudio(selectedTemplate);
        }}
      />

      {/* MODAL 3: SHARE & EXPORT */}
      <ShareExportModal
        isOpen={exportOpen}
        onClose={() => setExportOpen(false)}
        exportData={customizationPayload}
      />

      {/* MODAL 4: QUICK PREVIEW MODAL */}
      {quickPreviewOpen && selectedTemplate && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setQuickPreviewOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="text-xs uppercase font-semibold text-champagne-400 tracking-wider">
                {selectedTemplate.category} Template Preview
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                {selectedTemplate.name}
              </h3>
            </div>

            <div className="py-2">
              <EnvelopeExperience
                invitationData={selectedTemplate.defaults}
                themeId={selectedTemplate.themeId}
                fontPairingId={selectedTemplate.fontPairingId}
                sealId={selectedTemplate.sealId}
                sealColor={selectedTemplate.sealColor}
                ambientTrackId={selectedTemplate.ambientTrackId}
                onProceedToRsvp={() => {
                  setQuickPreviewOpen(false);
                  handleOpenStudio(selectedTemplate);
                }}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setQuickPreviewOpen(false);
                  handleOpenStudio(selectedTemplate);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Customize This Template</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: HERO 3D DEMO UNBOXING MODAL */}
      {demoEnvelopeOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setDemoEnvelopeOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <EnvelopeExperience
              invitationData={INVITATION_TEMPLATES[0].defaults}
              themeId="emeraldGold"
              fontPairingId="classicSerif"
              sealId="botanical"
              sealColor="#B88B42"
              ambientTrackId="romanticPiano"
              onProceedToRsvp={() => {
                setDemoEnvelopeOpen(false);
                handleOpenStudio(INVITATION_TEMPLATES[0]);
              }}
            />
          </div>
        </div>
      )}

      {/* MODAL 6: ARABIC STYLE FULL WEBPAGE INVITATION PREVIEW */}
      {webpageDemoOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#05060F] animate-fadeIn">
          {/* Floating Close Button */}
          <div className="fixed top-4 right-4 z-[70]">
            <button
              onClick={() => setWebpageDemoOpen(false)}
              className="px-4 py-2 rounded-full bg-black/80 hover:bg-black text-white font-bold text-xs border border-amber-400/40 shadow-2xl flex items-center gap-1.5 backdrop-blur-md transition-all transform hover:scale-105"
            >
              <X className="w-4 h-4 text-amber-400" />
              <span>Close Invitation</span>
            </button>
          </div>

          <div className="w-full min-h-screen">
            <PremiumWebpageInvitation
              invitationData={selectedTemplate?.defaults || INVITATION_TEMPLATES[0].defaults}
              themeId={selectedTemplate?.themeId || 'royalRedNavyBlack'}
              fontPairingId={selectedTemplate?.fontPairingId || 'classicSerif'}
              ambientTrackId={selectedTemplate?.ambientTrackId || 'romanticPiano'}
              onBack={() => setWebpageDemoOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
