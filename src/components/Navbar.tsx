import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'The Reframe Way', path: '/the-reframe-way' },
    { name: 'One Idea Travels', path: '/one-idea' },
    { name: 'Work', path: '/work' },
    { name: 'About & Team', path: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#161715]/10 py-3.5 shadow-[0_2px_12px_rgba(20,40,30,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            aria-label="Reframe Studios home"
            className="whitespace-nowrap shrink-0 flex items-center group"
          >
            <img src="/reframe-studios-logo.svg" alt="Reframe Studios" className="w-36 h-auto object-contain transition-[filter] duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(39%)_sepia(45%)_saturate(1200%)_hue-rotate(337deg)_brightness(90%)_contrast(90%)]" />
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-[#63615A]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                    isActive
                      ? 'text-[#14281E] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C45532]'
                      : 'hover:text-[#14281E] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#14281E] hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DFD5C6]" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#161715] hover:text-[#14281E] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fluid Mobile Drawer Menu inspired by LoftyLab */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#14281E]/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#FAF7F2] p-8 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#161715]/10 mb-8">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Reframe Studios home" className="group flex items-center">
                    <img src="/reframe-studios-logo.svg" alt="Reframe Studios" className="w-40 h-auto object-contain transition-[filter] duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(39%)_sepia(45%)_saturate(1200%)_hue-rotate(337deg)_brightness(90%)_contrast(90%)]" />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#63615A] hover:text-[#161715] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs uppercase tracking-widest text-[#63615A] font-semibold mb-4">
                  Pages &amp; Ecosystem
                </div>

                <nav className="flex flex-col gap-3">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif-editorial text-[#161715] hover:text-[#C45532] transition-colors py-1 flex items-center justify-between border-b border-[#161715]/5"
                  >
                    <span>Overview (Home)</span>
                    <ArrowUpRight className="w-4 h-4 text-[#63615A]" />
                  </Link>

                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-serif-editorial transition-colors py-1 flex items-center justify-between border-b border-[#161715]/5 ${
                          location.pathname === link.path ? 'text-[#C45532] font-semibold' : 'text-[#161715] hover:text-[#C45532]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#63615A]" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="pt-8 border-t border-[#161715]/10">
                <p className="text-xs text-[#63615A] mb-4">
                  Built for private-market firms ready to turn partner expertise into compound recall.
                </p>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#14281E] rounded-md hover:bg-[#1C362A] transition-all"
                >
                  <span>Talk to Reframe</span>
                  <ArrowUpRight className="w-4 h-4 text-[#DFD5C6]" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
