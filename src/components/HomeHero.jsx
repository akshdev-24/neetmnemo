import React from 'react';
import { Flame, Zap, BookOpen, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function HomeHero({ streak, xp, totalCards, onStartRevision, onGoToQuiz }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 mb-6 border border-slate-800 shadow-2xl">
      
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none" />

      {/* Handwriting doodle strips */}
      <div className="absolute top-4 right-8 font-handwriting text-amber-400/30 text-6xl rotate-12 select-none pointer-events-none">
        NEET!
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
              ✦ Your Daily Revision Desk
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
            <span className="font-handwriting text-3xl sm:text-4xl text-amber-400 block">Finally,</span>
            revision doesn't feel boring.
          </h1>

          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Handwritten NCERT memory hooks. Visual flashcards. Micro-quizzes with instant dopamine.
            All mapped to the official NEET UG 2025 syllabus.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => { soundEngine.playClick(); onStartRevision(); }}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              Start Active Recall (Daily 10)
            </button>
            <button
              onClick={() => { soundEngine.playClick(); onGoToQuiz(); }}
              className="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center gap-2 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Quick Quiz (+50 XP)
            </button>
          </div>

          {/* Daily 5 Quick NCERT Targets */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-slate-400 block mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Today's 5 NCERT Memory Drops:
            </span>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-lime-950/60 border border-lime-800/60 text-lime-300">
                🌿 Algae Pigments (r-Phycoerythrin)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/60 text-blue-300">
                ⚡ LCR Resonance ($\omega = 1/\sqrt{LC}$)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                🧪 Aldol vs Cannizzaro ( $\alpha$-H test)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-pink-950/60 border border-pink-800/60 text-pink-300">
                🫀 SA Node "Pacemaker" (70-75 bpm)
              </span>
            </div>
          </div>
        </div>

        {/* Progress Stat Cards */}
        <div className="flex sm:flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-500/15 border border-amber-500/30">
            <Flame className="w-6 h-6 text-amber-400 fill-amber-400 animate-flame shrink-0" />
            <div>
              <div className="font-mono text-2xl font-extrabold text-amber-300">{streak}</div>
              <div className="text-xs text-slate-400">Day Streak</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30">
            <Zap className="w-6 h-6 text-emerald-400 fill-emerald-400 shrink-0" />
            <div>
              <div className="font-mono text-2xl font-extrabold text-emerald-300">{xp}</div>
              <div className="text-xs text-slate-400">XP Earned</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30">
            <Sparkles className="w-6 h-6 text-indigo-400 shrink-0" />
            <div>
              <div className="font-mono text-2xl font-extrabold text-indigo-300">{totalCards}</div>
              <div className="text-xs text-slate-400">Total Cards</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
