import React from 'react';
import { 
  BarChart2, 
  Flame, 
  Zap, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  Award,
  Sparkles,
  Atom,
  FlaskConical,
  Sprout
} from 'lucide-react';
import { MNEMONICS } from '../../data/mnemonics';
import { SUBJECTS } from '../../data/subjects';
import { DoodleBrainMascot } from '../illustrations/DoodleIllustrations';

export function ProgressView({
  streak = 4,
  xp = 280,
  favorites = [],
  learnedIds = [],
  onStartRevision
}) {
  const totalMnemonics = MNEMONICS.length;
  const learnedCount = learnedIds.length;
  const needsRevisionCount = totalMnemonics - learnedCount;

  // Subject wise statistics
  const subjectStats = SUBJECTS.map((sub) => {
    const totalInSub = MNEMONICS.filter((m) => m.subject === sub.id).length;
    const learnedInSub = MNEMONICS.filter((m) => m.subject === sub.id && learnedIds.includes(m.id)).length;
    const percent = totalInSub > 0 ? Math.round((learnedInSub / totalInSub) * 100) : 0;

    return {
      ...sub,
      total: totalInSub,
      learned: learnedInSub,
      percent
    };
  });

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Learning Dashboard</span>
          </div>
          <h1 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
            Your NEET Mastery Track
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] font-sans">
            Every statistic here reflects your genuine study progress saved in your browser.
          </p>
        </div>

        <DoodleBrainMascot className="w-24 h-24 shrink-0" />
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Streak */}
        <div className="p-4 rounded-2xl bg-white border-2 border-[#243044] shadow-sketch space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-title font-bold text-[#667085]">Daily Streak</span>
            <Flame className="w-4 h-4 text-[#FF8D78] fill-[#FF8D78]" />
          </div>
          <div className="font-title text-3xl font-bold text-[#243044]">{streak} Days</div>
          <span className="text-[10px] font-mono text-[#78D6A3] font-bold">Active today! 🔥</span>
        </div>

        {/* XP */}
        <div className="p-4 rounded-2xl bg-white border-2 border-[#243044] shadow-sketch space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-title font-bold text-[#667085]">Total XP</span>
            <Zap className="w-4 h-4 text-[#FFE681] fill-[#FFE681]" />
          </div>
          <div className="font-title text-3xl font-bold text-[#243044]">{xp} XP</div>
          <span className="text-[10px] font-mono text-[#5B8DEF] font-bold">Level 3 Aspirant</span>
        </div>

        {/* Mastered */}
        <div className="p-4 rounded-2xl bg-white border-2 border-[#243044] shadow-sketch space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-title font-bold text-[#667085]">Learned</span>
            <CheckCircle2 className="w-4 h-4 text-[#78D6A3]" />
          </div>
          <div className="font-title text-3xl font-bold text-[#243044]">{learnedCount}</div>
          <span className="text-[10px] font-mono text-[#667085]">of {totalMnemonics} Mnemonics</span>
        </div>

        {/* Saved */}
        <div className="p-4 rounded-2xl bg-white border-2 border-[#243044] shadow-sketch space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-title font-bold text-[#667085]">Saved Shelf</span>
            <Bookmark className="w-4 h-4 text-[#FF8D78] fill-[#FF8D78]" />
          </div>
          <div className="font-title text-3xl font-bold text-[#243044]">{favorites.length}</div>
          <span className="text-[10px] font-mono text-[#667085]">Pinned cards</span>
        </div>

      </div>

      {/* Subject-Wise Mastery Bars */}
      <div className="p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6">
        <h2 className="font-title text-xl font-bold text-[#243044] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFE681]" />
          <span>Subject Mastery Breakdown</span>
        </h2>

        <div className="space-y-4">
          {subjectStats.map((sub) => (
            <div key={sub.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-title font-bold text-[#243044]">
                <span className="capitalize">{sub.name}</span>
                <span className="font-mono text-[#667085]">{sub.learned} / {sub.total} Learned ({sub.percent}%)</span>
              </div>
              
              <div className="w-full h-3 rounded-full bg-[#E8E4D9] overflow-hidden p-0.5 border border-[#243044]/10">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.max(8, sub.percent)}%`,
                    backgroundColor: sub.accentColor 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#E8E4D9] flex justify-center">
          <button
            onClick={() => onStartRevision()}
            className="px-6 py-2.5 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-xs sm:text-sm font-bold shadow-sketch active:scale-95 transition-all"
          >
            Start Speed Revision Sprint ⚡
          </button>
        </div>
      </div>

    </div>
  );
}
