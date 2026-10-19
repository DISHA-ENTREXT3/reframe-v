import React from 'react';
import { motion } from 'motion/react';
import { Video, Linkedin, FileText, Image as ImageIcon, BookOpen, Youtube, Sparkles } from 'lucide-react';
import { ONE_IDEA_CONTENT } from '../data/content';

interface MotionBranchingTreeProps {
  selectedNodeId: string;
  onSelectNode: (id: string) => void;
}

export const MotionBranchingTree: React.FC<MotionBranchingTreeProps> = ({
  selectedNodeId,
  onSelectNode,
}) => {
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
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative p-6 sm:p-10 rounded-2xl bg-[#14281E] text-[#FAF7F2] border border-[#14281E] shadow-2xl overflow-hidden mb-12">
      {/* Background ambient terracotta glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C45532]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#DFD5C6]">
            Interactive Kinetic Motion Engine
          </span>
          <h3 className="text-2xl font-serif-editorial text-[#FAF7F2] mt-1">
            The Content Multiplier Architecture
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#DFD5C6] bg-[#1C362A] px-3.5 py-1.5 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#C45532] animate-ping" />
          <span>Live Particle Transmission</span>
        </div>
      </div>

      {/* Central Origin Node */}
      <div className="flex justify-center mb-10">
        <div className="relative group">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="px-6 py-4 rounded-xl bg-[#FAF7F2] text-[#14281E] shadow-xl border-2 border-[#DFD5C6] text-center max-w-sm"
          >
            <div className="text-[10px] uppercase tracking-widest font-mono-numbers text-[#C45532] font-bold mb-1">
              SINGLE CORE SOURCE
            </div>
            <div className="text-base font-serif-editorial font-bold">
              1x Partner Conversation (45 Min)
            </div>
            <div className="text-[11px] text-[#63615A] mt-0.5">
              Unscripted thesis, investment committee debate, or macro view
            </div>
          </motion.div>

          {/* Radiating pulse ring */}
          <div className="absolute -inset-2 rounded-2xl border border-[#C45532]/40 animate-ping pointer-events-none -z-10" />
        </div>
      </div>

      {/* Connecting animated visual tree: 6 interactive output nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ONE_IDEA_CONTENT.nodes.map((node, idx) => {
          const isSelected = node.id === selectedNodeId;
          return (
            <motion.div
              key={node.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectNode(node.id)}
              className={`p-5 rounded-xl border cursor-pointer transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-[#1C362A] border-[#C45532] shadow-lg ring-1 ring-[#C45532]'
                  : 'bg-[#14281E] border-white/10 hover:border-white/25 hover:bg-[#1C362A]/60'
              }`}
            >
              {/* Dynamic top bar with format tag */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-[#C45532] text-white' : 'bg-white/10 text-[#DFD5C6]'
                  }`}
                >
                  {getNodeIcon(node.id)}
                </span>
                <span className="text-[11px] font-mono-numbers text-[#DFD5C6]">
                  CHANNEL 0{idx + 1}
                </span>
              </div>

              <h4 className="text-base font-serif-editorial font-medium text-[#FAF7F2] mb-1">
                {node.title}
              </h4>

              <div className="text-xs text-[#DFD5C6] mb-3">
                {node.format}
              </div>

              <div className="pt-3 border-t border-white/8 flex items-center justify-between text-[11px]">
                <span className="text-white/60 truncate max-w-[140px]">{node.channel}</span>
                <span className={`font-semibold ${isSelected ? 'text-[#C45532]' : 'text-white/80'}`}>
                  {isSelected ? 'Inspecting' : 'Select'}
                </span>
              </div>

              {/* Animated corner light beam when selected */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C45532]/30 to-transparent pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
