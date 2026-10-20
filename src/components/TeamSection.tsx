import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';
import { TeamMember } from '../types';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface TeamSectionProps {
  onOpenContact: (person?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenContact }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(TEAM_MEMBERS[0]);

  const initials = selectedMember.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <section id="team" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative overflow-hidden">
      <div className="absolute right-[-90px] top-28 h-80 w-80 rounded-full bg-[#DFD5C6]/35 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">11</span>
            <span aria-hidden="true">/</span>
            <span>Team Section</span>
          </div>
        </FadeIn>

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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TEAM_MEMBERS.map((member, index) => {
            const isSelected = selectedMember.id === member.id;
            return (
              <StaggerItem key={member.id}>
                <motion.div
                  layout
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() => setSelectedMember(member)}
                  className={`relative overflow-hidden rounded-[26px] border p-6 sm:p-7 cursor-pointer transition-all h-full ${
                    isSelected
                      ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-[0_18px_40px_rgba(20,40,30,0.14)]'
                      : 'bg-[#F3EEE4] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/20 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className={`absolute inset-0 ${isSelected ? 'bg-[radial-gradient(circle_at_top_right,_rgba(196,85,50,0.2),_transparent_32%)]' : 'bg-[radial-gradient(circle_at_top_left,_rgba(223,213,198,0.5),_transparent_32%)]'}`} />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[10px] uppercase tracking-widest font-mono-numbers ${isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'}`}>
                        0{index + 1}
                      </span>
                      <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#C45532]' : 'bg-[#63615A]/30'}`} />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${isSelected ? 'bg-[#FAF7F2] text-[#14281E]' : 'bg-[#14281E] text-[#FAF7F2]'}`}>
                        {member.name
                          .split(' ')
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <span className={`text-[10px] uppercase tracking-[0.18em] font-mono-numbers ${isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'}`}>
                        Leadership
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif-editorial font-medium mb-1 leading-none">
                      {member.name}
                    </h3>
                    <p className={`text-xs mb-4 leading-relaxed ${isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'}`}>
                      {member.role}
                    </p>

                    <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs">
                      <span className="font-mono-numbers text-[11px] opacity-80">
                        {member.focusAreas.slice(0, 2).join(' · ')}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 ${isSelected ? 'text-[#C45532]' : 'text-[#14281E]'}`} />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-card rounded-[28px] p-8 sm:p-12 bg-[#FAF7F2] border border-[#161715]/10 shadow-[0_18px_40px_rgba(20,40,30,0.04)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] mb-3">
                  <span>Partner Focus</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedMember.name}</span>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#14281E] text-[#FAF7F2] text-xl font-serif-editorial">
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715] mb-1 leading-none">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm font-medium text-[#14281E]">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#63615A] leading-relaxed mb-8">
                  {selectedMember.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-[#F3EEE4] border border-[#161715]/8 flex items-start gap-3">
                  <MessageSquareQuote className="w-5 h-5 text-[#C45532] shrink-0 mt-0.5" />
                  <p className="font-serif-editorial italic text-sm text-[#14281E]">
                    “{selectedMember.quote}”
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
                        className="text-xs px-3 py-1.5 rounded-full bg-[#F3EEE4] border border-[#161715]/8 text-[#161715] font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#161715]/10 space-y-3">
                  <button
                    onClick={() => onOpenContact(selectedMember.name)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#14281E] rounded-xl hover:bg-[#1C362A] transition-all shadow-[0_12px_26px_rgba(20,40,30,0.14)]"
                  >
                    <Mail className="w-4 h-4 text-[#DFD5C6]" />
                    <span>Connect with {selectedMember.name.split(' ')[0]}</span>
                  </button>

                  <a
                    href="https://www.linkedin.com/company/reframe-studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#14281E] bg-transparent border border-[#14281E]/20 rounded-xl hover:bg-[#14281E]/5 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#C45532]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
