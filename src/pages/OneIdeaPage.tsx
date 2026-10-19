import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Share2,
  Video,
  Linkedin,
  FileText,
  Image as ImageIcon,
  BookOpen,
  Youtube,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Eye,
} from 'lucide-react';
import { ONE_IDEA_CONTENT } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionReveal';
import { MotionBranchingTree } from '../components/MotionBranchingTree';
import { FloatingMarquee } from '../components/FloatingMarquee';

interface OneIdeaPageProps {
  onOpenContact: () => void;
}

export const OneIdeaPage: React.FC<OneIdeaPageProps> = ({ onOpenContact }) => {
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
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">One Idea Travels</span>
          </div>
        </FadeIn>

        {/* Page Hero */}
        <FadeIn delay={0.12} distance={22}>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#C45532] block mb-3 font-semibold">
              THE MULTIPLIER ENGINE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#161715] leading-[1.08] mb-6">
              One strong idea can travel further than you think.
            </h1>
            <p className="text-lg sm:text-xl text-[#63615A] leading-relaxed">
              We never ask partners to become daily creators. From a single 45-minute structured partner dialogue, our studio extracts, refines, and manufactures 6 distinct multi-platform assets engineered for compound market recall.
            </p>
          </div>
        </FadeIn>

        {/* Motion Branching Tree Interactive Component */}
        <FadeIn delay={0.18} distance={24}>
          <MotionBranchingTree
            selectedNodeId={selectedNodeId}
            onSelectNode={(id) => setSelectedNodeId(id)}
          />
        </FadeIn>

        {/* Live Channel Preview & Strategic Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Interactive Format Switcher */}
          <div className="lg:col-span-5 bg-[#F3EEE4] p-6 sm:p-8 rounded-xl border border-[#161715]/10">
            <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#63615A] mb-4">
              Select Distribution Channel
            </div>

            <div className="space-y-2">
              {ONE_IDEA_CONTENT.nodes.map((node, index) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-xs ${
                      isSelected
                        ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] shadow-sm font-semibold'
                        : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/8 hover:bg-[#F8F5EE]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded flex items-center justify-center ${
                          isSelected ? 'bg-[#1C362A] text-[#DFD5C6]' : 'bg-[#F3EEE4] text-[#14281E]'
                        }`}
                      >
                        {getNodeIcon(node.id)}
                      </span>
                      <span>{node.title}</span>
                    </div>

                    <span className="font-mono-numbers text-[10px] opacity-70">
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-[#161715]/10 text-xs text-[#63615A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C45532]" />
              <span>All 6 assets originate from the exact same recorded session.</span>
            </div>
          </div>

          {/* Right Column: Live Simulated Production Asset */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.22} distance={20}>
              <div className="editorial-card rounded-xl p-8 bg-[#FAF7F2] border border-[#161715]/10 shadow-sm relative">
                <div className="flex items-center justify-between pb-4 border-b border-[#161715]/10 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532]">
                      Target Output Architecture
                    </span>
                    <h3 className="text-2xl font-serif-editorial text-[#161715] mt-1">
                      {selectedNode.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#14281E] text-[#FAF7F2] flex items-center justify-center">
                    {getNodeIcon(selectedNode.id)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/6">
                    <span className="text-[11px] font-mono-numbers uppercase text-[#63615A] block mb-1">
                      Primary Channel
                    </span>
                    <span className="text-xs font-semibold text-[#14281E]">
                      {selectedNode.channel}
                    </span>
                  </div>

                  <div className="p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/6">
                    <span className="text-[11px] font-mono-numbers uppercase text-[#63615A] block mb-1">
                      Technical Spec
                    </span>
                    <span className="text-xs font-semibold text-[#14281E]">
                      {selectedNode.format}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-[11px] font-mono-numbers uppercase text-[#63615A] block mb-2">
                    Strategic Purpose
                  </span>
                  <p className="text-sm text-[#63615A] leading-relaxed">
                    {selectedNode.purpose}
                  </p>
                </div>

                {/* Simulated Visual Artifact Box */}
                <div className="p-5 rounded-xl bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-md relative overflow-hidden mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[10px] font-mono-numbers text-[#DFD5C6]">
                    <span>SIMULATED ASSET PREVIEW</span>
                    <span className="text-[#C45532]">VERIFIED SPEC</span>
                  </div>

                  <div className="text-sm sm:text-base font-serif-editorial italic text-[#FAF7F2] leading-snug">
                    &ldquo;{selectedNode.deliverableExample}&rdquo;
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFD5C6]">
                    <span>Format: {selectedNode.format}</span>
                    <span className="flex items-center gap-1 text-[#DFD5C6]">
                      <Eye className="w-3 h-3" />
                      Audience: Founders &amp; LPs
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#161715]/10 text-xs">
                  <span className="text-[#63615A]">Zero script memorization needed.</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#14281E] hover:text-[#C45532] transition-colors"
                  >
                    <span>Deploy this system for your firm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* The Fundamental Reframe Thesis */}
        <FadeIn delay={0.2} distance={20}>
          <div className="p-8 sm:p-12 rounded-2xl bg-[#14281E] text-[#FAF7F2] text-center border border-[#14281E] shadow-xl">
            <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6] block mb-2">
              THE COMMERCIAL PRINCIPLE
            </span>
            <p className="text-sm text-[#DFD5C6] mb-2">
              But the goal is not more content.
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#FAF7F2] font-medium tracking-tight mb-6">
              The goal is stronger recall.
            </div>
            <p className="text-xs sm:text-sm text-[#DFD5C6] max-w-xl mx-auto mb-8">
              When a tier-one founder decides who to pitch first, they don&apos;t pick the firm that posted the most tweets. They pick the investor whose voice and thesis they have already encountered six times across six distinct touchpoints.
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
        <FloatingMarquee theme="light" />
      </div>
    </div>
  );
};
