import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Search, 
  Bookmark, 
  Menu, 
  X,
  Target,
  Trophy,
  Sparkles
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function Header({
  searchQuery,
  setSearchQuery,
  streak,
  xp,
  dailyGoalProgress,
  dailyGoalTotal,
  favoritesCount,
  showFavoritesOnly,
  setShowFavoritesOnly,
  theme,
  setTheme,
  isMuted,
  setIsMuted,
  activeMode,
  setActiveMode,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const [showAchievementsPopover, setShowAchievementsPopover] = useState(false);

  const toggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEngine.playClick();
    }
  };

  const toggleTheme = () => {
    soundEngine.playClick();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div 
              onClick={() => { setActiveMode('feed'); soundEngine.playClick(); }} 
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="font-handwriting text-2xl tracking-tighter">N</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white font-sans">
                    Scribble<span className="text-amber-500 font-extrabold font-handwriting text-2xl">NEET</span>
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full border border-emerald-300 dark:border-emerald-800">
                    NCERT 2025
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block">
                  Handwritten Notes & Visual Flashcards
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulas, mnemonics, NCERT quotes or PYQs..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 rounded-xl border border-transparent focus:border-amber-400 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Gamification Status & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Daily Streak Indicator */}
            <div 
              onClick={() => setShowAchievementsPopover(!showAchievementsPopover)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              title="Daily Revision Streak"
            >
              <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-flame" />
              <span className="text-sm font-bold text-amber-700 dark:text-amber-300 font-mono">
                {streak}
              </span>
              <span className="text-xs text-amber-600 dark:text-amber-400 hidden lg:inline">Days</span>
            </div>

            {/* XP Points */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 font-bold text-sm text-emerald-700 dark:text-emerald-300 font-mono">
              <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>{xp} XP</span>
            </div>

            {/* Favorites Toggle */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setShowFavoritesOnly(!showFavoritesOnly);
              }}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 ${
                showFavoritesOnly
                  ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="View Bookmarked Cards"
            >
              <Bookmark className={`w-4 h-4 ${showFavoritesOnly ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="text-xs font-bold font-mono px-1.5 py-0.5 rounded-full bg-rose-500 text-white">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Sound Mute Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={isMuted ? 'Unmute audio effects' : 'Mute audio effects'}
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-500" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Light / Dark Mode"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-indigo-500" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="py-2 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search NEET formulas, mnemonics..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 rounded-xl border border-transparent focus:border-amber-400 focus:bg-white dark:focus:bg-slate-900 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
