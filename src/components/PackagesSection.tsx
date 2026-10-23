import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Video,
  Calendar,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CORE_PACKAGES } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

interface PackagesSectionProps {
  onOpenContact: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenContact }) => {
  const [activePackageId, setActivePackageId] = useState(CORE_PACKAGES[0].id);

  const activePackage =
    CORE_PACKAGES.find((p) => p.id === activePackageId) || CORE_PACKAGES[0];

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'youtube-content-ip':
        return <Video className="w-5 h-5" />;
      case 'event-content-engine':
        return <Calendar className="w-5 h-5" />;
      case 'omnichannel-brand-presence':
        return <Globe className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DFD5C6]/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <FadeIn delay={0.04} distance={14}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C45532] font-semibold mb-3">
            <span>Core Packages</span>
            <span aria-hidden="true" className="text-[#63615A]">/</span>
            <span className="text-[#63615A] font-medium">Built For Private Markets</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-tight mb-4">
                WHAT WE BUILD
              </h2>
              <p className="text-base text-[#63615A] leading-relaxed">
                Three focused ways to build your presence.
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          {CORE_PACKAGES.map((pkg, index) => (
            <StaggerItem key={pkg.id}>
              <motion.div
                layout
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group relative overflow-hidden rounded-[28px] p-1"
              >
                <div className="relative h-full rounded-[27px] border border-[#161715]/10 bg-[#FAF7F2] p-7">
                  <div className="absolute right-5 top-5 text-[10px] font-mono-numbers uppercase tracking-[0.2em] text-[#63615A]">
                    0{index + 1}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#F3EEE4] text-[#14281E] flex items-center justify-center">
                        {getPackageIcon(pkg.id)}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-[2rem] font-serif-editorial text-[#161715] mb-2 leading-none">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#63615A] leading-relaxed mb-5">
                      {pkg.summary}
                    </p>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#161715]">
                          <CheckCircle2 className="w-4 h-4 text-[#C45532] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-[#161715]/10 flex items-center justify-between">
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FAF7F2] bg-[#14281E] hover:bg-[#1C362A] transition-all shadow-[0_10px_18px_rgba(20,40,30,0.18)]"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
