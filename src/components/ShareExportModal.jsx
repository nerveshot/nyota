import React, { useState } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { 
  Download, Printer, Share2, Copy, Check, MessageSquare, 
  QrCode, X, Sparkles, ExternalLink, ImageIcon 
} from 'lucide-react';

export default function ShareExportModal({ isOpen, onClose, exportData }) {
  if (!isOpen) return null;

  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const eventName = exportData?.invitationData?.primaryNames || 'Celebration';
  const eventDate = exportData?.invitationData?.dateText || '2026';
  const venue = exportData?.invitationData?.venueName || 'Grand Ballroom';

  const sampleSlug = eventName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const shareableUrl = `https://nyota.invites/e/${sampleSlug}`;

  // WhatsApp formatted message
  const whatsappMessage = encodeURIComponent(
    `✨ You are cordially invited to celebrate with us!\n\n` +
    `💍 ${exportData?.invitationData?.title || 'Special Event'}: ${eventName}\n` +
    `📅 Date: ${eventDate}\n` +
    `📍 Venue: ${venue}\n\n` +
    `👉 View your 3D Interactive Invitation & RSVP online here:\n${shareableUrl}`
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleDownloadImage = async (format = 'png') => {
    setIsDownloading(true);
    const node = document.getElementById('printable-invitation');
    
    if (!node) {
      alert('Card element ready for export');
      setIsDownloading(false);
      return;
    }

    try {
      const dataUrl = format === 'png' 
        ? await toPng(node, { quality: 0.95, pixelRatio: 2 })
        : await toJpeg(node, { quality: 0.95, pixelRatio: 2 });

      const link = document.createElement('a');
      link.download = `Nyota-Invitation-${sampleSlug}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
      // Fallback
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0E0C1C] border border-champagne-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5 text-champagne-400" />
            <span>Export & Distribution Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
            Share Your <span className="gold-gradient-text">Invitation</span>
          </h2>
          <p className="text-xs text-slate-300">
            Download ultra-high resolution 4K digital cards, share 1-click WhatsApp invites, or request custom bespoke designs.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Action 1: High-Res PNG */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-champagne-400 font-semibold text-sm">
                <ImageIcon className="w-4 h-4" />
                <span>4K High-Res PNG / JPG</span>
              </div>
              <p className="text-xs text-slate-400">
                Crystal clear graphics for Instagram, texting, or local photo labs.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleDownloadImage('png')}
                disabled={isDownloading}
                className="flex-1 py-2 px-3 rounded-xl bg-champagne-500 text-slate-950 font-bold text-xs shadow-md hover:bg-champagne-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloading ? 'Exporting...' : 'PNG (4K)'}</span>
              </button>

              <button
                onClick={() => handleDownloadImage('jpg')}
                disabled={isDownloading}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-colors"
              >
                JPG
              </button>
            </div>
          </div>

          {/* Action 2: Bespoke Custom Orders */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Custom Requests</span>
              </div>
              <p className="text-xs text-slate-400">
                Want unique caricature art, special animations, or custom event features?
              </p>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20order%20a%20bespoke%20custom%20invitation%20webpage%20with%20custom%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold text-xs border border-amber-400/40 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact for Custom Design</span>
            </a>
          </div>

          {/* Action 3: WhatsApp Direct Blast */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 1-Click Share</span>
              </div>
              <p className="text-xs text-slate-400">
                Send ready-to-go invite messages with personalized interactive web links.
              </p>
            </div>

            <a
              href={`https://api.whatsapp.com/send?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-glow-emerald transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open in WhatsApp</span>
            </a>
          </div>

          {/* Action 4: QR Code for Table Display */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                <QrCode className="w-4 h-4" />
                <span>Event QR Code</span>
              </div>
              <p className="text-xs text-slate-400">
                Embed on printed programs, place cards, or signage for guest check-in.
              </p>
            </div>

            <button
              onClick={() => setShowQrCode(!showQrCode)}
              className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-colors flex items-center justify-center gap-1.5"
            >
              <QrCode className="w-3.5 h-3.5 text-champagne-400" />
              <span>{showQrCode ? 'Hide QR Code' : 'Generate QR Code'}</span>
            </button>
          </div>

        </div>

        {/* QR Code Display Overlay */}
        {showQrCode && (
          <div className="glass-panel p-4 rounded-2xl border border-champagne-500/30 text-center space-y-3 animate-fadeIn">
            <div className="bg-white p-3 rounded-xl inline-block shadow-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(shareableUrl)}`}
                alt="Event QR Code"
                className="w-32 h-32 mx-auto"
              />
            </div>
            <div className="text-xs text-slate-300">
              Scan with any smartphone camera to open <span className="font-mono text-champagne-300">{shareableUrl}</span>
            </div>
          </div>
        )}

        {/* Copyable Web URL Bar */}
        <div className="glass-panel p-3.5 rounded-2xl border border-white/10 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase">
            Direct Invitation Web Link
          </div>
          <div className="flex items-center gap-2 bg-black/50 p-2 rounded-xl border border-white/10">
            <input
              type="text"
              readOnly
              value={shareableUrl}
              className="bg-transparent text-xs text-slate-200 font-mono flex-1 outline-none truncate"
            />
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-champagne-500 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md hover:bg-champagne-400 transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
