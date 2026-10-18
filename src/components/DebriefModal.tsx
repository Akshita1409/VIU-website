import React from 'react';
import { Sparkles, CheckCircle2, X, BookOpen, ArrowRight } from 'lucide-react';

interface DebriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchVariant: (variant: 'A' | 'B') => void;
  currentVariant: 'A' | 'B';
}

export const DebriefModal: React.FC<DebriefModalProps> = ({
  isOpen,
  onClose,
  onSwitchVariant,
  currentVariant,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
      <div className="relative w-full max-w-xl bg-[#181818] border border-[#3ea6ff]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-[#3ea6ff]/15 text-[#3ea6ff] border border-[#3ea6ff]/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#3ea6ff] uppercase tracking-wider">
              Study Debrief & Educational Synthesis
            </span>
            <h2 className="text-xl font-bold text-white">Decision Architecture Debrief</h2>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#cccccc] space-y-3.5 leading-relaxed mb-6 max-h-80 overflow-y-auto pr-1">
          <p>
            Thank you for exploring the <strong>ViuStream Decision Architecture Prototype</strong>!
          </p>

          <div className="p-3 bg-[#222222] rounded-xl border border-white/5 space-y-2">
            <p className="font-semibold text-white">What Was Being Tested?</p>
            <p className="text-[11px] text-[#aaaaaa]">
              We investigated whether replacing commercial sludge (dark patterns) with an <strong>Ethical Decision Architecture</strong> preserves business conversion while significantly boosting consumer trust and retention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/20">
              <span className="font-bold text-red-400 block mb-1">Variant A (Status Quo Sludge)</span>
              <ul className="text-[11px] text-[#aaaaaa] space-y-1 list-disc list-inside">
                <li>Pre-selected high default (Annual $69.98).</li>
                <li>Fake countdown urgency timer.</li>
                <li>Hidden auto-renewal billing date.</li>
                <li>Automatic binge autoplay with 0 friction.</li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <span className="font-bold text-emerald-400 block mb-1">Variant B (Ethical Nudges)</span>
              <ul className="text-[11px] text-[#aaaaaa] space-y-1 list-disc list-inside">
                <li>Active choice with transparent unit pricing.</li>
                <li>No artificial scarcity / countdowns.</li>
                <li>Trial Protection Guarantee (Day 5 SMS alert).</li>
                <li>Mindful streaming session check-ins.</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-[#888888]">
            Academic references: <em>Thaler & Sunstein (2021)</em> Nudge: Final Edition; <em>Kahneman (2011)</em> Thinking, Fast and Slow; <em>Sunstein (2019)</em> Sludge; <em>Luguri & Strahilevitz (2021)</em> Shining a Light on Dark Patterns.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onSwitchVariant(currentVariant === 'A' ? 'B' : 'A');
              onClose();
            }}
            className="flex-1 py-2.5 rounded-xl border border-[#3ea6ff] text-[#3ea6ff] hover:bg-[#3ea6ff]/10 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Switch to Variant {currentVariant === 'A' ? 'B (Nudge)' : 'A (Sludge)'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-[#3ea6ff] hover:bg-[#5db6ff] text-black text-xs font-bold transition-colors cursor-pointer"
          >
            Close Debrief
          </button>
        </div>
      </div>
    </div>
  );
};
