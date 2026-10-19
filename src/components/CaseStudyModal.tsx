import React from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WorkProofItem } from '../types';

interface CaseStudyModalProps {
  item: WorkProofItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  item,
  onClose,
  onOpenContact,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#14281E]/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-xl border border-[#161715]/15 shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image frame */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#14281E]">
            <img
              src={item.image}
              alt={item.client}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14281E] via-[#14281E]/40 to-transparent pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-[#14281E]/80 backdrop-blur-md text-[#FAF7F2] hover:bg-[#14281E] transition-colors rounded-full border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
              <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#DFD5C6] block mb-1">
                {item.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-editorial font-medium">
                {item.client}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <div className="text-xs font-mono-numbers uppercase tracking-wider text-[#C45532] mb-1">
                Story Angle &amp; Premise
              </div>
              <h4 className="text-xl font-serif-editorial text-[#161715] mb-3">
                {item.tagline}
              </h4>
              <p className="text-sm sm:text-base text-[#63615A] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#F3EEE4] border border-[#161715]/8">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#14281E] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C45532]" />
                  <span>The Narrative Pivot</span>
                </div>
                <p className="text-xs text-[#63615A] leading-relaxed">
                  {item.narrativeAngle}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F3EEE4] border border-[#161715]/8">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#14281E] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C45532]" />
                  <span>Distribution Architecture</span>
                </div>
                <p className="text-xs text-[#63615A] leading-relaxed">
                  {item.distributionStrategy}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#FAF0EB] border border-[#C45532]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#14281E] italic font-serif-editorial">
                &ldquo;{item.attributionNote}&rdquo;
              </span>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all shrink-0"
              >
                <span>Discuss a similar project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
