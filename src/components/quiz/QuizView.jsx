import React, { useState } from 'react';
import { 
  HelpCircle, 
  Check, 
  X, 
  Heart, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_QUIZZES } from '../../data/quizzes';
import { DoodleBrainMascot } from '../illustrations/DoodleIllustrations';

export function QuizView({
  subjectFilter = 'all',
  onExit,
  onAddXp,
  onIncrementStreak
}) {
  const [selectedSubject, setSelectedSubject] = useState(subjectFilter);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isFinished, setIsFinished] = useState(false);

  const filteredQuestions = ALL_QUIZZES.filter((q) => {
    if (selectedSubject !== 'all') return q.subject === selectedSubject;
    return true;
  });

  const currentQ = filteredQuestions[currentIdx] || filteredQuestions[0];

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      if (onAddXp) onAddXp(20);
    } else {
      setLives((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < filteredQuestions.length && lives > 0) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      triggerConfetti();
      setIsFinished(true);
      if (score > 0 && onIncrementStreak) onIncrementStreak();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setLives(3);
    setIsFinished(false);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  // QUIZ RESULT SCREEN
  if (isFinished || lives === 0) {
    const isWin = score >= Math.ceil(filteredQuestions.length / 2) && lives > 0;
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-6">
        <div className="p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
          <DoodleBrainMascot className="w-32 h-32 mx-auto" />

          <span className={`px-3 py-1 rounded-full text-xs font-title font-bold inline-block ${
            isWin ? 'bg-[#78D6A3] text-[#243044]' : 'bg-[#FFE681] text-[#243044]'
          }`}>
            {isWin ? '🏆 NEET Master Rank!' : 'Keep Practicing!'}
          </span>

          <h2 className="font-title text-2xl font-bold text-[#243044]">
            Quiz Completed!
          </h2>

          <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#FFE681] space-y-1">
            <span className="text-xs font-mono text-[#667085] uppercase font-bold">Your Score:</span>
            <div className="font-title text-4xl font-extrabold text-[#243044]">
              {score} / {filteredQuestions.length}
            </div>
            <p className="text-xs font-title font-bold text-[#3DBE75]">
              +{score * 20} XP Earned!
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={handleRestart}
              className="w-full py-3 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white border-2 border-[#243044] font-title text-sm font-bold shadow-sketch active:scale-95 transition-all"
            >
              Try Again 🔄
            </button>
            <button
              onClick={onExit}
              className="w-full py-2.5 rounded-2xl bg-white border border-[#E8E4D9] font-title text-xs font-bold text-[#243044]"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE QUESTION SCREEN
  return (
    <div className="max-w-2xl mx-auto py-6 px-4 space-y-6">
      
      {/* Top Header Controls: Back + Subject Filter + Lives */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] hover:border-[#243044] text-xs font-title font-bold text-[#243044]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Quiz</span>
        </button>

        {/* Lives Counter */}
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((heart) => (
            <Heart
              key={heart}
              className={`w-5 h-5 transition-colors ${
                heart <= lives 
                  ? 'text-[#FF8D78] fill-[#FF8D78]' 
                  : 'text-[#D8D2C2] fill-transparent'
              }`}
            />
          ))}
        </div>

        {/* Question Counter */}
        <span className="text-xs font-mono font-bold text-[#667085]">
          Question {currentIdx + 1} of {filteredQuestions.length}
        </span>
      </div>

      {/* Main Question Card */}
      <div className="rounded-3xl border-2 border-[#243044] bg-[#FFFDF7] p-6 sm:p-8 shadow-sketch space-y-6 relative">
        <div className="washi-tape" />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EDF4FF] border border-[#5B8DEF] font-title text-xs font-bold text-[#5B8DEF] capitalize">
              {currentQ.subject} • {currentQ.topic}
            </span>
            <span className="text-xs font-mono text-[#667085]">
              {currentQ.ncertRef}
            </span>
          </div>

          <h2 className="font-title text-lg sm:text-xl font-bold text-[#243044] leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* 4 Options Grid */}
        <div className="space-y-2.5">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;
            
            let btnClass = 'bg-white border-[#243044]/20 text-[#243044] hover:bg-[#FFE681]/20 hover:border-[#243044]';

            if (isSubmitted) {
              if (isCorrect) {
                btnClass = 'bg-[#EFFBF4] border-2 border-[#3DBE75] text-[#3DBE75] font-bold';
              } else if (isSelected && !isCorrect) {
                btnClass = 'bg-[#FFF0F3] border-2 border-[#FF8D78] text-[#FF8D78] font-bold';
              }
            } else if (isSelected) {
              btnClass = 'bg-[#243044] text-white border-2 border-[#243044] font-bold';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-title transition-all flex items-center justify-between ${btnClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-white/80 border border-current text-xs font-bold flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isSubmitted && isCorrect && (
                  <Check className="w-5 h-5 text-[#3DBE75] shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrect && (
                  <X className="w-5 h-5 text-[#FF8D78] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Banner when answered */}
        {isSubmitted && (
          <div className="p-4 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75] text-xs text-[#243044] font-sans leading-relaxed animate-fade-in space-y-1">
            <span className="font-title font-bold text-[#3DBE75] block">
              💡 Correct Solution & NCERT Explanation:
            </span>
            <p>{currentQ.explanation}</p>
          </div>
        )}

        {/* Bottom Submit / Next Button */}
        <div className="pt-2 border-t border-[#E8E4D9] flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="px-6 py-2.5 rounded-2xl bg-[#243044] text-white font-title text-xs sm:text-sm font-bold shadow-sketch disabled:opacity-40 disabled:pointer-events-none hover:bg-[#344460] transition-all"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white font-title text-xs sm:text-sm font-bold shadow-sketch flex items-center gap-2 active:scale-95 transition-all"
            >
              <span>{currentIdx + 1 < filteredQuestions.length ? 'Next Question' : 'View Results'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
