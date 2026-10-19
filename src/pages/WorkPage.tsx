import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Film, ExternalLink, Filter, CheckCircle2, Play } from 'lucide-react';
import { WORK_PROOF_CONTENT } from '../data/content';
import { WorkProofItem } from '../types';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionReveal';
import { FloatingMarquee } from '../components/FloatingMarquee';
import { RunningVideoSimulator } from '../components/RunningVideoSimulator';

interface WorkPageProps {
  onSelectCase: (item: WorkProofItem) => void;
  onOpenContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectCase, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Founder & Business', 'Impact & Transformation', 'Premium Long-Form', 'Brand & Narrative'];

  const filteredCases =
    selectedCategory === 'All'
      ? WORK_PROOF_CONTENT.cases
      : WORK_PROOF_CONTENT.cases.filter((c) =>
          c.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          c.tagline.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">Selected Work</span>
          </div>
        </FadeIn>

        {/* Hero Section */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#C45532] block mb-3 font-semibold">
              EVIDENCE OF CRAFT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#161715] leading-[1.08] mb-6">
              Selected stories and work from our team.
            </h1>
            <p className="text-lg sm:text-xl text-[#63615A] leading-relaxed mb-6">
              {WORK_PROOF_CONTENT.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#63615A] font-mono-numbers">
              <span className="text-[#14281E] font-bold">{WORK_PROOF_CONTENT.principleIntro}</span>
              <span aria-hidden="true">·</span>
              {WORK_PROOF_CONTENT.principles.map((pr, i) => (
                <React.Fragment key={pr}>
                  <span className="text-[#C45532] font-semibold">{pr}</span>
                  {i < WORK_PROOF_CONTENT.principles.length - 1 && (
                    <span aria-hidden="true" className="text-[#63615A]">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Cinematic Studio Showcase */}
        <FadeIn delay={0.18} distance={20} className="mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-6 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
                  Production Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#FAF7F2]">
                  Documentary Camera Craft for Private Markets
                </h3>
              </div>
              <span className="text-xs font-mono-numbers text-[#DFD5C6] bg-[#1C362A] px-3 py-1.5 rounded border border-white/10">
                Arri &amp; Red Raw Pipeline
              </span>
            </div>

            <RunningVideoSimulator
              posterImage="/src/assets/images/work_bmw_editorial_1792053253363.jpg"
              title="Narrative Direction: Capturing Institutional Heritage & Engineering Mastery"
              subtitle="Production Archive Film 03"
              partnerName="Reframe Editorial Team"
            />
          </div>
        </FadeIn>

        {/* Category Filter Tabs */}
        <FadeIn delay={0.15} distance={16} className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-sm'
                    : 'bg-[#F3EEE4] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Selected Stories Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCases.map((caseItem, idx) => (
            <StaggerItem key={caseItem.id}>
              <div
                onClick={() => onSelectCase(caseItem)}
                data-cursor-label="View"
                className="editorial-card rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#161715]/10 group cursor-pointer transition-all hover:shadow-xl flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#14281E]">
                    <img
                      src={caseItem.image}
                      alt={caseItem.client}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter saturate-[0.9] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281E]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono-numbers uppercase tracking-wider bg-[#14281E]/80 backdrop-blur-md text-[#DFD5C6] px-3 py-1 rounded border border-white/10">
                        {caseItem.client}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                      <div className="text-xs uppercase tracking-wider text-[#DFD5C6] font-mono-numbers">
                        {caseItem.category}
                      </div>
                      <div className="text-2xl font-serif-editorial font-medium">
                        {caseItem.client}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg font-serif-editorial text-[#161715] mb-2 font-medium">
                      {caseItem.tagline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#63615A] leading-relaxed mb-6">
                      {caseItem.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono-numbers uppercase text-[#63615A]">
                        Narrative Angle
                      </div>
                      <div className="p-3 rounded bg-[#F3EEE4] border border-[#161715]/6 text-xs text-[#161715] font-serif-editorial italic">
                        &ldquo;{caseItem.narrativeAngle}&rdquo;
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-[11px] font-mono-numbers uppercase text-[#63615A] mb-1.5">
                        Distribution Strategy
                      </div>
                      <p className="text-xs text-[#63615A]">
                        {caseItem.distributionStrategy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-[#161715]/6 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#63615A] italic truncate max-w-[240px]">
                    {caseItem.attributionNote}
                  </span>
                  <span className="font-semibold text-[#14281E] group-hover:text-[#C45532] flex items-center gap-1 transition-colors shrink-0">
                    <span>Inspect Story Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Attribution & Compliance Note */}
        <FadeIn delay={0.2} distance={16} className="mb-20">
          <div className="p-5 rounded-lg bg-[#FAF7F2] border border-[#161715]/8 text-xs text-[#63615A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-[#161715] block mb-1">Commercial Transparency Note</span>
              <p>{WORK_PROOF_CONTENT.note}</p>
            </div>
            <span className="font-mono-numbers uppercase text-[10px] text-[#C45532] shrink-0 bg-[#F3EEE4] px-3 py-1.5 rounded">
              Confidentiality Respected
            </span>
          </div>
        </FadeIn>

        {/* Work CTA */}
        <FadeIn delay={0.22} distance={20}>
          <div className="p-8 sm:p-12 rounded-2xl bg-[#14281E] text-[#FAF7F2] text-center border border-[#14281E] shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-3">
              Have a portfolio turnaround story worth telling?
            </h3>
            <p className="text-sm text-[#DFD5C6] max-w-xl mx-auto mb-6">
              We help you document the real operating grit behind portfolio growth without disrupting executive teams.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#14281E] bg-[#FAF7F2] rounded-md hover:bg-[#DFD5C6] transition-all shadow-md"
            >
              <span>Talk to Reframe</span>
              <ArrowUpRight className="w-4 h-4 text-[#C45532]" />
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="mt-20">
        <FloatingMarquee theme="dark" speed="slow" />
      </div>
    </div>
  );
};
