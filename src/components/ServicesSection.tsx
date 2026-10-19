import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronRight, Video, Calendar, Globe, Layers } from 'lucide-react';
import { CORE_PACKAGES } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedPackageId, setSelectedPackageId] = useState(CORE_PACKAGES[0].id);

  const activePackage =
    CORE_PACKAGES.find((p) => p.id === selectedPackageId) ||
    CORE_PACKAGES[0];

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
    <section id="services" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header - Clean, No Numbering */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-6">
            <span>Core Packages</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">Built For Private Markets</span>
          </div>
        </FadeIn>

        {/* Section Title */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              Three focused engines for private capital.
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              Engineered specifically for high-conviction investors, private equity partners, and portfolio leaders.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Services Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Package Selection List */}
          <StaggerContainer className="lg:col-span-5 space-y-3">
            {CORE_PACKAGES.map((pkg) => {
              const isSelected = pkg.id === selectedPackageId;
              return (
                <StaggerItem key={pkg.id}>
                  <button
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-lg border transition-all relative ${
                      isSelected
                        ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-md'
                        : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30 hover:bg-[#F3EEE4]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono-numbers uppercase tracking-wider ${
                          isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                        }`}
                      >
                        {pkg.cadence}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'translate-x-1 text-[#C45532]' : 'opacity-30'
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-serif-editorial font-medium mb-1">
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-xs line-clamp-2 ${
                        isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right: Package Deep Dive Panel */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} distance={24}>
              <div className="editorial-card rounded-xl p-8 sm:p-10 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm relative">
                <div className="flex items-center justify-between pb-6 border-b border-[#161715]/10 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532]">
                      Package Blueprint
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mt-1">
                      {activePackage.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#14281E]/5 flex items-center justify-center text-[#14281E]">
                    {getPackageIcon(activePackage.id)}
                  </div>
                </div>

                {/* Tagline & Summary */}
                <div className="mb-6">
                  <p className="text-base sm:text-lg font-serif-editorial text-[#161715] italic mb-3">
                    &ldquo;{activePackage.tagline}&rdquo;
                  </p>
                  <p className="text-sm text-[#63615A] leading-relaxed">
                    {activePackage.summary}
                  </p>
                </div>

                {/* Differentiators */}
                <div className="p-4 sm:p-5 rounded-lg bg-[#F3EEE4] border border-[#161715]/8 mb-6 space-y-2.5">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#14281E]">
                    Core Differentiators
                  </div>
                  <div className="text-xs space-y-1.5">
                    <div>
                      <span className="font-semibold text-[#14281E]">Investment Thinking: </span>
                      <span className="text-[#63615A]">{activePackage.differentiators.investmentThinking}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#14281E]">Partner Expertise: </span>
                      <span className="text-[#63615A]">{activePackage.differentiators.partnerExpertise}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#14281E]">Portfolio Storytelling: </span>
                      <span className="text-[#63615A]">{activePackage.differentiators.portfolioStorytelling}</span>
                    </div>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-4">
                    Deliverables Included
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePackage.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-3 rounded bg-[#FAF7F2] border border-[#161715]/8 text-xs text-[#161715]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C45532] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Headline Output */}
                <div className="pt-6 border-t border-[#161715]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#63615A] font-mono-numbers">
                      Sample Production Asset
                    </div>
                    <div className="text-xs font-serif-editorial font-medium text-[#161715] mt-0.5">
                      {activePackage.sampleAsset}
                    </div>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors whitespace-nowrap self-start sm:self-auto"
                  >
                    <span>Inquire about this package</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
