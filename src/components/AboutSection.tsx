import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F3EEE4] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">10</span>
            <span aria-hidden="true">/</span>
            <span>About Reframe</span>
          </div>
        </FadeIn>

        {/* 2-Column Split: Editorial Prose & Studio Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <FadeIn delay={0.15} distance={24} className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-8">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#63615A] leading-relaxed">
              <p>{ABOUT_CONTENT.description}</p>
              <p>{ABOUT_CONTENT.mission}</p>
            </div>

            {/* Core Focus Callout */}
            <div className="my-8 p-6 sm:p-8 rounded-xl bg-[#FAF7F2] border border-[#161715]/10 shadow-sm">
              <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#C45532] block mb-2 font-semibold">
                THE CORE DIRECTIVE
              </span>
              <p className="text-2xl sm:text-3xl font-serif-editorial text-[#14281E] leading-snug">
                &ldquo;{ABOUT_CONTENT.keyFocus}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all"
              >
                <span>Talk to Reframe</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFD5C6]" />
              </button>
            </div>
          </FadeIn>

          {/* Right Column: Studio Heritage & Investor Session Photograph */}
          <FadeIn delay={0.25} distance={28} className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-[#161715]/10 shadow-lg">
              <img
                src="/src/assets/images/reframe_executive_session_1792053253848.jpg"
                alt="Reframe Studios partner interview session"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover object-top filter saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14281E]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <div className="text-[11px] font-mono-numbers uppercase tracking-wider text-[#DFD5C6] mb-1">
                  Private Markets Specificity
                </div>
                <div className="text-sm font-serif-editorial">
                  Content with the depth and discretion investment committees expect.
                </div>
              </div>
            </div>

            {/* Quiet studio operating principles */}
            <div className="mt-6 space-y-2">
              {ABOUT_CONTENT.principles.map((pr) => (
                <div
                  key={pr}
                  className="flex items-center gap-2 text-xs text-[#63615A] py-1 border-b border-[#161715]/6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C45532]" />
                  <span>{pr}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
