import React from 'react';
import { 
  Sparkles, Heart, Cake, Baby, Wine, Briefcase, GraduationCap, 
  ArrowRight, CheckCircle2, Play, Music, Users, Calendar, MapPin 
} from 'lucide-react';

export default function TemplateGallery({ onOpenStudio, onOpenWebpageDemo }) {
  const eventCategories = [
    {
      id: 'wedding',
      title: 'Weddings & Engagements',
      icon: Heart,
      badge: 'Most Requested 💍',
      tagline: 'Cinematic, romantic webpages celebrating your eternal love story.',
      templates: [
        'Royal Emerald & Gold Foil Edition',
        'Romantic Rose Quartz & Velvet Love Story',
        'Tuscan Vineyard & Candlelight Estate',
        'Minimalist Modern Ivory & Champagne Luxe'
      ],
      color: 'from-emerald-950 via-[#0B2E21] to-[#04120D]',
      accent: 'border-champagne-400/40 text-champagne-300',
    },
    {
      id: 'birthday',
      title: 'Birthdays & Milestones',
      icon: Cake,
      badge: 'High Energy 🎉',
      tagline: 'Unforgettable celebrations from 1st birthdays to milestone 50ths.',
      templates: [
        'Milestone 30th / 50th Golden Rooftop Soirée',
        'Electric Neon & Velvet Glow Disco Party',
        'Sweet 16 & Quinceañera Fairytale Gala',
        'Kids Safari & Little Prince/Princess Adventure'
      ],
      color: 'from-[#1E1238] via-[#2D164E] to-[#0D071B]',
      accent: 'border-purple-400/40 text-purple-300',
    },
    {
      id: 'babyshower',
      title: 'Baby Showers & Reveals',
      icon: Baby,
      badge: 'Sweet & Heartwarming 🍼',
      tagline: 'Welcoming your precious little miracles with family & friends.',
      templates: [
        'Little Star & Pastel Cloud Gender Reveal',
        'Botanical Olive Branch & Linen Baby Shower',
        'Teddy Bear High Tea & Sweet Welcome',
        'Safari Meadow & Woodland Friends Theme'
      ],
      color: 'from-[#2B1E16] via-[#3D281D] to-[#170E09]',
      accent: 'border-amber-400/40 text-amber-300',
    },
    {
      id: 'anniversary',
      title: 'Anniversaries & Romance',
      icon: Wine,
      badge: 'Cherished Milestones ✨',
      tagline: 'Honoring decades of love, devotion, and vow renewals.',
      templates: [
        'Golden 50th Jubilee Gala Celebration',
        'Silver 25th Diamond Candlelight Dinner',
        'Vintage Wine Tasting & Vow Renewal',
        'Intimate Courtyard Romance Soirée'
      ],
      color: 'from-[#2D121B] via-[#451B2A] to-[#1F0B12]',
      accent: 'border-rose-400/40 text-rose-300',
    },
    {
      id: 'corporate',
      title: 'Galas & Corporate Events',
      icon: Briefcase,
      badge: 'Executive & VIP 🍸',
      tagline: 'High-profile charity balls, summits, award shows, and galas.',
      templates: [
        'Grand Horizon Black Tie Charity Gala',
        'Annual Innovation Summit & Keynote Mixer',
        'Red Carpet Awards & VIP Champagne Reception',
        'Executive Leadership Banquet & Fundraiser'
      ],
      color: 'from-[#121215] via-[#1C1C24] to-[#0A0A0C]',
      accent: 'border-slate-400/40 text-slate-200',
    },
    {
      id: 'graduation',
      title: 'Graduations & Socials',
      icon: GraduationCap,
      badge: 'Commencements 🎓',
      tagline: 'Honoring major academic triumphs, alumni reunions & housewarmings.',
      templates: [
        'Doctorate & Honors Commencement Gala',
        'Alumni Homecoming & Reunion Dinner',
        'Luxury Housewarming & Garden Social',
        'Private Holiday Banquet & Feast'
      ],
      color: 'from-[#0B1E2B] via-[#102C3F] to-[#051119]',
      accent: 'border-cyan-400/40 text-cyan-300',
    }
  ];

  return (
    <section id="events-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Bespoke Digital Invitations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white leading-tight">
            We Make Custom Invitations <br />
            <span className="gold-gradient-text">For All Your Special Events</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Instead of boring static cards, we create complete **cinematic invitation webpages** equipped with 
            ambient background music, 3D wax seal unboxings, live countdowns, photo love stories, Google Maps venue directions, 
            and real-time RSVP guest tracking for every occasion.
          </p>

          {/* Featured Live Webpage Demo CTA Banner */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWebpageDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Play className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Launch Live Webpage Demo (Zareqia Style)</span>
              <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            </button>

            <button
              onClick={onOpenStudio}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              <span>Open Customizer Studio</span>
              <ArrowRight className="w-4 h-4 text-champagne-400" />
            </button>
          </div>
        </div>

        {/* Event Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCategories.map((event) => {
            const IconComp = event.icon;

            return (
              <div
                key={event.id}
                className="group relative rounded-3xl bg-[#120F24]/80 border border-champagne-500/20 hover:border-champagne-500/50 p-6 sm:p-8 shadow-xl hover:shadow-glow-gold transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Category Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-champagne-400 to-amber-700 p-[1px] shadow-glow-gold flex items-center justify-center">
                      <div className="w-full h-full bg-[#0E0C1C] rounded-[15px] flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-champagne-400" />
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-champagne-300">
                      {event.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-champagne-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {event.tagline}
                    </p>
                  </div>

                  {/* Included Event Designs & Templates list */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Available Event Styles:
                    </div>

                    <div className="space-y-1.5">
                      {event.templates.map((tplName, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                          <span className="truncate">{tplName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={onOpenWebpageDemo}
                    className="w-full py-2.5 px-4 rounded-xl bg-champagne-500/15 hover:bg-champagne-500/25 border border-champagne-400/30 text-champagne-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all group-hover:shadow-glow-gold"
                  >
                    <span>View Interactive Webpage Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 text-champagne-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Event Notice Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-champagne-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-cinzel text-lg font-bold text-white">
              Hosting a Unique Celebration or Cultural Tradition?
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              We customize language, fonts, multiple ceremonies (e.g. Mehndi, Sangeet, Haldi, Reception, Nikah, Quinceañera), 
              multiple venue coordinates, and personalized music tracks to match your exact vision.
            </p>
          </div>

          <button
            onClick={onOpenStudio}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-champagne-400 to-amber-500 text-slate-950 font-bold text-xs shadow-glow-gold flex items-center gap-2 flex-shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Design Custom Invitation</span>
          </button>
        </div>

      </div>
    </section>
  );
}
