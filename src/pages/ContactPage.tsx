import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, Send, Sparkles, Shield, Clock } from 'lucide-react';
import { FINAL_CTA_CONTENT, FOOTER_CONTENT } from '../data/content';
import { FadeIn } from '../components/MotionReveal';
import { FloatingMarquee } from '../components/FloatingMarquee';

export const ContactPage: React.FC = () => {
  const [firmType, setFirmType] = useState('Private Equity');
  const [selectedGoal, setSelectedGoal] = useState('Partner-led content');
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [firmWebsite, setFirmWebsite] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const firmTypes = [
    'Private Equity',
    'Growth Equity',
    'Venture Capital',
    'Family Office',
    'Private-Market Investor',
  ];

  const goals = [
    'Partner-led content',
    'Portfolio storytelling',
    'Content repurposing',
    'Video & YouTube',
    'Executive positioning',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <FadeIn delay={0.05} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-6">
            <Link to="/" className="hover:text-[#14281E]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C45532]">Talk to Us</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Context & Editorial Copy */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.12} distance={22}>
              <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#C45532] block mb-3 font-semibold">
                CONFIDENTIAL DISCOVERY SPRINT
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif-editorial text-[#161715] leading-[1.1] mb-6">
                There is probably a better story already sitting inside your firm.
                <span className="block text-[#C45532] italic mt-2">Let’s find it.</span>
              </h1>
              <p className="text-base text-[#63615A] leading-relaxed mb-8">
                In our initial 30-minute discovery call, we audit your firm&apos;s existing investment memos, podcasts, and portfolio announcements to identify the single most valuable point of view ready to travel.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/6 text-xs">
                  <Clock className="w-4 h-4 text-[#C45532] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#14281E] block mb-0.5">Zero Partner Time Tax</span>
                    <span className="text-[#63615A]">We operate asynchronously. No weekly creative meetings required from your partners.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/6 text-xs">
                  <Shield className="w-4 h-4 text-[#14281E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#14281E] block mb-0.5">Strict LP &amp; Deal Confidentiality</span>
                    <span className="text-[#63615A]">We operate under mutual NDAs before reviewing sensitive portfolio data or memos.</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#14281E] text-[#FAF7F2] text-xs">
                <span className="font-mono-numbers uppercase text-[#DFD5C6] block mb-2">Direct Partner Inquiries</span>
                <p className="text-white/80 mb-3">
                  Reach our Growth &amp; Partnerships leadership directly:
                </p>
                <div className="flex items-center gap-2 font-mono-numbers text-[#DFD5C6]">
                  <Mail className="w-3.5 h-3.5 text-[#C45532]" />
                  <span>{FOOTER_CONTENT.contacts.email}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.18} distance={24}>
              <div className="editorial-card rounded-2xl p-8 sm:p-10 bg-[#FAF7F2] border border-[#161715]/10 shadow-lg relative">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#14281E] text-[#FAF7F2] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-[#C45532]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#161715] mb-3">
                      Discovery Request Confirmed
                    </h3>
                    <p className="text-sm text-[#63615A] max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#14281E]">{partnerName || 'Partner'}</span>. Our leadership team has received your firm brief for <span className="font-semibold text-[#14281E]">{firmType}</span> focusing on <span className="font-semibold text-[#14281E]">{selectedGoal}</span>.
                    </p>
                    <div className="p-4 rounded-lg bg-[#F3EEE4] max-w-sm mx-auto text-xs text-[#63615A] mb-8">
                      We review incoming inquiries within 4 business hours and coordinate calendar alignment directly with your executive assistant.
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setPartnerName('');
                        setEmail('');
                        setFirmWebsite('');
                        setNotes('');
                      }}
                      className="text-xs font-semibold text-[#14281E] hover:text-[#C45532] underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
                        STEP 01 // FIRM CATEGORY
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {firmTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFirmType(type)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all border ${
                              firmType === type
                                ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E]'
                                : 'bg-[#F3EEE4] text-[#161715] border-[#161715]/10 hover:border-[#14281E]/30'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] block mb-2 font-semibold">
                        STEP 02 // PRIMARY OBJECTIVE
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {goals.map((goal) => (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => setSelectedGoal(goal)}
                            className={`px-3.5 py-2.5 rounded-lg text-xs text-left transition-all border ${
                              selectedGoal === goal
                                ? 'bg-[#14281E] text-[#FAF7F2] border-[#14281E]'
                                : 'bg-[#FAF7F2] text-[#161715] border-[#161715]/10 hover:bg-[#F3EEE4]'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-[#161715] block mb-1.5">
                          Partner / Executive Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerName}
                          onChange={(e) => setPartnerName(e.target.value)}
                          placeholder="e.g. Alexandra Vance"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#161715]/15 text-xs text-[#161715] focus:outline-none focus:border-[#14281E]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#161715] block mb-1.5">
                          Institutional Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="partner@venturefund.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#161715]/15 text-xs text-[#161715] focus:outline-none focus:border-[#14281E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#161715] block mb-1.5">
                        Firm Website or Portfolio Link
                      </label>
                      <input
                        type="url"
                        value={firmWebsite}
                        onChange={(e) => setFirmWebsite(e.target.value)}
                        placeholder="https://fund.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#161715]/15 text-xs text-[#161715] focus:outline-none focus:border-[#14281E]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#161715] block mb-1.5">
                        What existing stories or assets does your firm have? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. We have recent partner podcasts and two Series B portfolio case studies we want to turn into founder recall."
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#161715]/15 text-xs text-[#161715] focus:outline-none focus:border-[#14281E]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#14281E] text-[#FAF7F2] hover:bg-[#1C362A] active:scale-[0.99] font-semibold text-xs tracking-wide transition-all shadow-md"
                    >
                      <span>Reserve Confidential Discovery Session</span>
                      <ArrowUpRight className="w-4 h-4 text-[#DFD5C6]" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <FloatingMarquee theme="dark" />
    </div>
  );
};
