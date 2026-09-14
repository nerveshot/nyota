import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateGallery from './components/TemplateGallery';
import RsvpSection from './components/RsvpSection';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { INVITATION_TEMPLATES, PRICING_PACKAGES } from './data/templates';
import { Sparkles, ArrowRight, X, Heart, Shield, Music } from 'lucide-react';
import { subscribeToAuthUser, getInvitationById } from './firebase/nyotaDb';

// Lazy load non-initial subviews & heavy modals to ensure lightning-fast initial page load
const CustomizerStudio = lazy(() => import('./components/CustomizerStudio'));
const EnvelopeExperience = lazy(() => import('./components/EnvelopeExperience'));
const PricingModal = lazy(() => import('./components/PricingModal'));
const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const ShareExportModal = lazy(() => import('./components/ShareExportModal'));
const PremiumWebpageInvitation = lazy(() => import('./components/PremiumWebpageInvitation'));
const AdminPortal = lazy(() => import('./components/AdminPortal'));
const UserDashboard = lazy(() => import('./components/UserDashboard'));
const AuthModal = lazy(() => import('./components/AuthModal'));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-full border-2 border-champagne-500/30 border-t-champagne-400 animate-spin" />
    <span className="text-xs uppercase tracking-widest text-champagne-400 font-mono">Loading Experience...</span>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'studio' | 'dashboard' | 'admin'
  const [selectedTemplate, setSelectedTemplate] = useState(INVITATION_TEMPLATES[0]);
  const [currentUser, setCurrentUser] = useState(null);

  // Modals state
  const [pricingOpen, setPricingOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [quickPreviewOpen, setQuickPreviewOpen] = useState(false);
  const [demoEnvelopeOpen, setDemoEnvelopeOpen] = useState(false);
  const [webpageDemoOpen, setWebpageDemoOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin'); // 'signin' | 'signup'

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

  // Fetch Firestore invitation if custom link pathname or `?invite=<slug_or_id>` is in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inviteParam = params.get('invite') || params.get('slug') || params.get('id');
    const viewParam = params.get('view');
    const adminParam = params.get('admin');

    if (adminParam === 'true') {
      setCurrentView('admin');
      return;
    }

    if (viewParam === 'dashboard') {
      setCurrentView('dashboard');
      return;
    }

    // Check pathname (e.g. /zayd-and-aaliyah-24-october-2026)
    let pathSlug = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (['admin', 'dashboard', 'studio', 'templates', 'index.html', ''].includes(pathSlug.toLowerCase())) {
      pathSlug = '';
    }

    const targetIdentifier = inviteParam || pathSlug;

    if (targetIdentifier) {
      getInvitationById(targetIdentifier).then((data) => {
        if (data) {
          setSelectedTemplate((prev) => ({
            ...prev,
            defaults: data,
            ...data,
          }));
          setWebpageDemoOpen(true);
        }
      });
    }
  }, []);

  // Navigation Handlers
  const handleOpenStudio = (template = null) => {
    if (template) {
      if (template.primaryNames) {
        // Editing an existing invitation from dashboard
        setSelectedTemplate({
          ...INVITATION_TEMPLATES[0],
          defaults: template,
          ...template,
        });
      } else {
        // Selected a gallery template to start customizing
        setSelectedTemplate({
          ...template,
          defaults: {
            ...template.defaults,
            id: null,
            paymentStatus: 'unpaid',
            status: 'draft',
          }
        });
      }
    } else {
      // Create new invite
      setSelectedTemplate({
        ...INVITATION_TEMPLATES[0],
        defaults: {
          ...INVITATION_TEMPLATES[0].defaults,
          id: null,
          paymentStatus: 'unpaid',
          status: 'draft',
        }
      });
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
      <ErrorBoundary fallbackAction={() => setCurrentView('landing')}>
        <Suspense fallback={<LoadingFallback />}>
          <AdminPortal
            onBackToSite={() => setCurrentView('landing')}
            onPreviewInvitation={(draft) => {
              setSelectedTemplate({ ...selectedTemplate, defaults: draft });
              setWebpageDemoOpen(true);
            }}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  // If viewing User Dashboard
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#0B0914] text-slate-100 flex flex-col justify-between">
        <ErrorBoundary fallbackAction={() => setCurrentView('landing')}>
          <Suspense fallback={<LoadingFallback />}>
            <UserDashboard
              currentUser={currentUser}
              onBackToSite={() => setCurrentView('landing')}
              onOpenStudio={(inv) => handleOpenStudio(inv)}
              onPreviewInvitation={(inv) => {
                setSelectedTemplate({ ...selectedTemplate, defaults: inv });
                setWebpageDemoOpen(true);
              }}
              onOpenAuthModal={(mode) => {
                setAuthModalMode(mode || 'signin');
                setAuthModalOpen(true);
              }}
              onOpenCheckout={(payload) => handleOpenCheckout(payload)}
            />
          </Suspense>
        </ErrorBoundary>
        {authModalOpen && (
          <Suspense fallback={null}>
            <AuthModal
              isOpen={authModalOpen}
              initialMode={authModalMode}
              onClose={() => setAuthModalOpen(false)}
              onSuccess={(user) => {
                setCurrentUser(user);
              }}
            />
          </Suspense>
        )}
      </div>
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
        onOpenDashboard={() => setCurrentView('dashboard')}
        onOpenAuthModal={(mode) => {
          setAuthModalMode(mode || 'signin');
          setAuthModalOpen(true);
        }}
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

            {/* Monetization & Pricing Section Preview (Single All-in-One ₹1001 Shagun Package) */}
            <section id="pricing-section" className="py-20 relative">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                    <span>One Simple Price • Everything Included</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white">
                    All-Inclusive <span className="gold-gradient-text">₹1001 Shagun Money</span>
                  </h2>
                  <p className="text-sm text-slate-300">
                    Scan our PhonePe UPI QR code, pay ₹1001 auspicious Shagun, and get instant 1-click admin verification to customize, live-edit, and publish your wedding invitation.
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
                        {pkg.shagunBadge || 'All-Inclusive Shagun ₹1001 🕉️'}
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
                      Scan the QR code, pay ₹1001 Shagun, and get instant admin verification to live-edit and publish your luxury cinematic webpage invitation.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                    <button
                      onClick={() => handleOpenCheckout()}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Pay ₹1001 Shagun & Unlock Editor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* Studio View */
          <ErrorBoundary fallbackAction={handleBackToGallery}>
            <Suspense fallback={<LoadingFallback />}>
              <CustomizerStudio
                selectedTemplate={selectedTemplate}
                onBackToGallery={handleBackToGallery}
                onOpenCheckout={handleOpenCheckout}
                onOpenExport={handleOpenExport}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStudio={() => handleOpenStudio()}
        onOpenPricing={() => setPricingOpen(true)}
        onOpenAdminPortal={() => {
          setCurrentView('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* MODAL 1: PRICING COMPARISON */}
      {pricingOpen && (
        <Suspense fallback={null}>
          <PricingModal
            isOpen={pricingOpen}
            onClose={() => setPricingOpen(false)}
            onSelectPlan={handleSelectPlanFromPricing}
          />
        </Suspense>
      )}

      {/* MODAL 2: CHECKOUT & UPI SHAGUN PAYMENT */}
      {checkoutOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            isOpen={checkoutOpen}
            onClose={() => setCheckoutOpen(false)}
            customizationData={customizationPayload}
            onOpenStudio={() => {
              setCheckoutOpen(false);
              handleOpenStudio(selectedTemplate);
            }}
          />
        </Suspense>
      )}

      {/* MODAL 3: SHARE & EXPORT */}
      {exportOpen && (
        <Suspense fallback={null}>
          <ShareExportModal
            isOpen={exportOpen}
            onClose={() => setExportOpen(false)}
            exportData={customizationPayload}
          />
        </Suspense>
      )}

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
              <Suspense fallback={<LoadingFallback />}>
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
              </Suspense>
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

            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          </div>
        </div>
      )}

      {/* MODAL 6: ARABIC STYLE FULL WEBPAGE INVITATION PREVIEW / LIVE INVITATION */}
      {webpageDemoOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#05060F] animate-fadeIn">
          <div className="w-full min-h-screen">
            <Suspense fallback={<LoadingFallback />}>
              <PremiumWebpageInvitation
                invitationData={selectedTemplate?.defaults || selectedTemplate || INVITATION_TEMPLATES[0].defaults}
                themeId={selectedTemplate?.themeId || 'royalRedNavyBlack'}
                fontPairingId={selectedTemplate?.fontPairingId || 'classicSerif'}
                ambientTrackId={selectedTemplate?.ambientTrackId || 'romanticPiano'}
                onBack={() => setWebpageDemoOpen(false)}
              />
            </Suspense>
          </div>
        </div>
      )}

      {/* GLOBAL MODAL: CLIENT AUTH (SIGN IN / SIGN UP / FORGOT PASSWORD) */}
      {authModalOpen && (
        <Suspense fallback={null}>
          <AuthModal
            isOpen={authModalOpen}
            initialMode={authModalMode}
            onClose={() => setAuthModalOpen(false)}
            onSuccess={(user) => {
              setCurrentUser(user);
            }}
          />
        </Suspense>
      )}

    </div>
  );
}
