import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail, Linkedin } from 'lucide-react';
import { FOOTER_CONTENT } from '../data/content';
import { FadeIn } from './MotionReveal';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(FOOTER_CONTENT.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#161715] pt-20 pb-12 border-t border-[#161715]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0.05} distance={16}>
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#161715]/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <img src="/reframe-studios-logo.svg" alt="Reframe Studios" className="w-48 h-auto object-contain object-left" />
            </div>

            <p className="text-sm font-medium text-[#14281E] mb-3">
              {FOOTER_CONTENT.tagline}
            </p>

            <p className="text-sm font-serif-editorial italic text-[#63615A] max-w-sm mb-6">
              &ldquo;{FOOTER_CONTENT.missionLine}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all"
              >
                <span>Initiate a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-[#63615A]">
              {FOOTER_CONTENT.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#14281E] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest font-mono-numbers text-[#63615A] mb-4">
              Direct Contact
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#F3EEE4] border border-[#161715]/8">
                <div className="text-[11px] font-mono-numbers uppercase text-[#63615A] mb-1">
                  Partnership Inquiries
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${FOOTER_CONTENT.contacts.email}`}
                    className="text-xs font-medium text-[#14281E] hover:text-[#C45532] transition-colors truncate"
                  >
                    {FOOTER_CONTENT.contacts.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded hover:bg-[#FAF7F2] text-[#63615A] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={FOOTER_CONTENT.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors py-1"
                >
                  <Linkedin className="w-4 h-4 text-[#C45532]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[#DFD5C6] font-mono-numbers">/</span>

                <a
                  href={`mailto:${FOOTER_CONTENT.contacts.email}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#14281E] hover:text-[#C45532] transition-colors py-1"
                >
                  <Mail className="w-4 h-4 text-[#C45532]" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#63615A]">
          <div>
            &copy; {new Date().getFullYear()} Reframe Studios. Built for private markets.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#14281E] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
        </FadeIn>
      </div>
    </footer>
  );
};
