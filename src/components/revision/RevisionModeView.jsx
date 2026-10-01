import React, { useState } from 'react';
import { 
  Zap, 
  RotateCw, 
  Check, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  Flame, 
  Clock, 
  Award,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { REVISION_SETS } from '../../data/revisionSets';
import { MNEMONICS } from '../../data/mnemonics';
import { DoodleBrainMascot, DoodleStar, DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function RevisionModeView({
  onExit,
  onAddXp,
  onIncrementStreak,
  onMarkLearned
}) {
  const [activeSetId, setActiveSetId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionStats, setSessionStats] = useState({ remembered: 0, reviewAgain: 0 });

  const activeSet = REVISION_SETS.find((s) => s.id === activeSetId) || REVISION_SETS[0];

  // Filter cards for the chosen sprint
  const sprintCards = MNEMONICS.filter((m) => {
    if (activeSet.subjectFilter && activeSet.subjectFilter !== 'all') {
      return m.subject === activeSet.subjectFilter;
    }
    return true;
  }).slice(0, activeSet.itemsCount || 6);

  const currentCard = sprintCards[currentIndex] || sprintCards[0];

  const handleStartSet = (setId) => {
    setActiveSetId(setId);
    setCurrentIndex(0);
    setIsRevealed(false);
    setIsFinished(false);
    setSessionStats({ remembered: 0, reviewAgain: 0 });
  };

  const handleRemember = () => {
    if (onAddXp) onAddXp(15);
    if (onMarkLearned && currentCard) onMarkLearned(currentCard.id);
    setSessionStats((prev) => ({ ...prev, remembered: prev.remembered + 1 }));

    if (currentIndex + 1 < sprintCards.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsRevealed(false);
    } else {
      triggerConfetti();
      setIsFinished(true);
      if (onIncrementStreak) onIncrementStreak();
    }
  };

  const handleReviewAgain = () => {
    setSessionStats((prev) => ({ ...prev, reviewAgain: prev.reviewAgain + 1 }));

    if (currentIndex + 1 < sprintCards.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsRevealed(false);
    } else {
      triggerConfetti();
      setIsFinished(true);
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

  // 1. SPRINTS SELECTION SCREEN
  if (!activeSetId) {
    return (
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Desk</span>
          </button>
          
          <span className="text-xs font-title font-bold text-[#667085] flex items-center gap-1">
            <Zap className="w-4 h-4 text-[#FFE681]" /> Active Recall Engine
          </span>
        </div>

        {/* Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch text-center space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
            ⚡ Speed Revision Decks
          </span>
          <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-[#243044]">
            Select Your Revision Sprint
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto font-sans">
            Bite-sized active recall sprints designed for rapid memory reinforcement before NEET.
          </p>
        </div>

        {/* Sprints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVISION_SETS.map((set) => (
            <div
              key={set.id}
              onClick={() => handleStartSet(set.id)}
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

                <h3 className="font-title text-lg font-bold text-[#243044] mb-1 group-hover:text-[#5B8DEF] transition-colors">
                  {set.title}
                </h3>
                <p className="text-xs text-[#667085] font-sans leading-relaxed mb-4">
                  {set.description}
                </p>
              </div>

              <button
                className="w-full py-2 rounded-xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] group-hover:bg-[#243044] group-hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Start Sprint</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    );
  }

  // 2. SPRINT FINISHED SCREEN
  if (isFinished) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-6">
        <div className="p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
          <DoodleBrainMascot className="w-32 h-32 mx-auto" />
          
          <span className="px-3 py-1 rounded-full bg-[#78D6A3] text-[#243044] font-title text-xs font-bold inline-block">
            🎉 Sprint Complete!
          </span>

          <h2 className="font-title text-2xl font-bold text-[#243044]">
            Outstanding Recall!
          </h2>

          <p className="text-xs text-[#667085] font-sans">
            You've successfully completed the <strong className="text-[#243044]">{activeSet.title}</strong> deck.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75] text-center">
              <span className="font-title text-2xl font-bold text-[#3DBE75] block">
                {sessionStats.remembered}
              </span>
              <span className="text-[11px] font-title font-bold text-[#243044]">
                I Remembered
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

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => handleStartSet(activeSetId)}
              className="w-full py-3 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-sm font-bold shadow-sketch active:scale-95 transition-all"
            >
              Restart Sprint ⚡
            </button>
            <button
              onClick={() => setActiveSetId(null)}
              className="w-full py-2.5 rounded-2xl bg-white border border-[#E8E4D9] font-title text-xs font-bold text-[#243044] hover:border-[#243044]"
            >
              Choose Another Sprint
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. ACTIVE FLASHCARD REVISION SCREEN
  return (
    <div className="max-w-2xl mx-auto py-6 px-4 space-y-6">
      
      {/* Top Controls: Back + Progress Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setActiveSetId(null)}
          className="px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] hover:border-[#243044] text-xs font-title font-bold text-[#243044]"
        >
          ✕ Exit
        </button>

        {/* Progress Tracker */}
        <div className="flex-1 max-w-xs">
          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#667085] mb-1">
            <span>Card {currentIndex + 1} of {sprintCards.length}</span>
            <span>{Math.round(((currentIndex + 1) / sprintCards.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#E8E4D9] overflow-hidden">
            <div 
              className="h-full bg-[#5B8DEF] transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / sprintCards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Flashcard */}
      <div className="rounded-3xl border-2 border-[#243044] bg-[#FFFDF7] p-6 sm:p-8 shadow-sketch space-y-6 relative min-h-[360px] flex flex-col justify-between">
        
        <div className="washi-tape" />

        <div className="space-y-4">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-[#E8E4D9] pb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
              💡 {currentCard.title}
            </span>
            <span className="text-xs font-mono font-bold text-[#667085] uppercase">
              {currentCard.subject}
            </span>
          </div>

          {/* Core Memory Hook Banner */}
          <div className="p-5 rounded-2xl bg-[#FFF9E6] border-2 border-[#243044] text-center space-y-2">
            <span className="text-[11px] font-mono font-bold text-[#FF8D78] uppercase tracking-wider block">
              ★ Memory Trick / Mnemonic
            </span>
            <p className="font-hand text-2xl sm:text-3xl font-bold text-[#243044] leading-snug">
              "{currentCard.mnemonic}"
            </p>
            {currentCard.memoryHook && (
              <p className="text-xs font-sans text-[#667085]">
                {currentCard.memoryHook}
              </p>
            )}
          </div>

          {/* Revealable Scientific Core Fact & Breakdown */}
          {isRevealed ? (
            <div className="space-y-3 p-4 rounded-2xl bg-[#EFFBF4] border-2 border-[#3DBE75] animate-fade-in">
              <span className="font-title text-xs font-bold text-[#3DBE75] block uppercase">
                ✓ NCERT Core Fact & Breakdown:
              </span>
              <p className="text-xs sm:text-sm text-[#243044] leading-relaxed font-sans">
                {currentCard.fact}
              </p>
              {currentCard.breakdown && (
                <div className="pt-2 border-t border-[#3DBE75]/30 space-y-1">
                  {currentCard.breakdown.map((b, i) => (
                    <div key={i} className="text-xs font-mono font-bold text-[#243044]">
                      • {b.key}: <span className="font-normal text-[#667085]">{b.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsRevealed(true)}
              className="w-full py-4 rounded-2xl bg-white border-2 border-dashed border-[#243044]/40 hover:border-[#243044] font-title text-xs sm:text-sm font-bold text-[#243044] flex items-center justify-center gap-2 hover:bg-[#FFE681]/20 transition-all"
            >
              <Eye className="w-4 h-4 text-[#5B8DEF]" />
              <span>Tap to Reveal Scientific Explanation & Answers</span>
            </button>
          )}

        </div>

        {/* Action Controls: "Review Again" vs "I Remember" */}
        <div className="pt-4 border-t border-[#E8E4D9] grid grid-cols-2 gap-3">
          <button
            onClick={handleReviewAgain}
            className="py-3 rounded-2xl bg-white hover:bg-[#FFF0F3] border-2 border-[#243044] font-title text-xs sm:text-sm font-bold text-[#243044] flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
          >
            <RefreshCw className="w-4 h-4 text-[#FF8D78]" />
            <span>Review Again</span>
          </button>

          <button
            onClick={handleRemember}
            className="py-3 rounded-2xl bg-[#78D6A3] hover:bg-[#67c493] text-[#243044] border-2 border-[#243044] font-title text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sketch active:scale-95 transition-all"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>I Remember! (+15 XP)</span>
          </button>
        </div>

      </div>

    </div>
  );
}
