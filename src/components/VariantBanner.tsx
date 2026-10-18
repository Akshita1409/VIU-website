import React from 'react';
import { ShieldCheck, BookOpen, Scale, Sparkles, AlertTriangle } from 'lucide-react';

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
    <div className="bg-[#121212] border-b border-[#2d2d2d] px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs select-none">
      {/* Left: Academic Course Tag & Fictional Prototype Disclaimers */}
      <div className="flex items-center gap-2">
        <span className="bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
          SMU MGMT 6108
        </span>
        <span className="text-[#aaaaaa] hidden md:inline">
          Fictional Brand Prototype: <strong className="text-white">ViuStream</strong>
        </span>
      </div>

      {/* Center: Variant A vs Variant B Switcher (switched by ?v=A and ?v=B) */}
      <div className="flex items-center bg-[#1e1e1e] p-0.5 rounded-xl border border-[#333333]">
        <button
          onClick={() => onSwitchVariant('A')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
            variant === 'A'
              ? 'bg-red-950/80 text-red-200 border border-red-500/40 shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
          title="Switch to Variant A (?v=A)"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span>Variant A (Status Quo)</span>
        </button>

        <button
          onClick={() => onSwitchVariant('B')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
            variant === 'B'
              ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/40 shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
          title="Switch to Variant B (?v=B)"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Variant B (Nudged)</span>
        </button>
      </div>

      {/* Right: Modal Triggers (Audit, Consent, Debrief) */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onOpenAudit}
          className="flex items-center gap-1 bg-[#242424] hover:bg-[#2e2e2e] text-[#f1f1f1] px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-white/10 transition-colors cursor-pointer"
        >
          <Scale className="w-3 h-3 text-[#FFE600]" />
          <span>Audit (AUDIT.md)</span>
        </button>

        <button
          onClick={onOpenConsent}
          className="flex items-center gap-1 bg-[#242424] hover:bg-[#2e2e2e] text-[#aaaaaa] hover:text-white px-2 py-1 rounded-lg text-[11px] font-medium border border-white/5 transition-colors cursor-pointer"
        >
          <ShieldCheck className="w-3 h-3 text-[#3ea6ff]" />
          <span className="hidden sm:inline">Consent</span>
        </button>

        <button
          onClick={onOpenDebrief}
          className="flex items-center gap-1 bg-[#242424] hover:bg-[#2e2e2e] text-[#aaaaaa] hover:text-white px-2 py-1 rounded-lg text-[11px] font-medium border border-white/5 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3 h-3 text-purple-400" />
          <span className="hidden sm:inline">Debrief</span>
        </button>
      </div>
    </div>
  );
};
