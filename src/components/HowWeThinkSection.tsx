import React, { useState } from 'react';
import { Lightbulb, ChevronDown } from 'lucide-react';
import { HOW_WE_THINK_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const HowWeThinkSection: React.FC = () => {
  const [openPrincipleId, setOpenPrincipleId] = useState<string>(
    HOW_WE_THINK_CONTENT.principles[0].id
  );

  const togglePrinciple = (id: string) => {
    setOpenPrincipleId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="how-we-think" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">12</span>
            <span aria-hidden="true">/</span>
            <span>How We Think</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              {HOW_WE_THINK_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {HOW_WE_THINK_CONTENT.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 4 Thought Principles Accordion / Interactive Stack */}
        <StaggerContainer className="space-y-4 max-w-4xl">
          {HOW_WE_THINK_CONTENT.principles.map((pr, index) => {
            const isOpen = openPrincipleId === pr.id;
            return (
              <StaggerItem key={pr.id}>
                <div
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#F3EEE4] border-[#14281E]/30 shadow-md'
                      : 'bg-[#FAF7F2] border-[#161715]/10 hover:border-[#14281E]/20'
                  }`}
                >
                <button
                  onClick={() => togglePrinciple(pr.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs font-mono-numbers text-[#C45532] font-bold mt-1">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#161715]">
                        {pr.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#63615A] mt-1 font-sans">
                        {pr.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#161715]/10 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#14281E] text-white border-transparent' : 'bg-transparent text-[#161715]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[#161715]/8 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                      <div className="md:col-span-7">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#14281E] mb-2">
                          Operational Execution
                        </div>
                        <p className="text-sm text-[#63615A] leading-relaxed">
                          {pr.inPractice}
                        </p>
                      </div>

                      <div className="md:col-span-5 bg-[#FAF7F2] p-4 rounded-lg border border-[#161715]/8">
                        <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C45532] mb-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          <span>The Signal Extracted</span>
                        </div>
                        <p className="text-xs font-serif-editorial italic text-[#161715] leading-normal">
                          &ldquo;{pr.signalExtracted}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
