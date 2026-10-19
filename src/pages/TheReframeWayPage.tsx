import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, RefreshCw, Zap, ArrowRight, Play, Volume2 } from 'lucide-react';
import { REFRAME_WAY_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionReveal';
import { FloatingMarquee } from '../components/FloatingMarquee';
import { RunningVideoSimulator } from '../components/RunningVideoSimulator';

interface TheReframeWayPageProps {
  onOpenContact: () => void;
}

export const TheReframeWayPage: React.FC<TheReframeWayPageProps> = ({ onOpenContact }) => {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const currentPair = REFRAME_WAY_CONTENT.pairs[activePairIndex];

  return (
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">The Reframe Way</span>
          </div>
        </FadeIn>

        {/* Hero Banner */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#C45532] block mb-3 font-semibold">
              OUR EDITORIAL CONSTITUTION
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#161715] leading-[1.08] mb-6">
              A fund announcement tells people what happened.
              <span className="block italic text-[#C45532] mt-2">Good content tells them why it mattered.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#63615A] leading-relaxed">
              Every day, private markets release transactional press releases that vanish within four hours. We translate capital events into defensible intellectual property that stays with founders for years.
            </p>
          </div>
        </FadeIn>

        {/* Studio Simulation Element */}
        <FadeIn delay={0.18} distance={20} className="mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                  Active Thesis Deconstruction
                </span>
                <h3 className="text-2xl font-serif-editorial text-[#FAF7F2] mt-1">
                  How We Capture The &ldquo;Why It Mattered&rdquo; In 45 Minutes
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono-numbers text-[#DFD5C6] bg-[#1C362A] px-4 py-2 rounded-full border border-white/10 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C45532] animate-ping" />
                <span>Zero Partner Desk Time</span>
              </div>
            </div>

            <RunningVideoSimulator
              posterImage="/src/assets/images/reframe_executive_session_1792053253848.jpg"
              title="Deconstructing The Logistics Roll-Up: What Public Press Releases Never Show"
              subtitle="Executive Partner Session 02"
              partnerName="Reframe Partner Room"
            />
          </div>
        </FadeIn>

        {/* Interactive Matrix Selector */}
        <div className="mb-8">
          <FadeIn delay={0.15} distance={16}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A] font-semibold">
                Select A Transformation To Compare
              </span>
              <span className="text-xs font-mono-numbers text-[#C45532]">
                0{activePairIndex + 1} / 0{REFRAME_WAY_CONTENT.pairs.length}
              </span>
            </div>
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
              {REFRAME_WAY_CONTENT.pairs.map((pair, idx) => {
                const isActive = activePairIndex === idx;
                return (
                  <button
                    key={pair.id}
                    onClick={() => setActivePairIndex(idx)}
                    className={`px-4 py-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
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
        </div>

        {/* Side-by-Side Deep Dive Container */}
        <FadeIn delay={0.22} distance={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            {/* Left: Traditional What Happened */}
            <div className="lg:col-span-6 bg-[#F3EEE4] p-8 sm:p-10 rounded-xl border border-[#161715]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#161715]/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A]">
                    TRADITIONAL PR PLAYBOOK
                  </span>
                  <span className="text-xs text-[#8B3A22] font-semibold">
                    What Happened
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#63615A] mb-2 font-mono-numbers">
                  Status Quo Noise
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mb-4">
                  {currentPair.before}
                </h3>

                <div className="bg-[#FAF7F2] p-5 rounded-lg border border-[#161715]/8 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#63615A] mb-1.5 font-semibold">
                    How The Market Receives It
                  </div>
                  <p className="text-sm text-[#63615A] leading-relaxed italic font-serif-editorial">
                    &ldquo;{currentPair.beforeDescription}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#161715]/10 text-xs text-[#63615A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B3A22]" />
                <span>Result: Low organic engagement, zero founder recall.</span>
              </div>
            </div>

            {/* Right: The Reframe Way */}
            <div className="lg:col-span-6 bg-[#14281E] text-[#FAF7F2] p-8 sm:p-10 rounded-xl border border-[#14281E] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C45532]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                    THE REFRAME METHOD
                  </span>
                  <span className="text-xs text-[#C45532] font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    Why It Mattered
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#DFD5C6] mb-2 font-mono-numbers">
                  Institutional Intellectual Gravity
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-4">
                  {currentPair.after}
                </h3>

                <div className="bg-[#1C362A] p-5 rounded-lg border border-white/10 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFD5C6] mb-1.5 font-semibold">
                    The Commercial Impact
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

        {/* 5 Core Principles Grid */}
        <div className="mb-20">
          <FadeIn delay={0.1} distance={18}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2">
                SYSTEMIC REPLICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715]">
                All 5 Content Conversions In Practice
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFRAME_WAY_CONTENT.pairs.map((pair, idx) => (
              <StaggerItem key={pair.id}>
                <div className="editorial-card p-6 rounded-xl bg-[#FAF7F2] border border-[#161715]/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono-numbers">
                      <span className="text-[#63615A]">TRANSFORMATION 0{idx + 1}</span>
                      <span className="text-[#C45532] font-bold">10x Recall</span>
                    </div>

                    <div className="text-xs text-[#63615A] line-through decoration-[#C45532]/70 mb-2">
                      {pair.before}
                    </div>

                    <h4 className="text-xl font-serif-editorial text-[#161715] font-medium mb-3">
                      {pair.after}
                    </h4>

                    <p className="text-xs text-[#63615A] leading-relaxed mb-4">
                      {pair.afterDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#161715]/8 flex items-center justify-between text-xs">
                    <span className="font-serif-editorial text-[#14281E] italic text-[11px]">
                      {pair.example}
                    </span>
                    <button
                      onClick={() => setActivePairIndex(idx)}
                      className="text-[#C45532] hover:underline font-semibold text-[11px]"
                    >
                      Compare
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Call to Action */}
        <FadeIn delay={0.2} distance={20}>
          <div className="p-8 sm:p-12 rounded-2xl bg-[#14281E] text-[#FAF7F2] text-center border border-[#14281E] shadow-xl flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-3">
              Ready to turn fund announcements into founder recall?
            </h3>
            <p className="text-sm text-[#DFD5C6] max-w-xl mb-6">
              Let’s audit your past 3 portfolio announcements and show you what founders actually wanted to hear.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#14281E] bg-[#FAF7F2] rounded-md hover:bg-[#DFD5C6] transition-all shadow-md"
            >
              <span>Talk to Reframe</span>
              <ArrowUpRight className="w-4 h-4 text-[#C45532]" />
            </Link>
          </div>
        </FadeIn>
      </div>

      <div className="mt-20">
        <FloatingMarquee theme="dark" speed="slow" />
      </div>
    </div>
  );
};
