import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, Check, Star, Crown, Flame, Sparkles } from 'lucide-react';
import { ViuShow } from '../types/viu';
import { VIU_SHOWS } from '../data/viuData';

interface ViuStandardFeedProps {
  onSelectShow: (showId: string) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (showId: string) => void;
  onOpenPremium: () => void;
}

export const ViuStandardFeed: React.FC<ViuStandardFeedProps> = ({
  onSelectShow,
  bookmarkedIds,
  onToggleBookmark,
  onOpenPremium,
}) => {
  const featuredShow = VIU_SHOWS[0]; // Lovely Runner

  // Categorized sections mirroring Viu OTT layout
  const sections = [
    {
      id: 'todays-highlight',
      title: "Today's Highlights",
      subtitle: 'Most watched episodes streaming now on Viu',
      shows: VIU_SHOWS.slice(0, 6),
    },
    {
      id: 'k-dramas',
      title: 'Top Korean Dramas',
      subtitle: 'Express simulcasts & hit Korean series',
      shows: VIU_SHOWS.filter(s => s.category === 'Korean Drama'),
    },
    {
      id: 'k-variety',
      title: 'Our Favourite Variety Shows',
      subtitle: 'Laugh-out-loud Korean comedy and reality shows',
      shows: VIU_SHOWS.filter(s => s.category === 'K-Variety'),
    },
    {
      id: 'viu-originals',
      title: 'Viu Originals & Exclusives',
      subtitle: 'Award-winning premium Asian storytelling',
      shows: VIU_SHOWS.filter(s => s.category === 'Viu Original'),
    },
    {
      id: 'chinese-dramas',
      title: 'Must-Watch C-Dramas',
      subtitle: 'Costume epics and modern romance',
      shows: VIU_SHOWS.filter(s => s.category === 'Chinese Drama'),
    },
    {
      id: 'anime',
      title: 'Top Anime Simulcasts',
      subtitle: 'Official Japanese anime uncut',
      shows: VIU_SHOWS.filter(s => s.category === 'Anime'),
    },
  ];

  return (
    <div className="bg-[#111111] text-white min-h-screen pb-16 select-none">
      {/* Viu Standard Billboard Hero Carousel */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden bg-black group">
        <img
          src={featuredShow.bannerImage}
          alt={featuredShow.title}
          className="w-full h-full object-cover object-center brightness-75 group-hover:scale-102 transition-transform duration-700"
        />
        {/* Cinema vignette fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/70 to-transparent"></div>

        {/* Content on Banner */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FFE600] text-black font-extrabold text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider shadow">
              VIU EXCLUSIVE
            </span>
            <span className="text-xs text-[#FFE600] font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#FFE600]" />
              {featuredShow.rating} / 10
            </span>
            <span className="text-xs text-[#aaaaaa]">
              • {featuredShow.category} • Complete Uncut
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg mb-2 max-w-2xl">
            {featuredShow.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#dddddd] line-clamp-2 max-w-xl mb-4 leading-relaxed">
            {featuredShow.synopsis}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectShow(featuredShow.id)}
              className="flex items-center gap-2 bg-[#FFE600] hover:bg-[#fff04d] text-black font-bold text-sm px-6 py-2.5 rounded-lg transition-transform transform hover:scale-[1.02] cursor-pointer shadow-lg"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Watch Now</span>
            </button>

            <button
              onClick={() => onToggleBookmark(featuredShow.id)}
              className="flex items-center gap-2 bg-black/60 hover:bg-black/80 border border-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              {bookmarkedIds.has(featuredShow.id) ? (
                <>
                  <Check className="w-4 h-4 text-[#FFE600]" />
                  <span>In Watchlist</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Watchlist</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenPremium}
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#FFE600] border border-[#FFE600]/40 bg-[#FFE600]/10 hover:bg-[#FFE600]/20 px-3.5 py-2.5 rounded-lg font-bold transition-colors cursor-pointer ml-auto"
            >
              <Crown className="w-4 h-4 fill-[#FFE600]" />
              <span>Upgrade to VIP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Viu Standard Category Rows (Horizontal Scrolling Rails) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-9 mt-6">
        {sections.map(section => (
          <ViuRailSection
            key={section.id}
            section={section}
            onSelectShow={onSelectShow}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

interface ViuRailSectionProps {
  section: {
    id: string;
    title: string;
    subtitle: string;
    shows: ViuShow[];
  };
  onSelectShow: (showId: string) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (showId: string) => void;
}

const ViuRailSection: React.FC<ViuRailSectionProps> = ({
  section,
  onSelectShow,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmt = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
  };

  return (
    <div className="group/rail">
      {/* Section Title with Viu Yellow Left Accent */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-1 h-5 bg-[#FFE600] rounded-full"></div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {section.title}
            </h2>
            <p className="text-xs text-[#888888]">{section.subtitle}</p>
          </div>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover/rail:opacity-100 transition-opacity">
          <button
            onClick={() => handleScroll('left')}
            className="p-1.5 rounded-full bg-[#222222] hover:bg-[#333333] text-white cursor-pointer"
            aria-label="Scroll rail left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-1.5 rounded-full bg-[#222222] hover:bg-[#333333] text-white cursor-pointer"
            aria-label="Scroll rail right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Rail */}
      <div
        ref={scrollRef}
        className="flex items-start gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1"
      >
        {section.shows.map(show => (
          <div
            key={show.id}
            onClick={() => onSelectShow(show.id)}
            className="w-48 sm:w-56 md:w-64 shrink-0 group/card cursor-pointer"
          >
            {/* Poster Card Container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1c1c1c] border border-white/10 group-hover/card:border-[#FFE600]/80 transition-all duration-300 shadow-md">
              <img
                src={show.thumbnail}
                alt={show.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
              />

              {/* Viu Yellow Top Badge */}
              <div className="absolute top-2 left-2 flex items-center gap-1">
                {show.isPremium ? (
                  <span className="bg-[#FFE600] text-black font-extrabold text-[9px] px-1.5 py-0.5 rounded shadow">
                    VIP
                  </span>
                ) : (
                  <span className="bg-black/80 text-white font-bold text-[9px] px-1.5 py-0.5 rounded border border-white/10">
                    FREE
                  </span>
                )}
                {show.badge && (
                  <span className="bg-red-600/90 text-white font-bold text-[9px] px-1.5 py-0.5 rounded">
                    {show.badge}
                  </span>
                )}
              </div>

              {/* Episode Tag */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                Ep {show.currentEpisode}
              </div>

              {/* Hover overlay play button */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 flex items-center justify-center transition-opacity">
                <div className="w-10 h-10 rounded-full bg-[#FFE600] text-black flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-black ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info below */}
            <div className="mt-2">
              <h3 className="text-xs sm:text-sm font-semibold text-[#f1f1f1] group-hover/card:text-[#FFE600] line-clamp-1 transition-colors">
                {show.title}
              </h3>
              <p className="text-[11px] text-[#888888] mt-0.5">
                {show.category} • {show.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
