import React, { useEffect } from 'react';
import { 
  X, 
  Bookmark, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle, 
  Volume2, 
  HelpCircle,
  BookOpen,
  Share2,
  Check
} from 'lucide-react';
import { InteractiveDiagram } from './InteractiveDiagram';
import { CardDoodle } from './CardDoodle';
import { soundEngine } from '../utils/soundEngine';

export function CardModal({
  card,
  onClose,
  isFavorite,
  onToggleFavorite,
  onStartQuiz
}) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!card) return null;

  const handleShare = () => {
    soundEngine.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${card.title} - ${card.handwrittenNote || card.mnemonic} (Ref: ${card.ncertRef})`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAudio = () => {
    soundEngine.playCorrect();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = card.quickAudioHint || card.mnemonic || card.content;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="p-5 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white font-bold text-xs uppercase tracking-wider font-mono">
              {card.subject} • Class {card.classLevel}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {card.chapterName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { soundEngine.playClick(); onToggleFavorite(card.id); }}
              className={`p-2 rounded-xl border transition-colors ${
                isFavorite 
                  ? 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-300 border-rose-300' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
              }`}
              title="Bookmark Card"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Copy Memory Hook text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => { soundEngine.playClick(); onClose(); }}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Card Title & Doodle Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {card.title}
              </h2>
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold mt-1">
                Source: {card.ncertRef} {card.pyqTag && `• [${card.pyqTag}]`}
              </p>
            </div>
            <div className="p-2 rounded-2xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 shrink-0 shadow-sm" title="NCERT Doodle Concept">
              <CardDoodle
                type={card.doodle || 'default'}
                className="w-12 h-12"
                color={
                  card.subject === 'physics' ? '#3b82f6' :
                  card.subject === 'chemistry' ? '#10b981' :
                  card.subject === 'botany' ? '#84cc16' : '#ec4899'
                }
              />
            </div>
          </div>

          {/* Handwritten Post-It Memory Hook */}
          {card.handwrittenNote && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-dashed border-amber-300 dark:border-amber-800 space-y-1 relative">
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider block">
                ✍️ Hand-Drawn Memory Hook
              </span>
              <p className="font-handwriting text-2xl text-amber-950 dark:text-amber-100 leading-snug">
                "{card.handwrittenNote}"
              </p>
            </div>
          )}

          {/* Mnemonic Banner */}
          {card.mnemonic && (
            <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                  <Sparkles className="w-4 h-4" /> Official Mnemonic Formula
                </span>
                <button
                  onClick={handleAudio}
                  className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Read Aloud
                </button>
              </div>
              <p className="font-mono text-base text-amber-200 font-bold">
                {card.mnemonic}
              </p>
            </div>
          )}

          {/* Interactive Diagram if present */}
          {card.type === 'diagram' && card.diagramHotspots && (
            <InteractiveDiagram
              hotspots={card.diagramHotspots}
              title={card.title}
              subject={card.subject}
            />
          )}

          {/* Detailed Content */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              NCERT Core Concept Explanation
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60">
              {card.content}
            </p>
          </div>

          {/* High Yield Key Points */}
          {card.keyPoints && (
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Key Exam Points for NEET
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {card.keyPoints.map((kp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium flex items-start gap-2 border border-slate-200 dark:border-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Silly Mistake Trap Alert */}
          {card.sillyMistakeTrap && (
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800/60 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200 uppercase tracking-wider font-mono">
                  Common NEET Silly Mistake Trap!
                </h4>
                <p className="text-xs text-rose-800 dark:text-rose-300 mt-0.5 leading-snug">
                  {card.sillyMistakeTrap}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">
              Tags: {card.tags.map(t => `#${t}`).join(' ')}
            </span>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
              onStartQuiz(card);
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Launch Quick Quiz on this Topic (+20 XP)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
