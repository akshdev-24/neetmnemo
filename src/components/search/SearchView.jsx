import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, BookOpen } from 'lucide-react';
import { MNEMONICS } from '../../data/mnemonics';
import { MnemonicCard } from '../mnemonics/MnemonicCard';

export function SearchView({
  initialQuery = '',
  onSelectMnemonic,
  favorites = [],
  onToggleFavorite
}) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSubject, setSelectedSubject] = useState('all');

  const popularKeywords = [
    'SI Units', 'SUVAT', 'PMAT', 'Taxonomy', 'Aldol', 
    'Plant Hormones', 'Heart Valves', 'Ionization', 'Friction', 'Escape Velocity'
  ];

  const searchResults = useMemo(() => {
    return MNEMONICS.filter((item) => {
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) {
        return false;
      }
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchMnemo = item.mnemonic.toLowerCase().includes(q);
      const matchFact = item.fact.toLowerCase().includes(q);
      const matchHook = item.memoryHook?.toLowerCase().includes(q);
      const matchTopic = item.topicTitle.toLowerCase().includes(q);
      const matchChapter = item.chapterTitle.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchMnemo || matchFact || matchHook || matchTopic || matchChapter || matchTags;
    });
  }, [searchQuery, selectedSubject]);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Search Header */}
      <div className="text-center space-y-2">
        <h1 className="font-title text-2xl sm:text-3xl font-bold text-[#243044]">
          Search <span className="hl-yellow">Visual Mnemonics</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] font-sans">
          Search across 100+ NEET Physics, Chemistry & Biology memory hooks.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#667085]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by formula, mnemonic keyword, hormone, law..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border-2 border-[#243044] font-title text-sm sm:text-base text-[#243044] placeholder:text-[#667085]/60 shadow-sketch focus:outline-none focus:border-[#5B8DEF]"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 p-1 rounded-lg hover:bg-slate-100 text-[#667085]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Search Suggestion Pills */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-xs font-title font-bold text-[#667085] mr-1">
          Suggestions:
        </span>
        {popularKeywords.map((kw) => (
          <button
            key={kw}
            onClick={() => setSearchQuery(kw)}
            className="px-2.5 py-1 rounded-full bg-white border border-[#E8E4D9] hover:border-[#243044] text-[11px] font-title font-bold text-[#243044] hover:bg-[#FFE681]/30 transition-all"
          >
            {kw}
          </button>
        ))}
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex items-center justify-between gap-2 border-t border-[#E8E4D9] pt-4 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'physics', label: 'Physics' },
            { id: 'chemistry', label: 'Chemistry' },
            { id: 'biology', label: 'Biology' },
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubject(sub.id)}
              className={`
                px-3.5 py-1.5 rounded-xl font-title text-xs font-bold transition-all
                ${selectedSubject === sub.id 
                  ? 'bg-[#243044] text-white shadow-sm' 
                  : 'bg-white border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
                }
              `}
            >
              {sub.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono font-bold text-[#667085]">
          {searchResults.length} {searchResults.length === 1 ? 'Mnemonic' : 'Mnemonics'} found
        </span>
      </div>

      {/* Results Grid */}
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {searchResults.map((mnemo) => (
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
        <div className="p-10 text-center rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-3 max-w-md mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#FFE681] border-2 border-[#243044] flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="font-title text-lg font-bold text-[#243044]">
            {searchQuery ? `No mnemonics matched "${searchQuery}"` : 'No mnemonics available in library'}
          </h3>
          <p className="text-xs text-[#667085] font-sans">
            {searchQuery
              ? 'Try searching for another keyword or reset the subject filter.'
              : 'All mnemonics have been cleared across subjects and chapters.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSubject('all'); }}
            className="px-4 py-2 rounded-xl bg-[#243044] text-white font-title text-xs font-bold"
          >
            Clear Search
          </button>
        </div>
      )}

    </div>
  );
}
