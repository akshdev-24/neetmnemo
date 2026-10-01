import React from 'react';

/**
 * Hand-drawn style SVG doodle sketches for NEET UG revision cards.
 * Gives cards an authentic, medical student notebook / scribbled sketch aesthetic.
 */
export function CardDoodle({ type = 'default', className = 'w-10 h-10', color = 'currentColor' }) {
  const doodles = {
    // Botany / Zoology / Bio doodles
    algae: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M50 85 C45 60, 30 50, 25 30 C20 15, 35 15, 40 25 C45 35, 55 45, 50 65" />
        <path d="M50 85 C55 60, 70 50, 75 30 C80 15, 65 15, 60 25 C55 35, 45 45, 50 65" />
        <path d="M48 90 Q50 85 52 90" strokeWidth="4" />
        <circle cx="35" cy="45" r="3" fill={color} />
        <circle cx="65" cy="45" r="3" fill={color} />
        <path d="M30 65 Q50 70 70 65" strokeDasharray="3 3" />
      </svg>
    ),
    dna: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M30 15 C30 35, 70 40, 70 60 C70 80, 30 85, 30 95" />
        <path d="M70 15 C70 35, 30 40, 30 60 C30 80, 70 85, 70 95" />
        <line x1="33" y1="22" x2="67" y2="22" strokeDasharray="2 3" />
        <line x1="38" y1="32" x2="62" y2="32" strokeDasharray="2 3" />
        <line x1="48" y1="50" x2="52" y2="50" strokeWidth="4" />
        <line x1="38" y1="68" x2="62" y2="68" strokeDasharray="2 3" />
        <line x1="33" y1="78" x2="67" y2="78" strokeDasharray="2 3" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 80 Q25 35 75 20 Q80 70 20 80 Z" />
        <path d="M20 80 Q45 52 75 20" />
        <path d="M38 65 Q48 55 58 60" />
        <path d="M48 50 Q58 40 68 45" />
        <path d="M32 55 Q38 45 44 48" />
        <path d="M15 88 C18 83 20 80 20 80" strokeWidth="3" />
      </svg>
    ),
    cell: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="50" cy="50" rx="38" ry="32" />
        <ellipse cx="48" cy="46" rx="14" ry="12" strokeDasharray="3 2" />
        <circle cx="48" cy="46" r="5" fill={color} />
        <path d="M25 40 Q28 32 35 35" strokeDasharray="2 2" />
        <path d="M68 60 Q75 62 70 70" strokeDasharray="2 2" />
        <path d="M30 68 C35 65 40 72 45 68" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M50 82 C50 82 18 60 18 35 C18 22 28 15 38 18 C46 20 50 28 50 28 C50 28 54 20 62 18 C72 15 82 22 82 35 C82 60 50 82 50 82 Z" />
        <path d="M32 30 Q38 25 44 32" strokeDasharray="2 2" />
        <path d="M50 42 L50 68" strokeDasharray="3 2" />
      </svg>
    ),
    pollen: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="16" strokeDasharray="3 3" />
        <path d="M50 18 L50 25 M50 75 L50 82 M18 50 L25 50 M75 50 L82 50" />
        <path d="M28 28 L33 33 M67 67 L72 72 M28 72 L33 67 M67 33 L72 28" />
      </svg>
    ),
    pcr: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="25" y="20" width="50" height="60" rx="8" />
        <line x1="25" y1="40" x2="75" y2="40" />
        <line x1="35" y1="55" x2="65" y2="55" strokeDasharray="2 3" />
        <line x1="35" y1="65" x2="65" y2="65" strokeDasharray="2 3" />
        <circle cx="50" cy="30" r="3" fill={color} />
      </svg>
    ),
    punnett: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="20" y="20" width="60" height="60" rx="4" />
        <line x1="50" y1="20" x2="50" y2="80" />
        <line x1="20" y1="50" x2="80" y2="50" />
        <text x="30" y="42" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif">T</text>
        <text x="60" y="42" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif">t</text>
        <text x="30" y="72" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif">t</text>
        <text x="60" y="72" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif">t</text>
      </svg>
    ),
    antibody: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="50" y1="50" x2="50" y2="85" />
        <line x1="50" y1="50" x2="25" y2="25" />
        <line x1="50" y1="50" x2="75" y2="25" />
        <line x1="32" y1="40" x2="20" y2="30" strokeDasharray="2 2" />
        <line x1="68" y1="40" x2="80" y2="30" strokeDasharray="2 2" />
      </svg>
    ),

    // Physics doodles
    prism: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="50,15 15,80 85,80" />
        <line x1="5" y1="55" x2="35" y2="50" />
        <line x1="35" y1="50" x2="65" y2="45" />
        <line x1="65" y1="45" x2="95" y2="35" strokeDasharray="2 2" />
        <line x1="65" y1="45" x2="95" y2="55" strokeDasharray="2 2" />
      </svg>
    ),
    circuit: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 50 L30 50 L35 35 L45 65 L55 35 L65 65 L70 50 L85 50" />
        <circle cx="15" cy="50" r="3" fill={color} />
        <circle cx="85" cy="50" r="3" fill={color} />
        <path d="M50 75 L50 85 M40 80 L60 80" strokeWidth="2" />
      </svg>
    ),
    wheel: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="50" cy="50" r="32" />
        <circle cx="50" cy="50" r="6" fill={color} />
        <line x1="50" y1="18" x2="50" y2="82" strokeDasharray="3 3" />
        <line x1="18" y1="50" x2="82" y2="50" strokeDasharray="3 3" />
        <path d="M68 32 C74 38 78 48 76 58" strokeWidth="3" />
      </svg>
    ),
    magnet: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M30 25 L30 55 C30 68 40 75 50 75 C60 75 70 68 70 55 L70 25" />
        <path d="M22 25 L38 25 M62 25 L78 25" strokeWidth="3" />
        <line x1="22" y1="35" x2="38" y2="35" />
        <line x1="62" y1="35" x2="78" y2="35" />
        <text x="27" y="32" fontSize="9" fill={color} fontWeight="bold">N</text>
        <text x="67" y="32" fontSize="9" fill={color} fontWeight="bold">S</text>
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 50 Q25 20 40 50 T70 50 T100 50" />
        <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="2 3" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="80" strokeDasharray="2 2" strokeWidth="1.5" />
      </svg>
    ),

    // Chemistry doodles
    atom: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(-30 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(90 50 50)" />
        <circle cx="50" cy="50" r="5" fill={color} />
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M44 20 L56 20 M46 20 L46 38 L25 75 C22 80 26 85 32 85 L68 85 C74 85 78 80 75 75 L54 38 L54 20" />
        <path d="M33 72 Q50 68 67 72" strokeDasharray="2 2" />
        <circle cx="45" cy="78" r="2" fill={color} />
        <circle cx="55" cy="74" r="1.5" fill={color} />
      </svg>
    ),
    molecule: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="50,22 75,37 75,67 50,82 25,67 25,37" />
        <circle cx="50" cy="52" r="16" strokeDasharray="3 3" />
        <line x1="75" y1="37" x2="88" y2="30" />
        <text x="89" y="32" fontSize="9" fill={color} fontWeight="bold">OH</text>
      </svg>
    ),
    graph: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="20" y1="15" x2="20" y2="80" />
        <line x1="20" y1="80" x2="85" y2="80" />
        <path d="M22 75 Q45 70 55 40 T80 25" strokeWidth="3" />
        <circle cx="80" cy="25" r="3" fill={color} />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="22" y="20" width="56" height="60" rx="6" />
        <line x1="32" y1="35" x2="68" y2="35" />
        <line x1="32" y1="48" x2="68" y2="48" />
        <line x1="32" y1="61" x2="52" y2="61" />
        <path d="M60 60 L75 75 M75 60 L60 75" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    )
  };

  return doodles[type] || doodles.default;
}
