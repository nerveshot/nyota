import React, { useState } from 'react';
import { 
  Sparkles, Heart, Cake, Baby, Wine, Briefcase, Search, 
  ArrowRight, Eye, Check, SlidersHorizontal 
} from 'lucide-react';
import { TEMPLATE_CATEGORIES, INVITATION_TEMPLATES, COLOR_THEMES } from '../data/templates';

const iconMap = {
  Sparkles,
  Heart,
  Cake,
  Baby,
  Wine,
  Briefcase,
};

export default function TemplateGallery({ onSelectTemplate, onQuickPreview }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = INVITATION_TEMPLATES.filter((tpl) => {
    const matchesCat = activeCategory === 'all' || tpl.category === activeCategory;
    const matchesSearch = 
      tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.defaults.primaryNames.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="templates-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Curated Designer Templates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white">
            Choose Your <span className="gold-gradient-text">Signature Style</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every template is meticulously crafted with matching digital RSVP portals, 
            customizable music tracks, and high-resolution print exports.
          </p>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none">
            {TEMPLATE_CATEGORIES.map((cat) => {
              const IconComp = iconMap[cat.icon] || Sparkles;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-champagne-500 to-amber-600 text-slate-950 font-bold shadow-glow-gold'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wedding, gala, 30th..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-champagne-500/60 focus:ring-1 focus:ring-champagne-500/50"
            />
          </div>

        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => {
            const theme = COLOR_THEMES[template.themeId] || COLOR_THEMES.emeraldGold;
            const isLight = theme.isLight || false;

            return (
              <div
                key={template.id}
                className="group relative rounded-3xl bg-[#120F24]/80 border border-champagne-500/20 hover:border-champagne-500/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-glow-gold flex flex-col justify-between"
              >
                {/* Visual Card Preview Cardstock Top */}
                <div className="relative p-6 h-72 flex flex-col justify-between overflow-hidden cursor-pointer"
                  onClick={() => onSelectTemplate(template)}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 ${theme.bgClass} opacity-95 group-hover:scale-105 transition-transform duration-700`} />
                  
                  {/* Texture & Corner lines */}
                  <div className="absolute inset-3 border border-champagne-400/25 rounded-2xl pointer-events-none" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-champagne-400/70" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-champagne-400/70" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-champagne-400/70" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-champagne-400/70" />

                  {/* Top Badge & Price Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-champagne-300 border border-champagne-500/30">
                      {template.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-champagne-500 text-slate-950 font-bold text-xs shadow-md">
                      From ${template.basePrice}
                    </span>
                  </div>

                  {/* Card Main Typography Preview */}
                  <div className="relative z-10 text-center space-y-1.5 my-auto">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-champagne-300 font-sans">
                      {template.defaults.tag}
                    </div>
                    <h3 className={`text-2xl font-serif font-bold ${
                      theme.foilType === 'roseGold' ? 'rose-gradient-text' : theme.foilType === 'silver' ? 'silver-gradient-text' : 'gold-gradient-text'
                    }`}>
                      {template.defaults.primaryNames}
                    </h3>
                    <div className={`text-xs ${isLight ? 'text-[#69563E]' : 'text-slate-300'}`}>
                      {template.defaults.dateText}
                    </div>
                  </div>

                  {/* Wax seal watermark */}
                  <div className="relative z-10 flex justify-center">
                    <div 
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-md border border-white/30"
                      style={{ backgroundColor: template.sealColor }}
                    >
                      ⚜️
                    </div>
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickPreview(template);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold border border-white/30 flex items-center gap-1.5 backdrop-blur-md transition-transform active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </button>
                    <button
                      onClick={() => onSelectTemplate(template)}
                      className="px-4 py-2 rounded-xl bg-champagne-500 hover:bg-champagne-400 text-slate-950 text-xs font-bold shadow-glow-gold flex items-center gap-1.5 transition-transform active:scale-95"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Customize</span>
                    </button>
                  </div>
                </div>

                {/* Card Description & Meta Bottom */}
                <div className="p-6 bg-[#0E0C1C] border-t border-white/10 space-y-4">
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-white group-hover:text-champagne-300 transition-colors">
                      {template.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {template.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      Includes RSVP & Music
                    </div>
                    <button
                      onClick={() => onSelectTemplate(template)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-champagne-400 hover:text-champagne-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>Customize Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
