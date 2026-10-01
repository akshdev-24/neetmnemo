import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Target, 
  Brain, 
  GraduationCap, 
  ArrowRight,
  Atom,
  FlaskConical,
  Leaf
} from 'lucide-react';
import { DoodleBrainMascot, DoodleSparkle, DoodleStar } from '../illustrations/DoodleIllustrations';

export function AboutView({ onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-10">
      
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE681]/50 border-2 border-[#243044] text-[#243044] text-xs font-title font-bold shadow-sm">
          <Sparkles className="w-4 h-4 text-[#FF8D78]" />
          <span>About NEET Mnemo</span>
        </div>

        <h1 className="font-title text-3xl sm:text-4xl font-extrabold text-[#243044]">
          Visual Learning & Memory Tricks <br />
          <span className="hl-yellow text-[#243044]">Strictly Mapped to NCERT</span>
        </h1>

        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed font-sans">
          NEET Mnemo is an educational revision platform built exclusively for Indian medical aspirants preparing for NTA NEET UG (Physics, Chemistry, Botany & Zoology).
        </p>
      </div>

      {/* Core Mission Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <h2 className="font-title text-2xl font-bold text-[#243044]">
            Why Visual Mnemonics for NEET UG?
          </h2>
          <p className="text-sm text-[#667085] leading-relaxed font-sans">
            The NEET UG syllabus spans 70+ chapters across Class 11 & 12 NCERT textbooks containing thousands of scientific names, taxonomic ranks, named organic reactions, inorganic trends, and physics dimensional formulas. 
          </p>
          <p className="text-sm text-[#243044] font-medium leading-relaxed font-sans">
            Rote memorization often fails during high-pressure 3-hour exam conditions. NEET Mnemo uses <strong>Dual-Coding Theory</strong> — pairing funny visual hooks and verbal acronyms with scientific facts to build durable memory traces for instant recall.
          </p>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <DoodleBrainMascot className="w-36 h-36" />
        </div>
      </div>

      {/* 3 Pillars of NEET Mnemo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sketch space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#5B8DEF] flex items-center justify-center text-[#5B8DEF]">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-title text-lg font-bold text-[#243044]">
            100% NCERT Aligned
          </h3>
          <p className="text-xs text-[#667085] leading-relaxed">
            Zero invented or out-of-syllabus facts. Every mnemonic, scientific term, and example is cross-referenced directly with official Class 11 and 12 NCERT textbooks.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#F7F0FF] border-2 border-[#243044] shadow-sketch space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#A66CFF] flex items-center justify-center text-[#A66CFF]">
            <Brain className="w-5 h-5" />
          </div>
          <h3 className="font-title text-lg font-bold text-[#243044]">
            Cognitive Chunking
          </h3>
          <p className="text-xs text-[#667085] leading-relaxed">
            Complex lists (e.g. taxonomic hierarchy, plant hormones, periodic trends, electromagnetic spectrum) are condensed into memorable verbal hooks and visual anchors.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#EFFBF4] border-2 border-[#243044] shadow-sketch space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#3DBE75] flex items-center justify-center text-[#3DBE75]">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-title text-lg font-bold text-[#243044]">
            Active Recall & Quizzes
          </h3>
          <p className="text-xs text-[#667085] leading-relaxed">
            Reinforce what you remember with instant flash quizzes, NEET trap alerts, and timed quick revision sprints designed for high retention.
          </p>
        </div>
      </div>

      {/* Subject Coverage Overview */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[#5B8DEF]" />
          <h2 className="font-title text-2xl font-bold text-[#243044]">
            Comprehensive Subject Coverage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            onClick={() => onNavigate('physics')}
            className="p-4 rounded-2xl border-2 border-[#5B8DEF] bg-[#EDF4FF] cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-2 mb-2">
              <Atom className="w-5 h-5 text-[#5B8DEF]" />
              <h3 className="font-title text-base font-bold text-[#243044]">Physics</h3>
            </div>
            <p className="text-xs text-[#667085]">
              Units, dimensional formulas, kinematic SUVAT equations, laws of motion, gravitation, thermodynamics, ray optics & modern physics tricks.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('chemistry')}
            className="p-4 rounded-2xl border-2 border-[#A66CFF] bg-[#F7F0FF] cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-2 mb-2">
              <FlaskConical className="w-5 h-5 text-[#A66CFF]" />
              <h3 className="font-title text-base font-bold text-[#243044]">Chemistry</h3>
            </div>
            <p className="text-xs text-[#667085]">
              Periodic table groups, periodic trends, named organic reactions, coordination isomerism, chemical bonding, and electrochemistry mnemonics.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('biology')}
            className="p-4 rounded-2xl border-2 border-[#3DBE75] bg-[#EFFBF4] cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-5 h-5 text-[#3DBE75]" />
              <h3 className="font-title text-base font-bold text-[#243044]">Biology</h3>
            </div>
            <p className="text-xs text-[#667085]">
              Taxonomic hierarchy, algae classes, plant hormones, human endocrine system, mitosis stages, genetics crosses, and NCERT direct exam facts.
            </p>
          </div>
        </div>
      </section>

      {/* NCERT & Syllabus Disclaimer */}
      <section className="p-5 rounded-2xl bg-[#FFF9E6] border-2 border-[#243044] flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-[#243044] shrink-0 mt-1" />
        <div className="space-y-1">
          <h3 className="font-title text-sm font-bold text-[#243044] uppercase tracking-wide">
            Educational Disclaimer & Syllabus Fidelity
          </h3>
          <p className="text-xs text-[#667085] leading-relaxed font-sans">
            NEET Mnemo is an independent educational revision companion. All memory hooks, acronyms, and explanations are designed to help students study from standard NCERT textbooks. NEET is a registered trademark of the National Testing Agency (NTA).
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('subjects')}
          className="px-8 py-3.5 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white font-title text-base font-bold inline-flex items-center gap-2 shadow-sketch transition-all hover:scale-105 active:scale-95"
        >
          <span>Start Exploring NEET Mnemonics</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
