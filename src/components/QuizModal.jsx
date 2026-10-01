import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Heart, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  X,
  ArrowRight,
  RotateCw,
  Trophy,
  Zap
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function QuizModal({
  questions,
  onClose,
  onAddXp,
  onIncrementStreak
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = questions[currentIndex] || questions[0];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    soundEngine.playClick();
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctIndex;

    if (isCorrect) {
      soundEngine.playCorrect();
      setScore(score + 1);
      onAddXp(20);
    } else {
      soundEngine.playWrong();
      setLives(lives - 1);
    }
  };

  const handleNextQuestion = () => {
    soundEngine.playClick();
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (lives <= 1 && selectedOption !== currentQ.correctIndex) {
      // Game over
      setQuizFinished(true);
      return;
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Completed all questions!
      setQuizFinished(true);
      soundEngine.playStreakFanfare();
      onIncrementStreak();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header: Lives & Progress */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((h) => (
              <Heart
                key={h}
                className={`w-5 h-5 transition-transform ${
                  h <= lives
                    ? 'text-rose-500 fill-rose-500 scale-110'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        {!quizFinished ? (
          <div className="p-6 space-y-6">
            
            {/* Question Card */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider block">
                {currentQ.subject} • {currentQ.pyqTag || 'NCERT Direct'}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';

                if (selectedOption === idx) {
                  btnStyle = 'bg-amber-500 text-white border-amber-600 font-bold shadow-md shadow-amber-500/20';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                  } else if (selectedOption === idx && idx !== currentQ.correctIndex) {
                    btnStyle = 'bg-rose-600 text-white border-rose-700 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border-2 text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center text-xs font-mono font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswerSubmitted && idx === currentQ.correctIndex && (
                      <CheckCircle className="w-5 h-5 text-white" />
                    )}
                    {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Box */}
            {isAnswerSubmitted && (
              <div className={`p-4 rounded-2xl border text-xs space-y-1.5 animate-fadeIn ${
                selectedOption === currentQ.correctIndex
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
              }`}>
                <div className="font-bold font-mono flex items-center gap-1.5 text-sm">
                  {selectedOption === currentQ.correctIndex ? (
                    <>🎉 Excellent! (+20 XP)</>
                  ) : (
                    <>❌ Oops! Watch out for NCERT traps</>
                  )}
                </div>
                <p className="leading-relaxed">
                  {currentQ.explanation}
                </p>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold pt-1">
                  Source: {currentQ.ncertRef}
                </div>
              </div>
            )}

            {/* Submit / Next Button */}
            <div className="pt-2">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Quiz Results Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950 text-amber-500 flex items-center justify-center shadow-xl">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Quiz Drill Completed!
              </h3>
              <p className="text-sm text-slate-500">
                You scored <span className="font-bold text-slate-900 dark:text-white font-mono">{score}</span> out of <span className="font-mono">{questions.length}</span> correct answers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm font-bold flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500 fill-emerald-500" />
              <span>Earned +{score * 20} XP & Continued Daily Streak!</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-lg"
            >
              Back to Study Cards
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
