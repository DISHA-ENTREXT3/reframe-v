import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { WHO_WE_WORK_WITH_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

interface WhoWeWorkWithSectionProps {
  onOpenContact: () => void;
}

export const WhoWeWorkWithSection: React.FC<WhoWeWorkWithSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState(WHO_WE_WORK_WITH_CONTENT.categories[0].id);

  const activeCategory =
    WHO_WE_WORK_WITH_CONTENT.categories.find((c) => c.id === activeTab) ||
    WHO_WE_WORK_WITH_CONTENT.categories[0];

  return (
    <section id="who-we-work-with" className="py-24 md:py-32 bg-[#F3EEE4] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">07</span>
            <span aria-hidden="true">/</span>
            <span>Who We Work With</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              {WHO_WE_WORK_WITH_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {WHO_WE_WORK_WITH_CONTENT.description}
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar / Category Selector */}
        <FadeIn delay={0.18} distance={16}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {WHO_WE_WORK_WITH_CONTENT.categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    isActive
                      ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Selected Category Feature Card */}
        <FadeIn delay={0.24} distance={24}>
          <div className="editorial-card rounded-xl p-8 sm:p-10 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532]">
                Investor Persona Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mt-1 mb-4">
                {activeCategory.name}
              </h3>
              <p className="text-sm sm:text-base text-[#63615A] leading-relaxed mb-6">
                {activeCategory.context}
              </p>

              <div className="p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/8 mb-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#14281E] mb-1">
                  The Specific Relationship Hurdle
                </div>
                <p className="text-xs sm:text-sm text-[#161715]">
                  {activeCategory.typicalNeed}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-6 lg:border-l lg:border-[#161715]/10">
              <div className="text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-4">
                Tailored Reframe Strategic Outcomes
              </div>
              <div className="space-y-3 mb-8">
                {activeCategory.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-3 p-3.5 rounded-md bg-[#FAF7F2] border border-[#161715]/8 text-xs sm:text-sm text-[#161715]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C45532] shrink-0" />
                    <span className="font-medium">{outcome}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors"
              >
                <span>Discuss {activeCategory.name} positioning</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        </FadeIn>

        {/* Bottom Editorial Note */}
        <FadeIn delay={0.2} distance={16}>
          <div className="pt-6 border-t border-[#161715]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#63615A]">
            <span className="font-serif-editorial italic text-sm text-[#161715]">
              &ldquo;From partner visibility to portfolio storytelling, the work is designed around the people and relationships that move private markets.&rdquo;
            </span>
            <span className="font-mono-numbers uppercase tracking-wider shrink-0 text-[#C45532]">
              High-Trust Ecosystems Only
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
