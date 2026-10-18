import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Mic, 
  Bell, 
  Crown, 
  User, 
  X, 
  Check, 
  Globe, 
  Sparkles, 
  LogOut, 
  Bookmark, 
  History, 
  Tv,
  ChevronRight
} from 'lucide-react';
import { VIU_SHOWS } from '../data/viuData';

interface NavbarProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectShow: (showId: string) => void;
  onOpenPremium: () => void;
  onOpenAuth: () => void;
  user: { name: string; email: string; secondaryEmails?: string[]; isPremium: boolean } | null;
  onLogout: () => void;
  onNavigateHome: () => void;
  onNavigateHistory: () => void;
  onNavigateWatchlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  onSelectShow,
  onOpenPremium,
  onOpenAuth,
  user,
  onLogout,
  onNavigateHome,
  onNavigateHistory,
  onNavigateWatchlist,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchSuggestions = VIU_SHOWS.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 6);

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      onSearchChange('Lovely Runner');
    }, 2000);
  };

  const notifications = [
    {
      id: 'n1',
      title: 'Lovely Runner (선재 업고 튀어)',
      desc: 'Episode 16 [Finale] is now streaming in 1080p FHD with English Subtitles.',
      time: '1h ago',
      unread: true,
      showId: 'lovely-runner',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'n2',
      title: 'Running Man (2026)',
      desc: 'Ep 822 simulcast is live! Rip and Crush Cheorwon race.',
      time: '18h ago',
      unread: true,
      showId: 'running-man-2026',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'n3',
      title: 'My Genie Secretary',
      desc: 'Ep 7 is now available for VIP and Free members.',
      time: '1d ago',
      unread: false,
      showId: 'my-genie-secretary',
      image: 'https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=120'
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-3 md:px-5 h-14 bg-[#0f0f0f] border-b border-[#272727] select-none">
      {/* Left: Hamburger & Viu Brand Logo */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          {/* Authentic Viu Yellow Badge */}
          <div className="relative flex items-center justify-center bg-[#FFE600] text-black font-black px-2.5 py-0.5 rounded-lg text-lg tracking-wider shadow-[0_0_12px_rgba(255,230,0,0.35)] group-hover:brightness-105 transition-all">
            VIU
            <span className="absolute -top-1.5 -right-2 bg-red-600 text-[9px] font-bold text-white px-1 py-0.2 rounded leading-none uppercase">
              SG
            </span>
          </div>
          <span className="hidden sm:inline-block font-bold text-base tracking-tight text-white/90">
            Stream
          </span>
        </button>
      </div>

      {/* Center: YouTube-style Search Bar & Mic */}
      <div 
        ref={searchContainerRef} 
        className="relative flex items-center justify-center flex-1 max-w-xl mx-2 md:mx-6"
      >
        <div className={`flex items-center w-full bg-[#121212] border rounded-full overflow-hidden transition-all duration-200 ${
          isSearchFocused ? 'border-[#3ea6ff] ring-1 ring-[#3ea6ff]/40 shadow-inner' : 'border-[#303030] hover:border-[#404040]'
        }`}>
          {isSearchFocused && (
            <div className="pl-3.5 text-[#aaaaaa]">
              <Search className="w-4 h-4" />
            </div>
          )}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Search Asian dramas, variety shows, actors, anime..."
            className="w-full py-2 px-3.5 text-sm bg-transparent text-white placeholder-[#717171] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="p-1 mr-1 text-[#aaaaaa] hover:text-white rounded-full hover:bg-[#272727]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            className="px-5 py-2.5 bg-[#222222] border-l border-[#303030] hover:bg-[#272727] text-[#f1f1f1] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Microphone Button */}
        <button
          onClick={handleVoiceSearch}
          title="Search with your voice"
          className={`ml-2 p-2.5 rounded-full transition-all cursor-pointer ${
            isListening 
              ? 'bg-red-600 text-white animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.7)]' 
              : 'bg-[#222222] hover:bg-[#272727] text-white'
          }`}
        >
          <Mic className="w-4 h-4" />
        </button>

        {/* Search Suggestions Dropdown */}
        {isSearchFocused && searchQuery.trim().length > 0 && (
          <div className="absolute top-full left-0 right-10 mt-1.5 bg-[#212121] border border-[#383838] rounded-2xl shadow-2xl overflow-hidden z-50">
            <div className="py-2">
              <div className="px-4 py-1 text-[11px] font-semibold text-[#aaaaaa] uppercase tracking-wider">
                Matching Shows & Dramas
              </div>
              {searchSuggestions.length > 0 ? (
                searchSuggestions.map(show => (
                  <button
                    key={show.id}
                    onClick={() => {
                      onSelectShow(show.id);
                      setIsSearchFocused(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#2c2c2c] text-left transition-colors cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5 text-[#aaaaaa] shrink-0" />
                    <img 
                      src={show.thumbnail} 
                      alt="" 
                      className="w-10 h-6 object-cover rounded shrink-0 border border-white/10" 
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{show.title}</p>
                      <p className="text-xs text-[#aaaaaa] truncate">{show.channel.name} • {show.category}</p>
                    </div>
                    {show.isPremium && (
                      <span className="text-[10px] bg-[#FFE600] text-black font-bold px-1.5 py-0.5 rounded">
                        VIP
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-[#aaaaaa]">
                  No titles found for &quot;{searchQuery}&quot;. Try &quot;Running Man&quot; or &quot;Lovely Runner&quot;.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right: Actions, Notifications, User */}
      <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
        {/* Viu Premium Gold Button */}
        <button
          onClick={onOpenPremium}
          className="flex items-center gap-1.5 bg-gradient-to-r from-[#FFE600] to-[#F59E0B] hover:from-[#FFF04D] hover:to-[#FBBF24] text-black font-bold text-xs md:text-sm px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,230,0,0.25)] transition-all transform hover:scale-[1.02] cursor-pointer"
        >
          <Crown className="w-4 h-4 fill-black shrink-0" />
          <span className="hidden sm:inline">Viu Premium</span>
          <span className="sm:hidden">VIP</span>
        </button>

        {/* Notifications Bell */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-full hover:bg-[#272727] text-white relative transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 md:w-96 bg-[#212121] border border-[#383838] rounded-2xl shadow-2xl py-2 z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#303030]">
                <h3 className="font-semibold text-sm text-white">Notifications</h3>
                <span className="text-xs text-[#FFE600] font-medium cursor-pointer hover:underline">
                  Mark all as read
                </span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-[#2a2a2a]">
                {notifications.map(item => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectShow(item.showId);
                      setIsNotificationsOpen(false);
                    }}
                    className={`flex gap-3 p-3 hover:bg-[#282828] cursor-pointer transition-colors ${
                      item.unread ? 'bg-[#272727]/40' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-16 h-10 object-cover rounded-md shrink-0 border border-white/10" 
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                      <p className="text-xs text-[#aaaaaa] line-clamp-2 mt-0.5">{item.desc}</p>
                      <span className="text-[10px] text-[#717171] mt-1 block">{item.time}</span>
                    </div>
                    {item.unread && (
                      <span className="w-2 h-2 rounded-full bg-[#3ea6ff] self-center shrink-0"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Account / Profile */}
        <div ref={userMenuRef} className="relative">
          {user ? (
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#FFE600] transition-all cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#FFE600] text-black font-bold flex items-center justify-center text-sm shadow">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 border border-[#3ea6ff] text-[#3ea6ff] hover:bg-[#3ea6ff]/10 font-medium text-xs md:text-sm px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Sign in</span>
            </button>
          )}

          {/* User Menu Dropdown */}
          {isUserMenuOpen && user && (
            <div className="absolute right-0 mt-2 w-64 bg-[#212121] border border-[#383838] rounded-2xl shadow-2xl py-2 z-50 text-sm">
              <div className="px-4 py-3 border-b border-[#303030]">
                <p className="font-semibold text-white">{user.name}</p>
                <p className="text-xs text-[#aaaaaa] mt-0.5">Primary: {user.email}</p>
                {user.secondaryEmails && user.secondaryEmails.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-[#2e2e2e]">
                    <p className="text-[10px] font-bold text-[#888888] uppercase tracking-wider">
                      Secondary Contact Emails:
                    </p>
                    <div className="text-[11px] text-[#cccccc] space-y-0.5 mt-1 font-mono">
                      {user.secondaryEmails.map(em => (
                        <p key={em} className="truncate select-all hover:text-white">{em}</p>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-2.5 flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    user.isPremium ? 'bg-[#FFE600] text-black' : 'bg-[#333333] text-[#aaaaaa]'
                  }`}>
                    {user.isPremium ? '👑 ViuStream VIP Active' : 'Free Member'}
                  </span>
                </div>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    onNavigateWatchlist();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#282828] text-white cursor-pointer"
                >
                  <Bookmark className="w-4 h-4 text-[#aaaaaa]" />
                  <span>My Watchlist & Bookmarks</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateHistory();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#282828] text-white cursor-pointer"
                >
                  <History className="w-4 h-4 text-[#aaaaaa]" />
                  <span>Watch History</span>
                </button>
                <button
                  onClick={() => {
                    onOpenPremium();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#282828] text-[#FFE600] font-medium cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Crown className="w-4 h-4" />
                    <span>Manage VIP Subscription</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="border-t border-[#303030] py-1">
                <div className="px-4 py-2 text-xs text-[#aaaaaa] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5" /> Subtitle Language
                  </span>
                  <span className="text-white font-medium">{selectedLanguage}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#282828] text-red-400 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
