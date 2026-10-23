import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FINAL_CTA_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

interface FinalCTASectionProps {
  onOpenContact: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-28 md:py-36 bg-[#14281E] text-[#FAF7F2] relative overflow-hidden">
      {/* Background ambient terracotta glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C45532]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          <FadeIn delay={0.05} distance={18}>
            <div className="aspect-video lg:aspect-[3/2] overflow-hidden rounded-lg border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
              <img
                src="/2.jpeg"
                alt="A camera recording an automotive story, with the message 'Stories that show the bigger picture'"
                className="w-full h-full object-cover object-[35%_center]"
              />
            </div>
          </FadeIn>

          <div className="text-left">
            <FadeIn delay={0.08} distance={14}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C362A] border border-white/10 text-xs uppercase tracking-widest text-[#DFD5C6] font-mono-numbers mb-8">
                <Sparkles className="w-3.5 h-3.5 text-[#C45532]" />
                <span>The Next Conversation</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.14} distance={24}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-editorial leading-[1.12] tracking-tight text-[#FAF7F2] mb-6 text-balance">
                {FINAL_CTA_CONTENT.headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} distance={18}>
              <div className="text-2xl sm:text-3xl font-serif-editorial text-[#DFD5C6] italic mb-10">
                {FINAL_CTA_CONTENT.subheadline}
              </div>
            </FadeIn>

            <FadeIn delay={0.26} distance={16}>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-[#14281E] bg-[#FAF7F2] rounded-md hover:bg-[#DFD5C6] active:scale-[0.98] transition-all shadow-xl group"
              >
                <span>{FINAL_CTA_CONTENT.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C45532] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
