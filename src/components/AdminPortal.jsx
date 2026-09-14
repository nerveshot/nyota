import React, { useState, useEffect } from 'react';
import { 
  Shield, CheckCircle2, XCircle, Clock, Search, Copy, Check, 
  ExternalLink, Sparkles, Filter, RefreshCw, Eye, ArrowLeft,
  User, CreditCard, DollarSign, Lock, Unlock, Phone, Key, LogOut,
  AlertTriangle, ShieldAlert, Crown, Mail, Send
} from 'lucide-react';
import { 
  subscribeToAllShagunOrders, 
  subscribeToAllInvitationsForAdmin,
  verifyInvitationPayment,
  verifyShagunOrder, 
  rejectShagunOrder,
  loginWithGoogle,
  loginWithFirebaseEmail,
  sendFirebasePasswordReset,
  logoutUser,
  subscribeToAuthUser,
  ADMIN_EMAIL,
  isUserAdmin,
  formatShareableInviteUrl
} from '../firebase/nyotaDb';

export default function AdminPortal({ onBackToSite, onPreviewInvitation }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState('');

  // Admin Credentials form state
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Password Reset state
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetSuccessMsg, setResetSuccessMsg] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  const [activeTab, setActiveTab] = useState('invitations'); // 'invitations' | 'orders'
  const [invitationsList, setInvitationsList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'pending_verification' | 'verified' | 'unpaid'
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [actionMessage, setActionMessage] = useState('');

  // Subscribe to Auth State
  useEffect(() => {
    const unsubscribe = subscribeToAuthUser((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const isAdmin = isUserAdmin(currentUser);

  // Subscribe to Invitations and Orders when authenticated as Admin
  useEffect(() => {
    if (!isAdmin) return;

    const unsubOrders = subscribeToAllShagunOrders((orderList) => {
      setOrders(orderList);
    });

    const unsubInvites = subscribeToAllInvitationsForAdmin((invList) => {
      setInvitationsList(invList);
    });

    return () => {
      if (typeof unsubOrders === 'function') unsubOrders();
      if (typeof unsubInvites === 'function') unsubInvites();
    };
  }, [isAdmin]);

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setResetSuccessMsg('');

    if (!adminEmail.trim() || !adminPassword.trim()) {
      setLoginError('Please enter both admin email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await loginWithFirebaseEmail(adminEmail, adminPassword);
      if (!res.success) {
        setLoginError(res.error || 'Authentication failed. Please verify credentials.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('An unexpected error occurred during login.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoginError('');
    setResetSuccessMsg('');

    if (!adminEmail.trim()) {
      setLoginError('Please enter your admin email address to receive the reset link.');
      return;
    }

    setIsResetting(true);
    try {
      const res = await sendFirebasePasswordReset(adminEmail);
      if (res.success) {
        setResetSuccessMsg(res.message || `Password reset link sent to ${adminEmail}. Check your inbox.`);
      } else {
        setLoginError(res.error || 'Failed to send reset email.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Failed to trigger password reset.');
    } finally {
      setIsResetting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setAdminEmail('');
      setAdminPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleVerifyInvitation = async (inv) => {
    setActionLoadingId(inv.id);
    setActionMessage('');
    try {
      await verifyInvitationPayment(inv.id, inv.userId);
      setActionMessage(`✓ Payment verified for "${inv.primaryNames || 'Invitation'}"! Publishing unlocked for User ${inv.userId || ''}.`);
      setTimeout(() => setActionMessage(''), 4000);
    } catch (err) {
      console.error('Error verifying invitation:', err);
      setActionMessage('Failed to verify invitation.');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleVerifyOrder = async (order) => {
    setActionLoadingId(order.id);
    setActionMessage('');
    try {
      await verifyShagunOrder(order.id, order.userId, order.invitationId || order.invitationData?.id);
      setActionMessage(`✓ Order ${order.id} for ${order.userName} successfully verified!`);
      setTimeout(() => setActionMessage(''), 4000);
    } catch (err) {
      console.error('Error verifying order:', err);
      setActionMessage('Failed to verify order.');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleRejectOrder = async (order) => {
    if (!window.confirm(`Are you sure you want to reject order ${order.id} (UTR: ${order.utr})?`)) {
      return;
    }
    setActionLoadingId(order.id);
    setActionMessage('');
    try {
      await rejectShagunOrder(order.id, order.userId, 'Payment UTR verification failed');
      setActionMessage(`Order ${order.id} marked as rejected.`);
      setTimeout(() => setActionMessage(''), 4000);
    } catch (err) {
      console.error('Error rejecting order:', err);
      setActionMessage('Failed to reject order.');
    } finally {
      setActionLoadingId(null);
    }
  };

  // Metrics
  const pendingInvitations = invitationsList.filter(i => i.paymentStatus === 'pending_verification');
  const verifiedInvitations = invitationsList.filter(i => i.paymentStatus === 'verified' || i.status === 'published');
  const pendingOrders = orders.filter(o => o.status === 'pending_verification');
  const verifiedOrders = orders.filter(o => o.status === 'verified');
  const totalShagunRevenue = (verifiedInvitations.length || verifiedOrders.length) * 1001;

  // Filtered Invitations
  const filteredInvitations = invitationsList.filter(inv => {
    const matchesStatus = filterStatus === 'all' ? true : (inv.paymentStatus === filterStatus || (filterStatus === 'verified' && inv.status === 'published'));
    const queryLower = searchQuery.toLowerCase().trim();
    const matchesSearch = !queryLower || 
      inv.primaryNames?.toLowerCase().includes(queryLower) ||
      inv.userEmail?.toLowerCase().includes(queryLower) ||
      inv.userId?.toLowerCase().includes(queryLower) ||
      inv.utr?.toLowerCase().includes(queryLower) ||
      inv.id?.toLowerCase().includes(queryLower);

    return matchesStatus && matchesSearch;
  });

  // Filtered Orders
  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' ? true : order.status === filterStatus;
    const queryLower = searchQuery.toLowerCase().trim();
    const matchesSearch = !queryLower || 
      order.userName?.toLowerCase().includes(queryLower) ||
      order.userEmail?.toLowerCase().includes(queryLower) ||
      order.utr?.toLowerCase().includes(queryLower) ||
      order.id?.toLowerCase().includes(queryLower) ||
      order.payerName?.toLowerCase().includes(queryLower);

    return matchesStatus && matchesSearch;
  });

  // SCREEN 1: NOT SIGNED IN YET -> EMAIL & PASSWORD AUTH FORM
  if (!currentUser || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#07050E] text-slate-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-champagne-500/30 shadow-2xl space-y-6 animate-fadeIn">
          
          <button
            onClick={onBackToSite}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Store</span>
          </button>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full mx-auto p-[2px] bg-gradient-to-br from-champagne-400 via-amber-500 to-amber-700 shadow-glow-gold flex items-center justify-center">
              <div className="w-full h-full bg-[#0E0C1C] rounded-full flex items-center justify-center">
                <Lock className="w-7 h-7 text-champagne-400" />
              </div>
            </div>
            <h1 className="font-cinzel text-2xl font-bold text-white">
              {isResetMode ? 'Reset Admin Password' : 'Admin Portal Authentication'}
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              {isResetMode 
                ? 'Enter your registered administrator email to receive a secure password reset link.'
                : 'Sign in with your administrator email and password to access payment verification.'}
            </p>
          </div>

          {!isResetMode ? (
            <form onSubmit={handleCredentialsLogin} className="space-y-4 pt-2">
              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Admin Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-champagne-400" />
                    <span>Admin Password</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsResetMode(true);
                      setLoginError('');
                      setResetSuccessMsg('');
                    }}
                    className="text-[11px] text-champagne-400 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all pr-10 font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                  >
                    {showPassword ? <Eye className="w-4 h-4 text-champagne-400" /> : <Eye className="w-4 h-4 text-slate-500" />}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                <Lock className="w-4 h-4" />
                <span>{isSubmitting ? 'Authenticating...' : 'Sign In as Administrator'}</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Admin Registered Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-champagne-400 focus:bg-white/10 transition-all font-sans"
                />
              </div>

              {resetSuccessMsg && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <span>{resetSuccessMsg}</span>
                </div>
              )}

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsResetMode(false);
                    setLoginError('');
                    setResetSuccessMsg('');
                  }}
                  className="w-1/3 py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isResetting}
                  className="w-2/3 py-3 px-4 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isResetting ? 'Sending...' : 'Send Reset Link'}</span>
                </button>
              </div>
            </form>
          )}

          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-1">
            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5 text-champagne-400" />
              <span>Protected Administrator Access Only</span>
            </div>
            <div className="text-[10px] text-slate-500">
              All administrative sessions and verification audits are recorded securely.
            </div>
          </div>

        </div>
      </div>
    );
  }

  // SCREEN 2: AUTHENTICATED SUPER ADMIN -> FULL CONSOLE
  return (
    <div className="min-h-screen bg-[#07050E] text-slate-100 p-4 sm:p-6 lg:p-8">
      
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit to Website</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
                  Payment Verification Admin Console
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/40 flex items-center gap-1">
                  <Crown className="w-3 h-3 text-emerald-400" />
                  <span>SUPER ADMIN ACTIVE</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                1-Click verify ₹1001 Shagun payments to automatically unlock customizer editing for clients.
              </p>
            </div>
          </div>

          {/* Admin User Profile & Sign Out */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/60 border border-champagne-400/40">
              <img
                src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`}
                alt="Admin"
                className="w-7 h-7 rounded-full border border-champagne-400"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-white font-mono">{currentUser.email}</div>
                <div className="text-[10px] text-champagne-300">Owner & Administrator</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30 flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Global Action Message Banner */}
        {actionMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-xs font-medium flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{actionMessage}</span>
          </div>
        )}

        {/* Top Navigation Tabs: Invitations Collection vs Orders Log */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => { setActiveTab('invitations'); setFilterStatus('all'); }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'invitations'
                ? 'bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 shadow-glow-gold'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Invitations Collection ({invitationsList.length})</span>
            {pendingInvitations.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold animate-pulse">
                {pendingInvitations.length} Pending
              </span>
            )}
          </button>

          <button
            onClick={() => { setActiveTab('orders'); setFilterStatus('all'); }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 shadow-glow-gold'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>UPI Orders Log ({orders.length})</span>
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 space-y-2 bg-gradient-to-br from-amber-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-amber-300">
              <span>Pending Verifications</span>
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
            <div className="text-3xl font-bold font-cinzel text-white">
              {activeTab === 'invitations' ? pendingInvitations.length : pendingOrders.length}
            </div>
            <div className="text-[11px] text-amber-300/80">
              Invitations awaiting admin payment approval
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 space-y-2 bg-gradient-to-br from-emerald-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-emerald-300">
              <span>Verified & Active Invites</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold font-cinzel text-white">
              {activeTab === 'invitations' ? verifiedInvitations.length : verifiedOrders.length}
            </div>
            <div className="text-[11px] text-emerald-300/80">
              Full editing & live publishing unlocked
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-champagne-500/30 space-y-2 bg-gradient-to-br from-yellow-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-champagne-300">
              <span>Total Shagun Revenue</span>
              <span className="text-base font-bold text-champagne-400">₹</span>
            </div>
            <div className="text-3xl font-bold font-cinzel gold-gradient-text">
              ₹{totalShagunRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-slate-400">
              Based on ₹1001 per invitation suite
            </div>
          </div>

        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel p-3 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterStatus === 'all' 
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({activeTab === 'invitations' ? invitationsList.length : orders.length})
            </button>

            <button
              onClick={() => setFilterStatus('pending_verification')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                filterStatus === 'pending_verification' 
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md' 
                  : 'text-amber-400 hover:text-amber-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Pending ({activeTab === 'invitations' ? pendingInvitations.length : pendingOrders.length})</span>
            </button>

            <button
              onClick={() => setFilterStatus('verified')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                filterStatus === 'verified' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md' 
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified ({activeTab === 'invitations' ? verifiedInvitations.length : verifiedOrders.length})</span>
            </button>

            {activeTab === 'invitations' && (
              <button
                onClick={() => setFilterStatus('unpaid')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === 'unpaid' 
                    ? 'bg-slate-300 text-slate-950 font-bold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Unpaid
              </button>
            )}

            {activeTab === 'orders' && (
              <button
                onClick={() => setFilterStatus('rejected')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === 'rejected' 
                    ? 'bg-rose-500 text-slate-950 font-bold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Rejected
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Name, Email, UID, or UTR..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
            />
          </div>

        </div>

        {/* TAB 1: INVITATIONS COLLECTION MANAGER */}
        {activeTab === 'invitations' && (
          <div className="space-y-3">
            {filteredInvitations.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-3xl border border-white/10 space-y-2">
                <Sparkles className="w-8 h-8 text-champagne-400 mx-auto opacity-60" />
                <h3 className="font-cinzel text-lg font-bold text-white">No Invitations Found</h3>
                <p className="text-xs text-slate-400">
                  {filterStatus === 'pending_verification' 
                    ? "All caught up! No pending invitation verifications at the moment."
                    : "No invitations match your current filter."}
                </p>
              </div>
            ) : (
              filteredInvitations.map((inv) => {
                const isPending = inv.paymentStatus === 'pending_verification';
                const isVerified = inv.paymentStatus === 'verified' || inv.status === 'published';
                const isUnpaid = !isPending && !isVerified;
                const isLoading = actionLoadingId === inv.id;
                const liveUrl = formatShareableInviteUrl(inv);

                return (
                  <div
                    key={inv.id}
                    className={`glass-panel rounded-2xl p-4 sm:p-5 border transition-all duration-200 ${
                      isPending
                        ? 'border-amber-400/60 bg-[#171328] shadow-luxury'
                        : isVerified
                          ? 'border-emerald-500/30 bg-[#0A1A14]'
                          : 'border-white/10 bg-[#0E0C1C]'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      
                      {/* Left: Invitation & User Info */}
                      <div className="space-y-2 max-w-xl">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-cinzel font-bold text-base text-white">
                            {inv.primaryNames || 'Arabic Style Royal Wedding'}
                          </h3>

                          {isPending && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1 animate-pulse">
                              <Clock className="w-3 h-3" />
                              <span>Pending Verification</span>
                            </span>
                          )}

                          {isVerified && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified & Unlocked</span>
                            </span>
                          )}

                          {isUnpaid && (
                            <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[10px] font-mono font-bold flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              <span>₹1001 Unpaid</span>
                            </span>
                          )}
                        </div>

                        {/* User Metadata */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2 rounded-xl bg-black/40 border border-white/10 space-y-1">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span>User ID (UID):</span>
                              <button
                                onClick={() => handleCopyText(inv.userId || '', `uid_${inv.id}`)}
                                className="text-champagne-400 hover:text-champagne-300 font-mono text-[10px] flex items-center gap-0.5 cursor-pointer"
                              >
                                {copiedId === `uid_${inv.id}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                <span>{copiedId === `uid_${inv.id}` ? 'Copied' : 'Copy'}</span>
                              </button>
                            </div>
                            <div className="font-mono text-[11px] text-white truncate">
                              {inv.userId || 'Guest / Unassigned'}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">
                              {inv.userEmail || 'No email attached'}
                            </div>
                          </div>

                          <div className="p-2 rounded-xl bg-black/40 border border-white/10 space-y-1">
                            <div className="text-[11px] text-slate-400">
                              <span>Event & Template:</span>
                            </div>
                            <div className="text-[11px] text-white truncate">
                              📅 {inv.dateText || '2026'} • {inv.templateName || 'Royal Arabic Wedding'}
                            </div>
                            {inv.utr && (
                              <div className="text-[10px] text-amber-300 font-mono flex items-center gap-1">
                                <span>UTR: {inv.utr}</span>
                                <button
                                  onClick={() => handleCopyText(inv.utr, `utr_${inv.id}`)}
                                  className="text-slate-400 hover:text-white cursor-pointer"
                                >
                                  {copiedId === `utr_${inv.id}` ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 w-full lg:w-auto justify-end flex-wrap">
                        
                        {(!isVerified || isPending) && (
                          <button
                            onClick={() => handleVerifyInvitation(inv)}
                            disabled={isLoading}
                            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{isLoading ? 'Verifying...' : 'Verify Payment & Unlock'}</span>
                          </button>
                        )}

                        {isVerified && (
                          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Published Live</span>
                          </div>
                        )}

                        <button
                          onClick={() => onPreviewInvitation && onPreviewInvitation(inv)}
                          className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                          title="Preview customized draft"
                        >
                          <Eye className="w-3.5 h-3.5 text-champagne-400" />
                          <span>Preview</span>
                        </button>

                        <button
                          onClick={() => window.open(liveUrl, '_blank')}
                          className="px-3 py-2 rounded-xl bg-champagne-500/15 hover:bg-champagne-500/25 text-champagne-300 border border-champagne-500/30 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                          title="Open Shareable Webpage"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live URL</span>
                        </button>

                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* TAB 2: UPI ORDERS LOG */}
        {activeTab === 'orders' && (
          <div className="space-y-3">
            {filteredOrders.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-3xl border border-white/10 space-y-2">
                <CreditCard className="w-8 h-8 text-champagne-400 mx-auto opacity-60" />
                <h3 className="font-cinzel text-lg font-bold text-white">No Payment Orders Found</h3>
                <p className="text-xs text-slate-400">
                  {filterStatus === 'pending_verification' 
                    ? "No pending UPI payments to review."
                    : "No payment records match your search query."}
                </p>
              </div>
            ) : (
              filteredOrders.map((order) => {
                const isPending = order.status === 'pending_verification';
                const isVerified = order.status === 'verified';
                const isRejected = order.status === 'rejected';
                const isLoading = actionLoadingId === order.id;

                return (
                  <div
                    key={order.id}
                    className={`glass-panel rounded-2xl p-4 sm:p-5 border transition-all duration-200 ${
                      isPending
                        ? 'border-amber-400/50 bg-[#171328] shadow-luxury'
                        : isVerified
                          ? 'border-emerald-500/30 bg-[#0A1A14]'
                          : 'border-rose-500/20 bg-[#1A0A0E] opacity-75'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      
                      {/* User & Order Profile */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-champagne-400/50 bg-black flex-shrink-0">
                          <img
                            src={order.userPhoto || `https://api.dicebear.com/7.x/bottts/svg?seed=${order.userId}`}
                            alt={order.userName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-sm text-white">
                              {order.userName}
                            </h3>
                            <span className="text-[10px] text-slate-400 font-mono">
                              ({order.userEmail})
                            </span>
                            
                            {isPending && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1 animate-pulse">
                                <Clock className="w-3 h-3" />
                                <span>Awaiting Verification</span>
                              </span>
                            )}

                            {isVerified && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Verified & Unlocked</span>
                              </span>
                            )}

                            {isRejected && (
                              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-mono font-bold flex items-center gap-1">
                                <XCircle className="w-3 h-3" />
                                <span>Payment Rejected</span>
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-slate-300 flex items-center gap-2 flex-wrap">
                            <span className="text-champagne-300 font-medium">
                              Template: {order.templateName || 'Wedding Emerald Luxury'}
                            </span>
                            <span className="text-slate-500">•</span>
                            <span className="font-mono text-slate-400 text-[11px]">
                              {order.timeAgo || 'Recently'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Details (₹1001 Shagun & UTR) */}
                      <div className="bg-black/50 p-2.5 sm:p-3 rounded-xl border border-white/10 flex items-center gap-4">
                        
                        <div>
                          <div className="text-[10px] uppercase font-mono text-slate-400">
                            Shagun Amount
                          </div>
                          <div className="font-cinzel text-base font-bold gold-gradient-text">
                            ₹1001 INR
                          </div>
                        </div>

                        <div className="border-l border-white/10 pl-3">
                          <div className="text-[10px] uppercase font-mono text-slate-400">
                            UPI Ref / UTR No.
                          </div>
                          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                            <span>{order.utr || 'N/A'}</span>
                            <button
                              onClick={() => handleCopyText(order.utr, order.id)}
                              title="Copy UTR to verify in bank app"
                              className="p-1 hover:text-white transition-colors cursor-pointer"
                            >
                              {copiedId === order.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-slate-400" />
                              )}
                            </button>
                          </div>
                        </div>

                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
                        
                        {isPending && (
                          <>
                            <button
                              onClick={() => handleVerifyOrder(order)}
                              disabled={isLoading}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                              <span>{isLoading ? 'Verifying...' : 'Verify & Unlock'}</span>
                            </button>

                            <button
                              onClick={() => handleRejectOrder(order)}
                              disabled={isLoading}
                              className="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs font-semibold border border-rose-500/30 transition-all cursor-pointer"
                            >
                              Reject
                            </button>
                          </>
                        )}

                        {isVerified && (
                          <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                            <Check className="w-4 h-4" />
                            <span>Access Granted</span>
                          </div>
                        )}

                        {order.invitationData && (
                          <button
                            onClick={() => onPreviewInvitation && onPreviewInvitation(order.invitationData)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs cursor-pointer"
                            title="Preview customized draft"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}

                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

      </div>

    </div>
  );
}
