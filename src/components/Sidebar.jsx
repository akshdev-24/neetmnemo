import React from 'react';
import { 
  Grid, 
  BookOpen, 
  Zap, 
  HelpCircle, 
  Atom, 
  FlaskConical, 
  Sprout, 
  Dna, 
  Sparkles,
  Layers,
  Filter,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function Sidebar({
  activeSubject,
  setActiveSubject,
  activeClassLevel,
  setActiveClassLevel,
  activeCardType,
  setActiveCardType,
  activeMode,
  setActiveMode,
  showFavoritesOnly,
  setShowFavoritesOnly,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const handleModeChange = (mode) => {
    soundEngine.playClick();
    setActiveMode(mode);
    setMobileMenuOpen(false);
  };

  const handleSubjectChange = (subjectId) => {
    soundEngine.playClick();
    setActiveSubject(subjectId);
    setShowFavoritesOnly(false);
    setMobileMenuOpen(false);
  };

  const subjects = [
    { id: 'all', label: 'All Subjects', icon: Grid, color: 'text-slate-600 dark:text-slate-300' },
    { id: 'physics', label: 'Physics', icon: Atom, color: 'text-blue-600 dark:text-blue-400', badge: '11 & 12' },
    { id: 'chemistry', label: 'Chemistry', icon: FlaskConical, color: 'text-emerald-600 dark:text-emerald-400', badge: 'Organic/Inorg' },
    { id: 'botany', label: 'Botany', icon: Sprout, color: 'text-lime-600 dark:text-lime-400', badge: 'Plant Physio' },
    { id: 'zoology', label: 'Zoology', icon: Dna, color: 'text-pink-600 dark:text-pink-400', badge: 'Human Physio' },
  ];

  const cardTypes = [
    { id: 'all', label: 'All Formats' },
    { id: 'mnemonic', label: '🧠 Mnemonics' },
    { id: 'formula', label: '📐 Formula Doodles' },
    { id: 'diagram', label: '🔬 Annotated Diagrams' },
    { id: 'flashcard', label: '⚡ Active Recall Cards' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Main Sidebar Drawer */}
      <aside className={`
        fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 overflow-y-auto transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="space-y-6">
          
          {/* Main App Navigation Modes */}
          <div>
            <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              Learning Modes
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => handleModeChange('feed')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeMode === 'feed' && !showFavoritesOnly
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Pinterest Card Feed</span>
              </button>

              <button
                onClick={() => handleModeChange('architecture')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeMode === 'architecture'
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Syllabus Map</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold">
                  NTA 2025
                </span>
              </button>

              <button
                onClick={() => handleModeChange('revision')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeMode === 'revision'
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Speed Active Recall</span>
              </button>

              <button
                onClick={() => handleModeChange('quiz')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeMode === 'quiz'
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Bite-Sized Quizzes</span>
              </button>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Subjects Navigation */}
          <div>
            <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              NEET Subjects
            </h3>
            <div className="space-y-1">
              {subjects.map((sub) => {
                const IconComponent = sub.icon;
                const isSelected = activeSubject === sub.id && activeMode === 'feed' && !showFavoritesOnly;
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSubjectChange(sub.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${sub.color}`} />
                      <span>{sub.label}</span>
                    </div>
                    {sub.badge && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {sub.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Class Level Filters */}
          <div>
            <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              NCERT Volume / Class
            </h3>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              {[
                { id: 'all', label: 'All' },
                { id: 11, label: 'Class 11' },
                { id: 12, label: 'Class 12' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => { soundEngine.playClick(); setActiveClassLevel(c.id); }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeClassLevel === c.id
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Format Filters */}
          <div>
            <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              Note Format
            </h3>
            <div className="space-y-1">
              {cardTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { soundEngine.playClick(); setActiveCardType(t.id); }}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCardType === t.id
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Handcrafted Guarantee Box */}
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-indigo-500/10 border border-amber-300/30 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white font-handwriting text-base">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>100% High-Yield NCERT</span>
            </div>
            <p className="leading-snug text-[11px]">
              Every mnemonic and formula is cross-checked against official NCERT 11 & 12 textbooks and NEET UG PYQs.
            </p>
          </div>

        </div>
      </aside>
    </>
  );
}
