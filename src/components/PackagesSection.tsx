import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Video, Calendar, Globe, Sparkles, Layers, ChevronRight } from 'lucide-react';
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
    <section id="packages" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
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

        {/* 3 Core Differentiators Strip (Anti-slop, clean unboxed metadata) */}
        <FadeIn delay={0.12} distance={16}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 rounded-xl bg-[#F3EEE4] border border-[#161715]/10">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C45532] mt-2 shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14281E] block mb-1">
                  Investment Thinking
                </span>
                <p className="text-xs text-[#63615A] leading-relaxed">
                  Translating macro theses, valuation conviction, and sector pattern recognition rather than fluffy soundbites.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-[#161715]/10 pt-4 md:pt-0 md:pl-4">
              <div className="w-2 h-2 rounded-full bg-[#14281E] mt-2 shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14281E] block mb-1">
                  Partner Expertise
                </span>
                <p className="text-xs text-[#63615A] leading-relaxed">
                  Zero partner burden. 45-minute asynchronous sprints extract raw partner intuition without desk work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-[#161715]/10 pt-4 md:pt-0 md:pl-4">
              <div className="w-2 h-2 rounded-full bg-[#C45532] mt-2 shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14281E] block mb-1">
                  Portfolio Storytelling
                </span>
                <p className="text-xs text-[#63615A] leading-relaxed">
                  Documenting the gritty operational turnarounds and pivots that prove genuine hands-on value to founders.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* The 3 Core Packages Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CORE_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === activePackageId;
            return (
              <StaggerItem key={pkg.id}>
                <div
                  onClick={() => setActivePackageId(pkg.id)}
                  className={`editorial-card rounded-2xl p-8 border cursor-pointer transition-all flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-[#FAF7F2] border-[#14281E] shadow-xl ring-1 ring-[#14281E]'
                      : 'bg-[#FAF7F2] border-[#161715]/10 hover:border-[#14281E]/30'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#161715]/10 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-[#14281E] text-[#FAF7F2]' : 'bg-[#F3EEE4] text-[#14281E]'
                        }`}>
                          {getPackageIcon(pkg.id)}
                        </div>
                        <span className="text-[11px] font-mono-numbers uppercase text-[#C45532] font-semibold">
                          {pkg.cadence}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif-editorial text-[#161715] mb-2 font-medium">
                      {pkg.title}
                    </h3>

                    <p className="text-xs font-serif-editorial italic text-[#63615A] mb-4 leading-relaxed">
                      &ldquo;{pkg.tagline}&rdquo;
                    </p>

                    <p className="text-xs text-[#63615A] leading-relaxed mb-6">
                      {pkg.summary}
                    </p>

                    {/* How Differentiators Power This Package */}
                    <div className="p-4 rounded-xl bg-[#F3EEE4] border border-[#161715]/8 mb-6 space-y-3">
                      <div className="text-[11px] font-mono-numbers uppercase text-[#14281E] font-bold">
                        Package Differentiators
                      </div>

                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-[#14281E] block text-[11px]">
                            · Investment Thinking:
                          </span>
                          <span className="text-[#63615A] text-[11px] leading-tight block">
                            {pkg.differentiators.investmentThinking}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold text-[#14281E] block text-[11px]">
                            · Partner Expertise:
                          </span>
                          <span className="text-[#63615A] text-[11px] leading-tight block">
                            {pkg.differentiators.partnerExpertise}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold text-[#14281E] block text-[11px]">
                            · Portfolio Storytelling:
                          </span>
                          <span className="text-[#63615A] text-[11px] leading-tight block">
                            {pkg.differentiators.portfolioStorytelling}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-[#63615A] font-semibold mb-3">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2">
                        {pkg.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-[#161715]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C45532] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-6 border-t border-[#161715]/10 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact();
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#FAF7F2] bg-[#14281E] hover:bg-[#1C362A] transition-all"
                    >
                      <span>Inquire About Package</span>
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Time Burden Contrast Box */}
        <FadeIn delay={0.2} distance={20}>
          <div className="p-8 rounded-2xl bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono-numbers uppercase text-[#DFD5C6] block mb-1">
                The Executive Contract
              </span>
              <h3 className="text-2xl font-serif-editorial text-[#FAF7F2] mb-2">
                45 Minutes of Partner Time Per Month.
              </h3>
              <p className="text-xs text-[#DFD5C6] leading-relaxed">
                Traditional agencies demand 14+ hours of partner meetings and slide revisions. Reframe operates entirely on asynchronous capture: one 45-minute structured conversation powers your entire month of high-conviction publishing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#14281E] bg-[#FAF7F2] rounded-lg hover:bg-[#DFD5C6] transition-all shadow-md"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C45532]" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
