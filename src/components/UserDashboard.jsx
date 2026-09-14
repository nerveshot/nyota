import React, { useState, useEffect } from 'react';
import { 
  Sparkles, CheckCircle2, Clock, AlertTriangle, ArrowLeft,
  Plus, Edit3, ExternalLink, Copy, Check, Trash2, Eye, Lock,
  Shield, User, Mail, Calendar, Heart, Share2, Info, RefreshCw
} from 'lucide-react';
import { 
  subscribeToUserInvitations, 
  publishUserInvitation, 
  deleteUserInvitation,
  logoutUser,
  isUserAdmin,
  formatShareableInviteUrl,
  generateInvitationSlug
} from '../firebase/nyotaDb';

export default function UserDashboard({ 
  currentUser, 
  onBackToSite, 
  onOpenStudio, 
  onPreviewInvitation,
  onOpenAuthModal,
  onOpenCheckout
}) {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);
  const [actionMessage, setActionMessage] = useState('');
  const [publishLoadingId, setPublishLoadingId] = useState(null);

  // Subscribe to User's Invitations in real-time
  useEffect(() => {
    if (!currentUser?.uid) {
      setInvitations([]);
      setLoading(false);
      return;
    }

    const unsubscribe = subscribeToUserInvitations(currentUser.uid, (list) => {
      setInvitations(list);
      setLoading(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [currentUser]);

  const handleCopyLink = (inv) => {
    const liveUrl = formatShareableInviteUrl(inv);
    navigator.clipboard.writeText(liveUrl);
    setCopiedId(inv.id);
    setActionMessage('Link copied to clipboard! Share on WhatsApp or Instagram.');
    setTimeout(() => {
      setCopiedId(null);
      setActionMessage('');
    }, 3000);
  };

  const handlePublish = async (inv) => {
    setPublishLoadingId(inv.id);
    setActionMessage('');
    try {
      const res = await publishUserInvitation(inv.id, currentUser);
      if (res.success) {
        setActionMessage('🎉 Invitation published! Your shareable live link is active.');
      } else {
        setActionMessage(res.error || 'Unable to publish invitation.');
      }
    } catch (err) {
      console.error(err);
      setActionMessage('An error occurred while publishing.');
    } finally {
      setPublishLoadingId(null);
      setTimeout(() => setActionMessage(''), 5000);
    }
  };

  const handleDelete = async (inv) => {
    if (!window.confirm(`Are you sure you want to delete "${inv.primaryNames || 'this invitation'}"?`)) {
      return;
    }
    try {
      await deleteUserInvitation(inv.id, currentUser.uid);
      setActionMessage('Invitation deleted.');
      setTimeout(() => setActionMessage(''), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const isVerified = currentUser?.accessGranted || currentUser?.paymentStatus === 'verified' || isUserAdmin(currentUser);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#07050E] text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-champagne-500/30 text-center space-y-6">
          <div className="w-16 h-16 rounded-full mx-auto p-[2px] bg-gradient-to-br from-champagne-400 via-amber-500 to-amber-700 shadow-glow-gold flex items-center justify-center">
            <div className="w-full h-full bg-[#0E0C1C] rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-champagne-400" />
            </div>
          </div>
          <h2 className="text-2xl font-cinzel font-bold text-white">
            Client Portal Login Required
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Please sign in or create an account with your email to view and manage your bought luxury invitations.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => onOpenAuthModal('signin')}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all"
            >
              Sign In to My Account
            </button>
            <button
              onClick={onBackToSite}
              className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07050E] text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Public Store</span>
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-white flex items-center gap-2">
                <span>My Invitations Dashboard</span>
                <Sparkles className="w-5 h-5 text-champagne-400" />
              </h1>
              <p className="text-xs text-slate-400">
                Manage, edit, live-preview, and publish your custom wedding invitations.
              </p>
            </div>
          </div>

          {/* User Profile Bar */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/60 border border-white/15">
              <img
                src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`}
                alt={currentUser.displayName}
                className="w-7 h-7 rounded-full border border-champagne-400"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-white truncate max-w-[120px]">
                  {currentUser.displayName || 'Client User'}
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">
                  {currentUser.email}
                </div>
              </div>
            </div>
            <button
              onClick={async () => {
                await logoutUser();
                onBackToSite();
              }}
              className="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Global Action Message Banner */}
        {actionMessage && (
          <div className="p-4 rounded-2xl bg-champagne-500/20 border border-champagne-400/40 text-champagne-200 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn shadow-lg">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-champagne-400" />
            <span>{actionMessage}</span>
          </div>
        )}

        {/* Essential Verification Information Box */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/10 via-champagne-500/10 to-amber-600/10 border border-amber-400/30 space-y-3">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Payment Verification & Publishing Guidelines
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                You can create and edit your invitations at any time. To publish your live shareable link for guests, your ₹501 Shagun payment must be verified by an administrator.
              </p>
              <div className="p-2.5 rounded-xl bg-black/40 border border-amber-400/20 text-[11px] text-amber-200 font-medium">
                ⚠️ <span className="font-bold">Important Notice:</span> Verification by admin usually takes a few hours. If your verification is still showing pending, try opening the website in incognito mode.
              </div>
            </div>
          </div>
        </div>

        {/* Invitations Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-cinzel font-bold text-white flex items-center gap-2">
              <span>Your Invitations</span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-xs font-mono">
                {invitations.length}
              </span>
            </h2>
            <button
              onClick={() => onOpenStudio()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Invite</span>
            </button>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-400 text-xs">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-champagne-400 mb-2" />
              <span>Loading your saved invitations from Cloud Firestore...</span>
            </div>
          ) : invitations.length === 0 ? (
            <div className="p-10 rounded-3xl glass-panel border border-white/10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-champagne-400">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-cinzel font-bold text-white">
                  No Invitations Yet
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Get started by customizing your royal Arabic luxury wedding invitation in the studio.
                </p>
              </div>
              <button
                onClick={() => onOpenStudio()}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold cursor-pointer"
              >
                Launch Customizer Studio
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {invitations.map((inv) => {
                const invVerified = isUserAdmin(currentUser) || inv.paymentStatus === 'verified' || inv.status === 'published';
                const isPending = inv.paymentStatus === 'pending_verification';
                const isPublished = inv.status === 'published';
                const shareUrl = formatShareableInviteUrl(inv);

                return (
                  <div
                    key={inv.id}
                    className="relative rounded-3xl glass-panel p-6 border border-white/15 hover:border-champagne-400/40 transition-all space-y-5 flex flex-col justify-between group bg-[#0E0C1C]"
                  >
                    <div className="space-y-4">
                      {/* Top Header & Status Badges */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono tracking-widest text-champagne-400 uppercase">
                            {inv.templateName || 'Arabic Style Royal Wedding'}
                          </span>
                          <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                            {inv.primaryNames || 'Zayd Al-Mansoor & Aaliyah Khan'}
                          </h3>
                        </div>

                        {/* Verification Status Pill */}
                        <div>
                          {invVerified ? (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified</span>
                            </span>
                          ) : isPending ? (
                            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap animate-pulse">
                              <Clock className="w-3 h-3" />
                              <span>Verification Pending</span>
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap">
                              <Lock className="w-3 h-3" />
                              <span>₹501 Unpaid</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Event Details Preview */}
                      <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                          <span className="truncate">{inv.dateText || 'Saturday, October 24, 2026'}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                          <span>Status:</span>
                          <span className={isPublished ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                            {isPublished ? 'Live & Published' : 'Draft Mode'}
                          </span>
                        </div>
                      </div>

                      {/* Share Link display if verified/published */}
                      {isPublished && (
                        <div className="p-2.5 rounded-xl bg-champagne-500/10 border border-champagne-400/30 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-champagne-200 truncate">
                            {shareUrl}
                          </span>
                          <button
                            onClick={() => handleCopyLink(inv)}
                            className="p-1 rounded-lg bg-champagne-400 text-slate-950 hover:bg-champagne-300 transition-colors flex-shrink-0 cursor-pointer"
                            title="Copy Live Link"
                          >
                            {copiedId === inv.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons Toolbar */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => onOpenStudio(inv)}
                          className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-champagne-400" />
                          <span>Edit Invite</span>
                        </button>

                        {/* Live Preview Button */}
                        <button
                          onClick={() => onPreviewInvitation(inv)}
                          className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-champagne-400" />
                          <span>Preview</span>
                        </button>
                      </div>

                      {/* Publish / Pay CTA */}
                      {invVerified ? (
                        <button
                          onClick={() => handlePublish(inv)}
                          disabled={publishLoadingId === inv.id}
                          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{publishLoadingId === inv.id ? 'Publishing...' : isPublished ? 'Re-Publish Live Link' : 'Publish Live Webpage'}</span>
                        </button>
                      ) : isPending ? (
                        <button
                          onClick={() => {
                            setActionMessage('Verification by admin usually takes a few hours. If your verification is still showing pending, try opening the website in incognito mode.');
                            setTimeout(() => setActionMessage(''), 6000);
                          }}
                          className="w-full py-2.5 px-4 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs hover:bg-amber-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Clock className="w-3.5 h-3.5 animate-pulse" />
                          <span>Verification Pending</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onOpenCheckout({ selectedTemplate: null, invitationData: inv, invitationId: inv.id })}
                          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Pay ₹501 Shagun to Publish</span>
                        </button>
                      )}

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(inv)}
                        className="w-full py-1 text-[11px] text-slate-500 hover:text-rose-400 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Delete Draft</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
