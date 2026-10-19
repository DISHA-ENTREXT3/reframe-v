/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollProgressIndicator } from './components/MotionReveal';
import { WorkProofItem } from './types';

// Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TheReframeWayPage } from './pages/TheReframeWayPage';
import { OneIdeaPage } from './pages/OneIdeaPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactRecipient, setContactRecipient] = useState<string | undefined>(undefined);
  const [selectedCase, setSelectedCase] = useState<WorkProofItem | null>(null);

  const handleOpenContact = (recipient?: string) => {
    setContactRecipient(recipient);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactRecipient(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#161715] flex flex-col font-sans selection:bg-[#14281E] selection:text-[#FAF7F2]">
      {/* Interactive Custom Forest Green Follower Cursor */}
      <CustomCursor />

      {/* Top Viewport Scroll Progress Indicator (Lofty Lab Style) */}
      <ScrollProgressIndicator />

      {/* Auto Viewport Reset on Route Change */}
      <ScrollToTop />

      {/* Top Bar Navigation with Active Routes & Fluid Mobile Drawer */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Dynamic Multi-Route System with Framer Motion AnimatePresence */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex-1 flex flex-col"
          >
            <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage
                onOpenContact={(person) => handleOpenContact(person)}
                onSelectCase={(item) => setSelectedCase(item)}
              />
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/the-reframe-way"
            element={<TheReframeWayPage onOpenContact={() => handleOpenContact()} />}
          />
          <Route
            path="/one-idea"
            element={<OneIdeaPage onOpenContact={() => handleOpenContact()} />}
          />
          <Route
            path="/work"
            element={
              <WorkPage
                onSelectCase={(item) => setSelectedCase(item)}
                onOpenContact={() => handleOpenContact()}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={(person) => handleOpenContact(person)} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenContact={(person) => handleOpenContact(person)}
                onSelectCase={(item) => setSelectedCase(item)}
              />
            }
          />
        </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Global Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Global Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialRecipient={contactRecipient}
      />

      <CaseStudyModal
        item={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenContact={() => handleOpenContact()}
      />
    </div>
  );
}
