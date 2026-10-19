import React, { useState, useEffect } from 'react';
import { X, Crown, Check, Clock, BellRing, Sparkles } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (plan: string) => void;
  variant: 'A' | 'B';
}

export const PremiumModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  onSubscribe,
  variant,
}) => {
  // In Variant A: Pre-selected 12-month annual plan (Status Quo default bias)
  // In Variant B: Neutral/flexible active choice
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly' | null>(
    variant === 'A' ? 'annual' : 'monthly'
  );

  // Variant A commercial urgency countdown
  const [countdown, setCountdown] = useState(299); // 4m 59s

  useEffect(() => {
    if (variant === 'A' && isOpen) {
      const timer = setInterval(() => {
        setCountdown(prev => (prev > 0 ? prev - 1 : 299)); // resets on 0
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [variant, isOpen]);

  if (!isOpen) return null;

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `0${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const features = [
    { title: 'Zero Advertisements', desc: 'Uninterrupted streaming without commercial breaks.' },
    { title: 'Express Simulcast Access', desc: 'Watch new Korean drama episodes 4 hours after Korea telecast.' },
    { title: 'Full HD & 4K Ultra HD', desc: '1080p and 4K video resolution with high-fidelity audio.' },
    { title: 'Unlimited Offline Downloads', desc: 'Save entire seasons to watch on the go without internet.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#1c1912] via-[#141414] to-[#0f0f0f] border border-[#FFE600]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,230,0,0.15)] overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#FFE600]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Variant A: Commercial Urgency Countdown Banner */}
        {variant === 'A' && (
          <div className="mb-4 p-2.5 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl flex items-center justify-between font-bold text-xs shadow-lg animate-pulse">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>LIMITED OFFER: 27% DISCOUNT ENDS SOON</span>
            </div>
            <span className="bg-black/50 px-2 py-0.5 rounded font-mono text-xs tracking-wider">
              {formatTimer(countdown)}
            </span>
          </div>
        )}

        {/* Variant B: Trial Protection Guarantee Banner */}
        {variant === 'B' && (
          <div className="mb-4 p-3 bg-[#1e2720] border border-emerald-500/40 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs mb-1">
              <BellRing className="w-4 h-4" />
              <span>Trial Protection Guarantee</span>
            </div>
            <p className="text-[11px] text-[#cccccc] leading-snug">
              We send an email & SMS reminder <strong>2 days before your free trial ends</strong>. If you decide not to continue, cancel in 1 click with zero charges.
            </p>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600]/15 border border-[#FFE600]/30 text-[#FFE600] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Crown className="w-4 h-4 fill-[#FFE600]" />
            StreamDemo Premium VIP Pass
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Unlock Unlimited Asian Entertainment
          </h2>
          <p className="text-xs sm:text-sm text-[#aaaaaa] mt-1 max-w-md mx-auto">
            {variant === 'A'
              ? 'Upgrade now to avoid losing access to trending Korean and Asian simulcasts.'
              : 'Choose the plan that suits your watching habits with complete flexibility.'}
          </p>
        </div>

        {/* Plans Selector */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Annual Plan */}
          <div
            onClick={() => setSelectedPlan('annual')}
            className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'annual'
                ? 'bg-[#26210f] border-[#FFE600] shadow-lg shadow-[#FFE600]/15'
                : 'bg-[#1b1b1b] border-[#303030] hover:border-[#444444]'
            }`}
          >
            {variant === 'A' ? (
              <span className="absolute -top-2.5 right-3 bg-red-600 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                RECOMMENDED • SAVE 27%
              </span>
            ) : (
              <span className="absolute -top-2.5 right-3 bg-[#FFE600] text-black font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                $5.83 / MONTH
              </span>
            )}
            <p className="font-bold text-white text-sm">12-Month Plan</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl sm:text-2xl font-black text-[#FFE600]">$69.98</span>
              <span className="text-xs text-[#aaaaaa]">/ year</span>
            </div>
            <p className="text-[11px] text-[#aaaaaa] mt-1">
              {variant === 'A' ? 'Billed annually at $69.98' : 'Billed annually ($5.83/mo equivalent)'}
            </p>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => setSelectedPlan('monthly')}
            className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'monthly'
                ? 'bg-[#26210f] border-[#FFE600] shadow-lg shadow-[#FFE600]/15'
                : 'bg-[#1b1b1b] border-[#303030] hover:border-[#444444]'
            }`}
          >
            <p className="font-bold text-white text-sm">Monthly Plan</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl sm:text-2xl font-black text-[#FFE600]">$7.98</span>
              <span className="text-xs text-[#aaaaaa]">/ month</span>
            </div>
            <p className="text-[11px] text-[#aaaaaa] mt-1">Flexible monthly billing</p>
          </div>
        </div>

        {/* Variant B Explicit Reminder Schedule */}
        {variant === 'B' && (
          <div className="mb-5 p-3 bg-black/40 rounded-xl border border-white/5 space-y-1.5 text-xs">
            <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFE600]" />
              Your 7-Day Free Trial Schedule:
            </p>
            <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-1">
              <div className="p-1.5 bg-[#222222] rounded-lg">
                <span className="text-[#FFE600] font-bold block">Day 1 (Today)</span>
                <span className="text-[#888888]">$0.00 charged</span>
              </div>
              <div className="p-1.5 bg-[#222222] rounded-lg border border-emerald-500/30">
                <span className="text-emerald-400 font-bold block">Day 5</span>
                <span className="text-[#888888]">SMS/Email Alert</span>
              </div>
              <div className="p-1.5 bg-[#222222] rounded-lg">
                <span className="text-white font-bold block">Day 7</span>
                <span className="text-[#888888]">First charge or cancel</span>
              </div>
            </div>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-2 mb-5 bg-black/40 p-3.5 rounded-2xl border border-white/5">
          {features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFE600] text-black flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white mr-1.5">{feat.title}:</span>
                <span className="text-[11px] text-[#888888]">{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            if (!selectedPlan) return;
            onSubscribe(
              selectedPlan === 'annual'
                ? 'Annual VIP Pass ($69.98/yr)'
                : 'Monthly VIP Pass ($7.98/mo)'
            );
          }}
          className="w-full py-3.5 bg-gradient-to-r from-[#FFE600] via-[#f7d800] to-[#EAB308] hover:brightness-105 text-black font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-[#FFE600]/25 transition-all transform hover:scale-[1.01] cursor-pointer"
        >
          {variant === 'A'
            ? 'Start 7-Day Free Trial (Auto-Renews)'
            : 'Start 7-Day Free Trial with Reminder'}
        </button>

        {/* Footer Fine Print differences */}
        {variant === 'A' ? (
          <p className="text-[10px] text-center text-[#555555] mt-3">
            By clicking Start, you authorize StreamDemo to charge your card automatically upon trial expiry. Non-refundable. Cancelation requires submitting an inquiry through settings.
          </p>
        ) : (
          <div className="flex items-center justify-center gap-4 text-[11px] text-[#aaaaaa] mt-3">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5" /> 1-Click cancel anytime in settings
            </span>
            <span>•</span>
            <span>No surprise charges</span>
          </div>
        )}
      </div>
    </div>
  );
};
