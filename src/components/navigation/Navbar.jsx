import React from 'react';
import { Search, Bookmark, Flame, Zap, HelpCircle, BookOpen, Menu, X, BarChart2, Info, Award } from 'lucide-react';
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
    { id: 'class-11', label: 'Class 11' },
    { id: 'class-12', label: 'Class 12' },
    { id: 'chapters', label: 'All Chapters' },
    { id: 'revision', label: 'Revision' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'about', label: 'About' },
    { id: 'favorites', label: 'Saves', badge: savedCount > 0 ? savedCount : null },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-[#E8E4D9]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 sm:gap-2 group text-left transition-transform active:scale-95 shrink-0"
          aria-label="NEETMONIC Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FFE681] border-2 border-[#243044] flex items-center justify-center shadow-sketch group-hover:rotate-6 transition-transform">
            <span className="font-title text-lg sm:text-xl font-bold text-[#243044]">NM</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-title text-lg sm:text-xl font-bold text-[#243044] tracking-tight">NEET</span>
              <span className="font-title text-lg sm:text-xl font-bold text-[#3DBE75]">MONIC</span>
              <DoodleSparkle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE681]" />
            </div>
            <p className="text-[10px] font-hand text-[#667085] leading-none hidden sm:block">
              NEET Biology Mnemonics &amp; NCERT Revision
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Desktop Navigation">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  px-3 py-1.5 rounded-full text-xs font-bold font-title transition-all relative min-h-[36px] flex items-center
                  ${isActive 
                    ? 'bg-[#243044] text-[#FFFDF7] shadow-sketch' 
                    : 'text-[#243044] hover:bg-[#EFE4FF] hover:text-[#A66CFF]'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
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
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white border-2 border-[#E8E4D9] text-[#243044] hover:border-[#243044] hover:bg-[#FFE681]/30 transition-all shadow-sm flex items-center justify-center active:scale-95"
            title="Search Mnemonics (Ctrl+K)"
            aria-label="Search Mnemonics"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Streak Counter */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE681]/40 border-1.5 border-[#FFE681] text-[#243044] font-title text-xs font-bold min-h-[40px]">
            <Flame className="w-4 h-4 text-[#FF8D78] fill-[#FF8D78]" />
            <span>{streak} Days</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white border-2 border-[#E8E4D9] text-[#243044] hover:border-[#243044] flex items-center justify-center active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b-2 border-[#E8E4D9] px-4 py-3 space-y-2 shadow-lg animate-slide-up max-h-[calc(100vh-64px)] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`
                w-full text-left px-4 py-3 min-h-[44px] rounded-xl font-title text-sm font-bold flex items-center justify-between active:scale-[0.99] transition-all
                ${currentRoute === item.id 
                  ? 'bg-[#243044] text-[#FFFDF7]' 
                  : 'bg-white border border-[#E8E4D9] text-[#243044] hover:border-[#243044]'
                }
              `}
              aria-current={currentRoute === item.id ? 'page' : undefined}
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
