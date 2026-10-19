import React from 'react';
import { HelpCircle, Sparkles, X } from 'lucide-react';
import { POSITIONING_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const PositioningSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F3EEE4] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">05</span>
            <span aria-hidden="true">/</span>
            <span>Positioning</span>
          </div>
        </FadeIn>

        {/* Section Header */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-3">
              {POSITIONING_CONTENT.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-6">
              {POSITIONING_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              Most agencies force busy investment partners onto an assembly line of scheduled social filler. We take the exact opposite approach.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column High-Contrast Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: What We Reject */}
          <FadeIn delay={0.18} distance={24} className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-xl border border-[#161715]/10">
            <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#8B3A22] mb-6">
              The Agency Playbook We Ban
            </div>
            <div className="space-y-4">
              {POSITIONING_CONTENT.antiBeliefs.map((belief) => (
                <div
                  key={belief}
                  className="flex items-start gap-3 p-3.5 rounded-md bg-[#F8F5EE] border border-[#161715]/6 text-sm text-[#63615A]"
                >
                  <X className="w-4 h-4 text-[#C45532] shrink-0 mt-0.5" />
                  <span className="font-serif-editorial text-[#161715]">{belief}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#161715]/10 text-xs text-[#63615A] leading-relaxed">
              If an activity does not directly deepen institutional recall or founder familiarity, it does not belong in our production cycle.
            </div>
          </FadeIn>

          {/* Right Column: The 4 Core Questions */}
          <FadeIn delay={0.24} distance={24} className="lg:col-span-7 bg-[#14281E] text-[#FAF7F2] p-8 sm:p-10 rounded-xl border border-[#14281E] shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                Our Discovery Protocol
              </span>
              <span className="text-xs text-[#C45532] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Signal Over Schedule
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#FAF7F2] mb-6">
              {POSITIONING_CONTENT.betterQuestionsTitle}
            </h3>

            <div className="space-y-4 mb-8">
              {POSITIONING_CONTENT.questions.map((item, index) => (
                <div
                  key={item.q}
                  className="p-4 rounded-lg bg-[#1C362A] border border-white/8 hover:border-[#DFD5C6]/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono-numbers text-[#C45532] mt-0.5 font-bold">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-serif-editorial font-medium text-[#FAF7F2] mb-1">
                        {item.q}
                      </h4>
                      <p className="text-xs text-[#DFD5C6] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs text-[#DFD5C6]">
              <span className="uppercase tracking-widest font-mono-numbers">Next Step</span>
              <span className="text-sm font-serif-editorial text-[#FAF7F2] font-medium italic">
                {POSITIONING_CONTENT.closing}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
