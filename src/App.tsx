import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CategoryChips } from './components/CategoryChips';
import { FeaturedHero } from './components/FeaturedHero';
import { VideoCard } from './components/VideoCard';
import { WatchView } from './components/WatchView';
import { ShortsView } from './components/ShortsView';
import { PremiumModal } from './components/PremiumModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { VIU_SHOWS } from './data/viuData';
import { ViuShow } from './types/viu';
import { 
  Bookmark, 
  Clock, 
  Sparkles, 
  Film, 
  Trash2, 
  Play, 
  Tv, 
  Compass,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedShowId, setSelectedShowId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // User & Subscription state
  const [user, setUser] = useState<{ name: string; email: string; isPremium: boolean } | null>({
    name: 'Akshita',
    email: 'akshita.k.2025@mm.smu.edu.sg',
    isPremium: true,
  });

  // Watchlist & History state
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(
    new Set(['lovely-runner', 'running-man-2026', 'reborn-rich'])
  );
  
  const [watchHistory, setWatchHistory] = useState<Array<{ showId: string; progress: number }>>([
    { showId: 'lovely-runner', progress: 85 },
    { showId: 'my-genie-secretary', progress: 42 },
    { showId: 'taxi-driver-2', progress: 95 },
  ]);

  // Modals state
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(curr => (curr === msg ? null : curr));
    }, 3000);
  };

  const handleToggleBookmark = (showId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(showId)) {
        next.delete(showId);
        showToast('Removed from Watchlist');
      } else {
        next.add(showId);
        showToast('Added to Watchlist');
      }
      return next;
    });
  };

  const handleSelectShow = (showId: string) => {
    setSelectedShowId(showId);
    // Add to history
    setWatchHistory(prev => {
      const filtered = prev.filter(h => h.showId !== showId);
      return [{ showId, progress: 10 }, ...filtered];
    });
  };

  const handleBackToFeed = () => {
    setSelectedShowId(null);
  };

  const handleSubscribePlan = (plan: string) => {
    setUser(prev => prev ? { ...prev, isPremium: true } : { name: 'VIP Member', email: 'vip@viu.com', isPremium: true });
    setIsPremiumModalOpen(false);
    showToast(`Subscribed to Viu Premium (${plan})! Enjoy 4K & Ad-free`);
  };

  // Filter shows based on category, search, and tab
  const filteredShows = useMemo(() => {
    return VIU_SHOWS.filter(show => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = show.title.toLowerCase().includes(q);
        const matchesGenre = show.genre.some(g => g.toLowerCase().includes(q));
        const matchesCategory = show.category.toLowerCase().includes(q);
        const matchesCast = show.cast.some(c => c.name.toLowerCase().includes(q));
        if (!matchesTitle && !matchesGenre && !matchesCategory && !matchesCast) {
          return false;
        }
      }

      // Tab specific views
      if (activeTab === 'watchlist') {
        return bookmarkedIds.has(show.id);
      }
      if (activeTab === 'originals') {
        return show.category === 'Viu Original';
      }
      if (activeTab === 'history') {
        return watchHistory.some(h => h.showId === show.id);
      }

      // Category chip filter on Home
      if (selectedCategory === 'All') return true;
      if (selectedCategory === 'Korean Dramas') return show.category === 'Korean Drama';
      if (selectedCategory === 'K-Variety') return show.category === 'K-Variety';
      if (selectedCategory === 'Viu Originals') return show.category === 'Viu Original';
      if (selectedCategory === 'Anime') return show.category === 'Anime';
      if (selectedCategory === 'Chinese Dramas') return show.category === 'Chinese Drama';
      if (selectedCategory === 'Simulcast') return show.isSimulcast === true;
      if (selectedCategory === 'Free to Watch') return !show.isPremium;
      if (selectedCategory === 'Top 10 Today') return show.rating >= 9.7;
      if (selectedCategory === 'Romance') return show.genre.includes('Romance');
      if (selectedCategory === 'Action & Thriller') return show.genre.includes('Action') || show.genre.includes('Thriller') || show.genre.includes('Legal Thriller');
      if (selectedCategory === 'Completed') return show.currentEpisode >= show.totalEpisodes;

      return true;
    });
  }, [searchQuery, selectedCategory, activeTab, bookmarkedIds, watchHistory]);

  const activeShow = selectedShowId ? VIU_SHOWS.find(s => s.id === selectedShowId) || VIU_SHOWS[0] : null;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex flex-col antialiased">
      {/* YouTube Top Navigation Bar */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectShow={handleSelectShow}
        onOpenPremium={() => setIsPremiumModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        user={user}
        onLogout={() => {
          setUser(null);
          showToast('Signed out of Viu');
        }}
        onNavigateHome={() => {
          setSelectedShowId(null);
          setActiveTab('home');
          setSelectedCategory('All');
        }}
        onNavigateHistory={() => {
          setSelectedShowId(null);
          setActiveTab('history');
        }}
        onNavigateWatchlist={() => {
          setSelectedShowId(null);
          setActiveTab('watchlist');
        }}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* YouTube Sidebar (hidden when on full WatchView on mobile, or collapsible) */}
        {!selectedShowId && (
          <Sidebar
            isOpen={isSidebarOpen}
            activeTab={activeTab}
            onSelectTab={(tab) => {
              setActiveTab(tab);
              setSelectedShowId(null);
            }}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveTab('home');
              setSelectedShowId(null);
            }}
            onOpenPremium={() => setIsPremiumModalOpen(true)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 overflow-y-auto no-scrollbar">
          {/* Watch View Mode (when user clicks any video card) */}
          {activeShow ? (
            <div>
              {/* Back to Browse Header Button */}
              <div className="px-4 md:px-6 pt-3 pb-1">
                <button
                  onClick={handleBackToFeed}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#aaaaaa] hover:text-[#FFE600] bg-[#1e1e1e] hover:bg-[#282828] px-3 py-1.5 rounded-full border border-[#303030] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Viu Feed</span>
                </button>
              </div>

              <WatchView
                show={activeShow}
                onSelectShow={handleSelectShow}
                isBookmarked={bookmarkedIds.has(activeShow.id)}
                onToggleBookmark={(id) => handleToggleBookmark(id)}
                onOpenPremium={() => setIsPremiumModalOpen(true)}
                onShowToast={showToast}
              />
            </div>
          ) : activeTab === 'shorts' ? (
            /* YouTube Shorts Mode */
            <ShortsView
              onSelectShow={handleSelectShow}
              onShowToast={showToast}
            />
          ) : (
            /* Standard YouTube Grid Feed */
            <div>
              {/* Category Chips Bar */}
              <CategoryChips
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <div className="p-4 sm:p-6 md:p-8 max-w-[1800px] mx-auto">
                {/* Watchlist Tab Header */}
                {activeTab === 'watchlist' && (
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#272727]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/30">
                        <Bookmark className="w-6 h-6" />
                      </div>
                      <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white">My Watchlist</h1>
                        <p className="text-xs text-[#aaaaaa]">{bookmarkedIds.size} saved series</p>
                      </div>
                    </div>
                    {bookmarkedIds.size > 0 && (
                      <button
                        onClick={() => {
                          setBookmarkedIds(new Set());
                          showToast('Cleared watchlist');
                        }}
                        className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Clear All</span>
                      </button>
                    )}
                  </div>
                )}

                {/* History Tab Header */}
                {activeTab === 'history' && (
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#272727]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/30">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white">Watch History</h1>
                        <p className="text-xs text-[#aaaaaa]">Resume watching where you left off</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Featured Hero Banner on Home Page (when viewing 'All' and not searching) */}
                {activeTab === 'home' && selectedCategory === 'All' && !searchQuery.trim() && (
                  <FeaturedHero
                    show={VIU_SHOWS[0]}
                    onPlay={handleSelectShow}
                    isBookmarked={bookmarkedIds.has(VIU_SHOWS[0].id)}
                    onToggleBookmark={(id) => handleToggleBookmark(id)}
                  />
                )}

                {/* Search Result Banner */}
                {searchQuery.trim() && (
                  <div className="mb-4 text-sm text-[#aaaaaa]">
                    Showing search results for &quot;<span className="text-white font-semibold">{searchQuery}</span>&quot; ({filteredShows.length} titles)
                  </div>
                )}

                {/* Main Video Grid */}
                {filteredShows.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
                    {filteredShows.map(show => {
                      const historyItem = watchHistory.find(h => h.showId === show.id);
                      return (
                        <VideoCard
                          key={show.id}
                          show={show}
                          onPlay={handleSelectShow}
                          isBookmarked={bookmarkedIds.has(show.id)}
                          onToggleBookmark={(e, id) => handleToggleBookmark(id, e)}
                          watchedProgress={historyItem?.progress}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-16 max-w-md mx-auto">
                    <div className="w-16 h-16 rounded-full bg-[#222222] text-[#FFE600] flex items-center justify-center mx-auto mb-4 border border-[#333333]">
                      <Tv className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">No shows found</h3>
                    <p className="text-xs sm:text-sm text-[#aaaaaa] mb-4">
                      We couldn&apos;t find anything matching your filter. Try exploring our popular Korean Dramas or resetting filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setSearchQuery('');
                        setActiveTab('home');
                      }}
                      className="px-4 py-2 bg-[#FFE600] text-black font-bold text-xs rounded-xl hover:brightness-105 transition-all cursor-pointer shadow"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Viu Premium VIP Upgrade Modal */}
      <PremiumModal
        isOpen={isPremiumModalOpen}
        onClose={() => setIsPremiumModalOpen(false)}
        onSubscribe={handleSubscribePlan}
      />

      {/* User Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(loggedInUser) => {
          setUser(loggedInUser);
          showToast(`Welcome back, ${loggedInUser.name}!`);
        }}
      />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
