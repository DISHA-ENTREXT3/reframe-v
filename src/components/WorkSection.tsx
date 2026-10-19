import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { WORK_PROOF_CONTENT } from '../data/content';
import { WorkProofItem } from '../types';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface WorkSectionProps {
  onSelectCase: (item: WorkProofItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCase }) => {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#F3EEE4] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index - No numbering */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-6">
            <span>Selected Work</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">Evidence of Craft</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
                {WORK_PROOF_CONTENT.headline}
              </h2>
              <p className="text-base text-[#63615A] leading-relaxed mb-4">
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

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors whitespace-nowrap self-start md:self-auto group"
            >
              <span>View all case studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Selected Stories Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WORK_PROOF_CONTENT.cases.slice(0, 2).map((caseItem) => (
            <StaggerItem key={caseItem.id}>
              <div
                onClick={() => onSelectCase(caseItem)}
                data-cursor-label="View"
                className="editorial-card rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#161715]/10 group cursor-pointer transition-all hover:shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  {/* Media frame */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#14281E]">
                    <img
                      src={caseItem.image}
                      alt={caseItem.client}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter saturate-[0.9] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281E]/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono-numbers uppercase tracking-wider bg-[#14281E]/80 backdrop-blur-md text-[#DFD5C6] px-3 py-1 rounded border border-white/10">
                        {caseItem.client}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                      <div className="text-xs uppercase tracking-wider text-[#DFD5C6] font-mono-numbers">
                        {caseItem.category}
                      </div>
                      <div className="text-xl font-serif-editorial font-medium">
                        {caseItem.client}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg font-serif-editorial text-[#161715] mb-2 font-medium">
                      {caseItem.tagline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#63615A] leading-relaxed mb-4">
                      {caseItem.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[#161715]/6 mt-2 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#63615A] italic truncate max-w-[240px]">
                    {caseItem.attributionNote}
                  </span>
                  <span className="font-semibold text-[#14281E] group-hover:text-[#C45532] flex items-center gap-1 transition-colors shrink-0">
                    <span>View Story Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Legal Attribution Notice */}
        <FadeIn delay={0.2} distance={16}>
          <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#161715]/8 text-xs text-[#63615A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span>{WORK_PROOF_CONTENT.note}</span>
            <span className="font-mono-numbers uppercase text-[10px] text-[#C45532] shrink-0">
              Confidentiality Respected
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
