import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipient?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialRecipient,
}) => {
  const [firmType, setFirmType] = useState('Private Equity');
  const [fullName, setFullName] = useState('');
  const [firmName, setFirmName] = useState('');
  const [email, setEmail] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Partner Visibility & Thesis Distribution');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const firmTypes = [
    'Private Equity',
    'Growth Equity',
    'Venture Capital',
    'Family Office',
    'Independent Sponsor',
  ];

  const goals = [
    'Partner Visibility & Thesis Distribution',
    'Portfolio Storytelling & Turnarounds',
    'Content Repurposing Architecture',
    'Executive Video & YouTube Franchise',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !firmName) {
      setError('Please provide your name, firm, and work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setFirmName('');
    setEmail('');
    setNote('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#14281E]/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl border border-[#161715]/15 shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#F3EEE4] border-b border-[#161715]/10 flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] mb-1">
                Direct Partner Conversation
              </div>
              <h3 className="text-2xl font-serif-editorial text-[#161715]">
                {initialRecipient
                  ? `Connect with ${initialRecipient}`
                  : 'Start a Conversation with Reframe'}
              </h3>
              <p className="text-xs text-[#63615A] mt-1">
                Tell us about your firm's current thinking and where it should travel.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#63615A] hover:text-[#161715] transition-colors rounded-full hover:bg-[#FAF7F2]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#14281E] text-[#FAF7F2] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#DFD5C6]" />
                </div>
                <h4 className="text-2xl font-serif-editorial text-[#161715]">
                  Conversation Received
                </h4>
                <p className="text-sm text-[#63615A] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#14281E]">{fullName}</span>. Vrushali and the Reframe partners will review your firm’s context (<span className="font-medium text-[#14281E]">{firmName}</span>) and reach out to <span className="font-medium text-[#14281E]">{email}</span> within 24 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 text-xs text-[#8B3A22] bg-[#FAF0EB] rounded border border-[#C45532]/20">
                    {error}
                  </div>
                )}

                {/* Firm Type Segmented Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-2">
                    Firm Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {firmTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFirmType(type)}
                        className={`px-3 py-1.5 text-xs rounded transition-all border ${
                          firmType === type
                            ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E] font-medium'
                            : 'bg-[#FAF7F2] text-[#63615A] border-[#161715]/10 hover:border-[#14281E]/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Firm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F3EEE4] border border-[#161715]/10 text-[#161715] placeholder-[#63615A]/50 focus:outline-none focus:border-[#14281E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-1.5">
                      Firm / Fund Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={firmName}
                      onChange={(e) => setFirmName(e.target.value)}
                      placeholder="e.g. Horizon Capital"
                      className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F3EEE4] border border-[#161715]/10 text-[#161715] placeholder-[#63615A]/50 focus:outline-none focus:border-[#14281E] transition-colors"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@horizoncap.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded bg-[#F3EEE4] border border-[#161715]/10 text-[#161715] placeholder-[#63615A]/50 focus:outline-none focus:border-[#14281E] transition-colors"
                  />
                </div>

                {/* Primary Objective */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-1.5">
                    Primary Strategic Objective
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-[#F3EEE4] border border-[#161715]/10 text-[#161715] focus:outline-none focus:border-[#14281E] transition-colors"
                  >
                    {goals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Note / Context */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#63615A] font-semibold mb-1.5">
                    Additional Context (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Briefly describe what your firm believes or what current conversations deserve to travel..."
                    className="w-full px-3.5 py-2 text-sm rounded bg-[#F3EEE4] border border-[#161715]/10 text-[#161715] placeholder-[#63615A]/50 focus:outline-none focus:border-[#14281E] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#63615A]">
                    Strict confidentiality guaranteed.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all shadow-md"
                  >
                    <span>Request Discovery Session</span>
                    <ArrowRight className="w-4 h-4 text-[#DFD5C6]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
