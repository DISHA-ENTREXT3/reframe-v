import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  ABOUT_CONTENT,
  TEAM_MEMBERS,
  WHY_REFRAME_CONTENT,
  HOW_WE_THINK_CONTENT,
  WHO_WE_WORK_WITH_CONTENT,
} from '../data/content';
import {
  ScrollSection,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionReveal';
import { FloatingMarquee } from '../components/FloatingMarquee';
import { TestimonialSlider } from '../components/TestimonialSlider';

interface AboutPageProps {
  onOpenContact: (person?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const [openPrincipleId, setOpenPrincipleId] = useState<string>(
    HOW_WE_THINK_CONTENT.principles[0].id
  );

  return (
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section 1: Page Hero & Origin */}
        <ScrollSection id="about-hero" delay={0.04}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">About &amp; Team</span>
          </div>

          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#C45532] block mb-3 font-semibold">
              STUDIO MISSION &amp; ORIGIN
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#161715] leading-[1.08] mb-6">
              {ABOUT_CONTENT.title}
            </h1>
            <p className="text-xl sm:text-2xl font-serif-editorial italic text-[#14281E] mb-6">
              &ldquo;{ABOUT_CONTENT.keyFocus}&rdquo;
            </p>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed mb-6">
              {ABOUT_CONTENT.description}
            </p>
            <p className="text-sm sm:text-base text-[#161715] font-medium">
              {ABOUT_CONTENT.mission}
            </p>
          </div>
        </ScrollSection>

        {/* Section 2: 3 Core Principles Strip with subtle Parallax */}
        <ScrollSection id="about-principles" delay={0.06} subtleParallax className="mb-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.principles.map((principle, idx) => (
              <StaggerItem key={idx}>
                <div className="p-6 rounded-xl bg-[#F3EEE4] border border-[#161715]/10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#C45532] block mb-2">
                      PRINCIPLE 0{idx + 1}
                    </span>
                    <p className="text-sm font-serif-editorial text-[#161715] leading-relaxed">
                      {principle}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollSection>

        {/* Section 3: Who We Work With */}
        <ScrollSection id="who-we-work-with" delay={0.06} className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
              WHO WE WORK WITH
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715] mb-4">
              {WHO_WE_WORK_WITH_CONTENT.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#63615A] leading-relaxed">
              {WHO_WE_WORK_WITH_CONTENT.description}
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_WORK_WITH_CONTENT.categories.map((category) => (
              <StaggerItem key={category.id}>
                <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#161715]/10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-serif-editorial font-medium text-[#161715] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#63615A] leading-relaxed mb-4">
                      {category.context}
                    </p>
                    <div className="p-3 rounded bg-[#F3EEE4] border border-[#161715]/6 text-[11px] text-[#14281E]">
                      <span className="font-semibold block mb-1">Strategic Need:</span>
                      {category.typicalNeed}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#161715]/8">
                    <span className="text-[10px] font-mono-numbers uppercase text-[#63615A] block mb-1">Key Outcomes</span>
                    <ul className="text-[11px] text-[#63615A] space-y-1">
                      {category.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#C45532]" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollSection>

        {/* Section 4: The People Behind Reframe (Team Bios) */}
        <ScrollSection id="team" delay={0.06} className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
              THE PEOPLE BEHIND REFRAME
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715] mb-4">
              Leadership grounded in commercial strategy and documentary craft.
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id}>
                <div className="editorial-card rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#161715]/10 flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <div className="p-6 sm:p-8 border-b border-[#161715]/8">
                      <div className="text-[11px] font-mono-numbers uppercase text-[#C45532] mb-1">
                        PARTNER PROFILE
                      </div>
                      <h3 className="text-2xl font-serif-editorial font-medium text-[#161715] mb-1">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#14281E]">
                        {member.role}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4">
                      {member.bioParagraphs.map((para, i) => (
                        <p key={i} className="text-xs sm:text-sm text-[#63615A] leading-relaxed">
                          {para}
                        </p>
                      ))}

                      <div className="p-3.5 rounded bg-[#FAF0EB] border border-[#C45532]/20 text-xs italic font-serif-editorial text-[#14281E]">
                        &ldquo;{member.quote}&rdquo;
                      </div>

                      <div>
                        <span className="text-[10px] font-mono-numbers uppercase text-[#63615A] block mb-2">Focus Areas</span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.focusAreas.map((fa) => (
                            <span key={fa} className="text-[10px] px-2.5 py-1 rounded bg-[#F3EEE4] border border-[#161715]/6 text-[#161715]">
                              {fa}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 border-t border-[#161715]/6 mt-4 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono-numbers text-[#63615A]">
                      Reframe Studios
                    </span>
                    <button
                      onClick={() => onOpenContact(member.name)}
                      className="font-semibold text-[#14281E] hover:text-[#C45532] flex items-center gap-1 transition-colors"
                    >
                      <span>Connect with {member.name.split(' ')[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollSection>

        {/* Section 5: How We Think (4 Core Methodologies) */}
        <ScrollSection id="how-we-think" delay={0.06} className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
              HOW WE THINK
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#161715] mb-2">
              {HOW_WE_THINK_CONTENT.headline}
            </h2>
            <p className="text-sm text-[#63615A]">
              {HOW_WE_THINK_CONTENT.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOW_WE_THINK_CONTENT.principles.map((principle, idx) => {
              const isOpen = openPrincipleId === principle.id;
              return (
                <FadeIn key={principle.id} delay={0.06 * idx} distance={18}>
                  <div
                    onClick={() => setOpenPrincipleId(isOpen ? '' : principle.id)}
                    className={`p-6 sm:p-8 rounded-xl border cursor-pointer transition-all ${
                      isOpen
                        ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-xl'
                        : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono-numbers uppercase tracking-wider ${
                          isOpen ? 'text-[#DFD5C6]' : 'text-[#C45532]'
                        }`}
                      >
                        0{idx + 1}. Methodology
                      </span>
                      <span
                        className={`text-xs font-mono-numbers ${
                          isOpen ? 'text-[#C45532]' : 'text-[#63615A]'
                        }`}
                      >
                        {isOpen ? 'Expanded' : 'Tap to expand'}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif-editorial font-medium mb-2">
                      {principle.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isOpen ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                      }`}
                    >
                      {principle.description}
                    </p>

                    {isOpen && (
                      <div className="pt-4 border-t border-white/10 space-y-3">
                        <p className="text-xs text-white/80 leading-relaxed">
                          {principle.inPractice}
                        </p>
                        <div className="p-3 rounded bg-[#1C362A] text-xs text-[#DFD5C6]">
                          <span className="font-semibold text-[#C45532] block mb-0.5">Signal Extracted:</span>
                          {principle.signalExtracted}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </ScrollSection>

        {/* Section 6: Why Reframe Commercial Outcomes with Parallax */}
        <ScrollSection id="commercial-proposition" delay={0.06} subtleParallax className="mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#F3EEE4] border border-[#161715]/10">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
              COMMERCIAL PROPOSITION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mb-4">
              {WHY_REFRAME_CONTENT.headline}
            </h3>
            <p className="text-base text-[#63615A] leading-relaxed max-w-2xl mb-8">
              {WHY_REFRAME_CONTENT.intro}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {WHY_REFRAME_CONTENT.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-lg bg-[#FAF7F2] border border-[#161715]/8 text-center"
                >
                  <span className="text-xs font-serif-editorial font-bold text-[#14281E] block">
                    {pillar.title}
                  </span>
                  <span className="text-[10px] text-[#C45532] font-mono-numbers uppercase tracking-wider block mt-1">
                    {pillar.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Section 7: Partner Social Proof Testimonial Slider */}
        <ScrollSection id="about-testimonials" delay={0.06} className="mb-20">
          <TestimonialSlider
            title="What partners say about the Reframe engine."
            subtitle="Real impact across Growth Equity, Buyout Private Equity, Venture Capital, and Family Offices."
            onOpenContact={(person) => onOpenContact(person)}
          />
        </ScrollSection>

        {/* Section 8: Bottom CTA */}
        <ScrollSection id="about-cta" delay={0.06}>
          <div className="p-8 sm:p-12 rounded-2xl bg-[#14281E] text-[#FAF7F2] text-center border border-[#14281E] shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#FAF7F2] mb-3">
              Start with better questions.
            </h3>
            <p className="text-sm text-[#DFD5C6] max-w-xl mx-auto mb-6">
              Let&apos;s uncover the thinking, stories, and conversations already inside your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#14281E] bg-[#FAF7F2] rounded-md hover:bg-[#DFD5C6] transition-all shadow-md"
            >
              <span>Schedule a discovery call</span>
              <ArrowUpRight className="w-4 h-4 text-[#C45532]" />
            </Link>
          </div>
        </ScrollSection>
      </div>

      <div className="mt-20">
        <FloatingMarquee theme="light" />
      </div>
    </div>
  );
};
