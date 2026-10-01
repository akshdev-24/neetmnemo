import React from 'react';
import { Bookmark, Zap, Sparkles, BookOpen, Trash2 } from 'lucide-react';
import { MNEMONICS } from '../../data/mnemonics';
import { MnemonicCard } from '../mnemonics/MnemonicCard';

export function FavoritesView({
  favorites = [],
  onToggleFavorite,
  onSelectMnemonic,
  onStartRevision
}) {
  const savedMnemonics = MNEMONICS.filter((m) => favorites.includes(m.id));

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFE681] border border-[#243044] font-title text-xs font-bold text-[#243044]">
            <Bookmark className="w-3.5 h-3.5 fill-[#243044]" />
            <span>My Memory Shelf</span>
          </div>
          <h1 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
            Saved Mnemonics & Tricks
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] font-sans">
            Your personal collection of tricky NEET concepts earmarked for quick revision.
          </p>
        </div>

        {savedMnemonics.length > 0 && (
          <button
            onClick={() => onStartRevision()}
            className="px-5 py-2.5 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white border-2 border-[#243044] font-title text-sm font-bold flex items-center gap-2 shadow-sketch shrink-0 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4" />
            <span>Revise Shelf ({savedMnemonics.length})</span>
          </button>
        )}
      </div>

      {/* Saved Cards Grid */}
      {savedMnemonics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {savedMnemonics.map((mnemo) => (
            <MnemonicCard
              key={mnemo.id}
              mnemonic={mnemo}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              onOpenDetail={onSelectMnemonic}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[#FFE681] border-2 border-[#243044] flex items-center justify-center mx-auto text-3xl">
            🔖
          </div>
          <h3 className="font-title text-xl font-bold text-[#243044]">
            Your Memory Shelf is Empty!
          </h3>
          <p className="text-xs text-[#667085] font-sans leading-relaxed">
            Tap the bookmark icon on any mnemonic card to pin formulas, plant hormones, or periodic trends to your personal shelf.
          </p>
        </div>
      )}

    </div>
  );
}
