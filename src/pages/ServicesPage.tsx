import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronRight, Video, Calendar, Globe, Layers, Sparkles } from 'lucide-react';
import { CORE_PACKAGES } from '../data/content';
import {
  ScrollSection,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionReveal';
import { FloatingMarquee } from '../components/FloatingMarquee';

export const ServicesPage: React.FC = () => {
  const [activePackageId, setActivePackageId] = useState(CORE_PACKAGES[0].id);

  const currentPackage =
    CORE_PACKAGES.find((p) => p.id === activePackageId) ||
    CORE_PACKAGES[0];

  const workflowSteps = [
    {
      phase: 'Phase One',
      title: 'Signal Extraction & Voice Audit',
      description:
        'We review internal investment memos, podcast appearances, and board takeaways. A single 45-minute partner sprint maps your contrarian angles.',
    },
    {
      phase: 'Phase Two',
      title: 'Narrative Architecture & Formats',
      description:
        'Our editorial team isolates the 30-second breakthrough insights, draft thesis articles, and builds visual carousels with strict compliance alignment.',
    },
    {
      phase: 'Phase Three',
      title: 'Cinema Production & Repurposing',
      description:
        'Short-form vertical video cuts, high-craft typography assets, and long-form journals undergo post-production grading and sound design.',
    },
    {
      phase: 'Phase Four',
      title: 'Distribution & Market Recall Tracking',
      description:
        'Assets launch into founder, co-investor, and LP feeds, generating compounding familiarity before your next deal sourcing conversation.',
    },
  ];

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
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section 1: Hero & Breadcrumb */}
        <ScrollSection id="services-hero" delay={0.04}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">Packages &amp; Capabilities</span>
          </div>

          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#161715] leading-[1.1] mb-6">
              Three focused engines for private capital.
            </h1>
            <p className="text-lg sm:text-xl text-[#63615A] leading-relaxed">
              We design, produce, and distribute content operations engineered specifically for high-conviction investors, private equity partners, and portfolio leaders.
            </p>
          </div>
        </ScrollSection>

        {/* Section 2: Time Burden Contrast Box with Parallax */}
        <ScrollSection id="services-burden" delay={0.06} subtleParallax className="mb-16">
          <div className="p-8 rounded-xl bg-[#F3EEE4] border border-[#161715]/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-sm">
            <div>
              <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#8B3A22] block mb-1">
                The Zero-Partner-Burden Model
              </span>
              <h3 className="text-2xl font-serif-editorial text-[#161715] mb-2">
                45 Minutes a Month. That’s It.
              </h3>
              <p className="text-sm text-[#63615A] leading-relaxed">
                Generic social agencies demand partners spend 12–15 hours drafting posts, attending weekly brainstorms, and reviewing endless calendar drafts. Reframe operates entirely on asynchronous extraction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#161715]/8">
                <span className="text-xs text-[#63615A] block mb-1">Traditional Agency</span>
                <span className="text-2xl sm:text-3xl font-mono-numbers text-[#8B3A22] font-bold">14+ hrs</span>
                <span className="text-[11px] text-[#63615A] block mt-1">per month partner time</span>
              </div>

              <div className="p-4 rounded-lg bg-[#14281E] text-[#FAF7F2] border border-[#14281E]">
                <span className="text-xs text-[#DFD5C6] block mb-1">Reframe Studios</span>
                <span className="text-2xl sm:text-3xl font-mono-numbers text-[#DFD5C6] font-bold">45 min</span>
                <span className="text-[11px] text-[#DFD5C6] block mt-1">per month partner sprint</span>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Section 3: Interactive Core Packages Deep Dive */}
        <ScrollSection id="services-breakdown" delay={0.08} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <StaggerContainer className="lg:col-span-5 space-y-3">
              {CORE_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === activePackageId;
                return (
                  <StaggerItem key={pkg.id}>
                    <button
                      onClick={() => setActivePackageId(pkg.id)}
                      className={`w-full text-left p-6 rounded-lg border transition-all relative ${
                        isSelected
                          ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-md'
                          : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30 hover:bg-[#F3EEE4]'
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
                      <h3 className="text-xl font-serif-editorial font-medium mb-1">
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

            <div className="lg:col-span-7">
              <FadeIn delay={0.15} distance={24}>
                <div className="editorial-card rounded-xl p-8 sm:p-10 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm relative">
                  <div className="flex items-center justify-between pb-6 border-b border-[#161715]/10 mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532]">
                        Package Blueprint
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mt-1">
                        {currentPackage.title}
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#14281E]/5 flex items-center justify-center text-[#14281E]">
                      {getPackageIcon(currentPackage.id)}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-serif-editorial italic text-[#161715] mb-3">
                      &ldquo;{currentPackage.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-[#63615A] leading-relaxed">
                      {currentPackage.summary}
                    </p>
                  </div>

                  {/* Core Differentiators Within This Package */}
                  <div className="p-5 rounded-lg bg-[#F3EEE4] border border-[#161715]/8 mb-6 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#14281E] block">
                      Core Differentiators Within This Package
                    </span>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-[#14281E] block">
                          · Investment Thinking:
                        </span>
                        <span className="text-[#63615A]">
                          {currentPackage.differentiators.investmentThinking}
                        </span>
                      </div>

                      <div>
                        <span className="font-semibold text-[#14281E] block">
                          · Partner Expertise:
                        </span>
                        <span className="text-[#63615A]">
                          {currentPackage.differentiators.partnerExpertise}
                        </span>
                      </div>

                      <div>
                        <span className="font-semibold text-[#14281E] block">
                          · Portfolio Storytelling:
                        </span>
                        <span className="text-[#63615A]">
                          {currentPackage.differentiators.portfolioStorytelling}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#63615A] font-semibold block mb-4">
                      Deliverables Included
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentPackage.deliverables.map((item) => (
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

                  <div className="pt-6 border-t border-[#161715]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono-numbers uppercase text-[#63615A] block">
                        Sample Production Asset
                      </span>
                      <span className="text-xs font-serif-editorial font-medium text-[#161715]">
                        {currentPackage.sampleAsset}
                      </span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all shrink-0"
                    >
                      <span>Inquire about this package</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </ScrollSection>

        {/* Section 4: Workflow Cadence Timeline (No Numbers) */}
        <ScrollSection id="services-workflow" delay={0.08} className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2">
              Operational Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715]">
              How Reframe Integrates With Your Firm
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <StaggerItem key={step.phase}>
                <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#161715]/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-numbers font-bold text-[#C45532]">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-mono-numbers text-[#63615A]">
                        Integrated Cycle
                      </span>
                    </div>
                    <h3 className="text-lg font-serif-editorial font-medium text-[#161715] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#63615A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollSection>
      </div>

      <FloatingMarquee theme="dark" />
    </div>
  );
};
