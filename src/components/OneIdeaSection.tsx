import React, { useState } from 'react';
import { Share2, Video, Linkedin, FileText, Image as ImageIcon, BookOpen, Youtube, ArrowRight } from 'lucide-react';
import { ONE_IDEA_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const OneIdeaSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(ONE_IDEA_CONTENT.nodes[0].id);

  const selectedNode =
    ONE_IDEA_CONTENT.nodes.find((n) => n.id === selectedNodeId) ||
    ONE_IDEA_CONTENT.nodes[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'short-form-video':
        return <Video className="w-4 h-4" />;
      case 'linkedin-pov':
        return <Linkedin className="w-4 h-4" />;
      case 'founder-carousel':
        return <FileText className="w-4 h-4" />;
      case 'quote-visual':
        return <ImageIcon className="w-4 h-4" />;
      case 'long-form-insight':
        return <BookOpen className="w-4 h-4" />;
      case 'youtube-distribution':
        return <Youtube className="w-4 h-4" />;
      default:
        return <Share2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="one-idea-travels" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#161715]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Index */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <span className="text-[#C45532]">06</span>
            <span aria-hidden="true">/</span>
            <span>One Idea, More Value</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
              {ONE_IDEA_CONTENT.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#63615A] leading-relaxed">
              {ONE_IDEA_CONTENT.tagline}
            </p>
          </div>
        </FadeIn>

        {/* Central Origin Card */}
        <FadeIn delay={0.18} distance={20}>
          <div className="mb-10 p-6 sm:p-8 rounded-xl bg-[#F3EEE4] border border-[#161715]/10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] mb-1">
                THE SINGLE SOURCE EVENT
              </div>
              <div className="text-xl sm:text-2xl font-serif-editorial text-[#161715] font-semibold">
                One 45-Minute Partner Conversation
              </div>
              <p className="text-xs sm:text-sm text-[#63615A] mt-1">
                Unfiltered market observations, investment theses, or portfolio breakthroughs recorded in high-fidelity audio/video.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase text-[#14281E] bg-[#FAF7F2] px-4 py-2.5 rounded border border-[#161715]/10 shrink-0">
              <span>Branching into 6 formats</span>
              <ArrowRight className="w-4 h-4 text-[#C45532]" />
            </div>
          </div>
        </FadeIn>

        {/* Interactive Interactive Distribution Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Node Grid / Flow List */}
          <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ONE_IDEA_CONTENT.nodes.map((node, index) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <StaggerItem key={node.id}>
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`text-left p-5 rounded-lg border transition-all relative w-full ${
                      isSelected
                        ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-md scale-[1.01]'
                        : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30 hover:bg-[#F3EEE4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`w-7 h-7 rounded flex items-center justify-center ${
                          isSelected ? 'bg-[#1C362A] text-[#DFD5C6]' : 'bg-[#F3EEE4] text-[#14281E]'
                        }`}
                      >
                        {getNodeIcon(node.id)}
                      </span>
                      <span
                        className={`text-[11px] font-mono-numbers ${
                          isSelected ? 'text-[#C45532]' : 'text-[#63615A]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-serif-editorial font-medium mb-1">
                      {node.title}
                    </h3>
                    <div
                      className={`text-xs ${
                        isSelected ? 'text-[#DFD5C6]' : 'text-[#63615A]'
                      }`}
                    >
                      {node.format}
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Node Inspection Detail Panel */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.25} distance={24}>
              <div className="editorial-card rounded-xl p-6 sm:p-8 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] mb-3">
                <span>Distribution Node Inspector</span>
              </div>

              <h3 className="text-2xl font-serif-editorial text-[#161715] mb-2">
                {selectedNode.title}
              </h3>

              <div className="space-y-4 my-6">
                <div className="p-3.5 rounded bg-[#F3EEE4] border border-[#161715]/6 text-xs">
                  <span className="font-semibold text-[#14281E] block mb-1 uppercase tracking-wider">
                    Primary Channel
                  </span>
                  <span className="text-[#63615A] font-medium">{selectedNode.channel}</span>
                </div>

                <div className="p-3.5 rounded bg-[#F3EEE4] border border-[#161715]/6 text-xs">
                  <span className="font-semibold text-[#14281E] block mb-1 uppercase tracking-wider">
                    Strategic Objective
                  </span>
                  <span className="text-[#63615A] font-medium">{selectedNode.purpose}</span>
                </div>

                <div className="p-4 rounded-lg bg-[#FAF0EB] border border-[#C45532]/20 text-xs">
                  <span className="font-semibold text-[#C45532] block mb-1 uppercase tracking-wider">
                    Sample Output Angle
                  </span>
                  <p className="font-serif-editorial italic text-sm text-[#14281E] leading-snug">
                    &ldquo;{selectedNode.deliverableExample}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#161715]/8 text-[11px] text-[#63615A]">
                Produced without requiring the partner to write a single slide or attend extra filming sessions.
              </div>
            </div>
            </FadeIn>
          </div>
        </div>

        {/* The Fundamental Goal Callout (Bottom Bar) */}
        <FadeIn delay={0.2} distance={20}>
          <div className="p-8 rounded-xl bg-[#14281E] text-[#FAF7F2] text-center border border-[#14281E] shadow-xl">
            <div className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6] mb-2">
              The Fundamental Reframe Thesis
            </div>
            <p className="text-xs sm:text-sm text-[#DFD5C6] mb-2">
              But the goal is not more content.
            </p>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif-editorial text-[#FAF7F2] font-medium tracking-tight">
              {ONE_IDEA_CONTENT.bottomGoal}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
