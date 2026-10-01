import React from 'react';

/**
 * Hand-drawn Mascot & Book Stack illustrations inspired by NEET Mnemo reference artwork.
 */

export function DoodleBrainMascot({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Lightbulb above head */}
      <div className="absolute -top-7 right-3 animate-pulse-subtle">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none" stroke="#243044" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Bulb glow rays */}
          <line x1="50" y1="10" x2="50" y2="2" stroke="#FFE681" strokeWidth="8" />
          <line x1="20" y1="20" x2="12" y2="12" stroke="#FFE681" strokeWidth="8" />
          <line x1="80" y1="20" x2="88" y2="12" stroke="#FFE681" strokeWidth="8" />
          {/* Bulb Body */}
          <path d="M30 45 C30 25 70 25 70 45 C70 58 60 62 60 72 L40 72 C40 62 30 58 30 45 Z" fill="#FFE681" />
          <rect x="42" y="74" width="16" height="6" fill="#DCE8FF" stroke="#243044" strokeWidth="4" rx="2" />
          <path d="M46 80 L54 80" stroke="#243044" strokeWidth="4" />
        </svg>
      </div>

      {/* Main Brain Body */}
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-sm">
        {/* Brain Lobes (Pink Pastel) */}
        <path 
          d="M45 55 C30 40, 20 65, 30 85 C18 95, 25 120, 48 118 C55 128, 80 130, 92 118 C115 125, 138 110, 130 85 C142 65, 125 40, 105 50 C95 32, 60 35, 45 55 Z" 
          fill="#FF9FB2" 
          stroke="#243044" 
          strokeWidth="4.5" 
          strokeLinejoin="round" 
        />
        
        {/* Brain Fissures / Wrinkles */}
        <path d="M55 60 Q70 70 65 85 Q60 100 78 105" stroke="#243044" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M98 62 Q85 75 92 90 Q96 100 88 108" stroke="#243044" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M78 45 Q80 58 75 68" stroke="#243044" strokeWidth="3" strokeLinecap="round" />
        
        {/* Happy Cheerful Eyes */}
        <ellipse cx="62" cy="78" rx="4.5" ry="5.5" fill="#243044" />
        <ellipse cx="90" cy="78" rx="4.5" ry="5.5" fill="#243044" />
        {/* Eye highlights */}
        <circle cx="60.5" cy="76" r="1.5" fill="#FFFFFF" />
        <circle cx="88.5" cy="76" r="1.5" fill="#FFFFFF" />
        
        {/* Rosy Cheeks */}
        <circle cx="50" cy="85" r="5" fill="#FF8D78" opacity="0.6" />
        <circle cx="102" cy="85" r="5" fill="#FF8D78" opacity="0.6" />
        
        {/* Big Smile */}
        <path d="M68 88 Q76 98 84 88" stroke="#243044" strokeWidth="3.5" strokeLinecap="round" />

        {/* Arms waving */}
        <path d="M28 85 Q12 75 16 62" stroke="#243044" strokeWidth="4" strokeLinecap="round" />
        <path d="M128 85 Q145 75 142 62" stroke="#243044" strokeWidth="4" strokeLinecap="round" />

        {/* Legs standing */}
        <path d="M58 122 L55 142 M55 142 L48 144" stroke="#243044" strokeWidth="4" strokeLinecap="round" />
        <path d="M92 122 L95 142 M95 142 L102 144" stroke="#243044" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function DoodleBooksStack({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-sm">
        {/* BOTTOM BOOK: BIOLOGY (Green) */}
        <g transform="translate(10, 88) rotate(-2 70 20)">
          {/* Pages */}
          <path d="M25 15 L125 15 L125 32 L25 32 Z" fill="#FFFDF7" stroke="#243044" strokeWidth="3.5" />
          {/* Cover */}
          <path d="M20 12 L128 12 L128 35 L20 35 Q15 24 20 12 Z" fill="#78D6A3" stroke="#243044" strokeWidth="4" strokeLinejoin="round" />
          {/* Spine text */}
          <text x="40" y="27" fill="#243044" fontSize="10" fontWeight="bold" fontFamily="Fredoka, sans-serif" letterSpacing="1">
            BIOLOGY
          </text>
        </g>

        {/* MIDDLE BOOK: CHEMISTRY (Purple) */}
        <g transform="translate(14, 58) rotate(3 70 20)">
          {/* Pages */}
          <path d="M25 15 L122 15 L122 30 L25 30 Z" fill="#FFFDF7" stroke="#243044" strokeWidth="3.5" />
          {/* Cover */}
          <path d="M20 12 L125 12 L125 33 L20 33 Q15 23 20 12 Z" fill="#B69CFF" stroke="#243044" strokeWidth="4" strokeLinejoin="round" />
          {/* Spine text */}
          <text x="36" y="26" fill="#243044" fontSize="9.5" fontWeight="bold" fontFamily="Fredoka, sans-serif" letterSpacing="1">
            CHEMISTRY
          </text>
        </g>

        {/* TOP BOOK: PHYSICS (Blue) */}
        <g transform="translate(12, 28) rotate(-1 70 20)">
          {/* Pages */}
          <path d="M25 15 L120 15 L120 30 L25 30 Z" fill="#FFFDF7" stroke="#243044" strokeWidth="3.5" />
          {/* Cover */}
          <path d="M20 12 L123 12 L123 33 L20 33 Q15 23 20 12 Z" fill="#8DD8FF" stroke="#243044" strokeWidth="4" strokeLinejoin="round" />
          {/* Spine text */}
          <text x="42" y="26" fill="#243044" fontSize="10" fontWeight="bold" fontFamily="Fredoka, sans-serif" letterSpacing="1">
            PHYSICS
          </text>
        </g>
      </svg>
    </div>
  );
}

export function DoodleSparkle({ className = "w-5 h-5", color = "#FFE681" }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} stroke="#243044" strokeWidth="6" strokeLinejoin="round" className={className}>
      <path d="M50 0 Q50 50 0 50 Q50 50 50 100 Q50 50 100 50 Q50 50 50 0 Z" />
    </svg>
  );
}

export function DoodleStar({ className = "w-5 h-5", color = "#FFE681" }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} stroke="#243044" strokeWidth="6" strokeLinejoin="round" className={className}>
      <polygon points="50,5 64,36 98,38 72,60 80,94 50,75 20,94 28,60 2,38 36,36" />
    </svg>
  );
}

export function DoodleArrow({ className = "w-8 h-4", direction = "right", color = "#243044" }) {
  return (
    <svg viewBox="0 0 60 30" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 15 Q30 8 50 15 M40 8 L52 15 L40 22" />
    </svg>
  );
}
