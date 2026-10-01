import React, { useState } from 'react';
import { 
  Bookmark, 
  RotateCw, 
  Sparkles, 
  HelpCircle, 
  Volume2, 
  ExternalLink,
  Flame,
  AlertTriangle,
  CheckCircle,
  Eye,
  Tag
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { CardDoodle } from './CardDoodle';

export function NoteCard({
  card,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onStartCardQuiz
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const subjectStyles = {
    physics: {
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      accent: 'border-l-4 border-l-blue-500',
      headerBg: 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-950',
      subjectTag: 'Physics'
    },
    chemistry: {
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      accent: 'border-l-4 border-l-emerald-500',
      headerBg: 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-950',
      subjectTag: 'Chemistry'
    },
    botany: {
      badgeBg: 'bg-lime-100 text-lime-800 dark:bg-lime-950 dark:text-lime-300 border-lime-200 dark:border-lime-800',
      accent: 'border-l-4 border-l-lime-500',
      headerBg: 'bg-gradient-to-r from-lime-50 to-emerald-50 dark:from-slate-800 dark:to-lime-950',
      subjectTag: 'Botany'
    },
    zoology: {
      badgeBg: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 border-pink-200 dark:border-pink-800',
      accent: 'border-l-4 border-l-pink-500',
      headerBg: 'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-slate-800 dark:to-pink-950',
      subjectTag: 'Zoology'
    }
  };

  const currentStyle = subjectStyles[card.subject] || subjectStyles.physics;

  const handleFlip = (e) => {
    e.stopPropagation();
    soundEngine.playFlip();
    setIsFlipped(!isFlipped);
  };

  const handleAudioHint = (e) => {
    e.stopPropagation();
    soundEngine.playCorrect();
    setIsPlayingAudio(true);
    
    // Play Web Speech synthesis if available
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = card.quickAudioHint || card.mnemonic || card.handwrittenNote;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 1500);
    }
  };

  return (
    <div className="pinterest-item relative group">
      {/* Tape Strip Post-It decoration */}
      <div className="card-tape hidden sm:block" />

      {/* 3D Flip Outer Container */}
      <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">

          {/* FRONT OF CARD */}
          <div 
            onClick={() => onOpenCardModal(card)}
            className={`
              flip-card-front bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between
              ${currentStyle.accent}
            `}
          >
            {/* Header Ribbon */}
            <div className={`p-4 ${currentStyle.headerBg} border-b border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-2`}>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap mb-1">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${currentStyle.badgeBg}`}>
                    {currentStyle.subjectTag} • Class {card.classLevel}
                  </span>

                  {card.highYield && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> High Yield
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[200px]">
                  {card.chapterName}
                </h4>
              </div>

              {/* Action Icons and Doodle */}
              <div className="flex items-center gap-1.5">
                {/* SVG Doodle badge */}
                <div className="opacity-75 hover:opacity-100 transition-opacity" title={`Concept Sketch: ${card.doodle || 'concept'}`}>
                  <CardDoodle 
                    type={card.doodle || 'default'} 
                    className="w-7 h-7" 
                    color={
                      card.subject === 'physics' ? '#3b82f6' :
                      card.subject === 'chemistry' ? '#10b981' :
                      card.subject === 'botany' ? '#84cc16' : '#ec4899'
                    } 
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEngine.playClick();
                    onToggleFavorite(card.id);
                  }}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isFavorite 
                      ? 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-300' 
                      : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  title={isFavorite ? 'Remove bookmark' : 'Bookmark card'}
                >
                  <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {card.title}
              </h3>

              {/* Handwritten Note Highlight */}
              {card.handwrittenNote && (
                <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 relative">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-bold block mb-0.5 uppercase tracking-wider">
                    ✍️ Memory Hook
                  </span>
                  <p className="font-handwriting text-lg text-amber-950 dark:text-amber-100 leading-snug">
                    "{card.handwrittenNote}"
                  </p>
                </div>
              )}

              {/* Mnemonic Trick Box if available */}
              {card.mnemonic && (
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-[11px] text-amber-600">
                    <Sparkles className="w-3.5 h-3.5" /> High-Yield Formula / Mnemonic
                  </div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">
                    {card.mnemonic}
                  </p>
                </div>
              )}

              {/* Silly Mistake Alert if present */}
              {card.sillyMistakeTrap && (
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-rose-900 dark:text-rose-200 leading-tight">
                    <span className="font-bold">NEET Trap Alert:</span> {card.sillyMistakeTrap}
                  </p>
                </div>
              )}

              {/* Key points bullets preview */}
              {card.keyPoints && card.keyPoints.length > 0 && (
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {card.keyPoints.slice(0, 3).map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span className="line-clamp-2">{pt}</span>
                    </li>
                  ))}
                  {card.keyPoints.length > 3 && (
                    <li className="text-[11px] text-slate-400 font-semibold italic">
                      + {card.keyPoints.length - 3} more key points...
                    </li>
                  )}
                </ul>
              )}

              {/* Source Tag & Metadata */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span className="truncate max-w-[180px]" title={card.ncertRef}>
                  {card.ncertRef}
                </span>
                {card.pyqTag && (
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold shrink-0">
                    {card.pyqTag}
                  </span>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                {/* Audio Hint */}
                <button
                  onClick={handleAudioHint}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                    isPlayingAudio
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                  title="Listen to Audio Memory Hook"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce text-amber-500' : ''}`} />
                  <span className="hidden sm:inline text-[11px]">Audio Hook</span>
                </button>

                {/* Quick Quiz */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEngine.playClick();
                    onStartCardQuiz(card);
                  }}
                  className="p-1.5 rounded-lg text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 flex items-center gap-1 transition-colors"
                  title="Test yourself on this card"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Micro Quiz</span>
                </button>
              </div>

              {/* Flip Card Action */}
              <button
                onClick={handleFlip}
                className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-105"
                title="Flip to reveal back answer"
              >
                <RotateCw className="w-3 h-3" />
                <span>Flip</span>
              </button>
            </div>

          </div>

          {/* BACK OF CARD (Active Recall Answer) */}
          <div 
            onClick={handleFlip}
            className={`
              flip-card-back bg-slate-900 text-white rounded-2xl border border-slate-700 p-5 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden
              ${currentStyle.accent}
            `}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5" /> RECALL ANSWER
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Tap to flip back</span>
              </div>

              <h4 className="font-bold text-base text-white">
                {card.title}
              </h4>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                <span className="text-xs font-bold text-emerald-400 font-mono block">
                  Detailed NCERT Explanation:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.content}
                </p>
              </div>

              {card.keyPoints && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-200">
                    {card.keyPoints.map((kp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>{card.ncertRef}</span>
              <span className="text-amber-400 font-bold hover:underline">Click anywhere to flip ↩</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
