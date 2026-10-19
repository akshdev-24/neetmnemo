import React from 'react';
import { Home, BookOpen, Search, Bookmark, MoreHorizontal } from 'lucide-react';

export function MobileBottomNav({ currentRoute, onNavigate, savedCount = 0 }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chapters', label: 'Chapters', icon: BookOpen },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'favorites', label: 'Favorites', icon: Bookmark, badge: savedCount > 0 ? savedCount : null },
    { id: 'progress', label: 'More', icon: MoreHorizontal }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 mobile-bottom-nav h-16 flex items-center justify-around px-2 border-t-2 border-[#E8E4D9]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentRoute === tab.id || (tab.id === 'chapters' && ['chapters', 'subjects', 'biology', 'chapter'].includes(currentRoute));
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`
              flex flex-col items-center justify-center w-14 py-1 rounded-xl transition-all relative
              ${isActive ? 'text-[#243044] font-bold' : 'text-[#667085] hover:text-[#243044]'}
            `}
          >
            <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-[#FFE681]' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-title mt-0.5">{tab.label}</span>
            {tab.badge && (
              <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-[#FF8D78] text-white text-[9px] font-bold flex items-center justify-center font-mono">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
