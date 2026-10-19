import React from 'react';
import { 
  Home, 
  Film, 
  Sparkles, 
  Clock, 
  Bookmark, 
  ThumbsUp, 
  Download, 
  Tv, 
  Crown, 
  Flame, 
  Compass, 
  Layers, 
  HelpCircle, 
  Settings, 
  Radio, 
  Clapperboard,
  Heart,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { CHANNELS } from '../data/viuData';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onSelectCategory: (category: string) => void;
  onOpenPremium: () => void;
  variant?: 'A' | 'B';
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeTab,
  onSelectTab,
  onSelectCategory,
  onOpenPremium,
  variant = 'B',
}) => {
  const mainItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'billing', label: 'StreamDemo Premium', icon: Crown, badge: 'SG VIP' },
    { id: 'shorts', label: 'Drama Clips', icon: Film, badge: 'New' },
    { id: 'watchlist', label: 'My Watchlist', icon: Bookmark },
    { id: 'originals', label: 'Viu Originals', icon: Sparkles },
  ];

  const libraryItems = [
    { id: 'history', label: 'History', icon: Clock },
    { id: 'liked', label: 'Liked Shows', icon: ThumbsUp },
    { id: 'downloads', label: 'Downloads', icon: Download },
  ];

  const exploreCategories = [
    { name: 'Korean Dramas', icon: Flame },
    { name: 'K-Variety', icon: Radio },
    { name: 'Anime', icon: Clapperboard },
    { name: 'Chinese Dramas', icon: Compass },
    { name: 'Simulcast', icon: TrendingUp },
  ];

  // Collapsed Sidebar (72px) - YouTube style
  if (!isOpen) {
    return (
      <aside className="hidden md:flex flex-col items-center w-[72px] shrink-0 bg-[#0f0f0f] py-3 gap-6 select-none border-r border-[#222222]/40 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto no-scrollbar">
        {mainItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center w-16 py-3 rounded-xl transition-all cursor-pointer ${
                isActive 
                  ? variant === 'B' 
                    ? 'text-white font-bold bg-[#272727]' 
                    : 'text-[#FFE600] font-semibold bg-[#272727]'
                  : 'text-[#aaaaaa] hover:text-white hover:bg-[#222222]'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1.5 ${isActive && variant === 'B' ? 'text-[#FF0000]' : ''}`} />
              <span className="text-[10px] text-center leading-tight tracking-tight line-clamp-1">{item.label}</span>
            </button>
          );
        })}

        <button
          onClick={() => onSelectTab('history')}
          className={`flex flex-col items-center justify-center w-16 py-3 rounded-xl transition-all cursor-pointer ${
            activeTab === 'history' 
              ? variant === 'B'
                ? 'text-white font-bold bg-[#272727]'
                : 'text-[#FFE600] font-semibold bg-[#272727]' 
              : 'text-[#aaaaaa] hover:text-white hover:bg-[#222222]'
          }`}
        >
          <Clock className={`w-5 h-5 mb-1.5 ${activeTab === 'history' && variant === 'B' ? 'text-[#FF0000]' : ''}`} />
          <span className="text-[10px] text-center leading-tight">You</span>
        </button>

        <button
          onClick={onOpenPremium}
          className={`flex flex-col items-center justify-center w-16 py-3 rounded-xl transition-all cursor-pointer mt-auto ${
            variant === 'B'
              ? 'text-white hover:bg-red-500/10'
              : 'text-[#FFE600] hover:bg-[#FFE600]/10'
          }`}
        >
          <Crown className={`w-5 h-5 mb-1.5 ${variant === 'B' ? 'fill-red-500/20 text-[#FF0000]' : 'fill-[#FFE600]/20 text-[#FFE600]'}`} />
          <span className="text-[10px] text-center font-bold">Premium</span>
        </button>
      </aside>
    );
  }

  // Expanded Sidebar (240px)
  return (
    <aside className="w-60 shrink-0 bg-[#0f0f0f] text-sm text-[#f1f1f1] px-3 py-3 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto border-r border-[#222222] select-none">
      {/* Primary Navigation */}
      <div className="space-y-1 pb-3 border-b border-[#272727]">
        {mainItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                isActive 
                  ? variant === 'B'
                    ? 'bg-[#272727] text-white font-bold border-l-3 border-[#FF0000]'
                    : 'bg-[#272727] text-[#FFE600] font-bold' 
                  : 'text-[#f1f1f1] hover:bg-[#222222]'
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon className={`w-5 h-5 ${
                  isActive 
                    ? variant === 'B' ? 'text-[#FF0000]' : 'text-[#FFE600]' 
                    : 'text-white/80'
                }`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full uppercase ${
                  variant === 'B' ? 'bg-[#FF0000] text-white' : 'bg-[#FFE600] text-black'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Library / "You" */}
      <div className="py-3 border-b border-[#272727]">
        <div className="flex items-center justify-between px-3 py-1 mb-1 text-white font-semibold group cursor-pointer">
          <span className="flex items-center gap-1.5">
            You <ChevronRight className="w-4 h-4 text-[#aaaaaa] group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
        <div className="space-y-1">
          {libraryItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center gap-4 px-3 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-[#272727] text-[#FFE600] font-bold' 
                    : 'text-[#f1f1f1] hover:bg-[#222222]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#FFE600]' : 'text-[#aaaaaa]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Networks / Channels (YouTube Subscriptions style) */}
      <div className="py-3 border-b border-[#272727]">
        <div className="px-3 py-1 mb-2 text-xs font-semibold text-[#aaaaaa] uppercase tracking-wider">
          Official Networks
        </div>
        <div className="space-y-1">
          {Object.values(CHANNELS).slice(0, 5).map(channel => (
            <button
              key={channel.id}
              onClick={() => onSelectCategory(channel.name)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-[#222222] transition-colors cursor-pointer group"
            >
              <img 
                src={channel.avatar} 
                alt={channel.name} 
                className="w-6 h-6 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform" 
              />
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm text-[#f1f1f1] group-hover:text-white font-medium">
                  {channel.name}
                </p>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Explore Genres */}
      <div className="py-3 border-b border-[#272727]">
        <div className="px-3 py-1 mb-2 text-xs font-semibold text-[#aaaaaa] uppercase tracking-wider">
          Explore Categories
        </div>
        <div className="space-y-1">
          {exploreCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  onSelectTab('home');
                  onSelectCategory(cat.name);
                }}
                className="w-full flex items-center gap-4 px-3 py-2 rounded-xl text-left hover:bg-[#222222] text-[#f1f1f1] transition-colors cursor-pointer"
              >
                <Icon className="w-5 h-5 text-[#aaaaaa]" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* StreamDemo Premium Banner */}
      <div className="my-3 p-3 rounded-2xl border bg-gradient-to-br from-[#242008] to-[#171717] border-[#FFE600]/30">
        <div className="flex items-center gap-2 font-bold text-xs mb-1 text-[#FFE600]">
          <Crown className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
          <span>StreamDemo Premium VIP</span>
        </div>
        <p className="text-[11px] text-[#cccccc] leading-snug mb-2.5">
          Watch Express simulcasts 4 hours after Korea with 0 ads in 1080p FHD!
        </p>
        <button
          onClick={onOpenPremium}
          className="w-full py-1.5 font-bold text-xs rounded-lg hover:brightness-105 transition-all cursor-pointer shadow-md bg-[#FFE600] text-black"
        >
          StreamDemo Premium
        </button>
      </div>

      {/* Footer Info */}
      <div className="pt-2 px-3 text-[11px] text-[#717171] leading-relaxed">
        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
          <a href="#" className="hover:text-[#aaaaaa]">About Viu</a>
          <a href="#" className="hover:text-[#aaaaaa]">Press</a>
          <a href="#" className="hover:text-[#aaaaaa]">Copyright</a>
          <a href="#" className="hover:text-[#aaaaaa]">Contact</a>
          <a href="#" className="hover:text-[#aaaaaa]">Terms of Use</a>
          <a href="#" className="hover:text-[#aaaaaa]">Privacy Policy</a>
        </div>
        <p>© 2026 Viu International Limited</p>
        <p className="text-[10px] text-[#555555]">A PCCW Media Company</p>
      </div>
    </aside>
  );
};
