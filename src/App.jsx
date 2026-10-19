import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { MobileBottomNav } from './components/navigation/MobileBottomNav';
import { HeroSection } from './components/home/HeroSection';
import { SubjectCardsSection } from './components/home/SubjectCardsSection';
import { MnemonicCard } from './components/mnemonics/MnemonicCard';
import { MnemonicDetailView } from './components/mnemonics/MnemonicDetailView';
import { SubjectView } from './components/subjects/SubjectView';
import { AllSubjectsView } from './components/subjects/AllSubjectsView';
import { ChapterDetailView } from './components/chapters/ChapterDetailView';
import { SearchView } from './components/search/SearchView';
import { FavoritesView } from './components/favorites/FavoritesView';
import { RevisionModeView } from './components/revision/RevisionModeView';
import { QuizView } from './components/quiz/QuizView';
import { ProgressView } from './components/progress/ProgressView';
import { AboutView } from './components/about/AboutView';
import { Class11LandingView } from './components/classes/Class11LandingView';
import { Class12LandingView } from './components/classes/Class12LandingView';
import { SEOHead } from './components/seo/SEOHead';

import { SUBJECTS, BIOLOGY_UNITS } from './data/subjects';
import { CHAPTERS } from './data/chapters';
import { MNEMONICS } from './data/mnemonics';
import { REVISION_SETS } from './data/revisionSets';
import { parsePath, formatUrlForRoute } from './utils/routes';

import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  ShieldCheck,
  Heart,
  Sprout
} from 'lucide-react';
import { DoodleSparkle } from './components/illustrations/DoodleIllustrations';

