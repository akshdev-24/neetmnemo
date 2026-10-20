import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Check, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Clock, 
  ArrowLeft,
  BookOpen,
  Shuffle,
  AlertTriangle,
  Edit3,
  BookmarkCheck,
  Brain,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { REVISION_SETS } from '../../data/revisionSets';
import { REVISION_CARDS, REVISION_BY_CHAPTER, getRevisionCards } from '../../data/revisionData';
import { CHAPTERS } from '../../data/chapters';
import { DoodleBrainMascot } from '../illustrations/DoodleIllustrations';

export function RevisionModeView({
  onExit,
  onAddXp,
  onIncrementStreak,
  onMarkLearned
}) {
  // Navigation & filter modes
  // 'sprints' | 'daily' | 'class11' | 'class12' | 'chapter' | 'mistakes' | 'fill-blank' | 'traps'
  const [activeTab, setActiveTab] = useState('sprints');
  const [selectedChapterId, setSelectedChapterId] = useState(CHAPTERS[0].id);
  const [activeSetId, setActiveSetId] = useState(null);
  const [sessionCards, setSessionCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

  // LocalStorage Persistence for Revision Progress
  const [knowItIds, setKnowItIds] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_rev_knowit');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviewAgainIds, setReviewAgainIds] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_rev_review_again');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedSessionsCount, setCompletedSessionsCount] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_rev_sessions_count');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Current session stats
  const [sessionStats, setSessionStats] = useState({ remembered: 0, reviewAgain: 0 });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_rev_knowit', JSON.stringify(knowItIds));
    } catch {}
  }, [knowItIds]);

  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_rev_review_again', JSON.stringify(reviewAgainIds));
    } catch {}
  }, [reviewAgainIds]);

  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_rev_sessions_count', completedSessionsCount.toString());
    } catch {}
  }, [completedSessionsCount]);

  // Start a curated sprint deck
  const handleStartSprint = (setId) => {
    const s = REVISION_SETS.find(item => item.id === setId);
    if (!s) return;
    setActiveSetId(s.id);
    let cards = [];
    if (s.classLevel) {
      cards = getRevisionCards({ classLevel: s.classLevel, limit: s.itemsCount || 15 });
    } else if (s.unitId) {
      cards = REVISION_CARDS.filter(c => c.unitId === s.unitId).slice(0, s.itemsCount || 10);
    } else if (s.type) {
      cards = REVISION_CARDS.filter(c => c.type === s.type).slice(0, s.itemsCount || 10);
    } else {
      cards = getRevisionCards({ mode: 'daily', limit: s.itemsCount || 10 });
    }

    if (cards.length === 0) cards = REVISION_CARDS.slice(0, 10);
    setSessionCards(cards);
    setCurrentIndex(0);
    setIsRevealed(false);
    setIsFinished(false);
    setSessionStats({ remembered: 0, reviewAgain: 0 });
  };

  // Start Chapter-wise revision
  const handleStartChapter = (chId) => {
    const chCards = REVISION_BY_CHAPTER[chId] || [];
    if (chCards.length === 0) return;
    setActiveSetId(`ch-${chId}`);
    setSessionCards(chCards);
    setCurrentIndex(0);
    setIsRevealed(false);
    setIsFinished(false);
    setSessionStats({ remembered: 0, reviewAgain: 0 });
  };

  // Start Category mode (Class 11, Class 12, Mistakes, Daily, etc.)
  const handleStartMode = (modeName) => {
    setActiveSetId(`mode-${modeName}`);
    let cards = [];
    if (modeName === 'class11') {
      cards = getRevisionCards({ classLevel: 11, limit: 20 });
    } else if (modeName === 'class12') {
      cards = getRevisionCards({ classLevel: 12, limit: 20 });
    } else if (modeName === 'mistakes') {
      cards = REVISION_CARDS.filter(c => reviewAgainIds.includes(c.id));
      if (cards.length === 0) {
        cards = REVISION_CARDS.filter(c => c.type === 'trap-alert').slice(0, 10);
      }
    } else if (modeName === 'fill-blank') {
      cards = REVISION_CARDS.filter(c => c.type === 'fill-blank').slice(0, 15);
    } else if (modeName === 'traps') {
      cards = REVISION_CARDS.filter(c => c.type === 'trap-alert').slice(0, 15);
    } else {
      cards = getRevisionCards({ mode: 'daily', limit: 15 });
    }

    setSessionCards(cards);
    setCurrentIndex(0);
    setIsRevealed(false);
    setIsFinished(false);
    setSessionStats({ remembered: 0, reviewAgain: 0 });
  };

  // Toggle shuffle
  const handleToggleShuffle = () => {
    setIsShuffled(prev => !prev);
    setSessionCards(prev => [...prev].sort(() => 0.5 - Math.random()));
    setCurrentIndex(0);
    setIsRevealed(false);
  };

  const currentCard = sessionCards[currentIndex] || sessionCards[0];

  // User remembers concept
  const handleRemember = () => {
    if (onAddXp) onAddXp(15);
    if (currentCard) {
      if (onMarkLearned) onMarkLearned(currentCard.id);
      // Mark as Know It, remove from reviewAgain if present
      setKnowItIds(prev => prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]);
      setReviewAgainIds(prev => prev.filter(id => id !== currentCard.id));
    }
    setSessionStats(prev => ({ ...prev, remembered: prev.remembered + 1 }));

    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex(prev => prev + 1);
      setIsRevealed(false);
    } else {
      triggerConfetti();
      setIsFinished(true);
      setCompletedSessionsCount(prev => prev + 1);
      if (onIncrementStreak) onIncrementStreak();
    }
  };

  // User wants to review again
  const handleReviewAgain = () => {
    if (currentCard) {
      // Add to review again queue, remove from know it
      setReviewAgainIds(prev => prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]);
      setKnowItIds(prev => prev.filter(id => id !== currentCard.id));
    }
    setSessionStats(prev => ({ ...prev, reviewAgain: prev.reviewAgain + 1 }));

    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex(prev => prev + 1);
      setIsRevealed(false);
    } else {
      triggerConfetti();
      setIsFinished(true);
      setCompletedSessionsCount(prev => prev + 1);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  // Active Card Type Badge
  const getCardTypeBadge = (type) => {
    switch (type) {
      case 'fill-blank':
        return { label: 'Fill in the Blank', bg: 'bg-[#F7F0FF]', border: 'border-[#A66CFF]', text: 'text-[#A66CFF]' };
      case 'trap-alert':
        return { label: '⚠️ Trap Alert', bg: 'bg-[#FFF0F3]', border: 'border-[#FF8D78]', text: 'text-[#FF8D78]' };
      case 'flashcard':
        return { label: 'Flashcard Q&A', bg: 'bg-[#EFFBF4]', border: 'border-[#3DBE75]', text: 'text-[#3DBE75]' };
      case 'active-recall':
      default:
        return { label: 'Active Recall', bg: 'bg-[#EDF4FF]', border: 'border-[#5B8DEF]', text: 'text-[#5B8DEF]' };
    }
  };

  // =========================================================================
  // VIEW 1: ACTIVE FLASHCARD / REVISION PLAYER
  // =========================================================================
  if (activeSetId && !isFinished && currentCard) {
    const badge = getCardTypeBadge(currentCard.type);
    const isMastered = knowItIds.includes(currentCard.id);
    const isMistakeQueued = reviewAgainIds.includes(currentCard.id);

    return (
      <div className="max-w-2xl mx-auto py-4 sm:py-6 px-3 sm:px-4 space-y-4 sm:space-y-6">
        
        {/* Top Controls: Exit + Card Counter + Shuffle */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => setActiveSetId(null)}
            className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#E8E4D9] hover:border-[#243044] text-xs font-title font-bold text-[#243044] flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            aria-label="Exit Revision Session"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit</span>
          </button>

          {/* Progress Tracker Bar */}
          <div className="flex-1 min-w-[140px] max-w-xs">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#667085] mb-1">
              <span>Card {currentIndex + 1} of {sessionCards.length}</span>
              <span>{Math.round(((currentIndex + 1) / sessionCards.length) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#E8E4D9] overflow-hidden">
              <div 
                className="h-full bg-[#3DBE75] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Shuffle Button */}
          <button
            onClick={handleToggleShuffle}
            className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl border text-xs font-title font-bold flex items-center gap-1 transition-all ${
              isShuffled ? 'bg-[#243044] text-white border-[#243044]' : 'bg-white text-[#243044] border-[#E8E4D9] hover:border-[#243044]'
            }`}
            title="Shuffle Remaining Cards"
            aria-label="Shuffle Cards"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>

        {/* Main Flashcard Container */}
        <div className="rounded-3xl border-2 border-[#243044] bg-[#FFFDF7] p-5 sm:p-7 shadow-sketch space-y-5 relative min-h-[380px] flex flex-col justify-between">
          <div className="washi-tape" />

          <div className="space-y-4">
            
            {/* Card Metadata Header */}
            <div className="flex items-center justify-between border-b border-[#E8E4D9] pb-3 gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-title font-bold ${badge.bg} ${badge.border} ${badge.text}`}>
                  {badge.label}
                </span>
                <span className="text-xs font-mono font-bold text-[#667085]">
                  Ch {currentCard.chapterNumber} • Class {currentCard.classLevel}
                </span>
              </div>

              {/* Status Badges */}
              <div className="flex items-center gap-1.5">
                {isMastered && (
                  <span className="px-2 py-0.5 rounded-full bg-[#EFFBF4] border border-[#3DBE75] text-[#3DBE75] text-[10px] font-bold font-title flex items-center gap-1">
                    <BookmarkCheck className="w-3 h-3" /> Mastered
                  </span>
                )}
                {isMistakeQueued && (
                  <span className="px-2 py-0.5 rounded-full bg-[#FFF0F3] border border-[#FF8D78] text-[#FF8D78] text-[10px] font-bold font-title flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" /> Review Queue
                  </span>
                )}
              </div>
            </div>

            {/* Chapter & Topic Title */}
            <div>
              <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block font-mono">
                {currentCard.chapterTitle}
              </span>
              <h2 className="font-title text-lg sm:text-xl font-bold text-[#243044] mt-0.5">
                {currentCard.topic}
              </h2>
            </div>

            {/* The Front: Prompt / Fill in Blank / Recall Challenge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9E6] border-2 border-[#243044] space-y-2 text-left">
              <span className="text-[11px] font-mono font-bold text-[#FF8D78] uppercase tracking-wider flex items-center gap-1">
                <Brain className="w-3.5 h-3.5 text-[#FF8D78]" /> Active Recall Challenge
              </span>
              
              <p className="font-title text-base sm:text-lg font-bold text-[#243044] leading-snug">
                {currentCard.prompt}
              </p>

              {/* If Fill-in-the-Blank, display formatted blank text */}
              {currentCard.type === 'fill-blank' && currentCard.blankText && (
                <div className="mt-3 p-3 rounded-xl bg-white/80 border border-[#243044]/20 font-hand text-lg sm:text-xl font-bold text-[#243044]">
                  {currentCard.blankText}
                </div>
              )}

              {/* Mnemonic Hook teaser if available */}
              {currentCard.mnemonic && (
                <div className="mt-2 text-xs font-hand text-[#667085]">
                  💡 Memory Hook: <span className="text-[#243044] font-bold">"{currentCard.mnemonic}"</span>
                </div>
              )}
            </div>

            {/* The Back: Revealable Scientific Answer & Breakdown */}
            {isRevealed ? (
              <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-[#EFFBF4] border-2 border-[#3DBE75] animate-fade-in text-left">
                <span className="font-title text-xs font-bold text-[#3DBE75] flex items-center gap-1.5 uppercase">
                  <Check className="w-4 h-4 stroke-[3]" /> NCERT Verified Answer & Breakdown:
                </span>
                
                <p className="text-xs sm:text-sm text-[#243044] leading-relaxed font-sans font-semibold">
                  {currentCard.answer}
                </p>

                {/* Breakdown List */}
                {currentCard.breakdown && currentCard.breakdown.length > 0 && (
                  <div className="pt-2 border-t border-[#3DBE75]/30 space-y-1.5">
                    {currentCard.breakdown.map((item, i) => (
                      <div key={i} className="text-xs font-mono font-bold text-[#243044] flex items-start gap-1.5">
                        <span className="text-[#3DBE75]">•</span>
                        <span>{item.key}: <span className="font-normal text-[#4A5568]">{item.label}</span></span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Exam Tip & Trap Warning */}
                {currentCard.examTip && (
                  <div className="mt-2 p-2.5 rounded-xl bg-[#FFF5F5] border border-[#FF6B6B]/40 text-[11px] text-[#243044] font-sans flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#FF6B6B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FF6B6B]">Exam Focus / Trap: </strong>
                      {currentCard.examTip}
                    </div>
                  </div>
                )}

                <div className="text-[10px] font-mono text-[#667085] pt-1 text-right">
                  Ref: {currentCard.ncertRef}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsRevealed(true)}
                className="w-full min-h-[48px] py-4 rounded-2xl bg-white border-2 border-dashed border-[#243044]/40 hover:border-[#243044] font-title text-xs sm:text-sm font-bold text-[#243044] flex items-center justify-center gap-2 hover:bg-[#FFE681]/20 active:scale-[0.98] transition-all shadow-sm"
              >
                <Eye className="w-4 h-4 text-[#5B8DEF]" />
                <span>Tap or Press Space to Reveal Answer</span>
              </button>
            )}

          </div>

          {/* Action Controls: Previous Card, "Review Again", "Know It", Next Card */}
          <div className="pt-4 border-t border-[#E8E4D9] space-y-2.5">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleReviewAgain}
                className="min-h-[48px] py-3 rounded-2xl bg-white hover:bg-[#FFF0F3] border-2 border-[#243044] font-title text-xs sm:text-sm font-bold text-[#243044] flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
              >
                <RefreshCw className="w-4 h-4 text-[#FF8D78]" />
                <span>Review Again</span>
              </button>

              <button
                onClick={handleRemember}
                className="min-h-[48px] py-3 rounded-2xl bg-[#78D6A3] hover:bg-[#67c493] text-[#243044] border-2 border-[#243044] font-title text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sketch active:scale-95 transition-all"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Know It! (+15 XP)</span>
              </button>
            </div>

            {/* Sub-controls: Prev Card & Skip Next */}
            <div className="flex items-center justify-between text-xs font-title font-semibold text-[#667085] px-1">
              <button
                onClick={() => {
                  if (currentIndex > 0) {
                    setCurrentIndex(prev => prev - 1);
                    setIsRevealed(false);
                  }
                }}
                disabled={currentIndex === 0}
                className="hover:text-[#243044] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 p-1 min-h-[36px]"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <button
                onClick={() => {
                  if (currentIndex + 1 < sessionCards.length) {
                    setCurrentIndex(prev => prev + 1);
                    setIsRevealed(false);
                  }
                }}
                disabled={currentIndex + 1 >= sessionCards.length}
                className="hover:text-[#243044] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 p-1 min-h-[36px]"
              >
                Skip Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: SESSION FINISHED / COMPLETION SCREEN
  // =========================================================================
  if (isFinished) {
    return (
      <div className="max-w-md mx-auto py-8 sm:py-12 px-4 text-center space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
          <DoodleBrainMascot className="w-28 sm:w-32 h-28 sm:h-32 mx-auto" />
          
          <span className="px-3 py-1 rounded-full bg-[#78D6A3] text-[#243044] font-title text-xs font-bold inline-block">
            🎉 Revision Round Complete!
          </span>

          <h2 className="font-title text-2xl font-bold text-[#243044]">
            High-Yield Active Recall!
          </h2>

          <p className="text-xs text-[#667085] font-sans">
            You reviewed <strong className="text-[#243044]">{sessionCards.length}</strong> NCERT Biology cards.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75] text-center">
              <span className="font-title text-2xl font-bold text-[#3DBE75] block">
                {sessionStats.remembered}
              </span>
              <span className="text-[11px] font-title font-bold text-[#243044]">
                Mastered (Know It)
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-[#FFE681] text-center">
              <span className="font-title text-2xl font-bold text-[#243044] block">
                {sessionStats.reviewAgain}
              </span>
              <span className="text-[11px] font-title font-bold text-[#667085]">
                To Review Again
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setIsRevealed(false);
                setIsFinished(false);
                setSessionStats({ remembered: 0, reviewAgain: 0 });
              }}
              className="w-full min-h-[44px] py-3 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-sm font-bold shadow-sketch active:scale-95 transition-all"
            >
              Restart This Round ⚡
            </button>
            <button
              onClick={() => setActiveSetId(null)}
              className="w-full min-h-[44px] py-2.5 rounded-2xl bg-white border border-[#E8E4D9] font-title text-xs font-bold text-[#243044] hover:border-[#243044]"
            >
              Back to Revision Hub
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: MAIN REVISION HUB (Filter by Sprints, Classes, Chapters, Modes)
  // =========================================================================
  return (
    <div className="max-w-5xl mx-auto py-6 px-3 sm:px-6 space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          onClick={onExit}
          className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm active:scale-95"
          aria-label="Back to Home Desk"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Desk</span>
        </button>

        {/* Global Progress Statistics Counter */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] text-xs font-title font-bold text-[#243044]">
            <BookmarkCheck className="w-4 h-4 text-[#3DBE75]" />
            <span>{knowItIds.length} Mastered</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] text-xs font-title font-bold text-[#243044]">
            <RefreshCw className="w-4 h-4 text-[#FF8D78]" />
            <span>{reviewAgainIds.length} In Review</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch text-center space-y-3">
        <span className="px-3 py-1 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044] inline-flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-[#FF8D78]" /> Daily Active Recall Engine
        </span>
        <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-[#243044]">
          NEET Biology Revision System
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] max-w-xl mx-auto font-sans leading-relaxed">
          Master 100% NCERT Biology through active recall flashcards, fill-in-the-blank drills, tricky exceptions, and chapter-wise recall sprints.
        </p>

        {/* Quick Mode Jump Buttons */}
        <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => handleStartMode('daily')}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-1.5 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" /> Start Daily Sprint
          </button>
          <button
            onClick={() => handleStartMode('class11')}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-[#EFFBF4] text-[#243044] border-1.5 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#3DBE75]" /> Class 11 Deck
          </button>
          <button
            onClick={() => handleStartMode('class12')}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-[#EDF4FF] text-[#243044] border-1.5 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5B8DEF]" /> Class 12 Deck
          </button>
          {reviewAgainIds.length > 0 && (
            <button
              onClick={() => handleStartMode('mistakes')}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-[#FFF0F3] hover:bg-[#ffe2e7] text-[#FF8D78] border-1.5 border-[#FF8D78] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Review Mistakes ({reviewAgainIds.length})
            </button>
          )}
        </div>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#E8E4D9]">
        {[
          { id: 'sprints', label: 'Speed Sprints' },
          { id: 'chapters', label: 'All 32 Chapters' },
          { id: 'traps', label: 'NEET Traps' },
          { id: 'fill-blank', label: 'Fill in Blanks' },
          { id: 'mistakes', label: `Review Queue (${reviewAgainIds.length})` }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`min-h-[44px] px-4 py-2 rounded-xl font-title text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-[#243044] text-white shadow-sketch'
                : 'bg-white border border-[#E8E4D9] text-[#667085] hover:text-[#243044]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: SPRINT DECKS */}
      {activeTab === 'sprints' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVISION_SETS.map(set => (
            <div
              key={set.id}
              onClick={() => handleStartSprint(set.id)}
              className="notebook-card p-5 cursor-pointer hover:border-[#243044] flex flex-col justify-between group transition-all"
              style={{ backgroundColor: set.bg }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#243044] font-title text-[11px] font-bold text-[#243044] flex items-center gap-1 shadow-sm">
                    <Clock className="w-3 h-3 text-[#FF8D78]" />
                    {set.duration}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#667085]">
                    {set.itemsCount} Cards
                  </span>
                </div>

                <h3 className="font-title text-base sm:text-lg font-bold text-[#243044] mb-1 group-hover:text-[#5B8DEF] transition-colors">
                  {set.title}
                </h3>
                <p className="text-xs text-[#667085] font-sans leading-relaxed mb-4">
                  {set.description}
                </p>
              </div>

              <button
                className="w-full min-h-[44px] py-2 rounded-xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] group-hover:bg-[#243044] group-hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-[#FFE681]" />
                <span>Start Sprint</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: CHAPTER-WISE REVISION */}
      {activeTab === 'chapters' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap bg-white p-4 rounded-2xl border border-[#E8E4D9]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#3DBE75]" />
              <span className="font-title text-sm font-bold text-[#243044]">
                Select Biology Chapter for Focused Revision:
              </span>
            </div>

            <select
              value={selectedChapterId}
              onChange={(e) => setSelectedChapterId(e.target.value)}
              className="min-h-[44px] px-3.5 py-2 rounded-xl border-2 border-[#243044] bg-[#FFFDF7] font-title text-xs font-bold text-[#243044] focus:outline-none"
            >
              <optgroup label="Class 11 Biology (Chapters 1–19)">
                {CHAPTERS.filter(c => c.classLevel === 11).map(c => (
                  <option key={c.id} value={c.id}>
                    Ch {c.number}: {c.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Class 12 Biology (Chapters 20–32)">
                {CHAPTERS.filter(c => c.classLevel === 12).map(c => (
                  <option key={c.id} value={c.id}>
                    Ch {c.number}: {c.title}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Chapter Revision Launch Card */}
          {(() => {
            const ch = CHAPTERS.find(c => c.id === selectedChapterId) || CHAPTERS[0];
            const cards = REVISION_BY_CHAPTER[selectedChapterId] || [];
            return (
              <div className="p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-mono font-bold text-[#3DBE75] uppercase">
                    Class {ch.classLevel} Biology • Chapter {ch.number}
                  </span>
                  <h3 className="font-title text-xl font-bold text-[#243044]">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-[#667085] font-sans max-w-lg">
                    {ch.description || 'Active recall flashcards covering all core NCERT topics, examples, scientific names, and high-yield memory hooks.'}
                  </p>
                  <div className="pt-2 text-xs font-mono text-[#667085]">
                    {cards.length} High-Yield Cards Available
                  </div>
                </div>

                <button
                  onClick={() => handleStartChapter(ch.id)}
                  className="min-h-[44px] px-6 py-3 rounded-2xl bg-[#3DBE75] hover:bg-[#2fa362] text-white border-2 border-[#243044] font-title text-xs sm:text-sm font-bold shadow-sketch active:scale-95 transition-all shrink-0 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Start Chapter Revision</span>
                </button>
              </div>
            );
          })()}

          {/* Grid of all 32 Chapter Quick Launch Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {CHAPTERS.map(ch => {
              const count = (REVISION_BY_CHAPTER[ch.id] || []).length;
              return (
                <div
                  key={ch.id}
                  onClick={() => handleStartChapter(ch.id)}
                  className="p-3.5 rounded-2xl bg-white border border-[#E8E4D9] hover:border-[#243044] cursor-pointer transition-all hover:-translate-y-0.5 text-left flex items-center justify-between shadow-sm group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#667085]">
                      Ch {ch.number} (Cl {ch.classLevel}) • {count} Cards
                    </span>
                    <h4 className="font-title text-xs font-bold text-[#243044] group-hover:text-[#3DBE75] transition-colors line-clamp-1">
                      {ch.title}
                    </h4>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#667085] group-hover:text-[#243044] shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: TRAPS & EXCEPTIONS */}
      {activeTab === 'traps' && (
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-[#FFF5F5] border-2 border-[#FF6B6B] shadow-sketch text-left space-y-2">
            <h3 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#FF6B6B]" />
              <span>NEET Traps & Commonly Confused Exceptions</span>
            </h3>
            <p className="text-xs text-[#667085] font-sans">
              Tricky exam questions often exploit common confusions, exceptions, and subtle wording differences. Test your vigilance!
            </p>
            <button
              onClick={() => handleStartMode('traps')}
              className="mt-2 min-h-[44px] px-5 py-2.5 rounded-2xl bg-[#FF6B6B] hover:bg-[#fa5252] text-white border-2 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Start Traps Drill (15 Cards)
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: FILL IN THE BLANKS */}
      {activeTab === 'fill-blank' && (
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-[#F7F0FF] border-2 border-[#A66CFF] shadow-sketch text-left space-y-2">
            <h3 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-[#A66CFF]" />
              <span>Fill-in-the-Blank Keyword Drill</span>
            </h3>
            <p className="text-xs text-[#667085] font-sans">
              Reinforce exact NCERT terminology, scientific names, enzymes, and numbers without guessing.
            </p>
            <button
              onClick={() => handleStartMode('fill-blank')}
              className="mt-2 min-h-[44px] px-5 py-2.5 rounded-2xl bg-[#A66CFF] hover:bg-[#9552f5] text-white border-2 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Start Fill-in-Blanks Drill (15 Cards)
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: MISTAKES & REVIEW QUEUE */}
      {activeTab === 'mistakes' && (
        <div className="space-y-4">
          {reviewAgainIds.length > 0 ? (
            <div className="p-6 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch text-left space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-[#FF8D78]" />
                  <span>Personal Review Queue ({reviewAgainIds.length} Concepts)</span>
                </h3>
              </div>
              <p className="text-xs text-[#667085] font-sans">
                These are concepts you marked "Review Again" during past revision sessions. Practice them until you know them by heart.
              </p>
              <button
                onClick={() => handleStartMode('mistakes')}
                className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-xs font-bold shadow-sketch active:scale-95 transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Review Queue Now
              </button>
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-white border-2 border-dashed border-[#243044]/30 text-center space-y-3">
              <DoodleBrainMascot className="w-24 h-24 mx-auto" />
              <h3 className="font-title text-base font-bold text-[#243044]">
                Your Review Queue is Empty!
              </h3>
              <p className="text-xs text-[#667085] max-w-sm mx-auto font-sans">
                When you click "Review Again" on difficult cards during revision, they will appear here so you can revisit them anytime.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
