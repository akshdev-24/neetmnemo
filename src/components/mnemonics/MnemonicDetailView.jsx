import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Check, 
  HelpCircle, 
  Volume2, 
  Sparkles, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  BookOpen,
  Lightbulb,
  GraduationCap
} from 'lucide-react';
import { DoodleSparkle, DoodleStar } from '../illustrations/DoodleIllustrations';
import { MNEMONICS } from '../../data/mnemonics';

export function MnemonicDetailView({
  mnemonic,
  onBack,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
  isFavorite = false,
  onToggleFavorite,
  onSelectMnemonic,
  onNavigateChapter
}) {
  const [copied, setCopied] = useState(false);
  const [showQuizAnswer, setShowQuizAnswer] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${mnemonic.title} - ${mnemonic.mnemonic} (NEET Mnemo)`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAudioSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${mnemonic.title}. Memory Hook: ${mnemonic.memoryHook || mnemonic.mnemonic}. Key Fact: ${mnemonic.fact}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Find related mnemonics in the same chapter or subject
  const relatedMnemonics = mnemonic
    ? MNEMONICS.filter(
        (m) => m.id !== mnemonic.id && (m.chapterId === mnemonic.chapterId || m.subject === mnemonic.subject)
      ).slice(0, 3)
    : [];

  if (!mnemonic) {
    return (
      <article className="max-w-md mx-auto py-16 px-4 text-center space-y-4">
        <div className="p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#FFE681] border-2 border-[#243044] flex items-center justify-center mx-auto text-2xl">
            💡
          </div>
          <h2 className="font-title text-xl font-bold text-[#243044]">Mnemonic Not Available</h2>
          <p className="text-xs text-[#667085]">
            No mnemonic records are currently loaded in this chapter or subject.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#243044] text-white font-title text-xs font-bold hover:bg-[#344259] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Breadcrumb Navigation Trail */}
      <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-[#667085]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#243044]/20 hover:border-[#243044] text-[#243044] font-title font-bold shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>NEET Biology</span>
          </button>
          <span>/</span>
          {onNavigateChapter ? (
            <button 
              onClick={() => onNavigateChapter(mnemonic.chapterId)}
              className="text-[#3DBE75] font-bold hover:underline truncate max-w-[160px]"
            >
              {mnemonic.chapterTitle}
            </button>
          ) : (
            <span className="text-[#243044] font-bold truncate max-w-[160px]">{mnemonic.chapterTitle}</span>
          )}
          <span>/</span>
          <span className="text-[#243044] font-bold truncate max-w-[140px]">{mnemonic.title}</span>
        </div>

        {/* Subject & Importance Badges */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#EFFBF4] border border-[#3DBE75] font-title text-xs font-bold text-[#3DBE75]">
            NEET Biology
          </span>
          {mnemonic.importance && (
            <span className="px-3 py-1 rounded-full bg-[#FFF0F3] border border-[#FF8D78] font-title text-xs font-bold text-[#FF8D78]">
              {mnemonic.importance}
            </span>
          )}
          <button
            onClick={() => onToggleFavorite(mnemonic.id)}
            className={`p-2 rounded-xl border transition-all ${
              isFavorite 
                ? 'bg-[#FF8D78] text-white border-[#243044] shadow-sm' 
                : 'bg-white border-[#E8E4D9] text-[#667085] hover:border-[#243044]'
            }`}
            title={isFavorite ? 'Remove from Saved' : 'Save to Memory Shelf'}
            aria-label="Save mnemonic"
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Main Hand-Drawn Mnemonic Canvas */}
      <section className="rounded-3xl border-2 border-[#243044] bg-[#FFFDF7] p-6 sm:p-8 shadow-sketch relative space-y-6 overflow-hidden">
        
        {/* Washi Tape Strip */}
        <div className="washi-tape" aria-hidden="true" />

        {/* Top Mnemonic Sticker & Title */}
        <header>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-0.5 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044] shadow-sm">
              💡 Mnemonic {mnemonic.mnemonicNumber || 1}
            </span>
            <button
              onClick={handleAudioSpeak}
              className="p-1.5 rounded-xl bg-white border border-[#243044]/20 hover:border-[#243044] text-[#243044] text-xs font-title font-bold flex items-center gap-1 shadow-sm"
              title="Listen to mnemonic"
            >
              <Volume2 className="w-4 h-4 text-[#5B8DEF]" />
              <span className="hidden sm:inline">Read Aloud</span>
            </button>
          </div>

          <h1 className="font-title text-2xl sm:text-3xl font-bold text-[#243044] flex items-center gap-2">
            <DoodleStar className="w-6 h-6 text-[#FFE681] shrink-0" aria-hidden="true" />
            <span>{mnemonic.title}</span>
          </h1>
          <p className="text-xs font-mono text-[#667085] font-semibold mt-1">
            {mnemonic.chapterTitle} • {mnemonic.topicTitle}
          </p>
        </header>

        {/* Section: What You Need to Remember */}
        <section className="space-y-2">
          <h2 className="font-title text-sm font-bold text-[#243044] uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-[#FF8D78]" />
            <span>What You Need to Remember</span>
          </h2>
          
          {/* Big Hand-drawn Memory Box */}
          <div className="p-6 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch relative">
            
            {/* Central Doodle Oval Badge */}
            {mnemonic.doodleBadge && (
              <figure className="sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0 p-3 rounded-2xl bg-white border-2 border-[#243044] shadow-sketch text-center rotate-2 inline-block">
                <span className="font-title text-xl font-bold text-[#243044] block">
                  ({mnemonic.doodleBadge})
                </span>
                {mnemonic.doodleSubtext && (
                  <figcaption className="font-hand text-xs text-[#FF8D78] font-bold block mt-0.5">
                    ★ {mnemonic.doodleSubtext}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Breakdown / Steps */}
            <div className="space-y-2 max-w-sm">
              {mnemonic.breakdown ? (
                mnemonic.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 font-mono text-sm">
                    <span className="font-bold text-[#243044] bg-white px-2 py-0.5 rounded-lg border border-[#243044]/20 shadow-xs">
                      {item.key}
                    </span>
                    <span className="text-[#667085]">—</span>
                    <span className="font-bold text-[#243044]">{item.label}</span>
                  </div>
                ))
              ) : (
                <p className="font-hand text-xl text-[#243044] font-bold">
                  {mnemonic.mnemonic}
                </p>
              )}
            </div>

          </div>
        </section>

        {/* Section: Why This Memory Trick Works */}
        <section className="space-y-2">
          <h2 className="font-title text-sm font-bold text-[#243044] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#5B8DEF]" />
            <span>Why This Memory Trick Works</span>
          </h2>
          <div className="p-4 rounded-2xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sm space-y-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#5B8DEF] text-white font-title text-[11px] font-bold inline-block">
              Memory Hook
            </span>
            <p className="font-hand text-lg sm:text-xl text-[#243044] leading-snug">
              {mnemonic.memoryHook || mnemonic.mnemonic}
            </p>
          </div>
        </section>

        {/* Section: "Also Remember" Pink Bubble Card */}
        {mnemonic.alsoRemember && (
          <aside className="p-4 rounded-2xl bg-[#FFF0F3] border-2 border-[#243044] shadow-sm flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF8D78] text-white font-title text-[11px] font-bold inline-block">
                Also Remember
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#243044] font-semibold leading-relaxed">
                {mnemonic.alsoRemember}
              </p>
            </div>
            {mnemonic.doodleSubtext && (
              <div className="p-2 rounded-xl bg-white border border-[#FF8D78] text-center rotate-3 shrink-0 hidden sm:block">
                <span className="font-hand text-xs font-bold text-[#FF8D78]">
                  ✦ {mnemonic.doodleSubtext}
                </span>
              </div>
            )}
          </aside>
        )}

        {/* Section: Detailed NCERT Explanation Section */}
        <section className="space-y-2 pt-2 border-t border-[#E8E4D9]">
          <h2 className="font-title text-sm font-bold text-[#243044] uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#3DBE75]" />
            <span>NCERT Scientific Core Fact & Concept</span>
          </h2>
          <div className="text-xs sm:text-sm text-[#243044] leading-relaxed font-sans bg-white p-4 rounded-2xl border border-[#E8E4D9] space-y-2">
            <p>{mnemonic.explanation || mnemonic.fact}</p>
            {mnemonic.ncertConnection && (
              <p className="text-xs font-mono font-bold text-[#3DBE75] pt-1 border-t border-[#E8E4D9]/60">
                📖 Reference: {mnemonic.ncertConnection}
              </p>
            )}
          </div>
        </section>

        {/* Section: NEET Trap Alert if present */}
        {mnemonic.neetTrap && (
          <aside className="p-4 rounded-2xl bg-[#FFF8E6] border-2 border-[#FF8D78] flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF8D78] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h3 className="font-title text-xs font-bold text-[#FF8D78] uppercase">
                NEET Trap Alert!
              </h3>
              <p className="text-xs text-[#243044] font-sans leading-relaxed">
                {mnemonic.neetTrap}
              </p>
            </div>
          </aside>
        )}

        {/* Section: Test Yourself Micro-Quiz */}
        {mnemonic.quiz && (
          <section className="p-5 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-title text-xs font-bold text-[#243044] uppercase tracking-wider flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#78D6A3] text-[#243044] flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> Test Yourself
                </span>
              </h2>
              <button
                onClick={() => setShowQuizAnswer(!showQuizAnswer)}
                className="text-xs font-title font-bold text-[#5B8DEF] flex items-center gap-1 hover:underline"
              >
                {showQuizAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showQuizAnswer ? 'Hide Answer' : 'Reveal Answer'}</span>
              </button>
            </div>

            <p className="font-title text-sm font-bold text-[#243044]">
              {mnemonic.quiz.question}
            </p>

            <div className="space-y-2">
              {mnemonic.quiz.options.map((opt, idx) => {
                const isSelected = selectedQuizOption === idx;
                const isCorrect = idx === mnemonic.quiz.answerIndex;
                let btnStyle = 'bg-[#FFFDF7] border-[#243044]/20 text-[#243044] hover:bg-[#FFE681]/30';

                if (showQuizAnswer) {
                  if (isCorrect) btnStyle = 'bg-[#EFFBF4] border-[#3DBE75] text-[#3DBE75] font-bold';
                  else if (isSelected) btnStyle = 'bg-[#FFF0F3] border-[#FF8D78] text-[#FF8D78]';
                } else if (isSelected) {
                  btnStyle = 'bg-[#243044] text-white border-[#243044]';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedQuizOption(idx);
                      setShowQuizAnswer(true);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs font-title transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{String.fromCharCode(65 + idx)}. {opt}</span>
                    {showQuizAnswer && isCorrect && <Check className="w-4 h-4 text-[#3DBE75]" />}
                  </button>
                );
              })}
            </div>

            {showQuizAnswer && (
              <div className="p-3 rounded-xl bg-[#EFFBF4] border border-[#3DBE75] text-xs text-[#243044] font-sans leading-relaxed animate-fade-in">
                <span className="font-bold text-[#3DBE75] block mb-0.5">NCERT Explanation:</span>
                {mnemonic.quiz.explanation}
              </div>
            )}
          </section>
        )}

      </section>

      {/* Section: Related Mnemonics (Internal Linking SEO) */}
      {relatedMnemonics.length > 0 && onSelectMnemonic && (
        <section className="p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-title text-lg font-bold text-[#243044] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFE681]" />
              <span>Related High-Yield Mnemonics</span>
            </h2>
            <span className="text-xs font-mono text-[#667085]">
              {mnemonic.chapterTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedMnemonics.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectMnemonic(rel)}
                className="p-3.5 rounded-2xl border-2 border-[#243044] cursor-pointer hover:-translate-y-1 transition-transform shadow-xs flex flex-col justify-between"
                style={{ backgroundColor: rel.cardColor || '#FFFDF7' }}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#667085] block truncate">
                    {rel.topicTitle}
                  </span>
                  <h3 className="font-title text-xs font-bold text-[#243044] mt-1 line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
                <span className="text-[11px] font-title font-bold text-[#5B8DEF] mt-2 block">
                  Study Mnemonic →
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Previous / Next Controls */}
      <footer className="flex items-center justify-between gap-2 sm:gap-4 pt-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="min-h-[44px] px-4 sm:px-5 py-2.5 rounded-2xl bg-white border-2 border-[#243044] font-title text-xs sm:text-sm font-bold text-[#243044] flex items-center gap-1.5 shadow-sketch disabled:opacity-40 disabled:pointer-events-none hover:bg-[#FFE681]/30 transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleShare}
          className="min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-2xl bg-white border-2 border-[#E8E4D9] text-[#243044] font-title text-xs font-bold flex items-center gap-1.5 hover:border-[#243044] shadow-sm transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-[#3DBE75]" /> : <Share2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share Hook'}</span>
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="min-h-[44px] px-5 sm:px-6 py-2.5 rounded-2xl bg-[#5B8DEF] hover:bg-[#4377db] text-white border-2 border-[#243044] font-title text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sketch disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

    </article>
  );
}
