import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Video,
  Calendar,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CORE_PACKAGES } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface PackagesSectionProps {
  onOpenContact: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenContact }) => {
  const [activePackageId, setActivePackageId] = useState(CORE_PACKAGES[0].id);

  const activePackage =
    CORE_PACKAGES.find((p) => p.id === activePackageId) || CORE_PACKAGES[0];

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'youtube-content-ip':
        return <Video className="w-5 h-5" />;
      case 'event-content-engine':
        return <Calendar className="w-5 h-5" />;
      case 'omnichannel-brand-presence':
        return <Globe className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DFD5C6]/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <FadeIn delay={0.04} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-3">
            <span>Core Packages</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">Built For Private Markets</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
                Three focused engines for private capital.
              </h2>
              <p className="text-base text-[#63615A] leading-relaxed">
                Whether establishing a flagship episodic video show, turning an annual summit into months of digital distribution, or building continuous multichannel authority—our three core packages are powered by the same three differentiators:
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors whitespace-nowrap self-start md:self-auto group"
            >
              <span>View full capabilities &amp; workflow</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} distance={16}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 rounded-[26px] bg-[#F3EEE4] border border-[#161715]/10 shadow-[0_14px_32px_rgba(20,40,30,0.04)]">
            {[
              ['Investment Thinking', 'Translating macro theses, valuation conviction, and sector pattern recognition rather than fluffy soundbites.'],
              ['Partner Expertise', 'Zero partner burden. 45-minute asynchronous sprints extract raw partner intuition without desk work.'],
              ['Portfolio Storytelling', 'Documenting the gritty operational turnarounds and pivots that prove genuine hands-on value to founders.'],
            ].map(([title, text], index) => (
              <div key={title} className="flex items-start gap-3 rounded-2xl bg-[#FAF7F2]/60 p-3 border border-[#161715]/5">
                <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${index % 2 === 0 ? 'bg-[#C45532]' : 'bg-[#14281E]'}`} />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14281E] block mb-1">
                    {title}
                  </span>
                  <p className="text-xs text-[#63615A] leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CORE_PACKAGES.map((pkg, index) => {
            const isSelected = pkg.id === activePackageId;
            return (
              <StaggerItem key={pkg.id}>
                <motion.div
                  layout
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  onClick={() => setActivePackageId(pkg.id)}
                  className={`group relative overflow-hidden rounded-[28px] p-1 cursor-pointer transition-all duration-300 ${
                    isSelected ? 'shadow-[0_18px_40px_rgba(20,40,30,0.12)]' : 'shadow-[0_10px_24px_rgba(20,40,30,0.04)]'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-[28px] ${isSelected ? 'bg-[radial-gradient(circle_at_top_right,_rgba(196,85,50,0.18),_transparent_35%),linear-gradient(180deg,_rgba(20,40,30,0.03),_rgba(255,255,255,0.08))]' : 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.2),_transparent)]'}`} />
                  <div className={`relative h-full rounded-[27px] border p-7 ${isSelected ? 'bg-[#FAF7F2] border-[#14281E]/30' : 'bg-[#F7F3ED] border-[#161715]/10'}`}>
                    <div className="absolute right-5 top-5 text-[10px] font-mono-numbers uppercase tracking-[0.2em] text-[#63615A]">
                      0{index + 1}
                    </div>

                    <div className="flex items-center justify-between pb-5 border-b border-[#161715]/10 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${isSelected ? 'bg-[#14281E] text-[#FAF7F2]' : 'bg-[#F3EEE4] text-[#14281E]'}`}>
                          {getPackageIcon(pkg.id)}
                        </div>
                        <div>
                          <div className="text-[10px] font-mono-numbers uppercase tracking-[0.18em] text-[#63615A]">
                            {pkg.cadence}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#C45532]/20 bg-[#FAF0EB] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C45532]">
                          <Sparkles className="w-3 h-3" />
                          Selected
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-[2rem] font-serif-editorial text-[#161715] mb-2 leading-none">
                      {pkg.title}
                    </h3>

                    <p className="text-xs font-serif-editorial italic text-[#63615A] mb-4 leading-relaxed">
                      “{pkg.tagline}”
                    </p>

                    <p className="text-sm text-[#63615A] leading-relaxed mb-6">
                      {pkg.summary}
                    </p>

                    <div className="mb-6 rounded-2xl border border-[#161715]/10 bg-[#FAF7F2] p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#63615A] font-mono-numbers mb-3">
                        Why it works
                      </div>
                      <div className="space-y-3 text-xs text-[#161715]">
                        {[
                          ['Investment Thinking', pkg.differentiators.investmentThinking],
                          ['Partner Expertise', pkg.differentiators.partnerExpertise],
                          ['Portfolio Storytelling', pkg.differentiators.portfolioStorytelling],
                        ].map(([label, detail]) => (
                          <div key={label} className="grid grid-cols-[auto_1fr] gap-2">
                            <span className="font-semibold text-[#14281E]">{label}:</span>
                            <span className="text-[#63615A] leading-snug">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#63615A] font-mono-numbers mb-3">
                        Core deliverables
                      </div>
                      <ul className="space-y-2">
                        {pkg.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#161715]">
                            <CheckCircle2 className="w-4 h-4 text-[#C45532] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 border-t border-[#161715]/10 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenContact();
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FAF7F2] bg-[#14281E] hover:bg-[#1C362A] transition-all shadow-[0_10px_18px_rgba(20,40,30,0.18)]"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
                      </button>

                      <Link
                        to="/services"
                        className="text-xs text-[#63615A] hover:text-[#C45532] font-medium"
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePackage.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-[28px] bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-[0_30px_80px_rgba(20,40,30,0.14)] flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <span className="text-xs font-mono-numbers uppercase text-[#DFD5C6] block mb-2">
                Active package: {activePackage.title}
              </span>
              <h3 className="text-2xl font-serif-editorial text-[#FAF7F2] mb-2">
                {activePackage.tagline}
              </h3>
              <p className="text-sm text-[#DFD5C6] leading-relaxed">
                {activePackage.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <div className="rounded-full border border-[#FAF7F2]/15 bg-[#FAF7F2]/5 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#FAF7F2]/90 font-mono-numbers">
                45 min partner time
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#14281E] bg-[#FAF7F2] rounded-xl hover:bg-[#DFD5C6] transition-all shadow-md"
              >
                <span>Schedule a call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C45532]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
