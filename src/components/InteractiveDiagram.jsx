import React, { useState } from 'react';
import { Eye, EyeOff, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export function InteractiveDiagram({ hotspots, title, subject }) {
  const [showLabels, setShowLabels] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleHotspotClick = (hs) => {
    soundEngine.playClick();
    setActiveHotspot(activeHotspot?.id === hs.id ? null : hs);
  };

  return (
    <div className="rounded-2xl bg-slate-900 text-white p-5 border border-slate-800 space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            🔬 Interactive Visual Diagram
          </span>
          <h4 className="font-bold text-base text-white">{title}</h4>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            setShowLabels(!showLabels);
          }}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
        >
          {showLabels ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{showLabels ? 'Hide Labels (Quiz Mode)' : 'Reveal Labels'}</span>
        </button>
      </div>

      {/* SVG Canvas Workspace */}
      <div className="relative w-full h-64 bg-slate-950/80 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
        
        {/* Background Schematic Pattern */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Subtle grid lines */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Connective SVG diagram lines between hotspots */}
          {hotspots && hotspots.map((hs, index) => {
            if (index === 0) return null;
            const prevHs = hotspots[index - 1];
            return (
              <line
                key={`line-${index}`}
                x1={`${prevHs.x}%`}
                y1={`${prevHs.y}%`}
                x2={`${hs.x}%`}
                y2={`${hs.y}%`}
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            );
          })}
        </svg>

        {/* Interactive Hotspot Pins */}
        {hotspots && hotspots.map((hs) => {
          const isActive = activeHotspot?.id === hs.id;
          return (
            <div
              key={hs.id}
              style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <button
                onClick={() => handleHotspotClick(hs)}
                className={`
                  relative w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-lg transition-transform hover:scale-125 focus:outline-none
                  ${isActive 
                    ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/40' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'}
                `}
                title={hs.label}
              >
                <span className="hotspot-ping absolute inset-0 rounded-full bg-amber-400 opacity-75" />
                <span>{hs.label.charAt(0)}</span>
              </button>

              {/* Label Tag popover */}
              {showLabels && (
                <div className={`
                  absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md transition-all pointer-events-none z-20
                  ${isActive ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-200 border border-slate-700'}
                `}>
                  {hs.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Hotspot Explanation Drawer */}
      {activeHotspot ? (
        <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs space-y-1 animate-fadeIn">
          <div className="font-bold text-amber-300 font-mono flex items-center gap-1.5">
            <Info className="w-4 h-4 text-amber-400" />
            <span>{activeHotspot.label}</span>
          </div>
          <p className="text-slate-200 leading-relaxed">
            {activeHotspot.text}
          </p>
        </div>
      ) : (
        <p className="text-center text-xs text-slate-400 italic">
          💡 Click any glowing node pin above to inspect structure details & functions.
        </p>
      )}
    </div>
  );
}
