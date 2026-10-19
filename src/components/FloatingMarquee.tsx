import React from 'react';

interface FloatingMarqueeProps {
  items?: string[];
  speed?: 'normal' | 'slow';
  reverse?: boolean;
  theme?: 'dark' | 'light';
}

export const FloatingMarquee: React.FC<FloatingMarqueeProps> = ({
  items = [
    'PRIVATE MARKETS',
    'PARTNER-LED CONTENT',
    'PORTFOLIO STORYTELLING',
    'CONTENT REPURPOSING',
    'VIDEO & YOUTUBE',
    'EXECUTIVE POSITIONING',
    'STRONGER RECALL',
    'THE 30 SECONDS WORTH HEARING',
    'WHY WE INVESTED',
  ],
  speed = 'normal',
  theme = 'light',
}) => {
  // Duplicate array for seamless infinite looping
  const repeatedItems = [...items, ...items, ...items];

  const isDark = theme === 'dark';

  return (
    <div
      className={`py-3 overflow-hidden border-y border-[#161715]/10 select-none ${
        isDark ? 'bg-[#14281E] text-[#FAF7F2]' : 'bg-[#F3EEE4] text-[#161715]'
      }`}
    >
      <div className={speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}>
        {repeatedItems.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-4 whitespace-nowrap text-xs font-mono-numbers uppercase tracking-widest font-semibold"
          >
            <span className={idx % 2 === 0 ? (isDark ? 'text-[#FAF7F2]' : 'text-[#161715]') : 'text-[#C45532]'}>
              {text}
            </span>
            <span className="text-[#63615A]/40" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
