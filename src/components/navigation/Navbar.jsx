import React from 'react';
import { Search, Bookmark, Flame, Zap, HelpCircle, BookOpen, Menu, X, BarChart2, Info } from 'lucide-react';
import { DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function Navbar({
  currentRoute,
  onNavigate,
  savedCount = 0,
  streak = 4,
  onOpenSearch,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'revision', label: 'Quick Revision' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'about', label: 'About' },
    { id: 'favorites', label: 'My Saves', badge: savedCount > 0 ? savedCount : null },
    { id: 'progress', label: 'Progress' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-[#E8E4D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group text-left transition-transform active:scale-95"
          aria-label="NEET Mnemo Home"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#FFE681] border-2 border-[#243044] flex items-center justify-center shadow-sketch group-hover:rotate-6 transition-transform">
            <span className="font-title text-xl font-bold text-[#243044]">NM</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-title text-xl font-bold text-[#243044] tracking-tight">NEET</span>
              <span className="font-title text-xl font-bold text-[#5B8DEF]">Mnemo</span>
              <DoodleSparkle className="w-4 h-4 text-[#FFE681]" />
            </div>
            <p className="text-[10px] font-hand text-[#667085] leading-none hidden sm:block">
              Remember More. Revise Faster.
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  px-3.5 py-1.5 rounded-full text-xs font-bold font-title transition-all relative
                  ${isActive 
                    ? 'bg-[#243044] text-[#FFFDF7] shadow-sketch' 
                    : 'text-[#243044] hover:bg-[#EFE4FF] hover:text-[#A66CFF]'
                  }
                `}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] bg-[#FF8D78] text-white font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search + Streak + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl bg-white border-2 border-[#E8E4D9] text-[#243044] hover:border-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm"
            title="Search Mnemonics (Ctrl+K)"
            aria-label="Search Mnemonics"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Streak Counter */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE681]/40 border-1.5 border-[#FFE681] text-[#243044] font-title text-xs font-bold">
            <Flame className="w-4 h-4 text-[#FF8D78] fill-[#FF8D78]" />
            <span>{streak} Days</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border-2 border-[#E8E4D9] text-[#243044]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b-2 border-[#E8E4D9] px-4 py-4 space-y-2 shadow-lg animate-slide-up">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`
                w-full text-left px-4 py-2.5 rounded-xl font-title text-sm font-bold flex items-center justify-between
                ${currentRoute === item.id 
                  ? 'bg-[#243044] text-[#FFFDF7]' 
                  : 'bg-white border border-[#E8E4D9] text-[#243044]'
                }
              `}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-[#FF8D78] text-white">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
