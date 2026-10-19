import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  HTMLMotionProps,
  Variants,
  MotionValue,
} from 'motion/react';

/**
 * Top reading progress bar powered by Framer Motion useScroll
 * Styled with subtle terracotta/forest green gradient matching Lofty Lab
 */
export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#14281E] via-[#C45532] to-[#14281E] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(196,85,50,0.4)]"
    />
  );
};

interface ScrollSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  subtleParallax?: boolean;
}

/**
 * Unified Section Container combining useScroll tracking and whileInView viewport reveal
 * with staggered fade-in and subtle slide-up matching the Lofty Lab reference site.
 */
export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  subtleParallax = false,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // useScroll linked to this specific section in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Subtle scroll-linked parallax translation for depth
  const parallaxY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth Lofty Lab cubic-bezier curve
        }}
        style={subtleParallax ? { y: parallaxY } : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
};

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Viewport entrance fade-in and subtle slide-up element using whileInView
 */
export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 22,
  className = '',
  children,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Lofty Lab smooth deceleration curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

/**
 * Staggered child reveals using whileInView with spring/smooth cubic-bezier
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  className = '',
  children,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

/**
 * Parallax floating component driven by section-level useScroll
 */
export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  className = '',
  distance = 24,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};
