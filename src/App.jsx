import React, { useState } from 'react';
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
import FirebaseStatusBadge from './components/FirebaseStatusBadge';
import PremiumWebpageInvitation from './components/PremiumWebpageInvitation';
import { INVITATION_TEMPLATES, PRICING_PACKAGES } from './data/templates';
import { Sparkles, ArrowRight, X, Heart, Shield, Music } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'studio' | 'webpageDemo'
  const [selectedTemplate, setSelectedTemplate] = useState(INVITATION_TEMPLATES[0]);

  // Modals state
  const [pricingOpen, setPricingOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [quickPreviewOpen, setQuickPreviewOpen] = useState(false);
  const [demoEnvelopeOpen, setDemoEnvelopeOpen] = useState(false);
  const [webpageDemoOpen, setWebpageDemoOpen] = useState(false);

  // Selected Plan for Checkout
  const [preSelectedPlan, setPreSelectedPlan] = useState(PRICING_PACKAGES[1]);
  const [customizationPayload, setCustomizationPayload] = useState(null);

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

  const handleOpenCheckout = (payload) => {
    setCustomizationPayload(payload);
    setCheckoutOpen(true);
  };

  const handleOpenExport = (payload) => {
    setCustomizationPayload(payload);
    setExportOpen(true);
  };

  const handleSelectPlanFromPricing = (plan) => {
    setPreSelectedPlan(plan);
    setPricingOpen(false);
    setCheckoutOpen(true);
  };

  const handleQuickPreview = (template) => {
    setSelectedTemplate(template);
    setQuickPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0914] text-slate-100 flex flex-col justify-between selection:bg-champagne-500/30 selection:text-champagne-300">
      
      {/* Top Navbar */}
      <Navbar
        onOpenStudio={() => handleOpenStudio()}
        onOpenPricing={() => setPricingOpen(true)}
        activeSection={currentView === 'studio' ? 'studio' : 'landing'}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'landing' ? (
          <div>
            {/* Hero Section */}
            <Hero
              onOpenStudio={() => handleOpenStudio()}
              onExploreTemplates={() => handleNavigate('templates')}
              onPreviewDemoEnvelope={() => setDemoEnvelopeOpen(true)}
              onPreviewZareqiaWebpage={() => setWebpageDemoOpen(true)}
            />

            {/* Template Gallery Catalog */}
            <TemplateGallery
              onSelectTemplate={(template) => handleOpenStudio(template)}
              onQuickPreview={handleQuickPreview}
            />

            {/* Interactive RSVP & Guest Portal Demo Section */}
            <RsvpSection
              invitationData={selectedTemplate.defaults}
            />

            {/* Monetization & Pricing Section Preview */}
            <section id="pricing-section" className="py-20 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                    <span>Monetization & Flexible Payment Options</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white">
                    Simple, Transparent <span className="gold-gradient-text">Pricing</span>
                  </h2>
                  <p className="text-sm text-slate-300">
                    Pay once per event with zero hidden subscriptions. Enjoy unlimited RSVPs, custom web links, and 4K print exports.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PRICING_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-gradient-to-b from-[#1E1838] via-[#141026] to-[#0D0A1B] border-2 border-champagne-400 shadow-glow-gold transform lg:-translate-y-2'
                          : 'bg-[#120F24] border border-white/10 hover:border-champagne-500/30'
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

                        <div className="space-y-2.5 pt-4">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                              <span className="text-champagne-400 font-bold">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8">
                        <button
                          onClick={() => {
                            setPreSelectedPlan(pkg);
                            handleOpenStudio(selectedTemplate);
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
              </div>
            </section>

            {/* Testimonials & FAQ Accordion */}
            <TestimonialsFAQ />

            {/* Bottom CTA Banner */}
            <section className="py-16 relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1C1636] via-[#2A1D45] to-[#16102D] border border-champagne-400/40 shadow-glow-gold text-center space-y-6 overflow-hidden">
                  <div className="space-y-3 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white">
                      Ready to Create Your <span className="gold-gradient-text">Dream Invitation?</span>
                    </h2>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto">
                      Choose from our curated templates, customize every word and color in real time, and share unforgettable experiences with your guests.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                    <button
                      onClick={() => handleOpenStudio()}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Start Customizing Now</span>
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

      {/* MODAL 2: CHECKOUT & PAYMENT */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        customizationData={customizationPayload}
        preSelectedPlan={preSelectedPlan}
        onOpenExport={handleOpenExport}
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

      {/* MODAL 6: ZAREQIA-STYLE FULL WEBPAGE INVITATION PREVIEW */}
      {webpageDemoOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex flex-col items-center animate-fadeIn">
          <div className="sticky top-4 right-4 z-50 self-end pr-6">
            <button
              onClick={() => setWebpageDemoOpen(false)}
              className="px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 text-white font-bold text-xs border border-white/20 shadow-2xl flex items-center gap-1.5 backdrop-blur-md"
            >
              <X className="w-4 h-4 text-champagne-400" />
              <span>Close Webpage View</span>
            </button>
          </div>

          <div className="w-full max-w-xl pb-16">
            <PremiumWebpageInvitation
              invitationData={selectedTemplate?.defaults || INVITATION_TEMPLATES[0].defaults}
              themeId={selectedTemplate?.themeId || 'emeraldGold'}
              fontPairingId={selectedTemplate?.fontPairingId || 'classicSerif'}
              sealId={selectedTemplate?.sealId || 'botanical'}
              sealColor={selectedTemplate?.sealColor || '#B88B42'}
              ambientTrackId={selectedTemplate?.ambientTrackId || 'romanticPiano'}
              onBack={() => setWebpageDemoOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Floating Firestore Connection & Namespace Status */}
      <FirebaseStatusBadge />

    </div>
  );
}
