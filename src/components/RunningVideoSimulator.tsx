import React, { useState, useEffect } from 'react';
import { Play, Pause, Grid, Volume2, VolumeX, Maximize2, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface RunningVideoSimulatorProps {
  posterImage: string;
  title: string;
  subtitle: string;
  partnerName?: string;
  aspectRatio?: '16:9' | '4:3';
  showControls?: boolean;
}

export const RunningVideoSimulator: React.FC<RunningVideoSimulatorProps> = ({
  posterImage,
  title,
  subtitle,
  partnerName = 'Partner Insight Session',
  aspectRatio = '16:9',
  showControls = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timecode, setTimecode] = useState({ min: 14, sec: 32, frame: 18 });

  // Simulate advancing timecode
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimecode((prev) => {
        let f = prev.frame + 1;
        let s = prev.sec;
        let m = prev.min;
        if (f >= 24) {
          f = 0;
          s += 1;
        }
        if (s >= 60) {
          s = 0;
          m += 1;
        }
        return { min: m, sec: s, frame: f };
      });
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div
      data-cursor-label={isPlaying ? 'Pause' : 'Play'}
      className="relative rounded-xl overflow-hidden bg-[#0D1C14] border border-[#161715]/15 shadow-2xl select-none group"
    >
      {/* Visual Footage Still with subtle zoom breathing animation when playing */}
      <div
        className={`w-full overflow-hidden ${
          aspectRatio === '16:9'
            ? 'h-[320px] sm:h-[440px] lg:h-[520px]'
            : 'h-[300px] sm:h-[380px]'
        }`}
      >
        <motion.img
          src={posterImage}
          alt={title}
          referrerPolicy="no-referrer"
          animate={{
            scale: isPlaying ? [1, 1.025, 1] : 1,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full object-cover filter saturate-[0.92]"
        />
      </div>

      {/* Cinema HUD Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C14]/85 via-transparent to-[#0D1C14]/40 pointer-events-none" />

      {/* Rule of Thirds Grid Overlay (toggleable) */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none border border-white/10 grid grid-cols-3 grid-rows-3">
          <div className="border-r border-b border-white/15" />
          <div className="border-r border-b border-white/15" />
          <div className="border-b border-white/15" />
          <div className="border-r border-b border-white/15" />
          <div className="border-r border-b border-white/15" />
          <div className="border-b border-white/15" />
          <div className="border-r border-white/15" />
          <div className="border-r border-white/15" />
          <div />
        </div>
      )}

      {/* Top HUD Status Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#FAF7F2] text-xs font-mono-numbers">
        {/* Recording status with blinking dot */}
        <div className="flex items-center gap-2 bg-[#0D1C14]/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isPlaying ? 'bg-[#C45532] animate-pulse' : 'bg-[#63615A]'
            }`}
          />
          <span className="tracking-widest uppercase font-semibold text-[11px]">
            {isPlaying ? 'REC ● LIVE' : 'PAUSED'}
          </span>
          <span className="text-[#DFD5C6] mx-1">|</span>
          <span className="text-[11px] text-[#DFD5C6]">
            {pad(timecode.min)}:{pad(timecode.sec)}:{pad(timecode.frame)}
          </span>
        </div>

        {/* Camera Technical Telemetry */}
        <div className="hidden sm:flex items-center gap-2 bg-[#0D1C14]/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] text-[#DFD5C6]">
          <span>4K RAW</span>
          <span aria-hidden="true">·</span>
          <span>24 FPS</span>
          <span aria-hidden="true">·</span>
          <span>35mm f/1.8</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#C45532]">ISO 800</span>
        </div>
      </div>

      {/* Animated Live Audio Frequency Bars */}
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-6 flex items-end gap-1 pointer-events-none">
        <div className="bg-[#DFD5C6]/80 w-1 rounded-t animate-wave-1" />
        <div className="bg-[#C45532] w-1 rounded-t animate-wave-2" />
        <div className="bg-[#DFD5C6]/80 w-1 rounded-t animate-wave-3" />
        <div className="bg-[#C45532] w-1 rounded-t animate-wave-4" />
        <div className="bg-[#DFD5C6]/80 w-1 rounded-t animate-wave-5" />
        <div className="bg-[#DFD5C6]/80 w-1 rounded-t animate-wave-6" />
        <span className="text-[10px] font-mono-numbers text-[#DFD5C6] ml-2 bg-[#0D1C14]/70 px-1.5 py-0.5 rounded">
          {isMuted ? 'MUTED' : '-12 dB'}
        </span>
      </div>

      {/* Bottom Title & Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-[#FAF7F2]">
        <div className="min-w-0">
          <div className="text-[10px] font-mono-numbers uppercase tracking-wider text-[#DFD5C6]">
            {partnerName}
          </div>
          <div className="text-sm sm:text-base font-serif-editorial font-medium truncate">
            {title}
          </div>
        </div>

        {showControls && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 sm:px-3 sm:py-1.5 rounded bg-[#FAF7F2] text-[#14281E] hover:bg-[#DFD5C6] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded border border-white/10 transition-colors ${
                showGrid ? 'bg-[#C45532] text-white' : 'bg-[#0D1C14]/70 text-[#DFD5C6] hover:bg-white/10'
              }`}
              title="Toggle Cinema Grid"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded bg-[#0D1C14]/70 border border-white/10 text-[#DFD5C6] hover:bg-white/10 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
