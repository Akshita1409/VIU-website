import React from 'react';
import { ShieldCheck, BookOpen, Scale, Sparkles } from 'lucide-react';

interface VariantBannerProps {
  variant: 'A' | 'B';
  onSwitchVariant: (variant: 'A' | 'B') => void;
  onOpenAudit: () => void;
  onOpenConsent: () => void;
  onOpenDebrief: () => void;
}

export const VariantBanner: React.FC<VariantBannerProps> = ({
  variant,
  onSwitchVariant,
  onOpenAudit,
  onOpenConsent,
  onOpenDebrief,
}) => {
  return (
    <div className="bg-[#141414] border-b border-[#292929] px-3 md:px-5 py-2 flex flex-wrap items-center justify-between gap-2.5 text-xs select-none">
      {/* Left: Academic Course Tag & Fictional Prototype Disclaimers */}
      <div className="flex items-center gap-2.5">
        <span className="bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
          MGMT 6108
        </span>
        <span className="text-[#cccccc] text-xs font-medium hidden sm:inline">
          Prototype: <strong className="text-white">ViuStream</strong>
        </span>
        <span className="text-[11px] text-[#717171] hidden lg:inline">
          (A/B Decision Architecture Experiment)
        </span>
      </div>

      {/* Center: Clean A/B Switcher (switched by ?v=A and ?v=B) */}
      <div className="flex items-center bg-[#202020] p-1 rounded-xl border border-[#333333]">
        <button
          onClick={() => onSwitchVariant('A')}
          className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
            variant === 'A'
              ? 'bg-[#FFE600] text-black shadow-md'
              : 'text-[#aaaaaa] hover:text-white'
          }`}
          title="Switch to Variant A (?v=A)"
        >
          Variant A (Status Quo)
        </button>

        <button
          onClick={() => onSwitchVariant('B')}
          className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
            variant === 'B'
              ? 'bg-[#FFE600] text-black shadow-md'
              : 'text-[#aaaaaa] hover:text-white'
          }`}
          title="Switch to Variant B (?v=B)"
        >
          Variant B (Redesign)
        </button>
      </div>

      {/* Right: Academic Research Modals (Audit, Consent, Debrief) */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenAudit}
          className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#2c2c2c] text-[#f1f1f1] px-3 py-1.5 rounded-xl text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
        >
          <Scale className="w-3.5 h-3.5 text-[#FFE600]" />
          <span>Audit Findings</span>
        </button>

        <button
          onClick={onOpenConsent}
          className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#2c2c2c] text-[#aaaaaa] hover:text-white px-2.5 py-1.5 rounded-xl text-xs font-medium border border-white/5 transition-colors cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#3ea6ff]" />
          <span className="hidden sm:inline">Consent</span>
        </button>

        <button
          onClick={onOpenDebrief}
          className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#2c2c2c] text-[#aaaaaa] hover:text-white px-2.5 py-1.5 rounded-xl text-xs font-medium border border-white/5 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden sm:inline">Debrief</span>
        </button>
      </div>
    </div>
  );
};
