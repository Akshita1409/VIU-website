import React, { useState } from 'react';
import { Play, Plus, Check, Info, Volume2, VolumeX, Crown, Star } from 'lucide-react';
import { ViuShow } from '../types/viu';

interface FeaturedHeroProps {
  show: ViuShow;
  onPlay: (showId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (showId: string) => void;
  variant?: 'A' | 'B';
}

export const FeaturedHero: React.FC<FeaturedHeroProps> = ({
  show,
  onPlay,
  isBookmarked,
  onToggleBookmark,
  variant = 'B',
}) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden mb-6 bg-[#181818] border border-[#272727] shadow-2xl group">
      {/* Background Banner with Cinema Fade */}
      <div className="relative h-64 sm:h-80 md:h-[380px] w-full overflow-hidden">
        <img
          src={show.bannerImage}
          alt={show.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
        />
        {/* Gradients to blend smoothly with dark YouTube background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent"></div>
      </div>

      {/* Floating Info Overlay */}
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end max-w-2xl">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className={`flex items-center gap-1 font-extrabold text-[11px] md:text-xs px-2.5 py-1 rounded-md uppercase tracking-wider shadow ${
            variant === 'B'
              ? 'bg-[#FF0000] text-white shadow-red-600/30'
              : 'bg-[#FFE600] text-black shadow-[#FFE600]/20'
          }`}>
            <Crown className="w-3.5 h-3.5 fill-current" />
            {variant === 'B' ? '#1 TRENDING STREAM' : '#1 IN SINGAPORE'}
          </span>
          <span className="bg-[#272727]/90 backdrop-blur-md text-[#f1f1f1] border border-white/10 text-[11px] md:text-xs font-semibold px-2.5 py-1 rounded-md">
            {show.category}
          </span>
          <span className={`flex items-center gap-1 text-xs font-bold bg-black/50 backdrop-blur-md px-2 py-0.5 rounded border ${
            variant === 'B' ? 'text-red-400 border-red-500/30' : 'text-[#FFE600] border-[#FFE600]/30'
          }`}>
            <Star className={`w-3.5 h-3.5 ${variant === 'B' ? 'fill-red-400' : 'fill-[#FFE600]'}`} />
            {show.rating}
          </span>
          <span className="text-xs text-[#aaaaaa]">
            {show.totalEpisodes} Episodes • Complete Uncut
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md mb-2 line-clamp-1">
          {show.title}
        </h1>

        {/* Synopsis */}
        <p className="text-xs sm:text-sm text-[#cccccc] line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed max-w-xl">
          {show.synopsis}
        </p>

        {/* Cast Preview */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-[#aaaaaa] mb-4">
          <span className="text-white/60">Starring:</span>
          <span>{show.cast.map(c => c.name).join(', ')}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onPlay(show.id)}
            className={`flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-all transform hover:scale-[1.02] cursor-pointer shadow-lg ${
              variant === 'B'
                ? 'bg-[#FF0000] hover:bg-red-700 text-white shadow-red-600/30'
                : 'bg-[#FFE600] hover:bg-[#fff04d] text-black shadow-[#FFE600]/25'
            }`}
          >
            <Play className={`w-4 h-4 ${variant === 'B' ? 'fill-white' : 'fill-black'}`} />
            <span>Play Ep {show.currentEpisode}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(show.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
              isBookmarked
                ? variant === 'B'
                  ? 'bg-white/15 border-white/30 text-red-400'
                  : 'bg-white/15 border-white/30 text-[#FFE600]'
                : 'bg-black/50 hover:bg-black/70 border-white/20 text-white'
            }`}
          >
            {isBookmarked ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isBookmarked ? 'In Watchlist' : 'Watchlist'}</span>
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? 'Unmute preview' : 'Mute preview'}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white/80 hover:text-white transition-colors cursor-pointer ml-auto"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
