import React from 'react';
import { Calendar, MapPin, Clock, Shirt, Sparkles, Heart, ExternalLink, Music, Crown } from 'lucide-react';
import { COLOR_THEMES, FONT_PAIRINGS, WAX_SEALS } from '../data/templates';

export default function InvitationCard({
  invitationData,
  themeId = 'emeraldGold',
  fontPairingId = 'classicSerif',
  sealId = 'botanical',
  sealColor = '#B88B42',
  isPrintMode = false,
  customScale = 1,
}) {
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.emeraldGold;
  const fonts = FONT_PAIRINGS[fontPairingId] || FONT_PAIRINGS.classicSerif;
  const seal = WAX_SEALS.find(s => s.id === sealId) || WAX_SEALS[0];

  const {
    tag = 'TOGETHER WITH THEIR FAMILIES',
    title = 'The Wedding Celebration Of',
    primaryNames = 'Elena Vance & Arthur Pendelton',
    dateText = 'Saturday, October 24, 2026',
    timeText = 'Four O\'clock In The Afternoon',
    venueName = 'The St. Regis Grand Ballroom',
    venueAddress = 'Two East 55th Street, New York, NY 10022',
    receptionInfo = 'Dinner, Dancing & Champagne Reception To Follow',
    dressCode = 'Black Tie Optional',
    rsvpDeadline = 'Kindly RSVP by September 15, 2026',
    hostMessage = 'We would be profoundly honored by your presence as we exchange vows and begin our lifelong journey together.',
    itinerary = [],
    registryUrl = '',
  } = invitationData || {};

  const isLight = theme.isLight || false;

  return (
    <div 
      id="printable-invitation"
      className={`relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-luxury transition-all duration-300 ${theme.bgClass} ${
        isLight ? 'text-[#2C2419]' : 'text-slate-100'
      } border-2 ${theme.border} overflow-hidden select-none`}
      style={{
        transform: customScale !== 1 ? `scale(${customScale})` : undefined,
        transformOrigin: 'top center',
      }}
    >
      {/* Texture & Shimmer Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

      {/* Ornate Luxury Borders & Corners */}
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-champagne-400/20 rounded-2xl pointer-events-none" />
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-dashed border-champagne-400/15 rounded-xl pointer-events-none" />

      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-champagne-400/70 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-champagne-400/70 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-champagne-400/70 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-champagne-400/70 rounded-br-lg pointer-events-none" />

      {/* Top Header Tag */}
      <div className="text-center space-y-3 relative z-10 pt-2">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-champagne-400/60" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-champagne-400">
            {tag}
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-champagne-400/60" />
        </div>

        {/* Title / Invitation Greeting */}
        <p className={`text-xs sm:text-sm tracking-wide ${fonts.body} ${isLight ? 'text-[#69563E]' : 'text-slate-300/90'} italic`}>
          {title}
        </p>

        {/* Primary Names (Couple / Honoree) */}
        <div className="py-2">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight ${fonts.heading} ${
            theme.foilType === 'roseGold' 
              ? 'rose-gradient-text' 
              : theme.foilType === 'silver' 
                ? 'silver-gradient-text' 
                : 'gold-gradient-text'
          }`}>
            {primaryNames}
          </h1>
        </div>

        {/* Host Message Note */}
        {hostMessage && (
          <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${fonts.body} ${
            isLight ? 'text-[#5A4833]' : 'text-slate-300/80'
          }`}>
            "{hostMessage}"
          </p>
        )}
      </div>

      {/* Divider with Royal Crown Emblem */}
      <div className="flex items-center justify-center my-6 gap-3 relative z-10">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-champagne-400/30 to-transparent" />
        <div className="flex items-center gap-1 text-champagne-400/90 text-xs">
          <span>⚜</span>
          <Crown className="w-3.5 h-3.5 text-champagne-400" />
          <span>⚜</span>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-champagne-400/30 to-transparent" />
      </div>

      {/* Date & Time Highlights */}
      <div className="space-y-4 text-center relative z-10">
        <div className="space-y-1">
          <div className={`text-base sm:text-lg font-bold tracking-wider uppercase ${fonts.heading} ${
            isLight ? 'text-[#2C2419]' : 'text-white'
          }`}>
            {dateText}
          </div>
          <div className={`text-xs sm:text-sm font-sans tracking-widest uppercase ${
            isLight ? 'text-[#7B6245]' : 'text-champagne-300/90'
          }`}>
            {timeText}
          </div>
        </div>

        {/* Venue Information */}
        <div className="space-y-1 pt-1">
          <div className={`text-sm sm:text-base font-semibold ${fonts.heading} ${
            isLight ? 'text-[#2C2419]' : 'text-slate-100'
          }`}>
            {venueName}
          </div>
          <div className={`text-xs ${fonts.body} max-w-xs mx-auto ${
            isLight ? 'text-[#7B6245]' : 'text-slate-300/80'
          }`}>
            {venueAddress}
          </div>
        </div>

        {/* Reception and Dress Code */}
        <div className="pt-2 space-y-2">
          {receptionInfo && (
            <div className={`text-xs italic ${fonts.body} ${
              isLight ? 'text-[#69563E]' : 'text-champagne-200/90'
            }`}>
              {receptionInfo}
            </div>
          )}

          {dressCode && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/25 text-[11px] font-sans font-medium text-champagne-300">
              <Shirt className="w-3 h-3 text-champagne-400" />
              <span>Dress Code: {dressCode}</span>
            </div>
          )}
        </div>
      </div>

      {/* Wax Seal Stamp & Bottom RSVP Note */}
      <div className="mt-8 pt-4 border-t border-champagne-400/20 text-center relative z-10 space-y-3">
        {/* Wax Seal */}
        <div className="flex justify-center items-center">
          <div 
            className="w-12 h-12 rounded-full p-[2px] shadow-glow-gold flex items-center justify-center transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, #FFF, ${sealColor}, #333)`
            }}
          >
            <div 
              className="w-full h-full rounded-full flex items-center justify-center text-lg shadow-inner border border-white/30"
              style={{ backgroundColor: sealColor }}
            >
              {seal.icon}
            </div>
          </div>
        </div>

        {/* RSVP Deadline */}
        <div className="text-xs sm:text-sm font-sans font-semibold tracking-wide text-champagne-400">
          {rsvpDeadline}
        </div>
      </div>

      {/* Itinerary Snippet (if provided) */}
      {itinerary && itinerary.length > 0 && (
        <div className="mt-6 pt-4 border-t border-champagne-400/15 relative z-10">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-champagne-400/80 text-center mb-3">
            Event Schedule
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {itinerary.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs py-1 px-2 rounded-lg bg-black/20 border border-white/5">
                <span className="font-semibold text-champagne-300 font-mono text-[10px] w-14 flex-shrink-0 pt-0.5">
                  {item.time}
                </span>
                <span className={isLight ? 'text-[#3E3120]' : 'text-slate-200'}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Registry / External link if any */}
      {registryUrl && (
        <div className="mt-4 text-center relative z-10">
          <a 
            href={registryUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-champagne-300 hover:text-champagne-200 underline underline-offset-4"
          >
            <span>Gift Registry & Honeymoon Fund</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

    </div>
  );
}
