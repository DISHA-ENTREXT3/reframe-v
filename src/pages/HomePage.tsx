import React from 'react';
import { Hero } from '../components/Hero';
import { TransformationSpotlight } from '../components/TransformationSpotlight';
import { PackagesSection } from '../components/PackagesSection';
import { WorkSection } from '../components/WorkSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { FloatingMarquee } from '../components/FloatingMarquee';
import { ScrollSection } from '../components/MotionReveal';
import { WorkProofItem } from '../types';

interface HomePageProps {
  onOpenContact: (person?: string) => void;
  onSelectCase: (item: WorkProofItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenContact,
  onSelectCase,
}) => {
  return (
    <div className="overflow-hidden">
      {/* 1. CLEAR OPENING HERO */}
      <ScrollSection id="hero" delay={0.04}>
        <Hero onOpenContact={() => onOpenContact()} />
      </ScrollSection>

      {/* Kinetic Running Marquee */}
      <FloatingMarquee
        items={[
          'BE THE INVESTOR FOUNDERS ALREADY KNOW',
          'PRIVATE EQUITY',
          'GROWTH EQUITY',
          'VENTURE CAPITAL',
          'FAMILY OFFICES',
          'ZERO PARTNER TIME BURDEN',
          'COMPOUND RECALL',
        ]}
      />

      {/* 2. ONE STRONG CONTENT-TRANSFORMATION EXAMPLE (Brought Forward) */}
      <ScrollSection id="transformation" delay={0.05} subtleParallax>
        <TransformationSpotlight onOpenContact={() => onOpenContact()} />
      </ScrollSection>

      {/* 3. THE THREE PACKAGES */}
      <ScrollSection id="packages" delay={0.05}>
        <PackagesSection onOpenContact={() => onOpenContact()} />
      </ScrollSection>

      {/* 4. SELECTED WORK & PROOF */}
      <ScrollSection id="work" delay={0.05} subtleParallax>
        <WorkSection onSelectCase={(item) => onSelectCase(item)} />
      </ScrollSection>

      {/* 5. DIRECT CALL TO CONVERSATION */}
      <ScrollSection id="contact" delay={0.05}>
        <FinalCTASection onOpenContact={() => onOpenContact()} />
      </ScrollSection>
    </div>
  );
};
