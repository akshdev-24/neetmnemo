import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  HelpCircle, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2, 
  Brain, 
  Sprout, 
  Clock, 
  Target,
  Zap,
  Bookmark
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { BIOLOGY_UNITS } from '../../data/subjects';
import { MNEMONICS } from '../../data/mnemonics';
import { MnemonicCard } from '../mnemonics/MnemonicCard';
import { DoodleSparkle, DoodleBrainMascot } from '../illustrations/DoodleIllustrations';

export function Class11LandingView({
  onSelectChapter,
  onSelectMnemonic,
  onNavigate,
  favorites = [],
  onToggleFavorite
}) {
  const [openFaq, setOpenFaq] = useState(null);

  // Filter Class 11 chapters (Ch 1 to 19 across Units 1 to 5)
  const class11Chapters = CHAPTERS.filter((c) => c.classLevel === 11);
  const class11Units = BIOLOGY_UNITS.filter((u) => u.classLevel === 11);
  const class11Mnemonics = MNEMONICS.filter((m) => {
    const ch = CHAPTERS.find((c) => c.id === m.chapterId);
    return ch && ch.classLevel === 11;
  });

  // Featured high-yield Class 11 mnemonics (Animal Kingdom, Cell, Mitosis, Physiology)
  const featuredMnemonics = class11Mnemonics.slice(0, 4);

  const faqs = [
    {
      q: 'How many chapters are in Class 11 NEET Biology?',
      a: 'Class 11 Biology includes 19 comprehensive chapters organized across 5 core NCERT units: Diversity in Living World (Chapters 1–4), Structural Organisation in Animals & Plants (Chapters 5–7), Cell: Structure and Function (Chapters 8–10), Plant Physiology (Chapters 11–13), and Human Physiology (Chapters 14–19).'
    },
    {
      q: 'Which Class 11 Biology chapters carry the highest weightage in NEET UG?',
      a: 'Human Physiology (especially Neural, Chemical Coordination, and Circulation) and Cell Biology (Cell: The Unit of Life and Cell Cycle & Division) carry the highest question density. Plant Kingdom and Animal Kingdom also yield guaranteed direct classification and example-based questions.'
    },
    {
      q: 'How do mnemonics help in memorizing Animal Kingdom and Plant Kingdom?',
      a: 'Animal Kingdom and Plant Kingdom contain hundreds of scientific names, larva stages, and diagnostic anatomical exceptions. Dual-coding visual mnemonics group complex Latin names into catchy, humorous stories, eliminating exam-day confusion between similar genera like Porifera vs Coelenterata examples.'
    },
    {
      q: 'Are these Class 11 mnemonics strictly based on the NCERT syllabus?',
      a: 'Yes, 100%. NEETMONIC strictly filters all memory hooks, scientific names, and diagrams against the official NCERT Class 11 Biology textbook and current NTA NEET UG syllabus guidelines. Zero invented facts or out-of-syllabus filler.'
    },
    {
      q: 'How should I combine Class 11 mnemonics with active recall revision?',
      a: 'Read the NCERT chapter first to understand the biological logic, review the chapter mnemonic cards to lock in difficult examples and sequences, and test yourself using our micro recall quizzes and "My Memory Shelf" for spaced repetition.'
    }
  ];

  const highYieldExamples = [
    {
      topic: 'Algae Pigments & Classes',
      chapter: 'Plant Kingdom (Ch 3)',
      trick: 'Chlorophyceae (Chlorophyll a,b), Phaeophyceae (Chlorophyll a,c + Fucoxanthin), Rhodophyceae (Chlorophyll a,d + r-Phycoerythrin)',
      hook: 'Green apples (a,b), Brown coffee (a,c), Red dates (a,d)'
    },
    {
      topic: 'Placentation Types',
      chapter: 'Morphology of Flowering Plants (Ch 5)',
      trick: 'Marginal (Pea), Axile (China rose, Tomato, Lemon), Parietal (Mustard, Argemone), Free-Central (Dianthus, Primrose), Basal (Sunflower, Marigold)',
      hook: 'MP (Marginal Pea), ACTL (Axile China-rose Tomato Lemon), MAP (Mustard Argemone Parietal)'
    },
    {
      topic: 'Prophase I Stages of Meiosis',
      chapter: 'Cell Cycle & Cell Division (Ch 10)',
      trick: 'Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis',
      hook: 'Lazy Zebra Plays Double Drums (LZPDD)'
    },
    {
      topic: 'Heart Valves & Blood Flow',
      chapter: 'Body Fluids & Circulation (Ch 15)',
      trick: 'Tricuspid valve on Right side (between Right Atrium & Right Ventricle); Bicuspid/Mitral on Left side',
      hook: 'TRI Right, BI Left (3 letters "TRI" = 5 letters "RIGHT")'
    }
  ];

  return (
    <article className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-10 text-left">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#667085]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#243044] transition-colors">Home</button>
        <span>›</span>
        <button onClick={() => onNavigate('chapters')} className="hover:text-[#243044] transition-colors">Biology Chapters</button>
        <span>›</span>
        <span className="font-bold text-[#243044]">Class 11 Biology Mnemonics</span>
      </nav>

      {/* Hero Header */}
      <header className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE681]/40 border border-[#FFE681] text-[#243044] font-title text-xs font-bold">
          <GraduationCap className="w-4 h-4 text-[#FF8D78]" />
          <span>NCERT Class 11 Biology • Units 1 to 5</span>
        </div>

        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243044] leading-tight">
          Class 11 Biology Mnemonics for NEET
        </h1>

        <p className="text-sm sm:text-base text-[#667085] font-sans max-w-3xl leading-relaxed">
          Master all 19 Class 11 NEET Biology chapters with easy NCERT-based memory tricks, chapter-wise revision directories, and proven mental hooks to effortlessly recall biological classifications, anatomical exceptions, and physiological processes.
        </p>

        {/* Quick Stats Strip */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#243044]">
          <span className="px-3 py-1.5 rounded-xl bg-[#EFFBF4] border border-[#3DBE75]">🌱 5 NCERT Units</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#FFF9E6] border border-[#FFE681]">📖 19 Chapters</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EDF4FF] border border-[#5B8DEF]">💡 {class11Mnemonics.length}+ Mnemonics</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#F7F0FF] border border-[#A66CFF]">🎯 100% NCERT Aligned</span>
        </div>

        {/* Switch to Class 12 Banner */}
        <div className="pt-4 border-t border-[#E8E4D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FFFDF7] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:px-8">
          <span className="text-xs font-title font-bold text-[#667085]">
            Looking for Genetics, Biotechnology &amp; Ecology?
          </span>
          <button
            onClick={() => onNavigate('class-12')}
            className="inline-flex items-center gap-1.5 text-xs font-title font-bold text-[#3DBE75] hover:text-[#2fa663] transition-colors"
          >
            <span>Explore Class 12 Biology Mnemonics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Introduction to Class 11 Biology Mnemonics */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-[#3DBE75]" />
          <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
            Why Class 11 Biology Mnemonics Are Crucial for NEET UG
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans space-y-3">
          <p>
            Class 11 Biology establishes the fundamental vocabulary for medical entrance exams. Over 50% of direct NCERT line questions in NEET come from Class 11 Botany and Zoology chapters. However, students frequently lose marks in taxonomic classifications, floral formulas, cell cycle phases, and hormone feedback loops because rote learning fails under timed exam pressure.
          </p>
          <p>
            NEETMONIC bridges this recall gap using <strong>Dual-Coding Memory Architecture</strong>. By associating dense scientific names with vivid visual hooks, acronyms, and logical context, you convert fragile short-term memorization into resilient long-term recall.
          </p>
        </div>
      </section>

      {/* Chapter-Wise Class 11 Directory (Units 1 to 5) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#243044] pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-[#3DBE75] uppercase tracking-wider block">
              Complete Curriculum Directory
            </span>
            <h2 className="font-title text-2xl font-bold text-[#243044]">
              Class 11 Biology Chapters &amp; Mnemonic Collections
            </h2>
          </div>
          <span className="text-xs font-mono text-[#667085]">19 NCERT Chapters</span>
        </div>

        <div className="space-y-6">
          {class11Units.map((unit) => {
            const unitChapters = class11Chapters.filter((c) => c.unitNumber === unit.number);
            return (
              <div key={unit.id} className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#EFFBF4] border border-[#3DBE75] font-title text-xs font-bold text-[#3DBE75]">
                      Unit {unit.number}
                    </span>
                    <h3 className="font-title text-lg font-bold text-[#243044]">
                      {unit.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#667085]">
                    {unitChapters.length} Chapters
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {unitChapters.map((ch) => {
                    const count = MNEMONICS.filter((m) => m.chapterId === ch.id).length;
                    return (
                      <div
                        key={ch.id}
                        onClick={() => onSelectChapter(ch)}
                        className="p-4 rounded-2xl bg-[#FFFDF7] border-2 border-[#243044]/20 hover:border-[#243044] hover:bg-[#EFFBF4] cursor-pointer transition-all shadow-xs flex flex-col justify-between group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#667085]">
                            <span>Chapter {ch.number}</span>
                            <span className="font-bold text-[#3DBE75]">{count} tricks</span>
                          </div>
                          <h4 className="font-title text-sm font-bold text-[#243044] group-hover:text-[#3DBE75] transition-colors line-clamp-2">
                            {ch.title}
                          </h4>
                        </div>
                        <div className="pt-2 flex items-center justify-between text-xs font-title font-bold text-[#243044] group-hover:text-[#3DBE75] transition-colors">
                          <span>View Mnemonics</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* High-Yield Examples Table */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-[#FF8D78]" />
          <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
            Important Class 11 Biology Examples &amp; Memory Shortcuts
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#667085]">
          A quick reference of recurring high-probability NCERT Class 11 exam points:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#243044] bg-[#FFF9E6]">
                <th className="p-3 font-title font-bold text-[#243044]">Biological Topic</th>
                <th className="p-3 font-title font-bold text-[#243044]">NCERT Chapter</th>
                <th className="p-3 font-title font-bold text-[#243044]">Key Facts to Remember</th>
                <th className="p-3 font-title font-bold text-[#3DBE75]">NEETMONIC Hook</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E4D9]">
              {highYieldExamples.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#EFFBF4]/40 transition-colors">
                  <td className="p-3 font-title font-bold text-[#243044]">{item.topic}</td>
                  <td className="p-3 font-sans text-[#667085]">{item.chapter}</td>
                  <td className="p-3 font-sans text-[#243044]">{item.trick}</td>
                  <td className="p-3 font-mono font-bold text-[#3DBE75]">{item.hook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Popular Featured Mnemonics Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#5B8DEF] uppercase tracking-wider block">
              Active Recall Cards
            </span>
            <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
              Popular Class 11 Biology Memory Tricks
            </h2>
          </div>
          <span className="text-xs font-mono text-[#667085]">{featuredMnemonics.length} Preview Cards</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredMnemonics.map((mnemo) => (
            <MnemonicCard
              key={mnemo.id}
              mnemonic={mnemo}
              isFavorite={favorites.includes(mnemo.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenDetail={onSelectMnemonic}
            />
          ))}
        </div>
      </section>

      {/* Class 12 Cross-Link CTA Banner */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#EFFBF4] border-2 border-[#243044] shadow-sketch flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-white border border-[#243044] font-title text-xs font-bold text-[#3DBE75]">
            🚀 Ready for Class 12?
          </span>
          <h3 className="font-title text-2xl font-extrabold text-[#243044]">
            Continue to Class 12 Biology Mnemonics
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] font-sans max-w-xl">
            Revise Genetics, Molecular Basis of Inheritance, Biotechnology, Human Health, and Ecology with 100% NCERT-verified memory tricks.
          </p>
        </div>
        <button
          onClick={() => onNavigate('class-12')}
          className="px-6 py-3 rounded-2xl bg-[#3DBE75] hover:bg-[#34a766] text-white font-title text-sm sm:text-base font-bold flex items-center gap-2 border-2 border-[#243044] shadow-sketch active:scale-95 transition-all shrink-0"
        >
          <span>Class 12 Mnemonics</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Frequently Asked Questions (FAQ Section) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-[#A66CFF]" />
          <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
            Frequently Asked Questions: Class 11 Biology for NEET
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl border-2 border-[#243044]/15 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 bg-[#FFFDF7] hover:bg-[#EFFBF4] flex items-center justify-between gap-3 text-left font-title text-sm font-bold text-[#243044] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#3DBE75] shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#667085] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 bg-white border-t border-[#E8E4D9] text-xs sm:text-sm text-[#667085] leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </article>
  );
}
