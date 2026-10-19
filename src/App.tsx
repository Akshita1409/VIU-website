import React, { useState, useMemo, useEffect } from 'react';
import { StreamDemoPricingPage } from './components/StreamDemoPricingPage';
import { VariantBanner } from './components/VariantBanner';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CategoryChips } from './components/CategoryChips';
import { FeaturedHero } from './components/FeaturedHero';
import { VideoCard } from './components/VideoCard';
import { WatchView } from './components/WatchView';
import { ShortsView } from './components/ShortsView';
import { AuthModal } from './components/AuthModal';
import { ConsentModal } from './components/ConsentModal';
import { DebriefModal } from './components/DebriefModal';
import { AuditDrawer } from './components/AuditDrawer';
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
  ArrowLeft,
  Scale,
  BookOpen,
  Crown
} from 'lucide-react';

export default function App() {
  // Main view defaults to 'pricing' as requested: focus on pricing plans modeled after Viu
  const [currentView, setCurrentView] = useState<'pricing' | 'catalog'>('pricing');
  
  // Variant switcher state driven by ?v=A vs ?v=B (defaults to B for improved architecture)
  const [variant, setVariant] = useState<'A' | 'B'>('B');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedShowId, setSelectedShowId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Research Modals
  const [isConsentOpen, setIsConsentOpen] = useState(false);
  const [isDebriefOpen, setIsDebriefOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  // User & Subscription state
  const [user, setUser] = useState<{ 
    name: string; 
    email: string; 
    secondaryEmails?: string[]; 
    isPremium: boolean 
  } | null>({
    name: 'Akshita Kumar & Team',
    email: 'akshita.k.2025@mm.smu.edu.sg',
    secondaryEmails: [
      'xinyu.lin.2025@mm.smu.edu.sg',
      'vajeehaf.mj.2025@mm.smu.edu.sg',
      'y.vetvitoon.2025@mm.smu.edu.sg'
    ],
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

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync URL query params on load: ?v=A vs ?v=B
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('v');
      if (v === 'A' || v === 'a') {
        setVariant('A');
      } else if (v === 'B' || v === 'b') {
        setVariant('B');
      }

      const view = params.get('view');
      if (view === 'catalog') {
        setCurrentView('catalog');
      }
    }
  }, []);

  const handleSwitchVariant = (newV: 'A' | 'B') => {
    setVariant(newV);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('v', newV);
      window.history.pushState({}, '', url.toString());
    }
    showToast(`Switched to Variant ${newV}: ${newV === 'A' ? 'Status Quo (Sludge)' : 'Ethical Decision Architecture (Nudged)'}`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(curr => (curr === msg ? null : curr));
    }, 3200);
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
    setWatchHistory(prev => {
      const filtered = prev.filter(h => h.showId !== showId);
      return [{ showId, progress: 10 }, ...filtered];
    });
  };

  const handleBackToFeed = () => {
    setSelectedShowId(null);
  };

  const handleSubscribePlan = (planTitle: string, price: string) => {
    setUser(prev => prev ? { ...prev, isPremium: true } : { name: 'VIP Member', email: 'vip@streamdemo.com', isPremium: true });
    showToast(`Started trial for ${planTitle} (${price})!`);
    setTimeout(() => {
      setIsDebriefOpen(true);
    }, 1200);
  };

  // Filter shows based on category, search, and tab
  const filteredShows = useMemo(() => {
    return VIU_SHOWS.filter(show => {
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

      if (activeTab === 'watchlist') return bookmarkedIds.has(show.id);
      if (activeTab === 'originals') return show.category === 'Viu Original';
      if (activeTab === 'history') return watchHistory.some(h => h.showId === show.id);

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
      if (selectedCategory === 'Action & Thriller') return show.genre.includes('Action') || show.genre.includes('Thriller');
      if (selectedCategory === 'Completed') return show.currentEpisode >= show.totalEpisodes;

      return true;
    });
  }, [searchQuery, selectedCategory, activeTab, bookmarkedIds, watchHistory]);

  const activeShow = selectedShowId ? VIU_SHOWS.find(s => s.id === selectedShowId) || VIU_SHOWS[0] : null;

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] flex flex-col antialiased">
      {/* PRIMARY VIEW: StreamDemo Pricing (Baseline Recreating https://www.viu.com/ott/sg/en/premium) */}
      {currentView === 'pricing' ? (
        <StreamDemoPricingPage
          variant={variant}
          onSwitchVariant={handleSwitchVariant}
          onOpenAudit={() => setIsAuditOpen(true)}
          onOpenConsent={() => setIsConsentOpen(true)}
          onOpenDebrief={() => setIsDebriefOpen(true)}
          onPreviewCatalog={() => setCurrentView('catalog')}
          user={user}
          onSubscribe={handleSubscribePlan}
          onShowToast={showToast}
        />
      ) : (
        /* SECONDARY VIEW: Streaming Video Catalog & Mindful Break Player */
        <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex flex-col">
          {/* Top Switcher Banner */}
          <VariantBanner
            variant={variant}
            onSwitchVariant={handleSwitchVariant}
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenConsent={() => setIsConsentOpen(true)}
            onOpenDebrief={() => setIsDebriefOpen(true)}
          />

          {/* Catalog Top Return Bar */}
          <div className="bg-[#1c1c1c] border-b border-[#2e2e2e] px-4 md:px-8 py-2.5 flex items-center justify-between text-xs">
            <button
              onClick={() => setCurrentView('pricing')}
              className="flex items-center gap-2 text-[#FFE600] font-bold hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to StreamDemo Pricing Plans</span>
            </button>
            <span className="text-[#888888]">
              Catalog Preview Mode (Test episode autoplay & mindful pauses)
            </span>
          </div>

          <Navbar
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSelectShow={handleSelectShow}
            onOpenPremium={() => setCurrentView('pricing')}
            onOpenAuth={() => setIsAuthModalOpen(true)}
            user={user}
            onLogout={() => {
              setUser(null);
              showToast('Signed out of StreamDemo');
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
            variant={variant}
          />

          <div className="flex flex-1 overflow-hidden">
            {!selectedShowId && (
              <Sidebar
                isOpen={isSidebarOpen}
                activeTab={activeTab}
                onSelectTab={(tab) => {
                  if (tab === 'billing') {
                    setCurrentView('pricing');
                  } else {
                    setActiveTab(tab);
                    setSelectedShowId(null);
                  }
                }}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setActiveTab('home');
                  setSelectedShowId(null);
                }}
                onOpenPremium={() => setCurrentView('pricing')}
                variant={variant}
              />
            )}

            <main className="flex-1 min-w-0 overflow-y-auto no-scrollbar">
              {activeShow ? (
                <div>
                  <div className="px-4 md:px-6 pt-3 pb-1 flex items-center justify-between">
                    <button
                      onClick={handleBackToFeed}
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#aaaaaa] hover:text-[#FFE600] bg-[#1e1e1e] hover:bg-[#282828] px-3 py-1.5 rounded-full border border-[#303030] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Catalog Grid</span>
                    </button>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#242424] text-[#cccccc] border border-white/10">
                      Variant {variant} Active
                    </span>
                  </div>

                  <WatchView
                    show={activeShow}
                    onSelectShow={handleSelectShow}
                    isBookmarked={bookmarkedIds.has(activeShow.id)}
                    onToggleBookmark={(id) => handleToggleBookmark(id)}
                    onOpenPremium={() => setCurrentView('pricing')}
                    onShowToast={showToast}
                    variant={variant}
                  />
                </div>
              ) : activeTab === 'shorts' ? (
                <ShortsView
                  onSelectShow={handleSelectShow}
                  onShowToast={showToast}
                />
              ) : (
                <div>
                  <CategoryChips
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />

                  <div className="p-4 sm:p-6 md:p-8 max-w-[1800px] mx-auto">
                    {activeTab === 'home' && selectedCategory === 'All' && !searchQuery.trim() && (
                      <FeaturedHero
                        show={VIU_SHOWS[0]}
                        onPlay={handleSelectShow}
                        isBookmarked={bookmarkedIds.has(VIU_SHOWS[0].id)}
                        onToggleBookmark={(id) => handleToggleBookmark(id)}
                      />
                    )}

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
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      )}

      {/* User Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(loggedInUser) => {
          setUser(loggedInUser);
          showToast(`Welcome back, ${loggedInUser.name}!`);
        }}
      />

      {/* Informed Consent Modal */}
      <ConsentModal
        isOpen={isConsentOpen}
        onClose={() => setIsConsentOpen(false)}
        onAgree={() => {
          setIsConsentOpen(false);
          showToast('Consent recorded for academic research');
        }}
      />

      {/* Study Debrief Modal */}
      <DebriefModal
        isOpen={isDebriefOpen}
        onClose={() => setIsDebriefOpen(false)}
        onSwitchVariant={handleSwitchVariant}
        currentVariant={variant}
      />

      {/* Behavioral Audit Inspector Drawer */}
      <AuditDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
