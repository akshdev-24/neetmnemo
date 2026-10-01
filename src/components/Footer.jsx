import React from 'react';
import { Sparkles, Heart, ShieldCheck, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold font-handwriting text-xl">
                N
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white font-sans">
                Scribble<span className="text-amber-500 font-handwriting text-2xl">NEET</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Making NEET UG revision memorable, visual, and gamified. Built with 100% NCERT high-yield notes, handwritten memory hooks, and speed active recall.
            </p>
          </div>

          {/* Keyboard Shortcuts Helper */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              ⚡ Keyboard Shortcuts
            </h4>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 font-mono">
              <li className="flex items-center justify-between">
                <span>Flip Active Recall Card</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200">Space</kbd>
              </li>
              <li className="flex items-center justify-between">
                <span>Next / Prev Card</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200">← / →</kbd>
              </li>
              <li className="flex items-center justify-between">
                <span>Close Popup / Modal</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200">Esc</kbd>
              </li>
            </ul>
          </div>

          {/* NCERT & Syllabus Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Syllabus Compliance
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              All mnemonics, formulas, and diagrams are mapped to the latest NTA NEET UG Syllabus (Class 11 & Class 12 NCERT Textbooks). Zero invented content.
            </p>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <span>© 2026 ScribbleNEET • Built for NEET UG Aspirants</span>
          <div className="flex items-center gap-3">
            <span>Accessibility & Reduced Motion Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
