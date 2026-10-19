import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Target, 
  Brain, 
  ArrowRight,
  Leaf,
  Sprout,
  Heart,
  Mail,
  FileText,
  Lock,
  HelpCircle,
  Award
} from 'lucide-react';
import { DoodleBrainMascot, DoodleSparkle, DoodleStar } from '../illustrations/DoodleIllustrations';

export function AboutView({ onNavigate, initialTab = 'about' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-8">
      
      {/* Top Tab Bar: About, Privacy Policy, Terms, Disclaimer, Contact */}
      <div className="flex items-center justify-center overflow-x-auto pb-2 scrollbar-none">
        <div className="p-1 rounded-2xl bg-white border-2 border-[#243044] shadow-sm inline-flex gap-1">
          {[
            { id: 'about', label: 'About Us', icon: Sparkles },
            { id: 'privacy', label: 'Privacy Policy', icon: Lock },
            { id: 'terms', label: 'Terms of Service', icon: FileText },
            { id: 'disclaimer', label: 'Disclaimer', icon: ShieldCheck },
            { id: 'contact', label: 'Contact Us', icon: Mail }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-3.5 py-1.5 rounded-xl font-title text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-[#243044] text-white shadow-sm' 
                    : 'text-[#243044] hover:bg-[#EFFBF4]'
                  }
                `}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          TAB 1: ABOUT NEET MNEMO
         ========================================================================= */}
      {activeTab === 'about' && (
        <div className="space-y-10">
          
          {/* Hero Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFFBF4] border-2 border-[#3DBE75] text-[#243044] text-xs font-title font-bold shadow-sm">
              <Sprout className="w-4 h-4 text-[#3DBE75]" />
              <span>Dedicated NEET Biology Revision Platform</span>
            </div>

            <h1 className="font-title text-3xl sm:text-4xl font-extrabold text-[#243044]">
              Visual Mnemonics &amp; Memory Tricks <br />
              <span className="hl-yellow text-[#243044]">100% Strictly Mapped to NCERT Biology</span>
            </h1>

            <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed font-sans">
              NEET Mnemo is a focused educational platform designed specifically for medical aspirants preparing for NTA NEET UG Biology (Botany &amp; Zoology).
            </p>
          </div>

          {/* Core Mission Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h2 className="font-title text-2xl font-bold text-[#243044]">
                Why Visual Mnemonics for NEET Biology?
              </h2>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                The NEET Biology syllabus accounts for <strong>360 out of 720 marks (50% of the entire exam)</strong> across 32 NCERT chapters. It contains thousands of Latin taxonomic names, anatomical exceptions, hormone functions, cell cycle stages, and ecological statistics.
              </p>
              <p className="text-sm text-[#243044] font-medium leading-relaxed font-sans">
                Under exam stress, simple rote memorization can lead to confusing similar-sounding terms. NEET Mnemo applies <strong>Dual-Coding Theory</strong> — combining whimsical visual verbal hooks with accurate NCERT facts so students can trigger instant, accurate recall on exam day.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <DoodleBrainMascot className="w-36 h-36" />
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#EFFBF4] border-2 border-[#243044] shadow-sketch space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#3DBE75] flex items-center justify-center text-[#3DBE75]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-title text-lg font-bold text-[#243044]">
                100% NCERT Verified
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Zero invented facts or out-of-syllabus material. Every mnemonic, taxonomic classification, and scientific term is cross-referenced directly with official Class 11 &amp; 12 NCERT Biology textbooks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFF9E6] border-2 border-[#243044] shadow-sketch space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#FFE681] flex items-center justify-center text-[#243044]">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-title text-lg font-bold text-[#243044]">
                Cognitive Memory Hooks
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Long complex lists (taxonomic hierarchy, algae pigments, plant hormones, heart valves, and prophase I stages) are organized into structured, memorable acronyms and mental pictures.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#EDF4FF] border-2 border-[#243044] shadow-sketch space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#5B8DEF] flex items-center justify-center text-[#5B8DEF]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-title text-lg font-bold text-[#243044]">
                Active Recall &amp; Quizzes
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Reinforce your memory with micro flash quizzes, NEET trap warnings, and timed sprint decks designed to strengthen retrieval pathways.
              </p>
            </div>
          </div>

          {/* 10 Biology Units Overview */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#3DBE75]" />
              <h2 className="font-title text-2xl font-bold text-[#243044]">
                Complete 10 NCERT Biology Units Coverage
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#667085] font-sans">
              NEET Mnemo covers all 10 units prescribed by the National Medical Commission (NMC) and NTA:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#243044]">
              <div className="p-3 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75]/30">
                <span className="font-title font-bold block mb-1">Class 11 Units:</span>
                <ul className="space-y-1 text-[#667085]">
                  <li>• Unit 1: Diversity in Living World (Ch 1–4)</li>
                  <li>• Unit 2: Structural Organisation in Animals &amp; Plants (Ch 5–7)</li>
                  <li>• Unit 3: Cell: Structure and Function (Ch 8–10)</li>
                  <li>• Unit 4: Plant Physiology (Ch 11–13)</li>
                  <li>• Unit 5: Human Physiology (Ch 14–19)</li>
                </ul>
              </div>

              <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-[#FFE681]/50">
                <span className="font-title font-bold block mb-1">Class 12 Units:</span>
                <ul className="space-y-1 text-[#667085]">
                  <li>• Unit 6: Reproduction (Ch 20–22)</li>
                  <li>• Unit 7: Genetics and Evolution (Ch 23–25)</li>
                  <li>• Unit 8: Biology in Human Welfare (Ch 26–27)</li>
                  <li>• Unit 9: Biotechnology (Ch 28–29)</li>
                  <li>• Unit 10: Ecology and Environment (Ch 30–32)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('chapters')}
              className="px-8 py-3.5 rounded-2xl bg-[#FF8D78] hover:bg-[#ff7b63] text-white font-title text-base font-bold inline-flex items-center gap-2 shadow-sketch transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore All 32 Biology Chapters</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 2: PRIVACY POLICY
         ========================================================================= */}
      {activeTab === 'privacy' && (
        <article className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6 text-left">
          <div className="border-b border-[#E8E4D9] pb-4">
            <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#243044]">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[#667085] mt-1">
              Last updated: October 2026 • Effective immediately
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans">
            <h2 className="font-title text-base font-bold text-[#243044]">1. Overview &amp; Commitment</h2>
            <p>
              At NEET Mnemo (accessible from https://neetmnemo.pages.dev and https://neetmnemo.akshdev.site), we respect your privacy. Our core philosophy is student-first: we do not require account registration, login credentials, or personal identification to browse our NEET Biology mnemonics, revision decks, or practice quizzes.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">2. Information Stored Locally in Your Browser</h2>
            <p>
              To provide interactive features like "My Memory Shelf" (saved bookmarks), daily streaks, XP counters, and learned status, NEET Mnemo uses your web browser's standard <strong>LocalStorage</strong>. This data resides solely on your personal device and is not transmitted to or stored on any external server. You can clear this data at any time through your browser settings.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">3. Web Analytics &amp; Cookies</h2>
            <p>
              We may utilize lightweight, privacy-conscious analytics services to understand general usage trends (such as aggregate page visits and popular chapters) to improve the platform experience. We do not engage in invasive fingerprinting or sell student data to third parties.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">4. Third-Party Advertising (Google AdSense)</h2>
            <p>
              Third-party vendors, including Google, may use cookies to serve ads based on prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google's Ads Settings (www.google.com/settings/ads).
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy, you can reach out via our Contact section or by email at <strong>privacy@neetmnemo.akshdev.site</strong>.
            </p>
          </div>
        </article>
      )}

      {/* =========================================================================
          TAB 3: TERMS OF SERVICE
         ========================================================================= */}
      {activeTab === 'terms' && (
        <article className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6 text-left">
          <div className="border-b border-[#E8E4D9] pb-4">
            <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#243044]">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#667085] mt-1">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans">
            <h2 className="font-title text-base font-bold text-[#243044]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NEET Mnemo, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">2. Purpose of the Platform</h2>
            <p>
              NEET Mnemo is an independent educational revision companion created to assist students in preparing for the Biology portion of the NEET UG examination through memory techniques and active recall exercises.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">3. Intellectual Property &amp; Fair Use</h2>
            <p>
              The original mnemonic rhymes, memory aids, illustrations, and software interface of NEET Mnemo are protected by intellectual property rights. All scientific concepts, terms, and textbook references belong to their respective standard educational publications (primarily NCERT). Content is provided for individual, non-commercial educational study only.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">4. Limitation of Liability</h2>
            <p>
              While every effort is made to maintain 100% fidelity to NCERT Class 11 and 12 Biology, NEET Mnemo does not guarantee specific examination scores or selection in competitive examinations. Learning outcomes depend on individual student dedication and practice.
            </p>
          </div>
        </article>
      )}

      {/* =========================================================================
          TAB 4: DISCLAIMER & SYLLABUS FIDELITY
         ========================================================================= */}
      {activeTab === 'disclaimer' && (
        <article className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6 text-left">
          <div className="border-b border-[#E8E4D9] pb-4">
            <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#243044]">
              Educational Disclaimer &amp; NCERT Scope
            </h1>
            <p className="text-xs font-mono text-[#667085] mt-1">
              Transparency, Authenticity &amp; Compliance Statement
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#667085] leading-relaxed font-sans">
            <div className="p-4 rounded-2xl bg-[#EFFBF4] border-2 border-[#3DBE75] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#3DBE75] shrink-0 mt-0.5" />
              <p className="text-[#243044] font-medium text-xs sm:text-sm">
                <strong>100% Biology-Only Focus:</strong> NEET Mnemo is exclusively devoted to NEET Biology (Botany &amp; Zoology). We do not provide Physics or Chemistry materials.
              </p>
            </div>

            <h2 className="font-title text-base font-bold text-[#243044]">1. Non-Affiliation Statement</h2>
            <p>
              NEET Mnemo is an independent educational revision resource. We are <strong>not affiliated, endorsed, or officially connected with</strong> the National Testing Agency (NTA), the National Medical Commission (NMC), or the National Council of Educational Research and Training (NCERT). "NEET" is a registered trademark of the National Testing Agency.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">2. Syllabus Fidelity</h2>
            <p>
              All chapter outlines, taxonomic classifications, and terminology are curated strictly according to the latest official NCERT Class 11 and Class 12 Biology textbooks and the applicable NEET UG Biology syllabus.
            </p>

            <h2 className="font-title text-base font-bold text-[#243044]">3. No Score Guarantees</h2>
            <p>
              We do not make inflated or misleading claims such as "guaranteed 360/360 in Biology" or "guaranteed MBBS seats". Memory tricks are supplementary revision aids intended to enhance understanding and active recall alongside thorough textbook reading.
            </p>
          </div>
        </article>
      )}

      {/* =========================================================================
          TAB 5: CONTACT US
         ========================================================================= */}
      {activeTab === 'contact' && (
        <article className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#243044] shadow-sketch space-y-6 text-left">
          <div className="border-b border-[#E8E4D9] pb-4">
            <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#243044]">
              Contact Us &amp; Academic Feedback
            </h1>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 font-sans">
              Have a suggestion for a new Biology mnemonic, spotted a typo, or want to contribute? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#EFFBF4] border border-[#3DBE75] space-y-2">
              <Mail className="w-6 h-6 text-[#3DBE75]" />
              <h3 className="font-title text-base font-bold text-[#243044]">Email Inquiries</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                For academic inquiries, corrections, or feature requests:
              </p>
              <a 
                href="mailto:contact@neetmnemo.akshdev.site" 
                className="font-mono text-xs font-bold text-[#3DBE75] hover:underline block"
              >
                contact@neetmnemo.akshdev.site
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9E6] border border-[#FFE681] space-y-2">
              <HelpCircle className="w-6 h-6 text-[#243044]" />
              <h3 className="font-title text-base font-bold text-[#243044]">Community Feedback</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Found an awesome mnemonic for a tricky NCERT concept? Send it over and our academic review team will consider featuring it in the next chapter update!
              </p>
            </div>
          </div>
        </article>
      )}

    </div>
  );
}
