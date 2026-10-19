import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play,
  ArrowUpRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { TESTIMONIALS_CONTENT } from '../data/content';
import { TestimonialItem } from '../types';

interface TestimonialSliderProps {
  onOpenContact?: (person?: string) => void;
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'subtle';
  className?: string;
}

const CATEGORIES = [
  'All',
  'Private Equity',
  'Growth Equity',
  'Venture Capital',
  'Family Office',
] as const;

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  onOpenContact,
  title = TESTIMONIALS_CONTENT.headline,
  subtitle = TESTIMONIALS_CONTENT.subtitle,
  theme = 'light',
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<number | null>(null);
  const intervalProgressRef = useRef<number | null>(null);

  // Filter items by category
  const filteredTestimonials: TestimonialItem[] = selectedCategory === 'All'
    ? TESTIMONIALS_CONTENT.testimonials
    : TESTIMONIALS_CONTENT.testimonials.filter(
        (t) => t.firmType === selectedCategory
      );

  // Keep index within bounds if category changes
  const activeTestimonials = filteredTestimonials.length > 0
    ? filteredTestimonials
    : TESTIMONIALS_CONTENT.testimonials;

  const currentItem = activeTestimonials[currentIndex % activeTestimonials.length];

  const handleNext = useCallback(() => {
    setDirection(1);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
  }, [activeTestimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  }, [activeTestimonials.length]);

  const handleSelectIndex = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setProgress(0);
    setCurrentIndex(idx);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setDirection(1);
    setProgress(0);
  };

  // Autoplay timer with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (intervalProgressRef.current) clearInterval(intervalProgressRef.current);
      return;
    }

    const duration = 7500; // 7.5 seconds per slide
    const intervalStep = 50;
    const increment = (intervalStep / duration) * 100;

    intervalProgressRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => {
      if (intervalProgressRef.current) clearInterval(intervalProgressRef.current);
    };
  }, [isPlaying, isHovered, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  const isLight = theme === 'light';

  return (
    <section
      className={`relative py-16 sm:py-24 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Partner Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C45532]" />
              <span className="text-xs uppercase tracking-widest font-mono-numbers text-[#C45532] font-semibold">
                {TESTIMONIALS_CONTENT.tagline}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#161715] leading-[1.1] mb-3">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-[#63615A] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0EBE1] border border-[#161715]/10 rounded-lg">
            {CATEGORIES.map((cat) => {
              const isCatActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  data-cursor-label="Filter"
                  className={`relative px-3 py-1.5 rounded-md text-xs font-mono-numbers transition-all ${
                    isCatActive
                      ? 'text-[#FAF7F2] font-semibold'
                      : 'text-[#63615A] hover:text-[#161715]'
                  }`}
                >
                  {isCatActive && (
                    <motion.div
                      layoutId="activeTestimonialCategory"
                      className="absolute inset-0 bg-[#14281E] rounded-md shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Slider Card Container */}
        <div className="relative rounded-2xl bg-[#F6F1E7] border border-[#161715]/10 p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#14281E]/5 via-[#C45532]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Autoplay & Index Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#161715]/8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-numbers text-[#63615A] font-semibold tracking-wider">
                TESTIMONIAL {(currentIndex % activeTestimonials.length) + 1} OF {activeTestimonials.length}
              </span>
              <span className="text-[#161715]/20">&bull;</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono-numbers bg-[#EADFCE] text-[#14281E]">
                <ShieldCheck className="w-3 h-3 text-[#C45532]" />
                <span>Verified Private Market Partner</span>
              </span>
            </div>

            {/* Autoplay toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-xs font-mono-numbers text-[#63615A] hover:text-[#14281E] px-2.5 py-1 rounded bg-[#EFE9DD] border border-[#161715]/8 transition-colors"
                title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#C45532]" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#14281E]" />
                    <span className="hidden sm:inline">Auto-play</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Animated Testimonial Slide with Drag Gesture */}
          <div className="relative min-h-[340px] sm:min-h-[290px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    handleNext();
                  } else if (info.offset.x > swipeThreshold) {
                    handlePrev();
                  }
                }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-grab active:cursor-grabbing"
              >
                {/* Left Column: Quote & Partner Details (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  {/* Decorative Terracotta Quote Mark */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF0EB] border border-[#C45532]/30 flex items-center justify-center text-[#C45532] shadow-sm">
                      <Quote className="w-4 h-4 fill-[#C45532]/20" />
                    </div>
                    <span className="text-xs font-mono-numbers uppercase text-[#C45532] font-semibold tracking-wider">
                      {currentItem.firmType} &bull; {currentItem.location}
                    </span>
                  </div>

                  {/* Primary Testimonial Quote */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl font-serif-editorial text-[#161715] leading-relaxed">
                    &ldquo;{currentItem.quote}&rdquo;
                  </blockquote>

                  {/* Partner Attribution */}
                  <div className="flex items-center gap-4 pt-2">
                    {/* Monogram Avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#14281E] text-[#FAF7F2] flex items-center justify-center font-serif-editorial font-bold text-base shadow-sm ring-2 ring-[#EADFCE]">
                      {currentItem.avatarInitials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif-editorial text-lg font-bold text-[#161715]">
                          {currentItem.author}
                        </span>
                        {currentItem.fundSize && (
                          <span className="text-[10px] font-mono-numbers px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#161715]/10 text-[#63615A]">
                            {currentItem.fundSize}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#63615A]">
                        <span className="text-[#14281E] font-medium">{currentItem.role}</span> &bull; {currentItem.firm}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Quantitative Impact Metric Card (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#161715]/10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#14281E]/5 rounded-bl-full pointer-events-none" />

                    <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-wider text-[#C45532] mb-3 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Reported Outcome</span>
                    </div>

                    <div className="text-4xl sm:text-5xl font-mono-numbers font-bold text-[#14281E] tracking-tight mb-2">
                      {currentItem.metric}
                    </div>

                    <p className="text-xs font-semibold text-[#161715] mb-3 leading-snug">
                      {currentItem.metricLabel}
                    </p>

                    <div className="pt-3 border-t border-[#161715]/8">
                      <span className="text-[10px] font-mono-numbers uppercase text-[#63615A] block mb-1">
                        Execution Context
                      </span>
                      <p className="text-[11px] text-[#63615A] leading-relaxed">
                        {currentItem.context}
                      </p>
                    </div>

                    {onOpenContact && (
                      <button
                        onClick={() => onOpenContact(currentItem.author)}
                        className="mt-4 w-full py-2 px-3 rounded-lg bg-[#F0EBE1] hover:bg-[#14281E] text-[#14281E] hover:text-[#FAF7F2] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#161715]/10"
                      >
                        <span>Discuss this case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Autoplay Progress Line */}
          {isPlaying && (
            <div className="w-full bg-[#161715]/8 h-0.5 rounded-full overflow-hidden mt-8">
              <motion.div
                className="bg-[#C45532] h-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              />
            </div>
          )}

          {/* Bottom Navigation Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-[#161715]/8">
            {/* Interactive Dot Indicators */}
            <div className="flex items-center gap-2">
              {activeTestimonials.map((t, idx) => {
                const isActive = idx === currentIndex % activeTestimonials.length;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelectIndex(idx)}
                    data-cursor-label="View"
                    aria-label={`Jump to testimonial by ${t.author}`}
                    className={`h-2 transition-all rounded-full ${
                      isActive
                        ? 'w-8 bg-[#14281E]'
                        : 'w-2 bg-[#161715]/20 hover:bg-[#161715]/40'
                    }`}
                  />
                );
              })}
            </div>

            {/* Arrow Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                data-cursor-label="Previous"
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#161715]/15 hover:border-[#14281E] flex items-center justify-center text-[#161715] hover:text-[#FAF7F2] hover:bg-[#14281E] transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                data-cursor-label="Next"
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#161715]/15 hover:border-[#14281E] flex items-center justify-center text-[#161715] hover:text-[#FAF7F2] hover:bg-[#14281E] transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
