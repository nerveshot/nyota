import React, { useState, useEffect } from 'react';
import { Database, Wifi, WifiOff, CheckCircle2, RefreshCw, Sparkles, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { isFirebaseConfigured, firebaseConfig } from '../firebase/config';
import { seedFirestoreNyotaCollection } from '../firebase/nyotaDb';

export default function FirebaseStatusBadge() {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setIsConfigured(isFirebaseConfigured());
  }, []);

  const handleSeedData = async () => {
    setIsSeeding(true);
    setSeedMessage('');
    try {
      const res = await seedFirestoreNyotaCollection();
      if (res.success) {
        setSeedMessage('✓ Successfully populated /nyota in Firestore!');
      } else {
        setSeedMessage(res.message || res.error || 'Check Firebase credentials in .env');
      }
    } catch (err) {
      setSeedMessage(`Error: ${err.message}`);
    } finally {
      setIsSeeding(false);
      setTimeout(() => setSeedMessage(''), 5000);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="bg-[#120F24]/95 border border-champagne-500/30 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 max-w-xs sm:max-w-sm">
        {/* Header Bar */}
        <div 
          onClick={() => setExpanded(!expanded)}
          className="px-3.5 py-2.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-champagne-500/20 text-champagne-400">
              <Database className="w-3 h-3" />
              <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${isConfigured ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${isConfigured ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-white flex items-center gap-1.5 font-cinzel">
                <span>Firestore: /nyota</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider font-mono font-normal ${
                  isConfigured ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {isConfigured ? 'Live Cloud' : 'Ready / Fallback'}
                </span>
              </div>
            </div>
          </div>

          <button className="text-slate-400 hover:text-white p-1">
            {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Panel */}
        {expanded && (
          <div className="p-3.5 pt-1 border-t border-white/10 text-xs space-y-3 bg-[#0B0914]/80">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Project Target:</span>
                <span className="font-mono text-champagne-300">{firebaseConfig.projectId}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Isolated Namespace:</span>
                <span className="font-mono text-emerald-400">/nyota/*</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Real-Time Sync:</span>
                <span className="text-emerald-400 font-medium">Active (onSnapshot)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 bg-white/5 p-2 rounded-lg border border-white/5 space-y-1">
              <p className="font-semibold text-champagne-400">Database Collections Isolated:</p>
              <ul className="list-disc list-inside text-[10px] text-slate-400 font-mono space-y-0.5">
                <li>nyota/invitations/items</li>
                <li>nyota/rsvps/items</li>
                <li>nyota/orders/items</li>
                <li>nyota/newsletter/items</li>
              </ul>
            </div>

            {seedMessage && (
              <div className="text-[11px] p-2 rounded bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-center">
                {seedMessage}
              </div>
            )}

            <div className="pt-1 flex gap-2">
              <button
                onClick={handleSeedData}
                disabled={isSeeding}
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-champagne-500/20 to-amber-500/20 hover:from-champagne-500/30 hover:to-amber-500/30 border border-champagne-500/40 text-champagne-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isSeeding ? 'animate-spin' : ''}`} />
                <span>{isSeeding ? 'Seeding...' : 'Seed Nyota Data'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