export default function App() {
  // Navigation State parsed from initial URL
  const initialNav = parsePath(typeof window !== 'undefined' ? window.location.pathname : '/');

  const [currentRoute, setCurrentRoute] = useState(
    initialNav.route || 'home'
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState('biology');
  const [selectedChapterId, setSelectedChapterId] = useState(initialNav.chapterId || null);
  const [selectedMnemonicId, setSelectedMnemonicId] = useState(initialNav.mnemonicId || null);
  const [aboutActiveTab, setAboutActiveTab] = useState(initialNav.tab || 'about');
  const [quizSubjectFilter, setQuizSubjectFilter] = useState('biology');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If initial load targeted a mnemonic or chapter, resolve its chapter
  useEffect(() => {
    if (initialNav.mnemonicId) {
      const mnemo = MNEMONICS.find((m) => m.id === initialNav.mnemonicId);
      if (mnemo) {
        setSelectedChapterId(mnemo.chapterId);
      }
    } else if (initialNav.chapterId) {
      const ch = CHAPTERS.find((c) => c.id === initialNav.chapterId);
      if (ch) {
        setSelectedChapterId(ch.id);
      }
    }
  }, []);

  // Sync state on Browser Back / Forward button (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePath(window.location.pathname);

      setCurrentRoute(parsed.route);
      if (parsed.tab) setAboutActiveTab(parsed.tab);
      if (parsed.chapterId) {
        setSelectedChapterId(parsed.chapterId);
      }
      if (parsed.mnemonicId) {
        setSelectedMnemonicId(parsed.mnemonicId);
        const mnemo = MNEMONICS.find((m) => m.id === parsed.mnemonicId);
        if (mnemo) {
          setSelectedChapterId(mnemo.chapterId);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // LocalStorage Persistence State (NEETMONIC with backward compatibility)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_favorites') || localStorage.getItem('neet_mnemo_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [learnedIds, setLearnedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_learned') || localStorage.getItem('neet_mnemo_learned');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_streak') || localStorage.getItem('neet_mnemo_streak');
      return saved ? parseInt(saved, 10) : 4;
    } catch {
      return 4;
    }
  });

  const [xp, setXp] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_xp') || localStorage.getItem('neet_mnemo_xp');
      return saved ? parseInt(saved, 10) : 280;
    } catch {
      return 280;
    }
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_favorites', JSON.stringify(favorites));
      localStorage.setItem('neet_mnemo_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_learned', JSON.stringify(learnedIds));
      localStorage.setItem('neet_mnemo_learned', JSON.stringify(learnedIds));
    } catch (e) {
      console.warn(e);
    }
  }, [learnedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_streak', streak.toString());
      localStorage.setItem('neetmonic_xp', xp.toString());
      localStorage.setItem('neet_mnemo_streak', streak.toString());
      localStorage.setItem('neet_mnemo_xp', xp.toString());
    } catch (e) {
      console.warn(e);
    }
  }, [streak, xp]);

  // Gamification Handlers
  const handleAddXp = (points) => {
    setXp((prev) => prev + points);
  };

  const handleIncrementStreak = () => {
    setStreak((prev) => prev + 1);
  };

  const handleToggleFavorite = (mnemonicId) => {
    setFavorites((prev) =>
      prev.includes(mnemonicId) ? prev.filter((id) => id !== mnemonicId) : [...prev, mnemonicId]
    );
  };

  const handleMarkLearned = (mnemonicId) => {
    setLearnedIds((prev) => (prev.includes(mnemonicId) ? prev : [...prev, mnemonicId]));
  };

  // Helper to push URL and update state
  const pushRoute = (route, params = {}) => {
    const url = formatUrlForRoute({ route, ...params });
    if (window.location.pathname !== url) {
      window.history.pushState(null, '', url);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation Handlers
  const handleNavigate = (route, params = {}) => {


    if (['subjects', 'biology', 'chapters'].includes(route)) {
      setCurrentRoute('chapters');
      pushRoute('chapters');
      return;
    }

    if (['about', 'privacy', 'terms', 'disclaimer', 'contact'].includes(route)) {
      const tab = ['privacy', 'terms', 'disclaimer', 'contact'].includes(route) ? route : (params.tab || 'about');
      setAboutActiveTab(tab);
      setCurrentRoute('about');
      pushRoute('about', { tab });
      return;
    }

    setCurrentRoute(route);
    pushRoute(route, params);
  };

  const handleSelectChapter = (chapter) => {
    setSelectedChapterId(chapter.id);
    setCurrentRoute('chapter');
    pushRoute('chapter', { chapterId: chapter.id });
  };

  const handleSelectMnemonic = (mnemonic) => {
    setSelectedMnemonicId(mnemonic.id);
    setSelectedChapterId(mnemonic.chapterId);
    setCurrentRoute('mnemonic');
    pushRoute('mnemonic', { mnemonicId: mnemonic.id });
  };

  const handleStartQuiz = (subject = 'biology') => {
    setQuizSubjectFilter('biology');
    setCurrentRoute('quiz');
    pushRoute('quiz');
  };

  // Active items lookup
  const activeSubject = SUBJECTS[0];
  const activeChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];
  const activeMnemonic = MNEMONICS.find((m) => m.id === selectedMnemonicId) || (MNEMONICS.length > 0 ? MNEMONICS[0] : null);

  // Next / Previous for Mnemonic Details
  const currentMnemonicIndex = MNEMONICS.findIndex((m) => m.id === selectedMnemonicId);
  const hasPrevMnemonic = currentMnemonicIndex > 0;
  const hasNextMnemonic = currentMnemonicIndex >= 0 && currentMnemonicIndex < MNEMONICS.length - 1;

  const handlePrevMnemonic = () => {
    if (hasPrevMnemonic) {
      const prevM = MNEMONICS[currentMnemonicIndex - 1];
      handleSelectMnemonic(prevM);
    }
  };

  const handleNextMnemonic = () => {
    if (hasNextMnemonic) {
      const nextM = MNEMONICS[currentMnemonicIndex + 1];
      handleSelectMnemonic(nextM);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#243044] font-sans pb-20 md:pb-8">
      
      {/* Dynamic SEO Metadata & JSON-LD structured data updater */}
      <SEOHead
        route={currentRoute}
        subject={activeSubject}
        chapter={activeChapter}
        mnemonic={activeMnemonic}
        tab={aboutActiveTab}
      />

      {/* Top Main Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        savedCount={favorites.length}
        streak={streak}
        onOpenSearch={() => handleNavigate('search')}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* =========================================================================
            1. HOME PAGE
           ========================================================================= */}
        {currentRoute === 'home' && (
          <div className="space-y-8">
            
            {/* Hero Section */}
            <HeroSection
              onExploreSubjects={() => handleNavigate('chapters')}
              onStartRevision={() => handleNavigate('revision')}
              onNavigateClass11={() => handleNavigate('class-11')}
              onNavigateClass12={() => handleNavigate('class-12')}
            />

            {/* 10 NCERT Biology Units Showcase & 4-Card Hub */}
            <SubjectCardsSection 
              onSelectSubject={() => handleNavigate('chapters')} 
              onSelectUnit={(unitId) => handleNavigate('chapters')}
              onNavigateClass11={() => handleNavigate('class-11')}
              onNavigateClass12={() => handleNavigate('class-12')}
              onExploreChapters={() => handleNavigate('chapters')}
              onStartRevision={() => handleNavigate('revision')}
            />

            {/* Popular Visual Mnemonics Feed */}
            <section className="py-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-title text-2xl font-bold text-[#243044] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FFE681]" />
                    <span>High-Yield NEET Biology Mnemonics</span>
                  </h2>
                  <p className="text-xs text-[#667085] font-sans">
                    Handcrafted visual memory hooks from NCERT Class 11 &amp; 12 textbooks.
                  </p>
                </div>

                <button
                  onClick={() => handleNavigate('search')}
                  className="text-xs font-title font-bold text-[#3DBE75] hover:underline flex items-center gap-1"
                >
                  <span>View All ({MNEMONICS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MNEMONICS.length > 0 ? (
                  MNEMONICS.slice(0, 6).map((mnemo) => (
                    <MnemonicCard
                      key={mnemo.id}
                      mnemonic={mnemo}
                      isFavorite={favorites.includes(mnemo.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onOpenDetail={handleSelectMnemonic}
                    />
                  ))
                ) : (
                  <div className="col-span-full p-8 rounded-3xl bg-white border-2 border-dashed border-[#243044]/30 text-center space-y-2">
                    <p className="font-title text-sm font-bold text-[#243044]">
                      No visual mnemonics currently loaded
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Quick Revision Horizontally Scrollable Sprints Strip */}
            <section className="py-6 p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FF8D78] text-white font-title text-xs font-bold">
                    ⚡ Fast Recall
                  </span>
                  <h3 className="font-title text-xl font-bold text-[#243044]">
                    Quick Biology Revision Sprints
                  </h3>
                </div>

                <button
                  onClick={() => handleNavigate('revision')}
                  className="text-xs font-title font-bold text-[#FF8D78] hover:underline flex items-center gap-1"
                >
                  <span>Explore Sprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {REVISION_SETS.slice(0, 3).map((set) => (
                  <div
                    key={set.id}
                    onClick={() => handleNavigate('revision')}
                    className="p-4 rounded-2xl border-2 border-[#243044] cursor-pointer hover:-translate-y-1 transition-transform flex items-center justify-between shadow-sm"
                    style={{ backgroundColor: set.bg }}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#667085] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF8D78]" /> {set.duration}
                      </span>
                      <h4 className="font-title text-sm font-bold text-[#243044] mt-0.5">
                        {set.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#243044]" />
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* =========================================================================
            2. ALL 32 BIOLOGY CHAPTERS OVERVIEW
           ========================================================================= */}
        {(currentRoute === 'chapters' || currentRoute === 'subjects' || currentRoute === 'biology') && (
          <AllSubjectsView 
            onSelectChapter={handleSelectChapter}
            onSelectUnit={() => {}}
          />
        )}

        {/* =========================================================================
            2A. CLASS 11 BIOLOGY MNEMONICS LANDING PAGE
           ========================================================================= */}
        {currentRoute === 'class-11' && (
          <Class11LandingView
            onSelectChapter={handleSelectChapter}
            onSelectMnemonic={handleSelectMnemonic}
            onNavigate={handleNavigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* =========================================================================
            2B. CLASS 12 BIOLOGY MNEMONICS LANDING PAGE
           ========================================================================= */}
        {currentRoute === 'class-12' && (
          <Class12LandingView
            onSelectChapter={handleSelectChapter}
            onSelectMnemonic={handleSelectMnemonic}
            onNavigate={handleNavigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* =========================================================================
            3. CHAPTER DETAIL PAGE
           ========================================================================= */}
        {currentRoute === 'chapter' && (
          <ChapterDetailView
            chapter={activeChapter}
            onBack={() => handleNavigate('chapters')}
            onSelectMnemonic={handleSelectMnemonic}
            onSelectChapter={handleSelectChapter}
            onNavigateClass={handleNavigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {/* =========================================================================
            4. MNEMONIC DETAIL PAGE
           ========================================================================= */}
        {currentRoute === 'mnemonic' && (
          <MnemonicDetailView
            mnemonic={activeMnemonic}
            onBack={() => handleNavigate('chapters')}
            onPrev={handlePrevMnemonic}
            onNext={handleNextMnemonic}
            hasPrev={hasPrevMnemonic}
            hasNext={hasNextMnemonic}
            isFavorite={activeMnemonic ? favorites.includes(activeMnemonic.id) : false}
            onToggleFavorite={handleToggleFavorite}
            onSelectMnemonic={handleSelectMnemonic}
            onNavigateChapter={(chId) => {
              const ch = CHAPTERS.find((c) => c.id === chId);
              if (ch) handleSelectChapter(ch);
            }}
          />
        )}

        {/* =========================================================================
            5. SEARCH PAGE
           ========================================================================= */}
        {currentRoute === 'search' && (
          <SearchView
            onSelectMnemonic={handleSelectMnemonic}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* =========================================================================
            6. FAVORITES ("My Memory Shelf")
           ========================================================================= */}
        {currentRoute === 'favorites' && (
          <FavoritesView
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectMnemonic={handleSelectMnemonic}
            onStartRevision={() => handleNavigate('revision')}
          />
        )}

        {/* =========================================================================
            7. REVISION SPRINTS
           ========================================================================= */}
        {currentRoute === 'revision' && (
          <RevisionModeView
            onExit={() => handleNavigate('home')}
            onAddXp={handleAddXp}
            onIncrementStreak={handleIncrementStreak}
            onMarkLearned={handleMarkLearned}
          />
        )}

        {/* =========================================================================
            8. INTERACTIVE QUIZ
           ========================================================================= */}
        {currentRoute === 'quiz' && (
          <QuizView
            subjectFilter={quizSubjectFilter}
            onExit={() => handleNavigate('home')}
            onAddXp={handleAddXp}
            onIncrementStreak={handleIncrementStreak}
          />
        )}

        {/* =========================================================================
            9. PROGRESS DASHBOARD
           ========================================================================= */}
        {currentRoute === 'progress' && (
          <ProgressView
            streak={streak}
            xp={xp}
            favorites={favorites}
            learnedIds={learnedIds}
            onStartRevision={() => handleNavigate('revision')}
          />
        )}

        {/* =========================================================================
            10. ABOUT, PRIVACY, TERMS, DISCLAIMER & CONTACT
           ========================================================================= */}
        {currentRoute === 'about' && (
          <AboutView 
            onNavigate={handleNavigate} 
            initialTab={aboutActiveTab}
          />
        )}

      </main>

      {/* Bottom Sticky Navigation on Mobile */}
      <MobileBottomNav
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        savedCount={favorites.length}
      />

      {/* Comprehensive SEO-friendly Footer with internal links */}
      <footer className="mt-16 border-t-2 border-[#E8E4D9] bg-white/80 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            
            {/* Brand Column */}
            <div className="space-y-2 md:col-span-1">
              <div className="flex items-center gap-1.5">
                <span className="font-title text-lg font-bold text-[#243044]">NEET</span>
                <span className="font-title text-lg font-bold text-[#3DBE75]">MONIC</span>
                <DoodleSparkle className="w-4 h-4 text-[#FFE681]" />
              </div>
              <p className="text-xs text-[#667085] font-sans leading-relaxed">
                Handcrafted visual mnemonics, illustrated memory tricks &amp; chapter-wise revision tools strictly mapped to NCERT Class 11 &amp; 12 Biology (Botany &amp; Zoology) by AKSHDEV.
              </p>
            </div>

            {/* Biology Units Column */}
            <div className="space-y-2">
              <h4 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider">
                Biology Mnemonics
              </h4>
              <ul className="space-y-1.5 text-xs font-title font-semibold text-[#667085]">
                <li>
                  <button onClick={() => handleNavigate('class-11')} className="hover:text-[#3DBE75] transition-colors text-left">
                    Class 11 Biology Mnemonics (Units 1–5)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('class-12')} className="hover:text-[#3DBE75] transition-colors text-left">
                    Class 12 Biology Mnemonics (Units 6–10)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('chapters')} className="hover:text-[#243044] transition-colors text-left">
                    All 32 NCERT Biology Chapters →
                  </button>
                </li>
              </ul>
            </div>

            {/* Study Tools Column */}
            <div className="space-y-2">
              <h4 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider">
                Study Tools
              </h4>
              <ul className="space-y-1.5 text-xs font-title font-semibold text-[#667085]">
                <li>
                  <button onClick={() => handleNavigate('revision')} className="hover:text-[#FF8D78] transition-colors">
                    Quick Revision Sprints
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('quiz')} className="hover:text-[#5B8DEF] transition-colors">
                    Interactive Recall Quiz
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('favorites')} className="hover:text-[#243044] transition-colors">
                    My Memory Shelf
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('progress')} className="hover:text-[#243044] transition-colors">
                    Streak &amp; XP Tracker
                  </button>
                </li>
              </ul>
            </div>

            {/* Trust & Legal Column */}
            <div className="space-y-2">
              <h4 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider">
                Trust &amp; Policies
              </h4>
              <ul className="space-y-1.5 text-xs font-title font-semibold text-[#667085]">
                <li>
                  <button onClick={() => handleNavigate('about')} className="hover:text-[#3DBE75] transition-colors">
                    About NEETMONIC
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('privacy')} className="hover:text-[#3DBE75] transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('terms')} className="hover:text-[#3DBE75] transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('disclaimer')} className="hover:text-[#3DBE75] transition-colors">
                    Disclaimer &amp; NCERT Scope
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('contact')} className="hover:text-[#3DBE75] transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-[#E8E4D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#667085]">
            <div>
              © {new Date().getFullYear()} NEETMONIC • Parent Brand AKSHDEV • Visual Learning &amp; Memory Platform for NEET UG Biology
            </div>
            <div className="flex items-center gap-2">
              <span>Zero invented facts • 100% NCERT verified</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
