import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Volume2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isPlayingSnippet, setIsPlayingSnippet] = useState(false);

  const handleScrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#DFD5C6]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Kicker - Anti-slop clean text without numbering */}
        <FadeIn delay={0.05} distance={12}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">Reframe Studios</span>
            <span aria-hidden="true" className="text-[#DFD5C6]">/</span>
            <span>{HERO_CONTENT.kicker}</span>
          </div>
        </FadeIn>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <FadeIn delay={0.12} distance={28}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif-editorial leading-[1.08] text-[#161715] tracking-tight text-balance mb-8">
                {HERO_CONTENT.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} distance={20}>
              <p className="text-lg md:text-xl text-[#63615A] leading-relaxed max-w-2xl text-balance mb-10">
                {HERO_CONTENT.subheadline}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.28} distance={16}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleScrollToPackages}
                  className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] active:scale-[0.98] transition-all shadow-md group"
                >
                  <span>{HERO_CONTENT.primaryCTA}</span>
                  <ArrowDown className="w-4 h-4 text-[#DFD5C6] group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#14281E] bg-transparent border border-[#14281E]/30 rounded-md hover:bg-[#14281E]/5 hover:border-[#14281E] active:scale-[0.98] transition-all"
                >
                  <span>{HERO_CONTENT.secondaryCTA}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C45532]" />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Studio Micro-Card */}
          <div className="lg:col-span-4 lg:pt-4">
            <FadeIn delay={0.3} distance={24}>
              <div className="editorial-card rounded-lg p-6 bg-[#F3EEE4]/60 border border-[#161715]/10 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#161715]/8 mb-4">
                  <span className="text-xs uppercase tracking-wider font-mono-numbers text-[#63615A]">
                    Studio Blueprint
                  </span>
                  <span className="text-xs font-semibold text-[#14281E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C45532]" />
                    Zero Partner Desk Time
                  </span>
                </div>

                <p className="text-sm font-serif-editorial text-[#161715] italic leading-snug mb-4">
                  &ldquo;We don&apos;t pitch founders our check size. We show them how we solved vertical pricing churn in Portfolio Company 3.&rdquo;
                </p>

                <div className="bg-[#FAF7F2] p-3 rounded border border-[#161715]/8 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setIsPlayingSnippet(!isPlayingSnippet)}
                    data-cursor-label={isPlayingSnippet ? "Pause" : "Play"}
                    className="w-8 h-8 rounded-full bg-[#14281E] text-[#FAF7F2] flex items-center justify-center shrink-0 hover:bg-[#C45532] transition-colors"
                    aria-label="Play soundbite sample"
                  >
                    {isPlayingSnippet ? (
                      <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-[#161715] truncate">
                      {isPlayingSnippet ? "Playing extracted 30s cut..." : "Extracting the 30-sec thesis"}
                    </div>
                    <div className="text-[11px] text-[#63615A] truncate">
                      Partner Memo → Founder Reel
                    </div>
                  </div>
                  <span className="text-[11px] font-mono-numbers text-[#C45532]">
                    {isPlayingSnippet ? "0:28" : "0:30"}
                  </span>
                </div>

                {isPlayingSnippet && (
                  <div className="w-full bg-[#DFD5C6] h-1 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#C45532] h-full w-3/4 animate-[pulse_2s_infinite]" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero Visual Asset - High-impact 16:9 editorial asset */}
        <FadeIn delay={0.35} distance={32}>
          <div className="relative rounded-xl overflow-hidden border border-[#161715]/10 shadow-xl group">
            <img
              src={HERO_CONTENT.image}
              alt="Reframe Studios executive interview production set"
              referrerPolicy="no-referrer"
              className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover object-center filter saturate-[0.95] group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14281E]/70 via-[#14281E]/15 to-transparent pointer-events-none" />

            {/* Overlay info box */}
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FAF7F2]">
              <div>
                <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#DFD5C6] mb-1">
                  Inside The Studio
                </div>
                <div className="text-lg md:text-xl font-serif-editorial font-medium">
                  Turning boardroom pattern recognition into lasting market recall.
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80 bg-[#14281E]/80 backdrop-blur-md px-4 py-2 rounded border border-white/10 shrink-0">
                <span>Unscripted Partner Insights</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#DFD5C6]">Cinema Grade</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Unboxed trust markers - Zero pill rule */}
        <FadeIn delay={0.4} distance={16}>
          <div className="mt-8 pt-6 border-t border-[#161715]/8 flex flex-wrap items-center justify-between gap-6 text-xs text-[#63615A]">
            <span className="uppercase tracking-widest font-semibold text-[#161715]">
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
