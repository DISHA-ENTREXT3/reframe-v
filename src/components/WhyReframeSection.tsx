import React from 'react';
import { ShieldCheck, Eye, Users, BookmarkCheck, Inbox } from 'lucide-react';
import { WHY_REFRAME_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const WhyReframeSection: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-[#C45532]" />;
      case 1:
        return <Eye className="w-5 h-5 text-[#C45532]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#C45532]" />;
      case 3:
        return <BookmarkCheck className="w-5 h-5 text-[#C45532]" />;
      case 4:
        return <Inbox className="w-5 h-5 text-[#C45532]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C45532]" />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">08</span>
            <span aria-hidden="true">/</span>
            <span>Why Reframe</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-6">
              {WHY_REFRAME_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {WHY_REFRAME_CONTENT.intro}
            </p>
          </div>
        </FadeIn>

        {/* 5 Pillars of Commercial Strengthened Results */}
        <div className="mb-12">
          <FadeIn delay={0.16} distance={16}>
            <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#63615A] mb-6">
              {WHY_REFRAME_CONTENT.subheadline}
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY_REFRAME_CONTENT.pillars.map((pillar, index) => (
              <StaggerItem key={pillar.title}>
                <div
                  className="editorial-card rounded-lg p-6 bg-[#FAF7F2] border border-[#161715]/10 hover:border-[#14281E]/30 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="p-2 rounded bg-[#FAF0EB]">
                        {getPillarIcon(index)}
                      </span>
                      <span className="text-[11px] font-mono-numbers text-[#63615A]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-editorial text-[#161715] font-medium mb-2 capitalize">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[#63615A] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#161715]/8">
                    <span className="text-[10px] font-mono-numbers uppercase tracking-wider text-[#C45532] block">
                      Strategic Metric
                    </span>
                    <span className="text-xs font-semibold text-[#14281E]">
                      {pillar.metric}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Intersection Callout */}
        <FadeIn delay={0.25} distance={20}>
          <div className="p-8 rounded-xl bg-[#F3EEE4] border border-[#161715]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-1">
              THE TRIAD
            </span>
            <div className="text-xl sm:text-2xl font-serif-editorial text-[#161715]">
              Strategy · Storytelling · Distribution
            </div>
            <p className="text-xs sm:text-sm text-[#63615A] mt-2">
              Most creators understand distribution without financial context. Most agencies understand corporate comms without modern engagement. We bridge both.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-mono-numbers text-[#63615A] uppercase tracking-wider block">
              Audience Filter
            </span>
            <span className="text-sm font-semibold text-[#14281E]">
              Strictly Founders &amp; LPs
            </span>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};
