import React from 'react';
import { ArrowRight, Lightbulb, Brain, Clock, Target, BarChart2 } from 'lucide-react';
import { DoodleBrainMascot, DoodleBooksStack, DoodleSparkle, DoodleStar, DoodleArrow } from '../illustrations/DoodleIllustrations';

export function HeroSection({ onExploreSubjects, onStartRevision, onNavigateClass11, onNavigateClass12 }) {
  const featureStrip = [
    { label: 'Visual Mnemonics', icon: Lightbulb, bg: '#FFE681', color: '#243044' },
    { label: 'Botany & Zoology', icon: Brain, bg: '#FF9FB2', color: '#243044' },
    { label: 'Quick Revision', icon: Clock, bg: '#B69CFF', color: '#243044' },
    { label: '100% NCERT Scope', icon: Target, bg: '#78D6A3', color: '#243044' },
    { label: 'Track Progress', icon: BarChart2, bg: '#8DD8FF', color: '#243044' }
  ];

  return (
    <section className="relative pt-6 pb-10">
      
      {/* Decorative stars */}
      <DoodleStar className="absolute top-2 left-6 w-6 h-6 text-[#FFE681] hidden sm:block animate-float-slow" />
      <DoodleSparkle className="absolute top-16 right-1/2 w-5 h-5 text-[#FF9FB2] hidden lg:block animate-float-alt" />
      <DoodleStar className="absolute bottom-16 right-10 w-6 h-6 text-[#8DD8FF] hidden md:block" />

      {/* Main Hero Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 border-2 border-[#E8E4D9] rounded-3xl p-6 sm:p-10 shadow-sketch relative overflow-hidden">
        
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 space-y-4 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE681]/40 border border-[#FFE681] text-[#243044] text-xs font-title font-bold">
            <span>✨ 100% NCERT NEET Biology Revision Platform</span>
          </div>

          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243044] leading-[1.18]">
            NEET Biology Mnemonics <br />
            to <span className="hl-yellow text-[#243044]">Remember More</span> and Revise Smarter
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-lg leading-relaxed font-sans">
            Learn NEET Biology with 1,180+ easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides, and simple ways to remember important Biology facts for NEET UG.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onNavigateClass11 || onExploreSubjects}
              className="px-5 py-2.5 rounded-2xl bg-[#FFE681] hover:bg-[#fed94f] text-[#243044] font-title text-xs sm:text-sm font-bold flex items-center gap-2 border-2 border-[#243044] shadow-sketch transition-all hover:scale-105 active:scale-95"
            >
              <span>Class 11 Mnemonics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onNavigateClass12 || onExploreSubjects}
              className="px-5 py-2.5 rounded-2xl bg-[#EFFBF4] hover:bg-[#d8f5e5] text-[#243044] font-title text-xs sm:text-sm font-bold flex items-center gap-2 border-2 border-[#3DBE75] shadow-sketch transition-all hover:scale-105 active:scale-95"
            >
              <span>Class 12 Mnemonics</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3DBE75]" />
            </button>

            <button
              onClick={onStartRevision}
              className="px-5 py-2.5 rounded-2xl bg-white hover:bg-[#EFFBF4] border-2 border-[#243044] text-[#243044] font-title text-xs sm:text-sm font-bold transition-all shadow-sketch active:scale-95"
            >
              Start Revising ⚡
            </button>
          </div>
        </div>

        {/* Right Column: Hand-drawn Artwork Canvas */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-4">
          
          {/* Speech Bubble: "Small Tricks... Big Results!" */}
          <div className="absolute -top-4 right-4 sm:right-10 z-20 speech-bubble bg-[#FFFDF7] px-3.5 py-2 shadow-sketch animate-float-slow">
            <p className="font-hand text-sm sm:text-base font-bold text-[#243044] leading-tight text-center">
              Small Tricks... <br />
              <span className="text-[#FF8D78]">Big Results!</span>
            </p>
          </div>

          {/* Combined Illustration: Books Stack + Pink Mascot */}
          <div className="flex items-end justify-center gap-2 relative">
            <DoodleBooksStack className="w-36 h-36 sm:w-44 sm:h-44" />
            <DoodleBrainMascot className="w-32 h-32 sm:w-40 sm:h-40 -ml-6 z-10" />
          </div>

        </div>

      </div>

      {/* Feature Strip (5 Pastel Badge Cards Connected by Arrows) */}
      <div className="mt-8 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-center">
          {featureStrip.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <div 
                  className="flex-1 flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[#243044] shadow-sketch hover:-translate-y-1 transition-transform"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/80 border-1.5 border-[#243044] flex items-center justify-center mb-1.5 shadow-sm">
                    <Icon className="w-5 h-5 text-[#243044]" />
                  </div>
                  <span className="font-title text-xs font-bold text-[#243044] text-center">
                    {item.label}
                  </span>
                </div>

                {/* Arrow connecting to next (except last) */}
                {idx < featureStrip.length - 1 && (
                  <span className="hidden lg:block text-[#667085] opacity-40 font-bold">
                    ›
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
