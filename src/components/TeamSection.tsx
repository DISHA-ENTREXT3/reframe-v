import React, { useState } from 'react';
import { Linkedin, Mail, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';
import { TeamMember } from '../types';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface TeamSectionProps {
  onOpenContact: (person?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenContact }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(TEAM_MEMBERS[0]);

  return (
    <section id="team" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">11</span>
            <span aria-hidden="true">/</span>
            <span>Team Section</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              The people behind Reframe.
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              A tight, specialized leadership group operating across private markets growth, narrative film architecture, and audience distribution systems.
            </p>
          </div>
        </FadeIn>

        {/* Member Selector Strip */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TEAM_MEMBERS.map((member) => {
            const isSelected = selectedMember.id === member.id;
            return (
              <StaggerItem key={member.id}>
                <div
                  onClick={() => setSelectedMember(member)}
                  className={`p-6 sm:p-8 rounded-xl border cursor-pointer transition-all h-full ${
                    isSelected
                      ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-lg scale-[1.01]'
                      : 'bg-[#F3EEE4] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/20 hover:bg-[#FAF7F2]'
                  }`}
                >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs uppercase tracking-widest font-mono-numbers ${
                      isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                    }`}
                  >
                    Leadership
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected ? 'bg-[#C45532]' : 'bg-[#63615A]/30'
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-serif-editorial font-medium mb-1">
                  {member.name}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                  }`}
                >
                  {member.role}
                </p>

                <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs">
                  <span className="font-mono-numbers text-[11px] opacity-80">
                    {member.focusAreas.slice(0, 2).join(' · ')}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${
                      isSelected ? 'text-[#C45532]' : 'text-[#14281E]'
                    }`}
                  />
                </div>
              </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Deep Dive Profile Box */}
        <FadeIn delay={0.25} distance={24}>
          <div className="editorial-card rounded-xl p-8 sm:p-12 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] mb-2">
                <span>Partner Focus</span>
                <span aria-hidden="true">·</span>
                <span>{selectedMember.name}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715] mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-sm font-medium text-[#14281E] mb-6">
                {selectedMember.role}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#63615A] leading-relaxed mb-8">
                {selectedMember.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quote Card */}
              <div className="p-5 rounded-lg bg-[#F3EEE4] border border-[#161715]/8 flex items-start gap-3">
                <MessageSquareQuote className="w-5 h-5 text-[#C45532] shrink-0 mt-0.5" />
                <p className="font-serif-editorial italic text-sm text-[#14281E]">
                  &ldquo;{selectedMember.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[#161715]/10 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#63615A] font-semibold block mb-3">
                  Core Practice Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-3 py-1.5 rounded bg-[#F3EEE4] border border-[#161715]/8 text-[#161715] font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#161715]/10 space-y-3">
                <button
                  onClick={() => onOpenContact(selectedMember.name)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#DFD5C6]" />
                  <span>Connect with {selectedMember.name.split(' ')[0]}</span>
                </button>

                <a
                  href="https://www.linkedin.com/company/reframe-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#14281E] bg-transparent border border-[#14281E]/20 rounded-md hover:bg-[#14281E]/5 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#C45532]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};
