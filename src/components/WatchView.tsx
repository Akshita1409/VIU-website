import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Settings, 
  Subtitles, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  Bookmark, 
  Plus, 
  Check, 
  Cast, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw, 
  SkipForward, 
  SkipBack, 
  Crown,
  Sparkles,
  MessageSquare,
  Clock,
  Tv
} from 'lucide-react';
import { ViuShow, Episode, Comment } from '../types/viu';
import { VIU_SHOWS, INITIAL_COMMENTS } from '../data/viuData';

interface WatchViewProps {
  show: ViuShow;
  onSelectShow: (showId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (showId: string) => void;
  onOpenPremium: () => void;
  onShowToast: (msg: string) => void;
  variant: 'A' | 'B';
}

export const WatchView: React.FC<WatchViewProps> = ({
  show,
  onSelectShow,
  isBookmarked,
  onToggleBookmark,
  onOpenPremium,
  onShowToast,
  variant,
}) => {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [showMindfulBreak, setShowMindfulBreak] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(145); // simulated starting at 2:25
  const [duration, setDuration] = useState(4125); // ~68 minutes
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(true);
  const [selectedSubtitle, setSelectedSubtitle] = useState('English');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [videoQuality, setVideoQuality] = useState('1080p FHD');
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likesCount, setLikesCount] = useState(show.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  
  // Comments state
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');
  const [isCommentInputFocused, setIsCommentInputFocused] = useState(false);

  // Recommendations filter
  const [recFilter, setRecFilter] = useState('All');

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const activeEpisode = show.episodes[currentEpisodeIndex] || show.episodes[0];

  // Video playback sync
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy handle
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeEpisode]);

  // Simulated timer progression
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(t => (t < duration ? t + 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    if (hrs > 0) {
      return `${hrs}:${remainingMins < 10 ? '0' : ''}${remainingMins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return `${remainingMins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      setCurrentTime(percentage * duration);
    }
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    onShowToast(!isSubscribed ? `Subscribed to ${show.channel.name}` : `Unsubscribed from ${show.channel.name}`);
  };

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(prev => prev - 1);
    } else {
      setIsLiked(true);
      if (isDisliked) setIsDisliked(false);
      setLikesCount(prev => prev + 1);
      onShowToast('Added to Liked Videos');
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
    } else {
      setIsDisliked(true);
      if (isLiked) {
        setIsLiked(false);
        setLikesCount(prev => prev - 1);
      }
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onShowToast('Episode link copied to clipboard!');
  };

  const handleDownload = () => {
    onOpenPremium();
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: 'You (Viu Member)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      timestamp: 'Just now',
      content: newCommentText.trim(),
      likes: 0,
      userLiked: false,
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
    setIsCommentInputFocused(false);
    onShowToast('Comment posted successfully');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === commentId) {
        return {
          ...c,
          userLiked: !c.userLiked,
          likes: c.userLiked ? c.likes - 1 : c.likes + 1
        };
      }
      return c;
    }));
  };

  // Filter recommendations
  const relatedShows = VIU_SHOWS.filter(s => s.id !== show.id).filter(s => {
    if (recFilter === 'All') return true;
    if (recFilter === 'From Same Network') return s.channel.id === show.channel.id;
    if (recFilter === 'Korean Drama') return s.category === 'Korean Drama';
    if (recFilter === 'Viu Originals') return s.category === 'Viu Original';
    return true;
  });

  return (
    <div className="max-w-[1720px] mx-auto px-2 sm:px-4 md:px-6 py-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Primary Video Player & Meta (~70%) */}
        <div className="flex-1 min-w-0">
          {/* Video Player Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#272727] select-none group">
            {/* Real HTML5 Video */}
            <video
              ref={videoRef}
              src={show.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
              poster={activeEpisode.thumbnail || show.bannerImage}
              playsInline
              loop
              muted={isMuted}
              onClick={handleTogglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Subtitles Overlay */}
            {isSubtitlesOn && isPlaying && (
              <div className="absolute bottom-16 left-0 right-0 text-center pointer-events-none px-4 z-20">
                <span className="inline-block bg-black/80 backdrop-blur-sm text-yellow-300 font-medium text-sm md:text-base px-3 py-1 rounded-md border border-white/10 shadow-lg">
                  [ {selectedSubtitle} Sub ] &quot;Even if 15 years pass, I will cross time to meet you.&quot;
                </span>
              </div>
            )}

            {/* Top Bar Player Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="flex items-center gap-2">
                <span className="bg-[#FFE600] text-black font-extrabold text-xs px-2 py-0.5 rounded shadow">
                  VIU PLAYER
                </span>
                <span className="text-sm font-semibold text-white drop-shadow truncate max-w-md">
                  {show.title} • {activeEpisode.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded border border-white/20 backdrop-blur-md">
                  {videoQuality}
                </span>
              </div>
            </div>

            {/* Center Big Play Button (when paused) */}
            {!isPlaying && (
              <div 
                onClick={handleTogglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer z-10"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFE600] hover:bg-[#fff04d] text-black flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </div>
              </div>
            )}

            {/* Bottom Controls Bar (YouTube style in Viu Yellow) */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              {/* Scrub / Progress Bar */}
              <div
                ref={progressBarRef}
                onClick={handleSeek}
                className="relative h-1.5 hover:h-2.5 bg-[#444444] rounded-full cursor-pointer mb-2 transition-all group/bar"
              >
                {/* Buffered bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-[#666666] rounded-full" 
                  style={{ width: `${Math.min(100, (currentTime / duration) * 100 + 15)}%` }}
                />
                {/* Played bar (Viu Yellow) */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[#FFE600] rounded-full flex items-center justify-end"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFE600] ring-2 ring-black shadow-md scale-0 group-hover/bar:scale-100 transition-transform -mr-1.5" />
                </div>
              </div>

              {/* Controls Buttons Row */}
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Play / Pause */}
                  <button
                    onClick={handleTogglePlay}
                    className="hover:text-[#FFE600] transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  {/* Previous Episode */}
                  <button
                    disabled={currentEpisodeIndex === 0}
                    onClick={() => setCurrentEpisodeIndex(prev => Math.max(0, prev - 1))}
                    title="Previous Episode"
                    className="disabled:opacity-30 hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    <SkipBack className="w-4 h-4 fill-current" />
                  </button>

                  {/* Next Episode */}
                  <button
                    disabled={currentEpisodeIndex === show.episodes.length - 1}
                    onClick={() => {
                      if (variant === 'B' && currentEpisodeIndex >= 1) {
                        setShowMindfulBreak(true);
                      } else {
                        setCurrentEpisodeIndex(prev => Math.min(show.episodes.length - 1, prev + 1));
                        setCurrentTime(0);
                        if (variant === 'B') {
                          onShowToast('Mindful streaming: Ep 2 started • Session logged');
                        }
                      }
                    }}
                    title="Next Episode"
                    className="disabled:opacity-30 hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    <SkipForward className="w-4 h-4 fill-current" />
                  </button>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-1.5 group/vol">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-[#FFE600] transition-colors cursor-pointer"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        setIsMuted(false);
                      }}
                      className="w-14 sm:w-20 h-1 bg-[#444444] rounded-lg accent-[#FFE600] cursor-pointer"
                    />
                  </div>

                  {/* Time display */}
                  <div className="text-xs text-[#aaaaaa]">
                    <span className="text-white font-medium">{formatTime(currentTime)}</span>
                    <span className="mx-1">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-3 md:gap-4 relative">
                  {/* Subtitles CC Toggle */}
                  <button
                    onClick={() => setIsSubtitlesOn(!isSubtitlesOn)}
                    title={isSubtitlesOn ? `Subtitles: ${selectedSubtitle}` : 'Turn on Subtitles'}
                    className={`transition-colors cursor-pointer relative ${
                      isSubtitlesOn ? 'text-[#FFE600] font-bold' : 'text-[#aaaaaa] hover:text-white'
                    }`}
                  >
                    <Subtitles className="w-5 h-5" />
                    {isSubtitlesOn && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFE600] rounded"></span>
                    )}
                  </button>

                  {/* Settings Gear (Quality, Subtitles, Speed) */}
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    title="Playback Settings"
                    className={`hover:text-[#FFE600] transition-colors cursor-pointer ${
                      isSettingsOpen ? 'text-[#FFE600] rotate-45' : 'text-white'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                  </button>

                  {/* Settings Popup Menu */}
                  {isSettingsOpen && (
                    <div className="absolute bottom-10 right-0 w-60 bg-[#212121] border border-[#383838] rounded-xl shadow-2xl py-2 text-xs z-50">
                      <div className="px-3 py-1 font-bold text-white border-b border-[#303030] flex items-center justify-between">
                        <span>Playback Settings</span>
                        <span className="text-[#FFE600]">Viu HQ</span>
                      </div>

                      {/* Quality */}
                      <div className="p-2 border-b border-[#303030]">
                        <p className="text-[#aaaaaa] mb-1 font-semibold">Quality:</p>
                        <div className="grid grid-cols-2 gap-1">
                          {['1080p FHD', '720p HD', '480p', 'Auto'].map(q => (
                            <button
                              key={q}
                              onClick={() => {
                                setVideoQuality(q);
                                onShowToast(`Quality set to ${q}`);
                              }}
                              className={`px-2 py-1 rounded text-left ${
                                videoQuality === q ? 'bg-[#FFE600] text-black font-bold' : 'bg-[#2b2b2b] text-white hover:bg-[#333333]'
                              }`}
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Subtitles Language */}
                      <div className="p-2 border-b border-[#303030]">
                        <p className="text-[#aaaaaa] mb-1 font-semibold">Subtitles Language:</p>
                        <div className="space-y-1">
                          {['English', 'Bahasa Indonesia', '繁體中文', 'ภาษาไทย'].map(lang => (
                            <button
                              key={lang}
                              onClick={() => {
                                setSelectedSubtitle(lang);
                                setIsSubtitlesOn(true);
                                onShowToast(`Subtitle set to ${lang}`);
                              }}
                              className={`w-full px-2 py-1 rounded text-left flex items-center justify-between ${
                                selectedSubtitle === lang && isSubtitlesOn ? 'text-[#FFE600] font-bold bg-[#2b2b2b]' : 'text-white hover:bg-[#282828]'
                              }`}
                            >
                              <span>{lang}</span>
                              {selectedSubtitle === lang && isSubtitlesOn && <Check className="w-3.5 h-3.5" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Speed */}
                      <div className="p-2">
                        <p className="text-[#aaaaaa] mb-1 font-semibold">Speed:</p>
                        <div className="flex gap-1">
                          {['0.75x', '1x', '1.25x', '1.5x'].map(sp => (
                            <button
                              key={sp}
                              onClick={() => setPlaybackSpeed(sp)}
                              className={`flex-1 py-1 rounded text-center ${
                                playbackSpeed === sp ? 'bg-[#FFE600] text-black font-bold' : 'bg-[#2b2b2b] text-white'
                              }`}
                            >
                              {sp}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cast to TV */}
                  <button
                    onClick={() => onShowToast('Casting to Smart TV...')}
                    title="Cast to Smart TV"
                    className="hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    <Tv className="w-5 h-5" />
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        if (!document.fullscreenElement) {
                          videoRef.current.parentElement?.requestFullscreen();
                        } else {
                          document.exitFullscreen();
                        }
                      }
                    }}
                    title="Fullscreen"
                    className="hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Title & Metadata Header */}
          <div className="mt-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#f1f1f1] leading-tight">
              {show.title}
            </h1>
            <p className="text-sm font-medium text-[#FFE600] mt-1">
              Now Playing: {activeEpisode.title}
            </p>
          </div>

          {/* Channel Row & Action Buttons (YouTube layout) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pb-3 border-b border-[#272727]">
            {/* Channel Avatar & Subscribe */}
            <div className="flex items-center gap-3">
              <img
                src={show.channel.avatar}
                alt={show.channel.name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <div className="flex items-center gap-1 font-bold text-white text-sm">
                  <span>{show.channel.name}</span>
                  {show.channel.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 fill-[#aaaaaa] text-black" />
                  )}
                </div>
                <p className="text-xs text-[#aaaaaa]">{show.channel.subscribers}</p>
              </div>

              <button
                onClick={handleSubscribe}
                className={`ml-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isSubscribed
                    ? 'bg-[#272727] text-white hover:bg-[#333333]'
                    : 'bg-white text-black hover:bg-[#FFE600] shadow'
                }`}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            {/* Action Buttons (Like, Share, Download, Save) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {/* Like / Dislike Combined Pill */}
              <div className="flex items-center bg-[#272727] rounded-full overflow-hidden border border-[#333333]">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold hover:bg-[#383838] transition-colors cursor-pointer ${
                    isLiked ? 'text-[#FFE600]' : 'text-white'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-[#FFE600]' : ''}`} />
                  <span>{(likesCount / 1000).toFixed(1)}K</span>
                </button>
                <div className="w-[1px] h-5 bg-[#3f3f3f]"></div>
                <button
                  onClick={handleDislike}
                  className={`px-3 py-2 hover:bg-[#383838] transition-colors cursor-pointer ${
                    isDisliked ? 'text-red-400' : 'text-white'
                  }`}
                  aria-label="Dislike"
                >
                  <ThumbsDown className={`w-4 h-4 ${isDisliked ? 'fill-red-400' : ''}`} />
                </button>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 bg-[#272727] hover:bg-[#383838] border border-[#333333] px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>

              {/* Download VIP Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 bg-[#272727] hover:bg-[#383838] border border-[#333333] px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#FFE600] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>

              {/* Watchlist Bookmark */}
              <button
                onClick={() => onToggleBookmark(show.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-[#FFE600] text-black border-[#FFE600] font-bold'
                    : 'bg-[#272727] text-white border-[#333333] hover:bg-[#383838]'
                }`}
              >
                {isBookmarked ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>

          {/* YouTube-style Collapsible Description Box */}
          <div className="mt-4 p-3.5 bg-[#212121] hover:bg-[#252525] transition-colors rounded-2xl text-xs sm:text-sm border border-[#2b2b2b]">
            <div className="flex flex-wrap items-center gap-2 font-bold text-white mb-2">
              <span>{show.views}</span>
              <span>•</span>
              <span>{show.publishedTime}</span>
              <span className="text-[#FFE600] font-bold">
                {show.badge || '#1 on Viu Singapore'}
              </span>
            </div>

            {/* Synopsis */}
            <p className={`text-[#cccccc] leading-relaxed whitespace-pre-line ${
              !isDescriptionExpanded ? 'line-clamp-2' : ''
            }`}>
              {show.synopsis}
            </p>

            {isDescriptionExpanded && (
              <div className="mt-4 pt-3 border-t border-[#333333] space-y-2 text-xs">
                <div>
                  <span className="text-[#aaaaaa] font-semibold">Starring: </span>
                  <span className="text-white">{show.cast.map(c => `${c.name} (${c.role})`).join(', ')}</span>
                </div>
                <div>
                  <span className="text-[#aaaaaa] font-semibold">Directed by: </span>
                  <span className="text-white">{show.director}</span>
                </div>
                <div>
                  <span className="text-[#aaaaaa] font-semibold">Audio & Subtitles: </span>
                  <span className="text-white">Original Korean Audio • Subtitles in {show.subtitles.join(', ')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {show.tags.map(t => (
                    <span key={t} className="text-[#3ea6ff] hover:underline cursor-pointer">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-2 text-xs font-bold text-white/90 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>{isDescriptionExpanded ? 'Show less' : '...more'}</span>
              {isDescriptionExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Episodes Playlist Slider (YouTube Episodes Carousel) */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>Episodes</span>
                <span className="text-xs text-[#aaaaaa] bg-[#272727] px-2 py-0.5 rounded-full">
                  Season 1 • {show.episodes.length} Episodes
                </span>
              </h2>
              <span className="text-xs text-[#FFE600] font-semibold">All Episodes in Full HD</span>
            </div>

            {/* Horizontal Episodes Drawer */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {show.episodes.map((ep, idx) => {
                const isCurrent = idx === currentEpisodeIndex;
                return (
                  <div
                    key={ep.id}
                    onClick={() => {
                      setCurrentEpisodeIndex(idx);
                      setCurrentTime(0);
                      setIsPlaying(true);
                      onShowToast(`Playing Episode ${ep.episodeNumber}`);
                    }}
                    className={`relative rounded-xl overflow-hidden bg-[#1e1e1e] border transition-all cursor-pointer group/ep ${
                      isCurrent 
                        ? 'border-[#FFE600] ring-1 ring-[#FFE600] shadow-lg' 
                        : 'border-[#2a2a2a] hover:border-[#444444]'
                    }`}
                  >
                    <div className="relative aspect-video w-full bg-[#151515] overflow-hidden">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover/ep:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/85 text-white text-[10px] px-1 py-0.2 rounded font-medium">
                        {ep.duration}
                      </div>
                      {isCurrent && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded flex items-center gap-1 shadow">
                            <Play className="w-2.5 h-2.5 fill-black" /> PLAYING
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-2">
                      <p className={`text-xs font-semibold line-clamp-1 ${isCurrent ? 'text-[#FFE600]' : 'text-white'}`}>
                        Ep {ep.episodeNumber} • {ep.title}
                      </p>
                      <p className="text-[10px] text-[#aaaaaa] mt-0.5">{ep.releaseDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Comments Section (YouTube style) */}
          <div className="mt-8 pt-4 border-t border-[#272727]">
            <div className="flex items-center gap-6 mb-4">
              <h2 className="font-bold text-base sm:text-lg text-white">
                {comments.length} Comments
              </h2>
              <button className="text-xs text-[#aaaaaa] hover:text-white font-medium flex items-center gap-1 cursor-pointer">
                <span>Sort by</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleAddComment} className="flex gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#FFE600] text-black font-bold flex items-center justify-center shrink-0 text-sm shadow">
                U
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  onFocus={() => setIsCommentInputFocused(true)}
                  placeholder="Add a comment on this episode..."
                  className="w-full bg-transparent border-b border-[#3f3f3f] focus:border-[#FFE600] text-sm text-white placeholder-[#717171] py-1 focus:outline-none transition-colors"
                />
                {isCommentInputFocused && (
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setNewCommentText('');
                        setIsCommentInputFocused(false);
                      }}
                      className="px-3 py-1.5 rounded-full text-xs text-[#aaaaaa] hover:text-white hover:bg-[#272727] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newCommentText.trim()}
                      className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFE600] text-black disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-105 cursor-pointer shadow"
                    >
                      Comment
                    </button>
                  </div>
                )}
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map(c => (
                <div key={c.id} className="flex gap-3 items-start group/c">
                  <img
                    src={c.avatar}
                    alt={c.author}
                    className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5 border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white">{c.author}</span>
                      {c.isAuthor && (
                        <span className="bg-[#FFE600] text-black text-[9px] font-bold px-1.5 rounded">
                          OFFICIAL
                        </span>
                      )}
                      <span className="text-[11px] text-[#717171]">{c.timestamp}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#e0e0e0] mt-1 leading-relaxed">
                      {c.content}
                    </p>

                    {/* Thumbs up/down on comment */}
                    <div className="flex items-center gap-3 mt-2 text-xs text-[#aaaaaa]">
                      <button
                        onClick={() => handleLikeComment(c.id)}
                        className={`flex items-center gap-1 hover:text-white cursor-pointer ${
                          c.userLiked ? 'text-[#FFE600]' : ''
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${c.userLiked ? 'fill-[#FFE600]' : ''}`} />
                        <span>{c.likes > 0 ? c.likes : ''}</span>
                      </button>
                      <button className="hover:text-white cursor-pointer" aria-label="Dislike comment">
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                      <button className="font-semibold hover:text-white cursor-pointer">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Recommendations Rail (~30%) */}
        <div className="w-full lg:w-[380px] shrink-0">
          {/* Autoplay Next Toggle */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#272727]">
            <span className="text-xs font-semibold text-[#aaaaaa] uppercase tracking-wider">
              Up Next
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#aaaaaa]">Autoplay</span>
              <button
                onClick={() => setAutoPlayNext(!autoPlayNext)}
                className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                  autoPlayNext ? 'bg-[#FFE600]' : 'bg-[#333333]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full bg-black absolute top-0.5 transition-transform ${
                  autoPlayNext ? 'right-0.5' : 'left-0.5'
                }`} />
              </button>
            </div>
          </div>

          {/* Filter Pills for Recommendations */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-4 py-1">
            {['All', 'From Same Network', 'Korean Drama', 'Viu Originals'].map(tab => (
              <button
                key={tab}
                onClick={() => setRecFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  recFilter === tab ? 'bg-white text-black font-bold' : 'bg-[#272727] text-white hover:bg-[#333333]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Recommendation Cards (YouTube compact layout) */}
          <div className="space-y-3">
            {relatedShows.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectShow(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex gap-2.5 group cursor-pointer"
              >
                {/* Compact Thumbnail (168px wide) */}
                <div className="relative w-40 sm:w-44 aspect-video rounded-xl overflow-hidden bg-[#212121] shrink-0 border border-[#2a2a2a]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/85 text-white text-[10px] px-1 py-0.2 rounded font-medium">
                    Ep {item.currentEpisode} • {item.episodes[0]?.duration || '64:20'}
                  </div>
                  {item.isPremium && (
                    <div className="absolute top-1 left-1 bg-[#FFE600] text-black font-extrabold text-[9px] px-1 rounded shadow">
                      VIP
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-xs sm:text-sm text-white group-hover:text-[#FFE600] line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#aaaaaa] mt-1">
                    <span className="truncate">{item.channel.name}</span>
                    {item.channel.verified && (
                      <CheckCircle2 className="w-3 h-3 fill-[#aaaaaa] text-black shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#aaaaaa] mt-0.5">
                    {item.views} • {item.publishedTime}
                  </div>
                  <span className="inline-block text-[9px] text-[#FFE600] font-semibold mt-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mindful Streaming Check-In (Variant B Decision Architecture) */}
      {showMindfulBreak && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none">
          <div className="relative w-full max-w-md bg-[#1a1a1a] border border-emerald-500/40 rounded-3xl p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Variant B • Mindful Architecture
            </span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">
              Time for a break?
            </h3>
            <p className="text-xs text-[#cccccc] leading-relaxed mb-5">
              You&apos;ve completed 2 continuous episodes (over 2 hours). Would you like to proceed with the next episode, or bookmark it to resume tomorrow?
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  setShowMindfulBreak(false);
                  onToggleBookmark(show.id);
                  onShowToast('Episode saved to your Watchlist for tomorrow!');
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#2a2a2a] hover:bg-[#333333] border border-white/10 text-white font-semibold text-xs cursor-pointer"
              >
                Save & Rest
              </button>
              <button
                onClick={() => {
                  setShowMindfulBreak(false);
                  setCurrentEpisodeIndex(prev => Math.min(show.episodes.length - 1, prev + 1));
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs cursor-pointer shadow"
              >
                Continue Watching
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
