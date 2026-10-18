import React, { useState } from 'react';
import { 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  Share2, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Music2, 
  ChevronDown, 
  ChevronUp, 
  Tv, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DRAMA_CLIPS } from '../data/viuData';

interface ShortsViewProps {
  onSelectShow: (showTitle: string) => void;
  onShowToast: (msg: string) => void;
}

export const ShortsView: React.FC<ShortsViewProps> = ({ onSelectShow, onShowToast }) => {
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const clip = DRAMA_CLIPS[currentClipIndex] || DRAMA_CLIPS[0];

  const handleNext = () => {
    setCurrentClipIndex((prev) => (prev + 1) % DRAMA_CLIPS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentClipIndex((prev) => (prev - 1 + DRAMA_CLIPS.length) % DRAMA_CLIPS.length);
    setIsPlaying(true);
  };

  const handleToggleLike = (clipId: string) => {
    setLikedMap(prev => {
      const next = !prev[clipId];
      if (next) onShowToast('Liked drama clip');
      return { ...prev, [clipId]: next };
    });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onShowToast('Clip link copied to clipboard!');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-4 select-none">
      <div className="flex items-center gap-4">
        {/* Navigation arrows (desktop) */}
        <div className="hidden md:flex flex-col gap-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#272727] hover:bg-[#383838] text-white shadow-xl transition-all cursor-pointer"
            title="Previous Short"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[#272727] hover:bg-[#383838] text-white shadow-xl transition-all cursor-pointer"
            title="Next Short"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Vertical Reel Container (9:16 Aspect) */}
        <div className="relative w-[340px] sm:w-[380px] h-[640px] rounded-3xl overflow-hidden bg-black shadow-2xl border border-[#333333]">
          {/* Simulated Vertical Video preview */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={clip.thumbnail}
              alt={clip.title}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>

            {/* Tap to Play/Pause Overlay */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-black/60 text-[#FFE600] flex items-center justify-center shadow-xl">
                  <Play className="w-8 h-8 fill-[#FFE600] ml-1" />
                </div>
              )}
            </div>

            {/* Top Bar on Short */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
              <span className="flex items-center gap-1.5 bg-[#FFE600] text-black font-extrabold text-[11px] px-2 py-0.5 rounded-full shadow">
                <Sparkles className="w-3 h-3 fill-black" />
                VIU SHORTS
              </span>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Bottom Meta & Channel */}
            <div className="absolute bottom-4 left-4 right-16 z-10 text-white">
              {/* Channel Row */}
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={clip.channelAvatar}
                  alt={clip.channel}
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
                <span className="font-bold text-xs">{clip.channel}</span>
                <button
                  onClick={() => onShowToast(`Subscribed to ${clip.channel}`)}
                  className="bg-white text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full hover:bg-[#FFE600] transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm leading-snug drop-shadow-md mb-2">
                {clip.title}
              </h3>

              {/* Watch Full Episode Button */}
              <button
                onClick={() => onSelectShow('lovely-runner')}
                className="flex items-center gap-1.5 bg-[#FFE600] text-black font-bold text-xs px-3 py-1.5 rounded-lg mb-3 shadow hover:brightness-105 transition-all cursor-pointer"
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Watch Full &quot;{clip.showTitle}&quot;</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </button>

              {/* Soundtrack */}
              <div className="flex items-center gap-2 text-xs text-[#cccccc]">
                <Music2 className="w-3.5 h-3.5 text-[#FFE600] shrink-0" />
                <span className="truncate">{clip.soundTrack}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Action Rail (YouTube Shorts style) */}
        <div className="flex flex-col gap-4 text-white">
          {/* Like */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleToggleLike(clip.id)}
              className={`p-3 rounded-full transition-colors cursor-pointer ${
                likedMap[clip.id] ? 'bg-[#FFE600] text-black' : 'bg-[#272727] hover:bg-[#383838] text-white'
              }`}
            >
              <ThumbsUp className={`w-5 h-5 ${likedMap[clip.id] ? 'fill-black' : ''}`} />
            </button>
            <span className="text-xs font-semibold mt-1">{clip.likes}</span>
          </div>

          {/* Dislike */}
          <div className="flex flex-col items-center">
            <button 
              className="p-3 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
              aria-label="Dislike"
            >
              <ThumbsDown className="w-5 h-5" />
            </button>
            <span className="text-xs font-medium mt-1">Dislike</span>
          </div>

          {/* Comments */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => onShowToast('Comments open for Shorts')}
              className="p-3 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
              aria-label="Comments"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold mt-1">{clip.commentsCount}</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleShare}
              className="p-3 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <span className="text-xs font-medium mt-1">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
