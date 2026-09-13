import React, { useState, useEffect } from 'react';
import { 
  Shield, CheckCircle2, XCircle, Clock, Search, Copy, Check, 
  ExternalLink, Sparkles, Filter, RefreshCw, Eye, ArrowLeft,
  User, CreditCard, DollarSign, Lock, Unlock, Phone, Key, LogOut,
  AlertTriangle, ShieldAlert, Crown
} from 'lucide-react';
import { 
  subscribeToAllShagunOrders, 
  verifyShagunOrder, 
  rejectShagunOrder,
  loginWithGoogle,
  logoutUser,
  subscribeToAuthUser,
  ADMIN_EMAIL,
  isUserAdmin
} from '../firebase/nyotaDb';

export default function AdminPortal({ onBackToSite, onPreviewInvitation }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState('');

  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'pending_verification' | 'verified' | 'rejected'
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedUtr, setCopiedUtr] = useState(null);
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

  // Subscribe to real-time Shagun orders only if authenticated as Admin
  useEffect(() => {
    if (!isAdmin) return;

    const unsubscribe = subscribeToAllShagunOrders((orderList) => {
      setOrders(orderList);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [isAdmin]);

  const handleGoogleSignIn = async () => {
    setLoginError('');
    try {
      const res = await loginWithGoogle();
      if (!res.success) {
        setLoginError('Google Sign-In was cancelled or failed.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Error signing in with Google.');
    }
  };

  const handleSwitchAccount = async () => {
    try {
      await logoutUser();
      await loginWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyUtr = (utr, orderId) => {
    navigator.clipboard.writeText(utr);
    setCopiedUtr(orderId);
    setTimeout(() => setCopiedUtr(null), 2000);
  };

  const handleVerify = async (order) => {
    setActionLoadingId(order.id);
    setActionMessage('');
    try {
      await verifyShagunOrder(order.id, order.userId);
      setActionMessage(`✓ Order ${order.id} for ${order.userName} successfully verified! Editor access unlocked.`);
      setTimeout(() => setActionMessage(''), 4000);
    } catch (err) {
      console.error('Error verifying order:', err);
      setActionMessage('Failed to verify order.');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleReject = async (order) => {
    if (!window.confirm(`Are you sure you want to reject order ${order.id} (UTR: ${order.utr})?`)) {
      return;
    }
    setActionLoadingId(order.id);
    try {
      await rejectShagunOrder(order.id, order.userId, 'Payment UTR verification failed');
      setActionMessage(`Order ${order.id} marked as rejected.`);
      setTimeout(() => setActionMessage(''), 4000);
    } catch (err) {
      console.error('Error rejecting order:', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Metrics
  const pendingOrders = orders.filter(o => o.status === 'pending_verification');
  const verifiedOrders = orders.filter(o => o.status === 'verified');
  const totalShagunRevenue = verifiedOrders.length * 501;

  // Filtered list
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

  // SCREEN 1: NOT SIGNED IN YET -> 1-CLICK GOOGLE SIGN IN GATEWAY
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#07050E] text-slate-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-champagne-500/30 shadow-2xl space-y-6 animate-fadeIn">
          
          <button
            onClick={onBackToSite}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Store</span>
          </button>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full mx-auto p-[2px] bg-gradient-to-br from-champagne-400 via-amber-500 to-amber-700 shadow-glow-gold flex items-center justify-center">
              <div className="w-full h-full bg-[#0E0C1C] rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-champagne-400" />
              </div>
            </div>
            <h1 className="font-cinzel text-2xl font-bold text-white">
              Admin Verification Portal
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Sign in with your Google Account to manage ₹501 Shagun payment verifications and unlock client invitation editors.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleGoogleSignIn}
              className="w-full py-3.5 px-4 rounded-2xl bg-white text-slate-900 font-bold text-sm shadow-xl hover:bg-slate-100 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>1-Click Sign in with Google</span>
            </button>

            {loginError && (
              <p className="text-xs text-rose-400 text-center">{loginError}</p>
            )}
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 text-center space-y-1">
            <div className="text-[11px] text-slate-400">
              Designated Super Admin Email:
            </div>
            <div className="text-xs font-mono font-bold text-champagne-300">
              {ADMIN_EMAIL}
            </div>
            <div className="text-[10px] text-slate-500 pt-1">
              All other accounts will automatically operate as standard client members.
            </div>
          </div>

        </div>
      </div>
    );
  }

  // SCREEN 2: SIGNED IN WITH NON-ADMIN EMAIL -> ACCESS RESTRICTED (NORMAL MEMBER VIEW)
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#07050E] text-slate-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-rose-500/30 shadow-2xl space-y-6 text-center animate-fadeIn">
          
          <div className="w-16 h-16 rounded-full mx-auto p-[2px] bg-gradient-to-br from-rose-500 to-amber-600 shadow-glow-gold flex items-center justify-center">
            <div className="w-full h-full bg-[#160A10] rounded-full flex items-center justify-center">
              <ShieldAlert className="w-8 h-8 text-rose-400" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 inline-block">
              Access Restricted (Standard Member)
            </span>
            <h2 className="font-cinzel text-xl font-bold text-white">
              Admin Privilege Required
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              You are currently signed in with a standard client account:
            </p>
            <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-champagne-300 truncate">
              {currentUser.email || currentUser.displayName}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Payment verification and client management access is strictly reserved for the owner administrator account (<span className="text-champagne-300 font-mono font-semibold">{ADMIN_EMAIL}</span>).
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleSwitchAccount}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Switch to Admin Account ({ADMIN_EMAIL})</span>
            </button>

            <button
              onClick={onBackToSite}
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs border border-white/15 transition-all flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Public Website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // SCREEN 3: AUTHENTICATED SUPER ADMIN (nrvsht@gmail.com) -> FULL CONSOLE
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
                1-Click verify ₹501 Shagun payments to automatically unlock customizer editing for clients.
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

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 space-y-2 bg-gradient-to-br from-amber-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-amber-300">
              <span>Pending Verifications</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-bold font-cinzel text-white">
              {pendingOrders.length}
            </div>
            <div className="text-[11px] text-amber-300/80">
              Clients awaiting instant editor unlock
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 space-y-2 bg-gradient-to-br from-emerald-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-emerald-300">
              <span>Verified & Active Clients</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold font-cinzel text-white">
              {verifiedOrders.length}
            </div>
            <div className="text-[11px] text-emerald-300/80">
              Full editing & publishing unlocked
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-champagne-500/30 space-y-2 bg-gradient-to-br from-yellow-950/30 to-black/50">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-champagne-300">
              <span>Total Shagun Collected</span>
              <span className="text-base font-bold text-champagne-400">₹</span>
            </div>
            <div className="text-3xl font-bold font-cinzel gold-gradient-text">
              ₹{totalShagunRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-slate-400">
              Based on ₹501 per wedding / celebration suite
            </div>
          </div>

        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel p-3 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterStatus === 'all' 
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({orders.length})
            </button>

            <button
              onClick={() => setFilterStatus('pending_verification')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                filterStatus === 'pending_verification' 
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md' 
                  : 'text-amber-400 hover:text-amber-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Pending ({pendingOrders.length})</span>
            </button>

            <button
              onClick={() => setFilterStatus('verified')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                filterStatus === 'verified' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md' 
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified ({verifiedOrders.length})</span>
            </button>

            <button
              onClick={() => setFilterStatus('rejected')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterStatus === 'rejected' 
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Rejected
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Name, Email, or UTR..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
            />
          </div>

        </div>

        {/* Orders Table / Cards */}
        <div className="space-y-3">
          {filteredOrders.length === 0 ? (
            <div className="glass-panel p-12 text-center rounded-3xl border border-white/10 space-y-2">
              <Sparkles className="w-8 h-8 text-champagne-400 mx-auto opacity-60" />
              <h3 className="font-cinzel text-lg font-bold text-white">No Orders Found</h3>
              <p className="text-xs text-slate-400">
                {filterStatus === 'pending_verification' 
                  ? "All caught up! No pending verifications at the moment."
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

                    {/* Payment Details (₹501 Shagun & UTR) */}
                    <div className="bg-black/50 p-2.5 sm:p-3 rounded-xl border border-white/10 flex items-center gap-4">
                      
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-400">
                          Shagun Amount
                        </div>
                        <div className="font-cinzel text-base font-bold gold-gradient-text">
                          ₹501 INR
                        </div>
                      </div>

                      <div className="border-l border-white/10 pl-3">
                        <div className="text-[10px] uppercase font-mono text-slate-400">
                          UPI Ref / UTR No.
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                          <span>{order.utr || 'N/A'}</span>
                          <button
                            onClick={() => handleCopyUtr(order.utr, order.id)}
                            title="Copy UTR to verify in bank app"
                            className="p-1 hover:text-white transition-colors"
                          >
                            {copiedUtr === order.id ? (
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
                            onClick={() => handleVerify(order)}
                            disabled={isLoading}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{isLoading ? 'Verifying...' : 'Verify & Unlock Editor'}</span>
                          </button>

                          <button
                            onClick={() => handleReject(order)}
                            disabled={isLoading}
                            className="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs font-semibold border border-rose-500/30 transition-all"
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {isVerified && (
                        <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                          <Check className="w-4 h-4" />
                          <span>Editor Access Granted</span>
                        </div>
                      )}

                      {order.invitationData && (
                        <button
                          onClick={() => onPreviewInvitation && onPreviewInvitation(order.invitationData)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs"
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

      </div>

    </div>
  );
}
