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
  Dna, 
  Clock, 
  Target,
  Zap,
  Globe,
  FlaskConical,
  Heart
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { BIOLOGY_UNITS } from '../../data/subjects';
import { MNEMONICS } from '../../data/mnemonics';
import { MnemonicCard } from '../mnemonics/MnemonicCard';
import { DoodleSparkle } from '../illustrations/DoodleIllustrations';

export function Class12LandingView({
  onSelectChapter,
  onSelectMnemonic,
  onNavigate,
  favorites = [],
  onToggleFavorite
}) {
  const [openFaq, setOpenFaq] = useState(null);

  // Filter Class 12 chapters (Ch 20 to 32 across Units 6 to 10)
  const class12Chapters = CHAPTERS.filter((c) => c.classLevel === 12);
  const class12Units = BIOLOGY_UNITS.filter((u) => u.classLevel === 12);
  const class12Mnemonics = MNEMONICS.filter((m) => {
    const ch = CHAPTERS.find((c) => c.id === m.chapterId);
    return ch && ch.classLevel === 12;
  });

  // Featured high-yield Class 12 mnemonics (Genetics, Molecular, Biotech, Ecology)
  const featuredMnemonics = class12Mnemonics.slice(0, 4);

  const faqs = [
    {
      q: 'Which Class 12 Biology chapters carry maximum weightage in NEET?',
      a: 'Genetics and Evolution (Principles of Inheritance and Molecular Basis of Inheritance) consistently accounts for 15–20% of the entire Biology section. Biotechnology (Principles and Applications) and Ecology (Organisms & Populations, Ecosystem, Biodiversity) also contribute a very high proportion of high-scoring questions.'
    },
    {
      q: 'How to memorize genetic disorders and chromosomal karyotypes for NEET?',
      a: 'NEETMONIC breaks down chromosomal abnormalities with simple numerical anchors: Down syndrome (Trisomy 21), Klinefelter syndrome (47, XXY in males), and Turner syndrome (45, XO in females). For Mendelian disorders, memorable acronyms separate Autosomal Dominant (Myotonic dystrophy) from Autosomal Recessive (Sickle cell anemia, Phenylketonuria, Thalassemia).'
    },
    {
      q: 'How do mnemonics help in Molecular Basis of Inheritance and Biotechnology?',
      a: 'Molecular biology involves intricate biochemical steps (lac operon repressor-inducer states, transcription factor binding, stop codons UAA, UAG, UGA). Biotechnology features palindromic restriction recognition sequences (like 5\'-GAATTC-3\' for EcoRI) and vector selectable markers (ampR, tetR). Visual memory hooks keep these exact details sharp and distinct.'
    },
    {
      q: 'What is the best way to master Ecology interactions for NEET UG?',
      a: 'Remembering mutualism (+,+), commensalism (+,0), parasitism (+,-), predation (+,-), amensalism (-,0), and competition (-,-) is effortless using structured positive-negative relational tables. Mnemonics also secure the "Evil Quartet" causes of biodiversity loss: Habitat loss, Overexploitation, Alien species invasion, and Co-extinction.'
    },
    {
      q: 'Are Class 12 mnemonics updated for the latest NTA NEET syllabus?',
      a: 'Yes, every mnemonic, topic breakdown, and practice question strictly corresponds to the active NCERT Class 12 Biology curriculum. Deleted legacy topics (like Reproduction in Organisms and Environmental Issues) are excluded so your revision remains 100% focused on current exam-tested material.'
    }
  ];

  const highYieldExamples = [
    {
      topic: 'Stop Codons (Nonsense Codons)',
      chapter: 'Molecular Basis of Inheritance (Ch 24)',
      trick: 'UAA (Ochre), UAG (Amber), UGA (Opal)',
      hook: 'U Are Away (UAA), U Are Gone (UAG), U Go Away (UGA)'
    },
    {
      topic: 'Chromosomal Disorders Karyotypes',
      chapter: 'Principles of Inheritance & Variation (Ch 23)',
      trick: 'Down (Trisomy 21), Klinefelter (47, XXY), Turner (45, XO)',
      hook: 'Down is 21st century; Kline has eXtra X; Turner turns One X away'
    },
    {
      topic: 'The Evil Quartet (Biodiversity Loss)',
      chapter: 'Biodiversity & Conservation (Ch 32)',
      trick: 'Habitat loss & fragmentation, Over-exploitation, Alien species invasion, Co-extinctions',
      hook: 'HOAC: Humans Obliterate All Creatures'
    },
    {
      topic: 'Population Interactions Matrix',
      chapter: 'Organisms & Populations (Ch 30)',
      trick: 'Mutualism (+,+), Predation (+,-), Parasitism (+,-), Commensalism (+,0), Amensalism (-,0), Competition (-,-)',
      hook: 'Penicillium harms bacteria without gain (Amensalism: -,0)'
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
        <span className="font-bold text-[#243044]">Class 12 Biology Mnemonics</span>
      </nav>

      {/* Hero Header */}
      <header className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFFBF4] border border-[#3DBE75] text-[#243044] font-title text-xs font-bold">
          <GraduationCap className="w-4 h-4 text-[#3DBE75]" />
          <span>NCERT Class 12 Biology • Units 6 to 10</span>
        </div>

        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243044] leading-tight">
          Class 12 Biology Mnemonics for NEET
        </h1>

        <p className="text-sm sm:text-base text-[#667085] font-sans max-w-3xl leading-relaxed">
          Revise Class 12 Biology for NEET with easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides, and important Biology facts to remember across Genetics, Molecular Biology, Biotechnology, Human Health, and Ecology.
        </p>

        {/* Quick Stats Strip */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#243044]">
          <span className="px-3 py-1.5 rounded-xl bg-[#EFFBF4] border border-[#3DBE75]">🧬 5 NCERT Units</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#FFF9E6] border border-[#FFE681]">📖 13 Chapters</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EDF4FF] border border-[#5B8DEF]">💡 {class12Mnemonics.length}+ Mnemonics</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#F7F0FF] border border-[#A66CFF]">🎯 100% NCERT Aligned</span>
        </div>

        {/* Switch to Class 11 Banner */}
        <div className="pt-4 border-t border-[#E8E4D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FFFDF7] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:px-8">
          <span className="text-xs font-title font-bold text-[#667085]">
            Need Plant/Animal Kingdom, Cell Biology &amp; Human Physiology?
          </span>
          <button
            onClick={() => onNavigate('class-11')}
            className="inline-flex items-center gap-1.5 text-xs font-title font-bold text-[#5B8DEF] hover:text-[#4377db] transition-colors"
          >
            <span>Explore Class 11 Biology Mnemonics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Strategic Value of Class 12 Biology */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
        <div className="flex items-center gap-2">
          <Dna className="w-6 h-6 text-[#A66CFF]" />
          <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
            Why Class 12 Biology Memory Tricks Guarantee High NEET Scores
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans space-y-3">
          <p>
            Class 12 NCERT Biology contains the highest conceptual and memory-intensive units of the entire NEET syllabus. Units like <strong>Genetics &amp; Evolution</strong> and <strong>Biotechnology</strong> require absolute precision — a single flipped codon, incorrect base pair count, or confused recombinant step results in negative marking.
          </p>
          <p>
            NEETMONIC equips you with tested mnemonic formulas to memorize lac operon genes (Z-Y-A: β-galactosidase, permease, transacetylase), PCR temperature cycles (Denaturation 94°C, Annealing 54°C, Extension 72°C), and biodiversity species data without mental fatigue.
          </p>
        </div>
      </section>

      {/* Chapter-Wise Class 12 Directory (Units 6 to 10) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#243044] pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-[#A66CFF] uppercase tracking-wider block">
              Complete Curriculum Directory
            </span>
            <h2 className="font-title text-2xl font-bold text-[#243044]">
              Class 12 Biology Chapters &amp; Mnemonic Collections
            </h2>
          </div>
          <span className="text-xs font-mono text-[#667085]">13 NCERT Chapters</span>
        </div>

        <div className="space-y-6">
          {class12Units.map((unit) => {
            const unitChapters = class12Chapters.filter((c) => c.unitNumber === unit.number);
            return (
              <div key={unit.id} className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#F7F0FF] border border-[#A66CFF] font-title text-xs font-bold text-[#A66CFF]">
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
                        className="p-4 rounded-2xl bg-[#FFFDF7] border-2 border-[#243044]/20 hover:border-[#243044] hover:bg-[#F7F0FF] cursor-pointer transition-all shadow-xs flex flex-col justify-between group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#667085]">
                            <span>Chapter {ch.number}</span>
                            <span className="font-bold text-[#A66CFF]">{count} tricks</span>
                          </div>
                          <h4 className="font-title text-sm font-bold text-[#243044] group-hover:text-[#A66CFF] transition-colors line-clamp-2">
                            {ch.title}
                          </h4>
                        </div>
                        <div className="pt-2 flex items-center justify-between text-xs font-title font-bold text-[#243044] group-hover:text-[#A66CFF] transition-colors">
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
            Important Class 12 Biology Examples &amp; Memory Shortcuts
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#667085]">
          Essential NCERT Class 12 memory rules frequently tested in NEET UG:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#243044] bg-[#FFF9E6]">
                <th className="p-3 font-title font-bold text-[#243044]">Biological Topic</th>
                <th className="p-3 font-title font-bold text-[#243044]">NCERT Chapter</th>
                <th className="p-3 font-title font-bold text-[#243044]">Key Facts to Remember</th>
                <th className="p-3 font-title font-bold text-[#A66CFF]">NEETMONIC Hook</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E4D9]">
              {highYieldExamples.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F7F0FF]/40 transition-colors">
                  <td className="p-3 font-title font-bold text-[#243044]">{item.topic}</td>
                  <td className="p-3 font-sans text-[#667085]">{item.chapter}</td>
                  <td className="p-3 font-sans text-[#243044]">{item.trick}</td>
                  <td className="p-3 font-mono font-bold text-[#A66CFF]">{item.hook}</td>
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
            <span className="text-xs font-mono font-bold text-[#3DBE75] uppercase tracking-wider block">
              Active Recall Cards
            </span>
            <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
              Popular Class 12 Biology Memory Tricks
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

      {/* Class 11 Cross-Link CTA Banner */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-white border border-[#243044] font-title text-xs font-bold text-[#243044]">
            🌱 Foundation Recall
          </span>
          <h3 className="font-title text-2xl font-extrabold text-[#243044]">
            Strengthen Class 11 Biology Concepts
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] font-sans max-w-xl">
            Revise Plant Kingdom, Animal Kingdom, Morphology, Cell Division, and Human Physiology with 19 dedicated chapter decks.
          </p>
        </div>
        <button
          onClick={() => onNavigate('class-11')}
          className="px-6 py-3 rounded-2xl bg-[#FFE681] hover:bg-[#fed94f] text-[#243044] font-title text-sm sm:text-base font-bold flex items-center gap-2 border-2 border-[#243044] shadow-sketch active:scale-95 transition-all shrink-0"
        >
          <span>Class 11 Mnemonics</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Frequently Asked Questions (FAQ Section) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-[#3DBE75]" />
          <h2 className="font-title text-xl sm:text-2xl font-bold text-[#243044]">
            Frequently Asked Questions: Class 12 Biology for NEET
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
                  className="w-full p-4 bg-[#FFFDF7] hover:bg-[#F7F0FF] flex items-center justify-between gap-3 text-left font-title text-sm font-bold text-[#243044] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-[#A66CFF] shrink-0" />
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
