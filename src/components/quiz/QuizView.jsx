import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Award, 
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Clock,
  BookOpen,
  BarChart2,
  Play,
  RefreshCw,
  Sliders,
  CheckCircle2,
  XCircle,
  Zap,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  ALL_QUIZZES, 
  CHAPTER_QUIZZES_MAP, 
  getQuestionsForChapter, 
  getQuestionsForClass, 
  getQuestionsByMode 
} from '../../data/quizzes';
import { CHAPTERS } from '../../data/chapters';
import { DoodleBrainMascot, DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function QuizView({
  subjectFilter = 'biology',
  onExit,
  onAddXp,
  onIncrementStreak
}) {
  // Modes: 'config' | 'active' | 'result'
  const [viewState, setViewState] = useState('config');

  // Quiz Configuration State
  const [selectedMode, setSelectedMode] = useState('daily');
  // 'daily' | 'chapter' | 'class11' | 'class12' | 'mixed' | 'quick' | 'weak' | 'mistakes' | 'timed' | 'full'
  const [selectedChapterId, setSelectedChapterId] = useState(CHAPTERS[0].id);
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [isTimed, setIsTimed] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 minutes default
  const [remainingTime, setRemainingTime] = useState(600);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [idx]: optionIndex }
  const [submittedQuestions, setSubmittedQuestions] = useState({}); // { [idx]: true }
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Persistent Statistics & Mistake Bank in LocalStorage
  const [mistakeQuestionIds, setMistakeQuestionIds] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_quiz_mistakes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizStats, setQuizStats] = useState(() => {
    try {
      const saved = localStorage.getItem('neetmonic_quiz_stats');
      return saved ? JSON.parse(saved) : {
        totalAttempted: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        quizzesCompleted: 0
      };
    } catch {
      return { totalAttempted: 0, totalCorrect: 0, totalIncorrect: 0, quizzesCompleted: 0 };
    }
  });

  // Sync mistakes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_quiz_mistakes', JSON.stringify(mistakeQuestionIds));
    } catch {}
  }, [mistakeQuestionIds]);

  // Sync stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetmonic_quiz_stats', JSON.stringify(quizStats));
    } catch {}
  }, [quizStats]);

  // Timer Tick
  useEffect(() => {
    if (viewState !== 'active' || !isTimed || isTimerPaused) return;

    if (remainingTime <= 0) {
      handleFinishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [viewState, isTimed, isTimerPaused, remainingTime]);

  // Start Session
  const handleStartQuiz = (modeOverride = null) => {
    const mode = modeOverride || selectedMode;
    let questions = [];

    if (mode === 'chapter') {
      const chQuestions = getQuestionsForChapter(selectedChapterId);
      questions = [...chQuestions].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    } else if (mode === 'class11') {
      const c11 = getQuestionsForClass(11);
      questions = [...c11].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    } else if (mode === 'class12') {
      const c12 = getQuestionsForClass(12);
      questions = [...c12].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    } else if (mode === 'mistakes') {
      const mistakeList = ALL_QUIZZES.filter(q => mistakeQuestionIds.includes(q.id));
      questions = mistakeList.length > 0 
        ? [...mistakeList].sort(() => 0.5 - Math.random()).slice(0, questionCount)
        : ALL_QUIZZES.slice(0, questionCount);
    } else if (mode === 'quick') {
      questions = [...ALL_QUIZZES].sort(() => 0.5 - Math.random()).slice(0, 5);
    } else if (mode === 'full') {
      questions = [...ALL_QUIZZES].sort(() => 0.5 - Math.random()).slice(0, 30);
    } else {
      questions = getQuestionsByMode({
        mode,
        count: questionCount,
        difficulty: selectedDifficulty,
        mistakeIds: mistakeQuestionIds
      });
    }

    if (questions.length === 0) {
      questions = ALL_QUIZZES.slice(0, 10);
    }

    setActiveQuestions(questions);
    setCurrentIdx(0);
    setUserAnswers({});
    setSubmittedQuestions({});
    setRemainingTime(questions.length * 60); // 1 minute per question
    setIsTimerPaused(false);
    setShowExitConfirm(false);
    setViewState('active');
  };

  // Option Selection
  const handleSelectOption = (idx) => {
    // If question is already submitted, cannot change
    if (submittedQuestions[currentIdx]) return;
    setUserAnswers(prev => ({ ...prev, [currentIdx]: idx }));
  };

  // Submit Active Question for Feedback
  const handleSubmitActiveQuestion = () => {
    const selected = userAnswers[currentIdx];
    if (selected === undefined) return;

    setSubmittedQuestions(prev => ({ ...prev, [currentIdx]: true }));

    const currentQ = activeQuestions[currentIdx];
    const isCorrect = selected === currentQ.correctIndex;

    // Track statistics and mistakes
    if (isCorrect) {
      if (onAddXp) onAddXp(20);
      setMistakeQuestionIds(prev => prev.filter(id => id !== currentQ.id));
      setQuizStats(prev => ({
        ...prev,
        totalAttempted: prev.totalAttempted + 1,
        totalCorrect: prev.totalCorrect + 1
      }));
    } else {
      setMistakeQuestionIds(prev => prev.includes(currentQ.id) ? prev : [...prev, currentQ.id]);
      setQuizStats(prev => ({
        ...prev,
        totalAttempted: prev.totalAttempted + 1,
        totalIncorrect: prev.totalIncorrect + 1
      }));
    }
  };

  // Move to next question or finish
  const handleNext = () => {
    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  // Move to previous question
  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  // Finish quiz and show results
  const handleFinishQuiz = () => {
    // Submit all remaining answered questions
    const finalSubmitted = { ...submittedQuestions };
    let correctCount = 0;
    let incorrectCount = 0;

    activeQuestions.forEach((q, i) => {
      finalSubmitted[i] = true;
      const ans = userAnswers[i];
      if (ans !== undefined) {
        if (ans === q.correctIndex) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    setSubmittedQuestions(finalSubmitted);
    setQuizStats(prev => ({
      ...prev,
      quizzesCompleted: prev.quizzesCompleted + 1
    }));

    if (correctCount > 0 && onIncrementStreak) {
      onIncrementStreak();
    }

    triggerConfetti();
    setViewState('result');
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

  // Current Question
  const currentQ = activeQuestions[currentIdx] || activeQuestions[0];
  const isCurrentSubmitted = submittedQuestions[currentIdx] || false;
  const currentSelectedOption = userAnswers[currentIdx];

  // Calculated Results
  const resultStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    activeQuestions.forEach((q, i) => {
      const ans = userAnswers[i];
      if (ans === undefined) {
        unanswered++;
      } else if (ans === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = activeQuestions.length || 1;
    const accuracy = Math.round((correct / total) * 100);

    return { correct, incorrect, unanswered, accuracy, total };
  }, [activeQuestions, userAnswers]);

  // Format Timer
  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // =========================================================================
  // VIEW 1: QUIZ LAUNCH & CONFIGURATION HUB
  // =========================================================================
  if (viewState === 'config') {
    return (
      <div className="max-w-4xl mx-auto py-6 px-3 sm:px-6 space-y-6">
        
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

          {/* Stats Badges */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] text-xs font-title font-bold text-[#243044]">
              <Target className="w-4 h-4 text-[#5B8DEF]" />
              <span>{quizStats.totalAttempted} Attempted</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E4D9] text-xs font-title font-bold text-[#3DBE75]">
              <CheckCircle2 className="w-4 h-4 text-[#3DBE75]" />
              <span>{quizStats.totalAttempted > 0 ? Math.round((quizStats.totalCorrect / quizStats.totalAttempted) * 100) : 0}% Accuracy</span>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sketch text-center space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#5B8DEF] text-white font-title text-xs font-bold inline-flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> 1,600+ NCERT Biology Practice Questions
          </span>
          <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-[#243044]">
            Interactive NEET Biology Practice
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] max-w-xl mx-auto font-sans leading-relaxed">
            Practice topic-wise MCQs, assertion-reason statements, match the following, and high-yield memory hook questions across all 32 chapters.
          </p>

          {/* Quick Start Buttons */}
          <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => handleStartQuiz('daily')}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#5B8DEF] hover:bg-[#4377db] text-white border-1.5 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" /> Daily Practice (10 Qs)
            </button>
            <button
              onClick={() => handleStartQuiz('quick')}
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFFDF7] text-[#243044] border-1.5 border-[#243044] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Clock className="w-3.5 h-3.5 text-[#FF8D78]" /> Quick 5-Q Mobile Drill
            </button>
            {mistakeQuestionIds.length > 0 && (
              <button
                onClick={() => handleStartQuiz('mistakes')}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FFF0F3] hover:bg-[#ffe2e7] text-[#FF8D78] border-1.5 border-[#FF8D78] font-title text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retry Mistakes ({mistakeQuestionIds.length})
              </button>
            )}
          </div>
        </div>

        {/* Practice Mode Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#5B8DEF]" />
              <span>Choose Practice Mode</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'daily', title: 'Daily Practice', desc: '10 fresh questions rotating daily from High-Yield NCERT.', icon: Zap, bg: '#EFFBF4' },
              { id: 'chapter', title: 'Chapter Quiz', desc: 'Pick any of the 32 Biology chapters with 50 questions each.', icon: BookOpen, bg: '#FFF9E6' },
              { id: 'class11', title: 'Class 11 Biology', desc: 'Units 1–5: Diversity, Structural, Cell, Plant & Human Physio.', icon: Sparkles, bg: '#EDF4FF' },
              { id: 'class12', title: 'Class 12 Biology', desc: 'Units 6–10: Reproduction, Genetics, Biotech & Ecology.', icon: Award, bg: '#F7F0FF' },
              { id: 'mixed', title: 'Mixed Biology Quiz', desc: 'Full-syllabus randomised simulation from both classes.', icon: Target, bg: '#FFF0ED' },
              { id: 'mistakes', title: 'Mistake Practice', desc: `Revisit ${mistakeQuestionIds.length} questions previously answered incorrectly.`, icon: RefreshCw, bg: '#FFF5F5' },
              { id: 'quick', title: 'Quick Sprint', desc: '5 rapid high-yield questions for quick on-the-go review.', icon: Clock, bg: '#FFFBE6' },
              { id: 'full', title: 'Full Practice Session', desc: '30 comprehensive questions with timed exam simulation.', icon: BarChart2, bg: '#F0F9FF' },
            ].map((m) => {
              const Icon = m.icon;
              const isSelected = selectedMode === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMode(m.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected 
                      ? 'border-[#243044] shadow-sketch translate-y-[-2px]' 
                      : 'border-[#E8E4D9] hover:border-[#243044] bg-white'
                  }`}
                  style={{ backgroundColor: isSelected ? m.bg : '#FFFFFF' }}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-title text-sm font-bold text-[#243044] flex items-center gap-1.5">
                        <Icon className="w-4 h-4 text-[#243044]" />
                        {m.title}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#3DBE75]" />
                      )}
                    </div>
                    <p className="text-xs text-[#667085] font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chapter Selector Dropdown (Shown when Chapter Quiz is active) */}
          {selectedMode === 'chapter' && (
            <div className="p-4 rounded-2xl bg-white border-2 border-[#243044] shadow-sm space-y-2 text-left">
              <label className="text-xs font-title font-bold text-[#243044] block">
                Select NCERT Chapter (50 Questions each):
              </label>
              <select
                value={selectedChapterId}
                onChange={(e) => setSelectedChapterId(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-[#243044] bg-[#FFFDF7] font-title text-xs font-bold text-[#243044] focus:outline-none"
              >
                <optgroup label="Class 11 Biology (19 Chapters)">
                  {CHAPTERS.filter(c => c.classLevel === 11).map(c => (
                    <option key={c.id} value={c.id}>
                      Ch {c.number}: {c.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Class 12 Biology (13 Chapters)">
                  {CHAPTERS.filter(c => c.classLevel === 12).map(c => (
                    <option key={c.id} value={c.id}>
                      Ch {c.number}: {c.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          )}

          {/* Secondary Controls: Question Count + Difficulty + Timer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#E8E4D9]">
            {/* Number of Questions */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-title font-bold text-[#667085]">Questions Count</label>
              <div className="flex items-center gap-1.5">
                {[5, 10, 20, 30].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setQuestionCount(cnt)}
                    className={`min-h-[38px] flex-1 py-1 rounded-xl text-xs font-title font-bold transition-all ${
                      questionCount === cnt
                        ? 'bg-[#243044] text-white shadow-sm'
                        : 'bg-[#FFFDF7] border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-title font-bold text-[#667085]">Difficulty</label>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'easy', label: 'Easy' },
                  { id: 'medium', label: 'Medium' },
                  { id: 'hard', label: 'High-Yield' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDifficulty(d.id)}
                    className={`min-h-[38px] flex-1 py-1 rounded-xl text-xs font-title font-bold transition-all ${
                      selectedDifficulty === d.id
                        ? 'bg-[#243044] text-white shadow-sm'
                        : 'bg-[#FFFDF7] border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timer Toggle */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-title font-bold text-[#667085]">Timer Mode</label>
              <button
                onClick={() => setIsTimed(!isTimed)}
                className={`w-full min-h-[38px] py-1 px-3 rounded-xl text-xs font-title font-bold border transition-all flex items-center justify-center gap-1.5 ${
                  isTimed
                    ? 'bg-[#FFF0ED] border-[#FF8D78] text-[#FF8D78]'
                    : 'bg-[#FFFDF7] border-[#E8E4D9] text-[#667085]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{isTimed ? 'Timer Enabled (1m / Q)' : 'Untimed Practice'}</span>
              </button>
            </div>
          </div>

          {/* Launch Practice Button */}
          <button
            onClick={() => handleStartQuiz()}
            className="w-full min-h-[52px] py-3.5 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white border-2 border-[#243044] font-title text-base font-bold shadow-sketch active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Start Practice Session</span>
          </button>
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE QUESTION SCREEN (Mobile-First, One Question at a Time)
  // =========================================================================
  if (viewState === 'active' && currentQ) {
    const isAnswered = currentSelectedOption !== undefined;
    const isCorrect = currentSelectedOption === currentQ.correctIndex;

    return (
      <div className="max-w-2xl mx-auto py-4 sm:py-6 px-3 sm:px-4 space-y-4 sm:space-y-6">
        
        {/* Top Control Bar: Exit + Question Counter + Timer */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => setShowExitConfirm(true)}
            className="min-h-[44px] min-w-[44px] px-3.5 py-1.5 rounded-xl bg-white border border-[#E8E4D9] hover:border-[#243044] text-xs font-title font-bold text-[#243044] flex items-center gap-1 transition-all"
            aria-label="Exit Quiz"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit</span>
          </button>

          {/* Timer Display */}
          {isTimed && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full border font-mono text-xs font-bold ${
              remainingTime < 60 ? 'bg-[#FFF0F3] border-[#FF8D78] text-[#FF8D78] animate-pulse' : 'bg-white border-[#E8E4D9] text-[#243044]'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(remainingTime)}</span>
            </div>
          )}

          {/* Question Counter Indicator */}
          <div className="text-xs font-mono font-bold text-[#667085]">
            Question <span className="text-[#243044] text-sm">{currentIdx + 1}</span> of {activeQuestions.length}
          </div>
        </div>

        {/* Exit Confirmation Dialog */}
        {showExitConfirm && (
          <div className="p-4 rounded-2xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch text-left space-y-2 animate-fade-in">
            <h4 className="font-title text-sm font-bold text-[#243044]">
              Leave Practice Session?
            </h4>
            <p className="text-xs text-[#667085] font-sans">
              Your answered questions will be evaluated, but incomplete questions will be marked unanswered.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleFinishQuiz}
                className="px-4 py-1.5 rounded-xl bg-[#243044] text-white font-title text-xs font-bold"
              >
                Yes, Finish & Score
              </button>
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-1.5 rounded-xl bg-white border border-[#E8E4D9] font-title text-xs font-bold text-[#243044]"
              >
                Keep Practicing
              </button>
            </div>
          </div>
        )}

        {/* Main Question Card */}
        <div className="rounded-3xl border-2 border-[#243044] bg-[#FFFDF7] p-5 sm:p-7 shadow-sketch space-y-5 relative text-left">
          <div className="washi-tape" />

          {/* Question Metadata */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-[#E8E4D9] pb-2.5 gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EDF4FF] border border-[#5B8DEF] font-title text-[11px] font-bold text-[#5B8DEF] capitalize">
                {currentQ.topic || 'NEET Biology'}
              </span>
              <span className="text-[11px] font-mono text-[#667085]">
                {currentQ.ncertRef}
              </span>
            </div>

            <h3 className="font-title text-base sm:text-lg font-bold text-[#243044] leading-snug whitespace-pre-line pt-1">
              {currentQ.question}
            </h3>
          </div>

          {/* 4 Options Grid */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = currentSelectedOption === idx;
              const isCorrectOption = idx === currentQ.correctIndex;
              
              let btnClass = 'bg-white border-[#243044]/20 text-[#243044] hover:bg-[#FFE681]/20 hover:border-[#243044]';

              if (isCurrentSubmitted) {
                if (isCorrectOption) {
                  btnClass = 'bg-[#EFFBF4] border-2 border-[#3DBE75] text-[#3DBE75] font-bold';
                } else if (isSelected && !isCorrectOption) {
                  btnClass = 'bg-[#FFF0F3] border-2 border-[#FF8D78] text-[#FF8D78] font-bold';
                } else {
                  btnClass = 'bg-white border-[#E8E4D9] text-[#667085] opacity-60';
                }
              } else if (isSelected) {
                btnClass = 'bg-[#243044] text-white border-2 border-[#243044] font-bold shadow-sm';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isCurrentSubmitted}
                  className={`w-full min-h-[48px] text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-title transition-all flex items-center justify-between gap-3 active:scale-[0.99] ${btnClass}`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-white/80 border border-current text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </div>

                  {isCurrentSubmitted && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-[#3DBE75] shrink-0" />
                  )}
                  {isCurrentSubmitted && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-[#FF8D78] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Solution & NCERT Explanation Banner */}
          {isCurrentSubmitted && (
            <div className="p-4 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75] text-xs text-[#243044] font-sans leading-relaxed animate-fade-in space-y-1.5">
              <span className="font-title font-bold text-[#3DBE75] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Correct NCERT Solution & Explanation:
              </span>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Bottom Actions Bar */}
          <div className="pt-3 border-t border-[#E8E4D9] flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="min-h-[44px] px-3.5 py-2 rounded-xl border border-[#E8E4D9] hover:border-[#243044] text-xs font-title font-bold text-[#243044] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {!isCurrentSubmitted ? (
              <button
                onClick={handleSubmitActiveQuestion}
                disabled={!isAnswered}
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#243044] text-white font-title text-xs sm:text-sm font-bold shadow-sketch disabled:opacity-40 disabled:pointer-events-none hover:bg-[#344460] active:scale-95 transition-all"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#5B8DEF] hover:bg-[#4377db] text-white font-title text-xs sm:text-sm font-bold shadow-sketch flex items-center gap-1.5 active:scale-95 transition-all"
              >
                <span>{currentIdx + 1 < activeQuestions.length ? 'Next Question' : 'View Results'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Compact Question Jump Palette on Mobile / Tablet */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E4D9] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-title font-bold text-[#667085]">
            <span>Question Palette ({activeQuestions.length})</span>
            <span>Jump to Question</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {activeQuestions.map((_, i) => {
              const isAnsweredI = userAnswers[i] !== undefined;
              const isCurrentI = i === currentIdx;
              const isSubmittedI = submittedQuestions[i];

              let bg = 'bg-[#FFFDF7] border-[#E8E4D9] text-[#667085]';
              if (isSubmittedI) {
                const correct = userAnswers[i] === activeQuestions[i].correctIndex;
                bg = correct ? 'bg-[#EFFBF4] border-[#3DBE75] text-[#3DBE75]' : 'bg-[#FFF0F3] border-[#FF8D78] text-[#FF8D78]';
              } else if (isAnsweredI) {
                bg = 'bg-[#EDF4FF] border-[#5B8DEF] text-[#5B8DEF]';
              }

              return (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-8 h-8 rounded-lg border text-xs font-title font-bold flex items-center justify-center transition-all ${bg} ${
                    isCurrentI ? 'ring-2 ring-[#243044] font-extrabold' : ''
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 3: QUIZ RESULT SCREEN (Comprehensive Analysis & Retry)
  // =========================================================================
  if (viewState === 'result') {
    const isMasterRank = resultStats.accuracy >= 70;

    return (
      <div className="max-w-xl mx-auto py-8 sm:py-12 px-4 text-center space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-5">
          <DoodleBrainMascot className="w-28 sm:w-32 h-28 sm:h-32 mx-auto" />

          <span className={`px-3 py-1 rounded-full text-xs font-title font-bold inline-block ${
            isMasterRank ? 'bg-[#78D6A3] text-[#243044]' : 'bg-[#FFE681] text-[#243044]'
          }`}>
            {isMasterRank ? '🏆 NEET Top Scorer Rank!' : 'Keep Practicing!'}
          </span>

          <h2 className="font-title text-2xl font-bold text-[#243044]">
            Practice Session Completed!
          </h2>

          {/* Score Overview Box */}
          <div className="p-5 rounded-2xl bg-[#FFF9E6] border border-[#FFE681] space-y-2">
            <span className="text-xs font-mono text-[#667085] uppercase font-bold">Your Score:</span>
            <div className="font-title text-4xl sm:text-5xl font-extrabold text-[#243044]">
              {resultStats.correct} / {resultStats.total}
            </div>
            <div className="text-xs font-title font-bold text-[#3DBE75]">
              +{resultStats.correct * 20} XP Earned • {resultStats.accuracy}% Accuracy
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75]">
              <span className="font-title text-xl font-bold text-[#3DBE75] block">
                {resultStats.correct}
              </span>
              <span className="text-[10px] font-title font-bold text-[#243044]">Correct</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FFF0F3] border border-[#FF8D78]">
              <span className="font-title text-xl font-bold text-[#FF8D78] block">
                {resultStats.incorrect}
              </span>
              <span className="text-[10px] font-title font-bold text-[#243044]">Incorrect</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#F0F4F8] border border-[#CBD5E1]">
              <span className="font-title text-xl font-bold text-[#64748B] block">
                {resultStats.unanswered}
              </span>
              <span className="text-[10px] font-title font-bold text-[#243044]">Skipped</span>
            </div>
          </div>

          {/* Action Buttons: Retry Mistakes, Retake Quiz, Return to Hub */}
          <div className="flex flex-col gap-2.5 pt-2">
            {resultStats.incorrect > 0 && (
              <button
                onClick={() => {
                  const incorrectList = activeQuestions.filter((q, i) => userAnswers[i] !== q.correctIndex);
                  setActiveQuestions(incorrectList);
                  setCurrentIdx(0);
                  setUserAnswers({});
                  setSubmittedQuestions({});
                  setViewState('active');
                }}
                className="w-full min-h-[48px] py-3 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-sm font-bold shadow-sketch active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry Incorrect Questions ({resultStats.incorrect})</span>
              </button>
            )}

            <button
              onClick={() => handleStartQuiz()}
              className="w-full min-h-[44px] py-2.5 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white border-2 border-[#243044] font-title text-xs font-bold active:scale-95 transition-all"
            >
              Restart This Practice Set
            </button>

            <button
              onClick={() => setViewState('config')}
              className="w-full min-h-[44px] py-2.5 rounded-2xl bg-white border border-[#E8E4D9] font-title text-xs font-bold text-[#243044] hover:border-[#243044]"
            >
              Choose Another Mode
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
