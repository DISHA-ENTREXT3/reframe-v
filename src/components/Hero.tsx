import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

const heroVideoSrc = new URL('../../IMG_2765.MP4', import.meta.url).href;

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleScrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,_rgba(196,85,50,0.14),_transparent_38%),radial-gradient(circle_at_left,_rgba(223,213,198,0.5),_transparent_42%)] pointer-events-none" />
      <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-[#DFD5C6]/55 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0.05} distance={12}>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.26em] text-[#63615A] font-semibold mb-8 md:mb-10">
            <span className="text-[#C45532]">Reframe Studios</span>
            <span aria-hidden="true" className="text-[#DFD5C6]">/</span>
            <span>{HERO_CONTENT.kicker}</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-center mb-12 md:mb-16">
          <div>
            <FadeIn delay={0.12} distance={28}>
              <h1 className="max-w-[680px] text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] xl:text-[5rem] font-serif-editorial leading-[0.96] text-[#161715] tracking-[-0.04em] mb-6 md:mb-8">
                {HERO_CONTENT.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} distance={20}>
              <p className="max-w-xl text-base md:text-xl text-[#63615A] leading-relaxed mb-8 md:mb-10">
                {HERO_CONTENT.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.24} distance={12}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#14281E]/10 bg-[#FAF7F2]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14281E] shadow-[0_10px_26px_rgba(20,40,30,0.04)] backdrop-blur-sm mb-8">
                <span className="inline-block h-2 w-2 rounded-full bg-[#C45532]" />
                Strategy • storytelling • distribution
              </div>
            </FadeIn>

            <FadeIn delay={0.28} distance={16}>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToPackages}
                  className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] active:scale-[0.98] transition-all shadow-[0_16px_36px_rgba(20,40,30,0.18)] group relative overflow-hidden"
                >
                  <span className="relative z-10">{HERO_CONTENT.primaryCTA}</span>
                  <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]" />
                  <ArrowDown className="relative z-10 w-4 h-4 text-[#DFD5C6] group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-[#14281E] bg-transparent border border-[#14281E]/25 rounded-md hover:bg-[#14281E]/5 hover:border-[#14281E] active:scale-[0.98] transition-all"
                >
                  <span>{HERO_CONTENT.secondaryCTA}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C45532]" />
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.32} distance={20}>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-[12px] border border-[#161715]/10 bg-[#F3EEE4] shadow-[0_18px_40px_rgba(20,40,30,0.08)]">
                <img
                  src={HERO_CONTENT.image}
                  alt="Reframe Studios storytelling campaign"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35} distance={30}>
          <div className="relative aspect-video overflow-hidden rounded-[12px] border border-[#161715]/10 bg-[#14281E] shadow-[0_35px_90px_rgba(20,40,30,0.16)] group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,85,50,0.24),transparent_24%),linear-gradient(180deg,rgba(20,40,30,0.08),rgba(20,40,30,0.56)_63%,rgba(20,40,30,0.72))] z-10 pointer-events-none" />
            <video
              src={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.06] brightness-[0.94] scale-[1.04] group-hover:scale-[1.08] transition-transform duration-[1400ms] ease-out"
            />

            <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between text-[#FAF7F2]">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#DFD5C6] font-mono-numbers mb-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#C45532] shadow-[0_0_0_5px_rgba(196,85,50,0.18)]" />
                  Inside the studio
                </div>
                <div className="text-lg md:text-2xl font-serif-editorial leading-tight">
                  Turning boardroom pattern recognition into lasting market recall.
                </div>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#FAF7F2]/20 bg-[#FAF7F2]/5 px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.14em] text-[#FAF7F2]/90 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <span>Unscripted partner insights</span>
                <span className="text-[#DFD5C6]">·</span>
                <span className="text-[#DFD5C6]">Cinema grade</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} distance={16}>
          <div className="mt-7 pt-6 border-t border-[#161715]/10 flex flex-wrap items-center justify-between gap-5 text-xs text-[#63615A]">
            <span className="uppercase tracking-[0.24em] font-semibold text-[#161715]">
              Built specifically for
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {HERO_CONTENT.trustMarkers.map((marker, index) => (
                <React.Fragment key={marker}>
                  <span className="font-medium text-[#161715]">{marker}</span>
                  {index < HERO_CONTENT.trustMarkers.length - 1 && (
                    <span aria-hidden="true" className="text-[#DFD5C6]">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
