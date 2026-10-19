import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  GraduationCap, 
  Filter,
  CheckCircle2,
  Sprout
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { BIOLOGY_UNITS } from '../../data/subjects';

export function AllSubjectsView({ onSelectChapter, onSelectUnit }) {
  const [selectedClass, setSelectedClass] = useState('all'); // 'all' | '11' | '12'
  const [selectedUnitId, setSelectedUnitId] = useState('all');

  const filteredChapters = CHAPTERS.filter((ch) => {
    if (selectedClass !== 'all' && ch.classLevel !== parseInt(selectedClass, 10)) {
      return false;
    }
    if (selectedUnitId !== 'all' && ch.unitId !== selectedUnitId) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#EFFBF4] border-2 border-[#243044] shadow-sketch text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
          <Sprout className="w-3.5 h-3.5 text-[#3DBE75]" />
          <span>Complete NEET Biology Syllabus</span>
        </div>
        <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-[#243044]">
          32 NCERT Biology Chapters
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] max-w-lg mx-auto font-sans">
          Select any chapter to explore high-yield visual mnemonics, NCERT memory hooks, and practice recall cards.
        </p>

        {/* Filter Controls: Class Level + Unit Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
          <div className="p-1 rounded-2xl bg-white border-2 border-[#243044] shadow-sm inline-flex gap-1">
            {[
              { id: 'all', label: 'All Classes' },
              { id: '11', label: 'Class 11 (19 Chapters)' },
              { id: '12', label: 'Class 12 (13 Chapters)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedClass(tab.id);
                  setSelectedUnitId('all');
                }}
                className={`
                  px-3 py-1 rounded-xl font-title text-xs font-bold transition-all
                  ${selectedClass === tab.id 
                    ? 'bg-[#243044] text-white shadow-sm' 
                    : 'text-[#243044] hover:bg-[#EFFBF4]'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Unit Filter Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedUnitId('all')}
          className={`
            px-3 py-1.5 rounded-full text-xs font-title font-bold whitespace-nowrap transition-all
            ${selectedUnitId === 'all'
              ? 'bg-[#3DBE75] text-white shadow-sm'
              : 'bg-white border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
            }
          `}
        >
          All 10 Units
        </button>
        {BIOLOGY_UNITS.filter((u) => {
          if (selectedClass === '11') return u.classLevel === 11;
          if (selectedClass === '12') return u.classLevel === 12;
          return true;
        }).map((unit) => (
          <button
            key={unit.id}
            onClick={() => setSelectedUnitId(unit.id)}
            className={`
              px-3 py-1.5 rounded-full text-xs font-title font-bold whitespace-nowrap transition-all
              ${selectedUnitId === unit.id
                ? 'bg-[#243044] text-white shadow-sm'
                : 'bg-white border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
              }
            `}
          >
            Unit {unit.number}: {unit.title}
          </button>
        ))}
      </div>

      {/* Chapters List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[#667085] px-1">
          <span>Showing {filteredChapters.length} Chapters</span>
          <span>100% NCERT Verified</span>
        </div>

        {filteredChapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className="notebook-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:border-[#243044] group transition-all"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-2xl border-2 border-[#243044] bg-[#EFFBF4] text-[#3DBE75] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-title text-base font-bold">
                  {chapter.number}
                </span>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="px-2 py-0.2 rounded-md bg-[#FFE681]/60 text-[10px] font-title font-bold text-[#243044]">
                    Class {chapter.classLevel}
                  </span>
                  <span className="text-[11px] font-mono text-[#667085] truncate">
                    {chapter.unitName}
                  </span>
                </div>
                <h3 className="font-title text-base sm:text-lg font-bold text-[#243044] group-hover:text-[#3DBE75] transition-colors truncate">
                  {chapter.title}
                </h3>
                <p className="text-xs text-[#667085] font-sans line-clamp-1 mt-0.5">
                  {chapter.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-xl bg-white border border-[#E8E4D9] font-mono text-xs font-bold text-[#243044]">
                {chapter.mnemonicsCount} Mnemonics
              </span>
              <div className="w-8 h-8 rounded-xl bg-white border border-[#E8E4D9] group-hover:border-[#243044] flex items-center justify-center text-[#667085] group-hover:text-[#243044] transition-colors shadow-xs">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
