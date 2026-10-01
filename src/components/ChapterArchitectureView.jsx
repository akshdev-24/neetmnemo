import React, { useState } from 'react';
import { 
  SYLLABUS_DATA 
} from '../data/syllabus';
import { 
  Atom, 
  FlaskConical, 
  Sprout, 
  Dna, 
  ChevronRight, 
  BookOpen, 
  Flame, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function ChapterArchitectureView({
  onSelectChapter,
  activeSubject,
  setActiveSubject
}) {
  const [selectedClass, setSelectedClass] = useState(11);

  const subjectTabs = [
    { id: 'physics', label: 'Physics', icon: Atom, color: 'text-blue-500', border: 'border-blue-500' },
    { id: 'chemistry', label: 'Chemistry', icon: FlaskConical, color: 'text-emerald-500', border: 'border-emerald-500' },
    { id: 'botany', label: 'Botany', icon: Sprout, color: 'text-lime-500', border: 'border-lime-500' },
    { id: 'zoology', label: 'Zoology', icon: Dna, color: 'text-pink-500', border: 'border-pink-500' },
  ];

  const currentSubjectData = SYLLABUS_DATA[activeSubject || 'physics'] || SYLLABUS_DATA.physics;
  const chaptersList = selectedClass === 11 ? currentSubjectData.class11 : currentSubjectData.class12;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* View Title & Header */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 text-xs font-bold font-mono">
                NTA NEET UG Official Syllabus Architecture
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Syllabus Chapter Map & High-Yield Blueprint
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select any chapter below to filter handwritten notes, mnemonics & high-yield formula cards.
            </p>
          </div>

          {/* Class 11 / 12 Toggle Pills */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => { soundEngine.playClick(); setSelectedClass(11); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedClass === 11
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Class 11 (Vol I)
            </button>
            <button
              onClick={() => { soundEngine.playClick(); setSelectedClass(12); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedClass === 12
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Class 12 (Vol II)
            </button>
          </div>
        </div>

        {/* Subject Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-700">
          {subjectTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeSubject === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { soundEngine.playClick(); setActiveSubject(tab.id); }}
                className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${
                  isSelected
                    ? `${tab.border} bg-slate-50 dark:bg-slate-900 font-bold shadow-sm`
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${tab.color}`} />
                <div>
                  <span className="text-xs font-bold block text-slate-900 dark:text-white">{tab.label}</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {SYLLABUS_DATA[tab.id]?.class11.length + SYLLABUS_DATA[tab.id]?.class12.length} Chapters
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapters Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chaptersList.map((chap, idx) => (
          <div
            key={chap.id}
            onClick={() => {
              soundEngine.playClick();
              onSelectChapter(chap.id);
            }}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-400 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  {chap.ncertChapter}
                </span>

                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> {chap.weightage}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {chap.name}
              </h3>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {chap.cardsCount} High-Yield Cards
              </span>

              <span className="font-bold text-amber-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Explore Cards <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
