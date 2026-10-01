import React from 'react';
import { ArrowRight, Atom, FlaskConical, Sprout, Sparkles } from 'lucide-react';
import { SUBJECTS } from '../../data/subjects';

export function AllSubjectsView({ onSelectSubject }) {
  const subjectIcons = {
    physics: Atom,
    chemistry: FlaskConical,
    biology: Sprout,
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch text-center space-y-2">
        <span className="px-3 py-1 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
          ✦ All 3 NEET Subjects
        </span>
        <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-[#243044]">
          Explore Subjects & Chapters
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto font-sans">
          Select a subject below to dive into chapters, key topics, formulas, and visual memory hooks.
        </p>
      </div>

      {/* 3 Main Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUBJECTS.map((subject) => {
          const Icon = subjectIcons[subject.id] || Atom;
          return (
            <div
              key={subject.id}
              className="rounded-3xl border-2 border-[#243044] p-6 flex flex-col justify-between shadow-sketch hover:-translate-y-1.5 transition-all relative overflow-hidden group"
              style={{ backgroundColor: subject.bgColor }}
            >
              <div>
                <div 
                  className="w-16 h-16 rounded-2xl border-2 border-[#243044] bg-white flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ color: subject.accentColor }}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h2 className="font-title text-2xl font-bold text-[#243044] text-center mb-1">
                  {subject.name}
                </h2>
                <p className="text-xs font-sans font-semibold text-[#667085] text-center mb-4">
                  {subject.description}
                </p>

                <div className="space-y-1.5 p-3 rounded-2xl bg-white/70 border border-[#243044]/20 mb-6 text-xs font-sans">
                  <span className="font-title font-bold text-[#243044] block">High Yield Areas:</span>
                  <ul className="space-y-1 text-[#667085]">
                    {subject.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#FF8D78]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onSelectSubject(subject.id)}
                className="w-full py-2.5 rounded-xl text-white font-title text-sm font-bold flex items-center justify-center gap-2 border-2 border-[#243044] shadow-sm hover:opacity-95 transition-all active:scale-95"
                style={{ backgroundColor: subject.accentColor }}
              >
                <span>View {subject.name} Chapters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}
