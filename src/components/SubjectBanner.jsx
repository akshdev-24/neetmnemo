import React from 'react';
import { Zap, BookOpen, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

const SUBJECT_META = {
  physics: {
    title: 'Physics',
    badge: '180 Marks • 45 Questions',
    ncertRef: 'Class 11 & 12 NCERT Physics (Units 1-10)',
    description: 'Master formula sheets, standard sign conventions, and high-yield graphical derivations without memorization panic.',
    bgGradient: 'from-blue-600 via-indigo-700 to-slate-900',
    accentColor: 'text-blue-400',
    stats: { chapters: 20, highYieldFocus: 'Mechanics, Electrodynamics & Modern Physics' }
  },
  chemistry: {
    title: 'Chemistry',
    badge: '180 Marks • 45 Questions',
    ncertRef: 'Physical + Inorganic + Organic NCERT Volumes',
    description: 'Reaction mechanisms, coordinate compounds, periodic trends, and equilibrium tricks with memory hooks.',
    bgGradient: 'from-emerald-600 via-teal-700 to-slate-900',
    accentColor: 'text-emerald-400',
    stats: { chapters: 20, highYieldFocus: 'Organic Name Reactions, Coordination & Thermodynamics' }
  },
  botany: {
    title: 'Botany',
    badge: '180 Marks • 45-50 Questions',
    ncertRef: 'NCERT Plant Biology & Genetics Special',
    description: 'Plant Kingdom classifications, Calvin & C4 cycles, and Mendelian dihybrid ratios at your fingertips.',
    bgGradient: 'from-lime-600 via-emerald-800 to-slate-900',
    accentColor: 'text-lime-400',
    stats: { chapters: 18, highYieldFocus: 'Genetics, Ecology & Plant Physiology' }
  },
  zoology: {
    title: 'Zoology',
    badge: '180 Marks • 45-50 Questions',
    ncertRef: 'Human Physiology, Reproduction & Evolution NCERT',
    description: 'Cardiac cycle graphs, nephron countercurrent mechanisms, antibody structures, and endocrine feedback loops.',
    bgGradient: 'from-pink-600 via-rose-800 to-slate-900',
    accentColor: 'text-pink-400',
    stats: { chapters: 16, highYieldFocus: 'Human Physiology, Biotechnology & Immunity' }
  }
};

export function SubjectBanner({
  subject,
  cardCount,
  onStartSubjectRevision,
  onStartSubjectQuiz
}) {
  const meta = SUBJECT_META[subject];
  if (!meta) return null;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${meta.bgGradient} text-white p-6 sm:p-7 mb-6 shadow-xl border border-white/10`}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-0.5 rounded-full bg-white/20 text-white font-mono text-xs font-bold border border-white/30 uppercase tracking-wider">
              {meta.badge}
            </span>
            <span className="text-xs font-mono text-white/80">
              {meta.ncertRef}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
            <span>NEET {meta.title} Revision Hub</span>
            <span className="text-amber-300 text-lg font-mono font-normal">({cardCount} Cards)</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {meta.description}
          </p>

          <div className="flex items-center gap-3 pt-1 text-xs text-amber-200 font-mono">
            <span className="flex items-center gap-1 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Key High Yield:
            </span>
            <span className="text-white/90">{meta.stats.highYieldFocus}</span>
          </div>
        </div>

        {/* Quick launch buttons */}
        <div className="flex sm:flex-col gap-2.5 shrink-0">
          <button
            onClick={() => { soundEngine.playClick(); onStartSubjectRevision(); }}
            className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all hover:scale-105"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Active Recall ({cardCount})</span>
          </button>

          <button
            onClick={() => { soundEngine.playClick(); onStartSubjectQuiz(); }}
            className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Subject Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
}
