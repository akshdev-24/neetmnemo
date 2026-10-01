import React from 'react';
import { Bookmark, ChevronRight, Sparkles, Check, Flame } from 'lucide-react';
import { DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function MnemonicCard({
  mnemonic,
  isFavorite = false,
  onToggleFavorite,
  onOpenDetail
}) {
  const subjectThemes = {
    physics: {
      badgeBg: 'bg-[#EDF4FF] text-[#5B8DEF] border-[#5B8DEF]',
      accentColor: '#5B8DEF',
      tagBg: 'bg-[#DCE8FF] text-[#243044]',
    },
    chemistry: {
      badgeBg: 'bg-[#F7F0FF] text-[#A66CFF] border-[#A66CFF]',
      accentColor: '#A66CFF',
      tagBg: 'bg-[#EFE4FF] text-[#243044]',
    },
    biology: {
      badgeBg: 'bg-[#EFFBF4] text-[#3DBE75] border-[#3DBE75]',
      accentColor: '#3DBE75',
      tagBg: 'bg-[#DDF7E8] text-[#243044]',
    },
  };

  const theme = subjectThemes[mnemonic.subject] || subjectThemes.physics;

  return (
    <div
      onClick={() => onOpenDetail(mnemonic)}
      className="notebook-card p-5 cursor-pointer flex flex-col justify-between group hover:border-[#243044] transition-all relative overflow-hidden"
      style={{ backgroundColor: mnemonic.cardColor || '#FFFFFF' }}
    >
      
      {/* Top Bar: Mnemonic Number Badge + Bookmark */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          
          {/* Mnemonic Badge (e.g. "Mnemonic 1") */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFE681] border border-[#243044] font-title text-[11px] font-bold text-[#243044] shadow-sm">
              💡 Mnemonic {mnemonic.mnemonicNumber || 1}
            </span>
            <span className="text-[11px] font-mono text-[#667085] font-semibold truncate max-w-[140px]">
              {mnemonic.chapterTitle}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(mnemonic.id);
            }}
            className={`p-1.5 rounded-xl border transition-all ${
              isFavorite
                ? 'bg-[#FF8D78] text-white border-[#243044] shadow-sm'
                : 'bg-white/80 border-[#E8E4D9] text-[#667085] hover:border-[#243044] hover:text-[#FF8D78]'
            }`}
            title={isFavorite ? 'Remove from Saved' : 'Save Mnemonic'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-title text-lg font-bold text-[#243044] mb-2 group-hover:text-[#5B8DEF] transition-colors flex items-center justify-between">
          <span>{mnemonic.title}</span>
          <ChevronRight className="w-4 h-4 text-[#667085] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </h3>

        {/* Memory Trick Highlight Banner / Box */}
        <div className="p-3 rounded-2xl bg-white/90 border-2 border-[#243044] mb-3 shadow-sketch relative">
          
          {/* Doodle Badge / Handwritten sticker on the right */}
          {mnemonic.doodleBadge && (
            <div className="absolute top-2 right-2 p-1.5 rounded-xl bg-[#FFFDF7] border-2 border-dashed border-[#243044] text-center rotate-3 hidden sm:block">
              <span className="font-hand text-xs font-bold text-[#243044] block whitespace-pre-line leading-tight">
                {mnemonic.doodleBadge}
              </span>
            </div>
          )}

          {/* Breakdown / Fact Snippets */}
          <div className="space-y-1 pr-0 sm:pr-24">
            {mnemonic.breakdown ? (
              mnemonic.breakdown.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono font-semibold text-[#243044]">
                  <span className="font-bold text-[#FF8D78]">• {item.key}:</span>
                  <span className="truncate text-[#667085]">{item.label}</span>
                </div>
              ))
            ) : (
              <p className="font-hand text-base text-[#243044] leading-snug">
                "{mnemonic.mnemonic}"
              </p>
            )}
          </div>

        </div>

        {/* Memory Hook Explanation Line */}
        <p className="font-hand text-sm text-[#243044] mb-3 leading-snug">
          👉 {mnemonic.memoryHook || mnemonic.fact}
        </p>

      </div>

      {/* Card Footer: Category Tags (e.g. Memory Trick, Important, NEET PYQ) */}
      <div className="pt-2 border-t border-[#243044]/10 flex items-center justify-between gap-2 flex-wrap text-[11px] font-title font-bold">
        <div className="flex items-center gap-1.5 flex-wrap">
          {mnemonic.badgeText && (
            <span className="px-2 py-0.5 rounded-full bg-[#EDF4FF] border border-[#5B8DEF] text-[#5B8DEF]">
              ✦ {mnemonic.badgeText}
            </span>
          )}
          {mnemonic.importance && (
            <span className="px-2 py-0.5 rounded-full bg-[#FFF0F3] border border-[#FF8D78] text-[#FF8D78]">
              {mnemonic.importance}
            </span>
          )}
        </div>

        <span className="text-[10px] font-mono text-[#667085]">
          Tap for details →
        </span>
      </div>

    </div>
  );
}
