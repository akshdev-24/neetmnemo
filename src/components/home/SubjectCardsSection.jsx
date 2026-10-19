import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sprout, 
  Sparkles, 
  BookOpen, 
  Leaf, 
  Flower2, 
  Atom, 
  Heart, 
  Dna, 
  ShieldCheck, 
  FlaskConical, 
  Globe 
} from 'lucide-react';
import { BIOLOGY_UNITS } from '../../data/subjects';
import { DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function SubjectCardsSection({ onSelectSubject, onSelectUnit }) {
  const [selectedClass, setSelectedClass] = useState('all');

  const unitIcons = {
    Sprout: Sprout,
    Flower2: Flower2,
    Atom: Atom,
    Leaf: Leaf,
    Heart: Heart,
    Dna: Dna,
    ShieldCheck: ShieldCheck,
    FlaskConical: FlaskConical,
    Globe: Globe
  };

  const filteredUnits = BIOLOGY_UNITS.filter((u) => {
    if (selectedClass === '11') return u.classLevel === 11;
    if (selectedClass === '12') return u.classLevel === 12;
    return true;
  });

  return (
    <section className="py-8 space-y-6">
      
      {/* Section Header with Sketch Lines */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#FFE681] text-2xl font-bold select-none">✦</span>
          <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
            Explore 10 NCERT Biology Units
          </h2>
          <span className="text-[#FFE681] text-2xl font-bold select-none">✦</span>
        </div>
        <p className="text-xs sm:text-sm text-[#667085] max-w-lg mx-auto font-sans">
          32 complete chapters strictly aligned with the latest NTA NEET UG syllabus for Class 11 & Class 12.
        </p>

        {/* Class Level Switcher */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="p-1 rounded-2xl bg-white border-2 border-[#243044] shadow-sm inline-flex gap-1">
            {[
              { id: 'all', label: 'All 10 Units (32 Chapters)' },
              { id: '11', label: 'Class 11 (Units 1–5)' },
              { id: '12', label: 'Class 12 (Units 6–10)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedClass(tab.id)}
                className={`
                  px-3.5 py-1.5 rounded-xl font-title text-xs font-bold transition-all
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

      {/* Grid of Biology Unit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUnits.map((unit) => {
          const Icon = unitIcons[unit.icon] || Sprout;
          return (
            <div
              key={unit.id}
              className="rounded-3xl border-2 border-[#243044] p-5 flex flex-col justify-between shadow-sketch hover:-translate-y-1.5 transition-all duration-200 relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: unit.bgColor }}
              onClick={() => {
                if (onSelectUnit) {
                  onSelectUnit(unit.id);
                } else if (onSelectSubject) {
                  onSelectSubject('biology');
                }
              }}
            >
              {/* Subtle decorative sparkles in corner */}
              <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <DoodleSparkle className="w-5 h-5" color={unit.color} />
              </div>

              <div>
                {/* Unit Header Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#243044] font-title text-[11px] font-bold text-[#243044] shadow-xs">
                    Unit {unit.number} • Class {unit.classLevel}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#667085]">
                    {unit.totalChapters} Ch • {unit.totalMnemonics} Tricks
                  </span>
                </div>

                {/* Unit Icon Bubble */}
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-11 h-11 rounded-2xl border-2 border-[#243044] bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                    style={{ color: unit.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-title text-base sm:text-lg font-bold text-[#243044] leading-tight group-hover:text-[#3DBE75] transition-colors">
                    {unit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs font-sans text-[#667085] line-clamp-2 mb-4 leading-relaxed">
                  {unit.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-[#243044]/15 flex items-center justify-between">
                <span className="text-xs font-title font-bold text-[#243044] group-hover:text-[#3DBE75] transition-colors flex items-center gap-1.5">
                  <span>Explore Unit Chapters</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-[#667085]">100% NCERT</span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Inspirational Pastel Quote Bubble */}
      <div className="pt-4 flex items-center justify-center">
        <div className="max-w-md w-full p-4 rounded-2xl bg-[#EFFBF4] border-2 border-[#243044] shadow-sketch flex items-center gap-3">
          <div className="text-2xl">🌱</div>
          <p className="font-hand text-base sm:text-lg text-[#243044] leading-snug">
            "Biology is memory plus logic. Master the mnemonics, master the exam."
          </p>
        </div>
      </div>

    </section>
  );
}
