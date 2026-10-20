import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ClipboardList, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { MNEMONICS } from '../../data/mnemonics';
import { CHAPTERS } from '../../data/chapters';
import { MnemonicCard } from '../mnemonics/MnemonicCard';

export function ChapterDetailView({
  chapter,
  onBack,
  onSelectMnemonic,
  onSelectChapter,
  onNavigateClass,
  favorites = [],
  onToggleFavorite,
  onStartQuiz
}) {
  const [selectedTopicId, setSelectedTopicId] = useState(chapter.topics[0]?.id || null);

  const chapterMnemonics = MNEMONICS.filter((m) => m.chapterId === chapter.id);
  const activeTopic = chapter.topics.find((t) => t.id === selectedTopicId) || chapter.topics[0];

  // Find other chapters in the same subject for internal linking
  const siblingChapters = CHAPTERS.filter(
    (c) => c.subject === chapter.subject && c.id !== chapter.id
  ).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Breadcrumb Bar with Class Collection Link */}
      <nav aria-label="Breadcrumb" className="flex items-center justify-between flex-wrap gap-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border-2 border-[#243044] font-title text-xs font-bold text-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Biology Chapters</span>
        </button>

        <div className="text-xs font-mono text-[#667085] font-semibold flex items-center gap-1.5">
          <span>NEET Biology</span>
          <span>›</span>
          <button
            onClick={() => onNavigateClass && onNavigateClass(chapter.classLevel === 12 ? 'class-12' : 'class-11')}
            className="text-[#3DBE75] hover:underline font-bold"
          >
            Class {chapter.classLevel || 11} Mnemonics
          </button>
          <span>›</span>
          <span className="text-[#243044] font-bold">{chapter.number}. {chapter.title}</span>
        </div>
      </nav>

      {/* Chapter Title & Overview Header */}
      <header className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE681]/40 border border-[#FFE681] text-[#243044] font-title text-xs font-bold flex-wrap">
          <GraduationCap className="w-4 h-4 text-[#FF8D78]" />
          <span>NEET Biology Chapter {chapter.number} • Class {chapter.classLevel || 11} NCERT</span>
          {onNavigateClass && (
            <button
              onClick={() => onNavigateClass(chapter.classLevel === 12 ? 'class-12' : 'class-11')}
              className="text-[#3DBE75] hover:underline font-bold text-[11px]"
            >
              (View Class {chapter.classLevel || 11} Hub →)
            </button>
          )}
        </div>

        <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#243044]">
          {chapter.title} Mnemonics & NCERT Revision
        </h1>

        <p className="text-xs sm:text-sm text-[#667085] font-sans max-w-2xl leading-relaxed">
          {chapter.description || `High-yield visual memory hooks, formula tricks, and active recall cards for ${chapter.title} mapped to the latest NTA NEET UG syllabus.`}
        </p>
      </header>

      {/* Topic Switcher Strip */}
      <section className="p-5 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#EFE4FF] border-2 border-[#243044] text-[#A66CFF] flex items-center justify-center shrink-0">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-title font-bold text-[#A66CFF] block">
              High-Yield Topics
            </span>
            <h2 className="font-title text-xl font-bold text-[#243044]">
              {activeTopic?.title || chapter.title}
            </h2>
            <p className="text-xs font-mono text-[#667085]">
              {activeTopic?.keyConcepts || 4} Key concepts • {chapterMnemonics.length} Visual Mnemonics
            </p>
          </div>
        </div>

        {/* Topic Pills if multiple */}
        {chapter.topics.length > 1 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8E4D9]">
            {chapter.topics.map((top, idx) => {
              const isSelected = (activeTopic?.id === top.id);
              return (
                <button
                  key={top.id}
                  onClick={() => setSelectedTopicId(top.id)}
                  className={`
                    px-3 py-1.5 rounded-xl font-title text-xs font-bold transition-all
                    ${isSelected 
                      ? 'bg-[#243044] text-white shadow-sm' 
                      : 'bg-[#FFFDF7] border border-[#243044]/20 text-[#243044] hover:bg-[#FFE681]/40'
                    }
                  `}
                >
                  Topic {chapter.number}.{idx + 1}: {top.title}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Mnemonics Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FFE681]" />
            <span>Handcrafted Visual Mnemonics</span>
          </h2>
          <span className="text-xs font-mono font-bold text-[#667085]">
            {chapterMnemonics.length} available
          </span>
        </div>

        {chapterMnemonics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapterMnemonics.map((mnemo) => (
              <MnemonicCard
                key={mnemo.id}
                mnemonic={mnemo}
                isFavorite={favorites.includes(mnemo.id)}
                onToggleFavorite={onToggleFavorite}
                onOpenDetail={onSelectMnemonic}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border-2 border-dashed border-[#243044]/30 text-center space-y-2">
            <p className="font-title text-sm font-bold text-[#243044]">
              More visual cards being added for this chapter!
            </p>
            <p className="text-xs text-[#667085]">
              Explore sibling chapters or test your recall on other topics.
            </p>
          </div>
        )}
      </section>

      {/* Chapter Quiz & Revision Trigger Banner */}
      <section className="p-6 rounded-3xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sketch flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#243044] font-title text-xs font-bold text-[#5B8DEF]">
            🎯 Active Practice & Revision
          </span>
          <h3 className="font-title text-lg font-bold text-[#243044]">
            Ready to test your recall on {chapter.title}?
          </h3>
          <p className="text-xs text-[#667085] font-sans">
            50 NCERT practice questions with instant solutions, active recall cards, and dopamine XP.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-end">
          <button
            onClick={() => onStartQuiz(chapter.subject, chapter.id)}
            className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white font-title text-xs sm:text-sm font-bold flex items-center gap-2 border-2 border-[#243044] shadow-sm shrink-0 active:scale-95 transition-all"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Practice Quiz (50 Qs)</span>
          </button>
        </div>
      </section>

      {/* Related Sibling Chapters (Internal Linking SEO) */}
      {siblingChapters.length > 0 && onSelectChapter && (
        <section className="p-6 rounded-3xl bg-white border-2 border-[#E8E4D9] shadow-sm space-y-3">
          <h2 className="font-title text-base font-bold text-[#243044] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#5B8DEF]" />
            <span>Other NEET Biology Chapters</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {siblingChapters.map((sib) => (
              <div
                key={sib.id}
                onClick={() => onSelectChapter(sib)}
                className="p-3.5 rounded-2xl bg-[#FFFDF7] border-2 border-[#243044]/20 hover:border-[#243044] cursor-pointer hover:-translate-y-0.5 transition-all shadow-xs flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#667085]">Ch {sib.number}</span>
                  <h3 className="font-title text-xs font-bold text-[#243044] line-clamp-1">{sib.title}</h3>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#5B8DEF] shrink-0" />
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  );
}
