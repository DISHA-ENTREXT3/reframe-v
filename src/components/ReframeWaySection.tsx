import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { REFRAME_WAY_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const ReframeWaySection: React.FC = () => {
  const [activePairIndex, setActivePairIndex] = useState(0);

  const currentPair = REFRAME_WAY_CONTENT.pairs[activePairIndex];

  return (
    <section id="the-reframe-way" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header - No Numbering */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-6">
            <span>The Reframe Way</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">Editorial Philosophy</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              {REFRAME_WAY_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {REFRAME_WAY_CONTENT.subheadline}
            </p>
          </div>
        </FadeIn>

        {/* Interactive Selector Pill Bar */}
        <FadeIn delay={0.18} distance={16}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {REFRAME_WAY_CONTENT.pairs.map((pair, idx) => {
              const isActive = activePairIndex === idx;
              return (
                <button
                  key={pair.id}
                  onClick={() => setActivePairIndex(idx)}
                  className={`px-4 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    isActive
                      ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-sm'
                      : 'bg-[#F3EEE4] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30'
                  }`}
                >
                  <span>{pair.before}</span>
                  <span className="mx-2 text-[#C45532]">→</span>
                  <span>{pair.after}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Side-by-Side Comparison Container */}
        <FadeIn delay={0.24} distance={26}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
            {/* Left: What Happened */}
            <div className="lg:col-span-6 bg-[#F3EEE4] p-8 sm:p-10 rounded-xl border border-[#161715]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#161715]/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A]">
                    Before Reframe
                  </span>
                  <span className="text-xs text-[#8B3A22] font-medium">
                    What Happened
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#63615A] mb-2 font-mono-numbers">
                  Standard Industry Format
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mb-4">
                  {currentPair.before}
                </h3>

                <div className="bg-[#FAF7F2] p-5 rounded-lg border border-[#161715]/8 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#63615A] mb-1.5 font-semibold">
                    Typical Execution
                  </div>
                  <p className="text-sm text-[#63615A] leading-relaxed italic font-serif-editorial">
                    &ldquo;{currentPair.beforeDescription}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#161715]/10 text-xs text-[#63615A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#63615A]/40" />
                <span>Result: Low organic engagement, zero founder recall.</span>
              </div>
            </div>

            {/* Right: Why It Mattered */}
            <div className="lg:col-span-6 bg-[#14281E] text-[#FAF7F2] p-8 sm:p-10 rounded-xl border border-[#14281E] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C45532]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                    The Reframe Method
                  </span>
                  <span className="text-xs text-[#C45532] font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    Why It Mattered
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#DFD5C6] mb-2 font-mono-numbers">
                  Strategic Narrative Transformation
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-4">
                  {currentPair.after}
                </h3>

                <div className="bg-[#1C362A] p-5 rounded-lg border border-white/10 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFD5C6] mb-1.5 font-semibold">
                    Reframed Execution
                  </div>
                  <p className="text-sm text-[#FAF7F2] leading-relaxed">
                    {currentPair.afterDescription}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-xs text-[#DFD5C6] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C45532]" />
                  <span>Strategic Outcome:</span>
                </div>
                <span className="text-xs font-serif-editorial text-[#FAF7F2] italic">
                  {currentPair.example}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Overview Matrix Strip (No Numbers) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REFRAME_WAY_CONTENT.pairs.map((pair, idx) => (
            <StaggerItem key={pair.id}>
              <div
                onClick={() => setActivePairIndex(idx)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activePairIndex === idx
                    ? 'border-[#14281E] bg-[#F3EEE4]'
                    : 'border-[#161715]/8 bg-[#FAF7F2] hover:bg-[#F3EEE4]/50'
                }`}
              >
                <div className="text-[11px] font-mono-numbers text-[#C45532] mb-1">
                  Transformation Focus
                </div>
                <div className="text-xs text-[#63615A] line-through decoration-[#C45532]/60 mb-1">
                  {pair.before}
                </div>
                <div className="text-sm font-serif-editorial text-[#161715] font-medium flex items-center gap-1.5">
                  <span>{pair.after}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
