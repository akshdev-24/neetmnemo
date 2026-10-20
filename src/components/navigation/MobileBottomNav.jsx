import React from 'react';
import { Home, BookOpen, Zap, Award, Bookmark } from 'lucide-react';

export function MobileBottomNav({ currentRoute, onNavigate, savedCount = 0 }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, matchRoutes: ['home'] },
    { id: 'chapters', label: 'Study', icon: BookOpen, matchRoutes: ['chapters', 'subjects', 'biology', 'chapter', 'class-11', 'class-12'] },
    { id: 'revision', label: 'Revision', icon: Zap, matchRoutes: ['revision'] },
    { id: 'quiz', label: 'Quiz', icon: Award, matchRoutes: ['quiz'] },
    { id: 'favorites', label: 'Saved', icon: Bookmark, matchRoutes: ['favorites'], badge: savedCount > 0 ? savedCount : null },
  ];

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 mobile-bottom-nav h-16 flex items-center justify-around px-1 border-t-2 border-[#E8E4D9] bg-[#FFFDF7]/95 backdrop-blur-md pb-safe"
      aria-label="Mobile Navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.matchRoutes.includes(currentRoute);
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`
              flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 px-1 rounded-xl transition-all relative active:scale-95
              ${isActive ? 'text-[#243044] font-bold' : 'text-[#667085] hover:text-[#243044]'}
            `}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-[#FFE681] text-[#243044]' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-title mt-0.5 tracking-tight leading-none">{tab.label}</span>
            {tab.badge && (
              <span className="absolute top-1 right-2 min-w-[16px] h-4 px-1 rounded-full bg-[#FF8D78] text-white text-[9px] font-bold flex items-center justify-center font-mono shadow-sm">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
