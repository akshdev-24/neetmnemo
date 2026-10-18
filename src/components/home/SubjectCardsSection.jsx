import React from 'react';
import { ArrowRight, Atom, FlaskConical, Sprout, Sparkles } from 'lucide-react';
import { SUBJECTS } from '../../data/subjects';
import { getMnemonicCountForSubject } from '../../utils/stats';
import { DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function SubjectCardsSection({ onSelectSubject }) {
  const subjectIcons = {
    physics: Atom,
    chemistry: FlaskConical,
    biology: Sprout,
  };

  return (
    <section className="py-8">
      
      {/* Section Header with Sketch Lines */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-[#FFE681] text-2xl font-bold select-none">✦</span>
        <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
          Choose Your Subject
        </h2>
        <span className="text-[#FFE681] text-2xl font-bold select-none">✦</span>
      </div>

      {/* 3 Large Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUBJECTS.map((subject) => {
          const Icon = subjectIcons[subject.id] || Atom;
          return (
            <div
              key={subject.id}
              className="rounded-3xl border-2 border-[#243044] p-6 flex flex-col justify-between shadow-sketch hover:-translate-y-1.5 transition-all duration-200 relative overflow-hidden group"
              style={{ backgroundColor: subject.bgColor }}
            >
              {/* Subtle decorative sparkles in corner */}
              <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <DoodleSparkle className="w-5 h-5" color={subject.accentColor} />
              </div>

              <div>
                {/* Subject Icon Bubble */}
                <div 
                  className="w-16 h-16 rounded-2xl border-2 border-[#243044] bg-white flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ color: subject.accentColor }}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Subject Title & Description */}
                <h3 className="font-title text-2xl font-bold text-[#243044] text-center mb-1">
                  {subject.name}
                </h3>
                <p className="text-xs font-sans font-semibold text-[#667085] text-center mb-4">
                  {subject.description}
                </p>

                {/* Stats badge */}
                <div className="flex items-center justify-center gap-2 mb-6 text-[11px] font-mono font-bold text-[#667085]">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-[#243044]/20">
                    {subject.totalChapters} Chapters
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-[#243044]/20">
                    {getMnemonicCountForSubject(subject.id)} Mnemonics
                  </span>
                </div>
              </div>

              {/* Explore Action Button */}
              <button
                onClick={() => onSelectSubject(subject.id)}
                className="w-full py-2.5 rounded-xl text-white font-title text-sm font-bold flex items-center justify-center gap-2 border-2 border-[#243044] shadow-sm hover:opacity-95 transition-all active:scale-95"
                style={{ backgroundColor: subject.accentColor }}
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          );
        })}
      </div>

      {/* Inspirational Pastel Quote Bubble */}
      <div className="mt-8 flex items-center justify-center">
        <div className="max-w-md w-full p-4 rounded-2xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sketch flex items-center gap-3">
          <div className="text-2xl">📚</div>
          <p className="font-hand text-base sm:text-lg text-[#243044] leading-snug">
            "The secret of getting ahead is getting started."
          </p>
        </div>
      </div>

    </section>
  );
}
