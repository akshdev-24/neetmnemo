import React, { useState, useEffect } from 'react';
import { 
  X, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Zap,
  Flame,
  Award
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function RevisionModeModal({
  cards,
  onClose,
  onAddXp,
  onIncrementStreak
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  const currentCard = cards[currentIndex] || cards[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Space' || e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipped, cards]);

  if (!cards || cards.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md text-center space-y-4">
          <Zap className="w-12 h-12 text-amber-500 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">No cards available for this filter!</h3>
          <p className="text-sm text-slate-500">Try changing your subject or format filters to start Speed Active Recall.</p>
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-sm">
            Back to Feed
          </button>
        </div>
      </div>
    );
  }

  const handleFlip = () => {
    soundEngine.playFlip();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    soundEngine.playClick();
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Completed deck!
      soundEngine.playStreakFanfare();
    }
  };

  const handlePrev = () => {
    soundEngine.playClick();
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRating = (rating) => {
    if (rating === 'easy') {
      soundEngine.playCorrect();
      setMasteredCount(masteredCount + 1);
      onAddXp(15);
    } else if (rating === 'hard') {
      soundEngine.playClick();
      onAddXp(5);
    } else {
      soundEngine.playWrong();
    }

    if (currentIndex < cards.length - 1) {
      handleNext();
    } else {
      onIncrementStreak();
      soundEngine.playStreakFanfare();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl flex flex-col h-[85vh] justify-between">
        
        {/* Top Header Runner Bar */}
        <div className="flex items-center justify-between text-white pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-base font-sans">Speed Active Recall Mode</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 font-bold">
              {currentIndex + 1} / {cards.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden my-2">
          <div 
            className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>

        {/* 3D Flashcard Stage */}
        <div className="flex-1 flex items-center justify-center py-4">
          <div className={`w-full h-full max-h-[480px] flip-card-container ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner">

              {/* CARD FRONT */}
              <div 
                onClick={handleFlip}
                className="flip-card-front bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between cursor-pointer select-none"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="uppercase font-bold text-amber-500">
                      {currentCard.subject} • Class {currentCard.classLevel}
                    </span>
                    <span>{currentCard.chapterName}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {currentCard.title}
                  </h3>

                  {currentCard.handwrittenNote && (
                    <div className="mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                      <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold uppercase block mb-1">
                        ✍️ Handwritten Memory Hook
                      </span>
                      <p className="font-handwriting text-2xl text-amber-950 dark:text-amber-100">
                        "{currentCard.handwrittenNote}"
                      </p>
                    </div>
                  )}

                  {currentCard.mnemonic && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 font-bold">
                      {currentCard.mnemonic}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <span className="text-xs font-mono text-slate-400 font-semibold flex items-center justify-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 text-amber-500 animate-spin" /> Press [Space] or Tap to Reveal Answer
                  </span>
                </div>
              </div>

              {/* CARD BACK */}
              <div 
                onClick={handleFlip}
                className="flip-card-back bg-slate-900 text-white rounded-3xl p-6 border-2 border-slate-700 shadow-2xl flex flex-col justify-between cursor-pointer select-none"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                    <span>NCERT RECALL ANSWER</span>
                    <span className="text-slate-400">{currentCard.ncertRef}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {currentCard.title}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    {currentCard.content}
                  </p>

                  {currentCard.keyPoints && (
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-slate-400 font-bold">Exam Takeaways:</span>
                      <ul className="text-xs space-y-1 text-slate-200">
                        {currentCard.keyPoints.slice(0, 3).map((kp, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
                  <span>How confident are you? Rate below ⬇</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Confidence Self-Rating Footer Bar */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 rounded-2xl bg-slate-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {isFlipped ? (
            <div className="flex-1 grid grid-cols-3 gap-2">
              <button
                onClick={() => handleRating('again')}
                className="py-3 rounded-2xl bg-rose-500/20 border border-rose-500/50 hover:bg-rose-500/30 text-rose-300 font-bold text-xs flex flex-col items-center justify-center gap-0.5"
              >
                <span>🔴 Need Review</span>
                <span className="text-[10px] text-rose-400">Repeat Soon</span>
              </button>

              <button
                onClick={() => handleRating('hard')}
                className="py-3 rounded-2xl bg-amber-500/20 border border-amber-500/50 hover:bg-amber-500/30 text-amber-300 font-bold text-xs flex flex-col items-center justify-center gap-0.5"
              >
                <span>🟡 Almost Got It</span>
                <span className="text-[10px] text-amber-400">+5 XP</span>
              </button>

              <button
                onClick={() => handleRating('easy')}
                className="py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs flex flex-col items-center justify-center gap-0.5"
              >
                <span>🟢 Got It!</span>
                <span className="text-[10px] text-emerald-400">+15 XP</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleFlip}
              className="flex-1 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip Card [Spacebar]</span>
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="p-3 rounded-2xl bg-slate-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
