import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Ruler, 
  Activity, 
  Apple, 
  Globe, 
  Flame, 
  Dna, 
  Leaf, 
  Flower2, 
  Heart, 
  Microscope,
  ChevronRight,
  BookOpen,
  Sparkles,
  Sprout
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { MNEMONICS } from '../../data/mnemonics';
import { MnemonicCard } from '../mnemonics/MnemonicCard';

export function SubjectView({
  subject,
  onBack,
  onSelectChapter,
  onSelectMnemonic,
  favorites = [],
  onToggleFavorite
}) {
  const [activeTab, setActiveTab] = useState('chapters'); // 'chapters' | 'topics' | 'mnemonics'

  const subjectChapters = CHAPTERS;
  const subjectMnemonics = MNEMONICS;

  return (
    <article className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Top Navigation Back Bar & Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </button>

        <span className="text-xs font-mono font-bold text-[#667085]">
          100% NCERT Class 11 &amp; 12 Biology
        </span>
      </nav>

      {/* Cloud Header Banner */}
      <header 
        className="rounded-3xl border-2 border-[#243044] p-6 sm:p-8 shadow-sketch relative overflow-hidden text-center bg-[#EFFBF4]"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#243044] shadow-sm mb-3">
          <Sparkles className="w-4 h-4 text-[#3DBE75]" />
          <h1 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
            NEET Biology Mnemonics &amp; NCERT Revision
          </h1>
        </div>

        <p className="font-hand text-lg text-[#243044] max-w-md mx-auto">
          "Visual NCERT facts, taxonomy, pathways &amp; diagrams across 32 chapters!"
        </p>

        {/* Tab Switcher: Chapters | Topics | Mnemonics */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="p-1.5 rounded-2xl bg-white border-2 border-[#243044] shadow-sm inline-flex gap-1">
            {[
              { id: 'chapters', label: `Chapters (${subjectChapters.length})` },
              { id: 'topics', label: 'Topics View' },
              { id: 'mnemonics', label: `All Mnemonics (${subjectMnemonics.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-1.5 rounded-xl font-title text-xs font-bold capitalize transition-all
                  ${activeTab === tab.id 
                    ? 'bg-[#243044] text-white shadow-sm' 
                    : 'text-[#243044] hover:bg-[#E8E4D9]/40'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </header>

      {/* TAB 1: CHAPTERS LIST */}
      {activeTab === 'chapters' && (
        <section className="space-y-3" aria-label="Biology Chapters">
          <h2 className="sr-only">Chapters in NEET Biology</h2>
          {subjectChapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => onSelectChapter(chapter)}
              className="notebook-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:border-[#243044] group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div 
                  className="w-12 h-12 rounded-2xl border-2 border-[#243044] bg-[#EFFBF4] text-[#3DBE75] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                >
                  <span className="font-title text-base font-bold">{chapter.number}</span>
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
                    {chapter.number}. {chapter.title}
                  </h3>
                  <p className="text-xs font-mono text-[#667085] font-semibold mt-0.5">
                    {chapter.topicsCount} topics • {chapter.mnemonicsCount} mnemonics
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-xl bg-white border border-[#E8E4D9] group-hover:border-[#243044] flex items-center justify-center text-[#667085] group-hover:text-[#243044] shrink-0 transition-colors shadow-sm">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </section>
      )}

      {/* TAB 2: TOPICS EXPANDED VIEW */}
      {activeTab === 'topics' && (
        <section className="space-y-6" aria-label="Biology Topics">
          <h2 className="sr-only">Topics in NEET Biology</h2>
          {subjectChapters.map((chapter) => (
            <div key={chapter.id} className="p-5 rounded-3xl bg-white border-2 border-[#E8E4D9] space-y-3">
              <div className="flex items-center justify-between border-b border-[#E8E4D9] pb-2">
                <h3 className="font-title text-base font-bold text-[#243044]">
                  Chapter {chapter.number}: {chapter.title}
                </h3>
                <button
                  onClick={() => onSelectChapter(chapter)}
                  className="text-xs font-title font-bold text-[#3DBE75] hover:underline"
                >
                  Open Chapter →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chapter.topics.map((top) => (
                  <div 
                    key={top.id}
                    onClick={() => onSelectChapter(chapter)}
                    className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#243044]/20 hover:border-[#243044] cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="font-title text-xs font-bold text-[#243044] block">
                        {top.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#667085]">
                        {top.keyConcepts} concepts • NCERT Mapped
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#667085]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* TAB 3: ALL MNEMONICS */}
      {activeTab === 'mnemonics' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="All Biology Mnemonics">
          <h2 className="sr-only">All Biology Mnemonics</h2>
          {subjectMnemonics.slice(0, 50).map((mnemo) => (
            <MnemonicCard
              key={mnemo.id}
              mnemonic={mnemo}
              isFavorite={favorites.includes(mnemo.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenDetail={onSelectMnemonic}
            />
          ))}
        </section>
      )}

    </article>
  );
}
