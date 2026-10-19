import React, { useState } from 'react';
import { Check, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PROBLEM_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const ProblemSection: React.FC = () => {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  const assetDetails = [
    {
      title: "Partner conversations",
      commonFate: "Trapped in internal Slack threads, partner lunches, or 1:1 mentorship calls.",
      reframeFate: "Crystallized into recurring LinkedIn points of view and authoritative founder guides.",
    },
    {
      title: "Investment theses",
      commonFate: "Confined to internal 50-page investment committee memos read by 6 people.",
      reframeFate: "Reframed into a public contrarian market map that attracts tier-1 founders before they raise.",
    },
    {
      title: "Portfolio stories",
      commonFate: "Reduced to a single celebratory funding tweet: 'Excited to back XYZ in their Series A.'",
      reframeFate: "Deep documentary case studies detailing how the operational team overcame product pivots.",
    },
    {
      title: "Conference appearances",
      commonFate: "45-minute keynote viewed by 120 people in a dimly lit convention hall and forgotten.",
      reframeFate: "Extracted into 6 high-density video clips and a visual framework carousel with 250k+ reach.",
    },
    {
      title: "Podcasts",
      commonFate: "An unindexed 60-minute audio file sitting buried in episode archives with minimal recall.",
      reframeFate: "Isolating the single 40-second epiphany that changes how founders calculate their CAC.",
    },
    {
      title: "Market observations",
      commonFate: "Scattered in spontaneous voice notes or private WhatsApp chats between partners.",
      reframeFate: "Structured into rapid-response market commentary during macro market inflection points.",
    },
    {
      title: "Years of pattern recognition",
      commonFate: "Locked in partner intuition, only shared in occasional late-stage diligence meetings.",
      reframeFate: "Codified into repeatable intellectual properties that make your firm the definitive category choice.",
    },
  ];

  return (
    <section id="the-problem" className="py-24 md:py-32 bg-[#F3EEE4] border-t border-b border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">02</span>
            <span aria-hidden="true">/</span>
            <span>The Problem</span>
          </div>
        </FadeIn>

        {/* Section Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-6">
              {PROBLEM_CONTENT.title}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {PROBLEM_CONTENT.intro}
            </p>
          </div>
        </FadeIn>

        {/* What You Already Have vs What Actually Happens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: What you already have (Interactive Asset Selector) */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-lg border border-[#161715]/8 shadow-sm">
            <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#63615A] mb-4">
              Assets Already Inside Your Firm
            </div>
            <StaggerContainer className="space-y-2">
              {assetDetails.map((asset, idx) => {
                const isActive = activeAssetIndex === idx;
                return (
                  <StaggerItem key={asset.title}>
                    <button
                      onClick={() => setActiveAssetIndex(idx)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-all flex items-center justify-between text-sm ${
                        isActive
                          ? 'bg-[#14281E] text-[#FAF7F2] font-semibold shadow-sm'
                          : 'bg-transparent text-[#161715] hover:bg-[#F3EEE4] font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono-numbers ${isActive ? 'text-[#DFD5C6]' : 'text-[#63615A]'}`}>
                          0{idx + 1}
                        </span>
                        <span>{asset.title}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#C45532]' : 'opacity-30'}`} />
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column: The Decay vs The Reframe Shift */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.2} distance={20}>
              <div className="editorial-card p-6 sm:p-8 rounded-lg bg-[#FAF7F2] border border-[#161715]/10">
                <div className="text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-2">
                  Selected Asset Deep Dive
                </div>
                <h3 className="text-2xl font-serif-editorial text-[#161715] mb-6">
                  {assetDetails[activeAssetIndex].title}
                </h3>

                <div className="space-y-6">
                  <div className="p-4 rounded-md bg-[#F8F5EE] border border-[#161715]/8">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8B3A22] mb-1.5">
                      <XCircle className="w-4 h-4" />
                      <span>The Status Quo Reality</span>
                    </div>
                    <p className="text-sm text-[#63615A] leading-relaxed">
                      {assetDetails[activeAssetIndex].commonFate}
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-[#FAF0EB] border border-[#C45532]/20">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#C45532] mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#C45532]" />
                      <span>The Reframe Operating Model</span>
                    </div>
                    <p className="text-sm text-[#14281E] font-medium leading-relaxed">
                      {assetDetails[activeAssetIndex].reframeFate}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Core Diagnosis Card */}
            <FadeIn delay={0.28} distance={20}>
              <div className="p-6 sm:p-8 rounded-lg bg-[#14281E] text-[#FAF7F2]">
                <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#DFD5C6] mb-3">
                  The Diagnosis
                </div>
                <p className="text-lg sm:text-xl font-serif-editorial text-balance leading-relaxed mb-6">
                  &ldquo;{PROBLEM_CONTENT.coreProblem}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs text-[#DFD5C6] uppercase tracking-wider font-sans font-semibold">
                    Our Mandate
                  </span>
                  <span className="text-sm font-serif-editorial text-[#FAF7F2] font-medium">
                    {PROBLEM_CONTENT.conclusion}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
