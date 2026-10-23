import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Volume2, Sparkles, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { FEATURED_TRANSFORMATIONS } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface TransformationSpotlightProps {
  onOpenContact: () => void;
}

export const TransformationSpotlight: React.FC<TransformationSpotlightProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'why-we-invested' | 'thirty-seconds'>('why-we-invested');
  const [isPlaying, setIsPlaying] = useState(false);

  const currentExample =
    FEATURED_TRANSFORMATIONS.find((t) => t.id === activeTab) ||
    FEATURED_TRANSFORMATIONS[0];

  return (
    <section id="transformation-showcase" className="py-20 md:py-28 bg-[#F3EEE4] border-t border-b border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <FadeIn delay={0.04} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-3">
            <span>The Transformation</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">How We Think In Practice</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
                A fund announcement tells people what happened.
                <span className="block italic text-[#C45532]">Good content tells them why it mattered.</span>
              </h2>
              <p className="text-base text-[#63615A] leading-relaxed">
                Strong thinking often gets used once and disappears. We find the idea worth carrying forward and give it a clearer form.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tab Selector: Bring "Why We Invested" and "The 30 Seconds Worth Hearing" Forward */}
        <FadeIn delay={0.12} distance={16}>
          <div className="flex items-center gap-2 p-1.5 bg-[#FAF7F2] rounded-xl border border-[#161715]/10 max-w-xl mb-8">
            <button
              onClick={() => {
                setActiveTab('why-we-invested');
                setIsPlaying(false);
              }}
              className={`flex-1 py-3 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'why-we-invested'
                  ? 'bg-[#14281E] text-[#FAF7F2] shadow-sm'
                  : 'text-[#63615A] hover:text-[#161715]'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${activeTab === 'why-we-invested' ? 'text-[#C45532]' : 'text-[#63615A]'}`} />
              <span>&ldquo;Why We Invested&rdquo;</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('thirty-seconds');
                setIsPlaying(false);
              }}
              className={`flex-1 py-3 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'thirty-seconds'
                  ? 'bg-[#14281E] text-[#FAF7F2] shadow-sm'
                  : 'text-[#63615A] hover:text-[#161715]'
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${activeTab === 'thirty-seconds' ? 'text-[#C45532]' : 'text-[#63615A]'}`} />
              <span>&ldquo;The 30 Seconds Worth Hearing&rdquo;</span>
            </button>
          </div>
        </FadeIn>

        {/* The Side-by-Side Transformation Card */}
        <FadeIn delay={0.18} distance={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: What Happened (The Standard Noise) */}
            <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-2xl border border-[#161715]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#161715]/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A]">
                    STARTING POINT
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#63615A] mb-2 font-mono-numbers">
                  {currentExample.beforeLabel}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#161715] mb-4">
                  {activeTab === 'why-we-invested' ? 'Portfolio announcement' : 'Funding size, company update and standard deal information.'}
                </h3>

                <div className="p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/8 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#63615A] mb-1 font-semibold">
                    The raw asset
                  </div>
                  <p className="text-sm font-serif-editorial italic text-[#63615A] leading-relaxed">
                    &ldquo;{currentExample.beforeSnippet}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Why It Mattered (The Reframed Intellectual Gravity) */}
            <div className="lg:col-span-7 bg-[#14281E] text-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#14281E] shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Ambient blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#C45532]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                    The Reframe Asset
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-numbers uppercase text-[#DFD5C6] bg-[#1C362A] px-2.5 py-1 rounded border border-white/10">
                      {currentExample.differentiatorBadge}
                    </span>
                  </div>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#DFD5C6] mb-2 font-mono-numbers">
                  REFRAMED ANGLE
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-3">
                  {currentExample.title}
                </h3>
                <p className="text-sm text-[#DFD5C6] mb-5 leading-relaxed">
                  {currentExample.afterSnippet}
                </p>

                <div className="p-5 rounded-xl bg-[#1C362A] border border-white/10 mb-6">
                  <div className="text-xs uppercase tracking-wider text-[#DFD5C6] mb-3 font-mono-numbers">
                    OUTPUT
                  </div>
                  <div className="space-y-2 text-sm text-[#FAF7F2] leading-relaxed">
                    <p>Portfolio announcement → Investment reasoning</p>
                    <p>Short video / point of view</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
