import React, { useState } from 'react';
import { CheckCircle2, Clock, Plus, Check, Play, Crown, Sparkles } from 'lucide-react';
import { ViuShow } from '../types/viu';

interface VideoCardProps {
  show: ViuShow;
  onPlay: (showId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent, showId: string) => void;
  watchedProgress?: number; // 0 to 100%
}

export const VideoCard: React.FC<VideoCardProps> = ({
  show,
  onPlay,
  isBookmarked,
  onToggleBookmark,
  watchedProgress,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onPlay(show.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col group cursor-pointer transition-all duration-200"
    >
      {/* 16:9 Thumbnail Container */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#212121] border border-[#2a2a2a]">
        <img
          src={show.thumbnail}
          alt={show.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          {show.isPremium ? (
            <span className="flex items-center gap-1 bg-[#FFE600] text-black font-extrabold text-[10px] px-1.5 py-0.5 rounded shadow">
              <Crown className="w-3 h-3 fill-black" />
              VIP
            </span>
          ) : (
            <span className="bg-black/80 text-white font-bold text-[10px] px-1.5 py-0.5 rounded border border-white/20">
              FREE
            </span>
          )}

          {show.badge && (
            <span className="bg-red-600/90 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow">
              {show.badge}
            </span>
          )}
        </div>

        {/* Top Right Quick Hover Buttons (YouTube style) */}
        <div className={`absolute top-2 right-2 flex flex-col gap-1 z-10 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={(e) => onToggleBookmark(e, show.id)}
            title={isBookmarked ? 'Remove from Watchlist' : 'Add to Watchlist'}
            className="p-1.5 rounded-lg bg-black/80 hover:bg-[#FFE600] hover:text-black text-white transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
          >
            {isBookmarked ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom Right Duration / Episode Badge (YouTube style) */}
        <div className="absolute bottom-2 right-2 bg-black/85 text-white font-medium text-[11px] px-1.5 py-0.5 rounded tracking-tight backdrop-blur-sm">
          Ep {show.currentEpisode} • {show.episodes[0]?.duration || '68:45'}
        </div>

        {/* Watched Progress Bar */}
        {watchedProgress !== undefined && watchedProgress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#444444]">
            <div 
              className="h-full bg-[#FFE600]" 
              style={{ width: `${watchedProgress}%` }}
            />
          </div>
        )}

        {/* Subtle Play Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="w-12 h-12 rounded-full bg-black/70 border border-white/20 text-[#FFE600] flex items-center justify-center shadow-xl">
            <Play className="w-5 h-5 fill-[#FFE600] ml-0.5" />
          </div>
        </div>
      </div>

      {/* Meta Information (YouTube Layout) */}
      <div className="flex gap-3 mt-3 items-start">
        {/* Channel Avatar */}
        <img
          src={show.channel.avatar}
          alt={show.channel.name}
          className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5 border border-white/10"
        />

        {/* Text Info */}
        <div className="flex-1 min-w-0">
          {/* Title - 2 lines max */}
          <h3 className="font-semibold text-sm text-[#f1f1f1] group-hover:text-[#FFE600] line-clamp-2 leading-snug transition-colors">
            {show.title}
          </h3>

          {/* Channel Name with Verified Badge */}
          <div className="flex items-center gap-1 text-xs text-[#aaaaaa] mt-1 hover:text-white transition-colors">
            <span className="truncate">{show.channel.name}</span>
            {show.channel.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 fill-[#aaaaaa] text-black shrink-0" />
            )}
          </div>

          {/* Views & Date Row */}
          <div className="flex items-center gap-1.5 text-xs text-[#aaaaaa] mt-0.5">
            <span>{show.views}</span>
            <span>•</span>
            <span>{show.publishedTime}</span>
          </div>

          {/* Subtitle Languages Indicator */}
          <div className="flex items-center gap-1 mt-1 text-[10px] text-[#717171]">
            <span className="bg-[#242424] text-[#aaaaaa] font-semibold px-1 py-0.2 rounded border border-[#333333]">
              CC
            </span>
            <span>{show.subtitles.slice(0, 3).join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
