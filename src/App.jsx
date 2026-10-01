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
import { SEOHead } from './components/seo/SEOHead';

import { SUBJECTS } from './data/subjects';
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
  Heart
} from 'lucide-react';
import { DoodleSparkle } from './components/illustrations/DoodleIllustrations';

export default function App() {
  // Navigation State parsed from initial URL
  const initialNav = parsePath(typeof window !== 'undefined' ? window.location.pathname : '/');

  const [currentRoute, setCurrentRoute] = useState(initialNav.route || 'home');
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    initialNav.subjectId || 'physics'
  );
  const [selectedChapterId, setSelectedChapterId] = useState(
    initialNav.chapterId || null
  );
  const [selectedMnemonicId, setSelectedMnemonicId] = useState(
    initialNav.mnemonicId || null
  );
  const [quizSubjectFilter, setQuizSubjectFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If initial load targeted a mnemonic or chapter, resolve its subject
  useEffect(() => {
    if (initialNav.mnemonicId) {
      const mnemo = MNEMONICS.find((m) => m.id === initialNav.mnemonicId);
      if (mnemo) {
        setSelectedSubjectId(mnemo.subject);
        setSelectedChapterId(mnemo.chapterId);
      }
    } else if (initialNav.chapterId) {
      const ch = CHAPTERS.find((c) => c.id === initialNav.chapterId);
      if (ch) {
        setSelectedSubjectId(ch.subject);
      }
    }
  }, []);

  // Sync state on Browser Back / Forward button (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePath(window.location.pathname);
      setCurrentRoute(parsed.route);
      if (parsed.subjectId) setSelectedSubjectId(parsed.subjectId);
      if (parsed.chapterId) {
        setSelectedChapterId(parsed.chapterId);
        const ch = CHAPTERS.find((c) => c.id === parsed.chapterId);
        if (ch) setSelectedSubjectId(ch.subject);
      }
      if (parsed.mnemonicId) {
        setSelectedMnemonicId(parsed.mnemonicId);
        const mnemo = MNEMONICS.find((m) => m.id === parsed.mnemonicId);
        if (mnemo) {
          setSelectedSubjectId(mnemo.subject);
          setSelectedChapterId(mnemo.chapterId);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // LocalStorage Persistence State
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_mnemo_favorites');
      return saved ? JSON.parse(saved) : ['mnemo-phy-01', 'mnemo-chem-01', 'mnemo-bio-01'];
    } catch {
      return ['mnemo-phy-01', 'mnemo-chem-01', 'mnemo-bio-01'];
    }
  });

  const [learnedIds, setLearnedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_mnemo_learned');
      return saved ? JSON.parse(saved) : ['mnemo-phy-01'];
    } catch {
      return ['mnemo-phy-01'];
    }
  });

  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_mnemo_streak');
      return saved ? parseInt(saved, 10) : 4;
    } catch {
      return 4;
    }
  });

  const [xp, setXp] = useState(() => {
    try {
      const saved = localStorage.getItem('neet_mnemo_xp');
      return saved ? parseInt(saved, 10) : 280;
    } catch {
      return 280;
    }
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('neet_mnemo_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('neet_mnemo_learned', JSON.stringify(learnedIds));
    } catch (e) {
      console.warn(e);
    }
  }, [learnedIds]);

  useEffect(() => {
    try {
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
  const handleNavigate = (route) => {
    if (['physics', 'chemistry', 'biology'].includes(route)) {
      setSelectedSubjectId(route);
      setCurrentRoute(route);
      pushRoute(route, { subjectId: route });
    } else {
      setCurrentRoute(route);
      pushRoute(route);
    }
  };

  const handleSelectSubject = (subjectId) => {
    setSelectedSubjectId(subjectId);
    setCurrentRoute(subjectId);
    pushRoute(subjectId, { subjectId });
  };

  const handleSelectChapter = (chapter) => {
    setSelectedChapterId(chapter.id);
    setSelectedSubjectId(chapter.subject);
    setCurrentRoute('chapter');
    pushRoute('chapter', { chapterId: chapter.id });
  };

  const handleSelectMnemonic = (mnemonic) => {
    setSelectedMnemonicId(mnemonic.id);
    setSelectedSubjectId(mnemonic.subject);
    setSelectedChapterId(mnemonic.chapterId);
    setCurrentRoute('mnemonic');
    pushRoute('mnemonic', { mnemonicId: mnemonic.id });
  };

  const handleStartQuiz = (subject = 'all') => {
    setQuizSubjectFilter(subject);
    setCurrentRoute('quiz');
    pushRoute('quiz');
  };

  // Active items lookup
  const activeSubject = SUBJECTS.find((s) => s.id === selectedSubjectId) || SUBJECTS[0];
  const activeChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];
  const activeMnemonic = MNEMONICS.find((m) => m.id === selectedMnemonicId) || MNEMONICS[0];

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
              onExploreSubjects={() => handleNavigate('subjects')}
              onStartRevision={() => handleNavigate('revision')}
            />

            {/* Subject Selection (Physics, Chemistry, Biology) */}
            <SubjectCardsSection onSelectSubject={handleSelectSubject} />

            {/* Popular Visual Mnemonics Feed */}
            <section className="py-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-title text-2xl font-bold text-[#243044] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FFE681]" />
                    <span>High-Yield NEET Mnemonics</span>
                  </h2>
                  <p className="text-xs text-[#667085] font-sans">
                    Handcrafted visual memory hooks from NCERT textbooks.
                  </p>
                </div>

                <button
                  onClick={() => handleNavigate('search')}
                  className="text-xs font-title font-bold text-[#5B8DEF] hover:underline flex items-center gap-1"
                >
                  <span>View All ({MNEMONICS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MNEMONICS.slice(0, 6).map((mnemo) => (
                  <MnemonicCard
                    key={mnemo.id}
                    mnemonic={mnemo}
                    isFavorite={favorites.includes(mnemo.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetail={handleSelectMnemonic}
                  />
                ))}
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
                    Quick Revision Sprints
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
            2. ALL SUBJECTS OVERVIEW
           ========================================================================= */}
        {currentRoute === 'subjects' && (
          <AllSubjectsView onSelectSubject={handleSelectSubject} />
        )}

        {/* =========================================================================
            3. DEDICATED SUBJECT PAGE (Physics, Chemistry, Biology)
           ========================================================================= */}
        {['physics', 'chemistry', 'biology'].includes(currentRoute) && (
          <SubjectView
            subject={activeSubject}
            onBack={() => handleNavigate('subjects')}
            onSelectChapter={handleSelectChapter}
            onSelectMnemonic={handleSelectMnemonic}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* =========================================================================
            4. CHAPTER DETAIL PAGE
           ========================================================================= */}
        {currentRoute === 'chapter' && (
          <ChapterDetailView
            chapter={activeChapter}
            onBack={() => handleNavigate(activeChapter.subject)}
            onSelectMnemonic={handleSelectMnemonic}
            onSelectChapter={handleSelectChapter}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {/* =========================================================================
            5. MNEMONIC DETAIL PAGE
           ========================================================================= */}
        {currentRoute === 'mnemonic' && (
          <MnemonicDetailView
            mnemonic={activeMnemonic}
            onBack={() => handleNavigate(activeMnemonic.subject)}
            onPrev={handlePrevMnemonic}
            onNext={handleNextMnemonic}
            hasPrev={hasPrevMnemonic}
            hasNext={hasNextMnemonic}
            isFavorite={favorites.includes(activeMnemonic.id)}
            onToggleFavorite={handleToggleFavorite}
            onSelectMnemonic={handleSelectMnemonic}
            onNavigateChapter={(chId) => {
              const ch = CHAPTERS.find((c) => c.id === chId);
              if (ch) handleSelectChapter(ch);
            }}
          />
        )}

        {/* =========================================================================
            6. SEARCH PAGE
           ========================================================================= */}
        {currentRoute === 'search' && (
          <SearchView
            onSelectMnemonic={handleSelectMnemonic}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* =========================================================================
            7. FAVORITES ("My Memory Shelf")
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
            8. REVISION SPRINTS
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
            9. INTERACTIVE QUIZ
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
            10. PROGRESS DASHBOARD
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
            11. ABOUT & SYLLABUS COMPLIANCE
           ========================================================================= */}
        {currentRoute === 'about' && (
          <AboutView onNavigate={handleNavigate} />
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
                <span className="font-title text-lg font-bold text-[#5B8DEF]">Mnemo</span>
                <DoodleSparkle className="w-4 h-4 text-[#FFE681]" />
              </div>
              <p className="text-xs text-[#667085] font-sans leading-relaxed">
                Visual mnemonics, illustrated memory tricks & formula hooks strictly mapped to NCERT Physics, Chemistry & Biology.
              </p>
            </div>

            {/* Subjects Column */}
            <div className="space-y-2">
              <h4 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider">
                Subjects
              </h4>
              <ul className="space-y-1.5 text-xs font-title font-semibold text-[#667085]">
                <li>
                  <button onClick={() => handleNavigate('biology')} className="hover:text-[#3DBE75] transition-colors">
                    NEET Biology Mnemonics
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('chemistry')} className="hover:text-[#A66CFF] transition-colors">
                    NEET Chemistry Tricks
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('physics')} className="hover:text-[#5B8DEF] transition-colors">
                    NEET Physics Formulas
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('subjects')} className="hover:text-[#243044] transition-colors">
                    All Subjects Overview
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
                    Streak & XP Tracker
                  </button>
                </li>
              </ul>
            </div>

            {/* About & Syllabus Column */}
            <div className="space-y-2">
              <h4 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider">
                About & NCERT
              </h4>
              <ul className="space-y-1.5 text-xs font-title font-semibold text-[#667085]">
                <li>
                  <button onClick={() => handleNavigate('about')} className="hover:text-[#5B8DEF] transition-colors">
                    About NEET Mnemo
                  </button>
                </li>
                <li>
                  <span className="text-[#667085] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3DBE75]" /> 100% NCERT Scope
                  </span>
                </li>
                <li>
                  <span className="text-[#667085]">
                    Class 11 & 12 Syllabus
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-[#E8E4D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#667085]">
            <div>
              © {new Date().getFullYear()} NEET Mnemo • Visual Learning & Memory Platform for NEET UG
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
