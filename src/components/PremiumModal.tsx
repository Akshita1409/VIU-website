import React, { useState } from 'react';
import { X, Crown, Check, Sparkles, Zap, Download, Tv, ShieldCheck } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (plan: string) => void;
}

export const PremiumModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  onSubscribe,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  if (!isOpen) return null;

  const features = [
    { title: 'Zero Advertisements', desc: 'Enjoy uninterrupted streaming with zero commercial breaks.' },
    { title: 'Express Simulcast Access', desc: 'Watch new Korean drama episodes as fast as 4 hours after Korea telecast.' },
    { title: 'Full HD & 4K Ultra HD', desc: 'Crystal clear 1080p and 4K video resolution with high-fidelity audio.' },
    { title: 'Unlimited Offline Downloads', desc: 'Save entire seasons to your devices and watch on the go without internet.' },
    { title: 'Watch on Big Screen TV', desc: 'Seamlessly stream on Apple TV, Android TV, Samsung Smart TV, and Chromecast.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#1c1912] via-[#141414] to-[#0f0f0f] border border-[#FFE600]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,230,0,0.15)] overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#FFE600]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600]/15 border border-[#FFE600]/30 text-[#FFE600] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Crown className="w-4 h-4 fill-[#FFE600]" />
            Viu Premium VIP Pass
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Unlock Unlimited Asian Entertainment
          </h2>
          <p className="text-xs sm:text-sm text-[#aaaaaa] mt-1 max-w-md mx-auto">
            Get instant access to Korea&apos;s latest simulcasts, award-winning Viu Originals, and blockbuster movies.
          </p>
        </div>

        {/* Plans Selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Annual */}
          <div
            onClick={() => setSelectedPlan('annual')}
            className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'annual'
                ? 'bg-[#26210f] border-[#FFE600] shadow-lg shadow-[#FFE600]/10'
                : 'bg-[#1b1b1b] border-[#303030] hover:border-[#444444]'
            }`}
          >
            <span className="absolute -top-2.5 right-3 bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
              SAVE 27%
            </span>
            <p className="font-bold text-white text-sm">12-Month Plan</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl sm:text-2xl font-black text-[#FFE600]">$69.98</span>
              <span className="text-xs text-[#aaaaaa]">/ year</span>
            </div>
            <p className="text-[11px] text-[#aaaaaa] mt-1">~$5.83/mo billed annually</p>
          </div>

          {/* Monthly */}
          <div
            onClick={() => setSelectedPlan('monthly')}
            className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'monthly'
                ? 'bg-[#26210f] border-[#FFE600] shadow-lg shadow-[#FFE600]/10'
                : 'bg-[#1b1b1b] border-[#303030] hover:border-[#444444]'
            }`}
          >
            <p className="font-bold text-white text-sm">Monthly Plan</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl sm:text-2xl font-black text-[#FFE600]">$7.98</span>
              <span className="text-xs text-[#aaaaaa]">/ month</span>
            </div>
            <p className="text-[11px] text-[#aaaaaa] mt-1">Cancel anytime</p>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-2.5 mb-6 bg-black/40 p-4 rounded-2xl border border-white/5">
          {features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#FFE600] text-black flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">{feat.title}</p>
                <p className="text-[11px] text-[#888888]">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onSubscribe(selectedPlan === 'annual' ? 'Annual VIP ($69.98/yr)' : 'Monthly VIP ($7.98/mo)')}
          className="w-full py-3.5 bg-gradient-to-r from-[#FFE600] via-[#f7d800] to-[#EAB308] hover:brightness-105 text-black font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-[#FFE600]/25 transition-all transform hover:scale-[1.01] cursor-pointer"
        >
          Start 7-Day Free Trial
        </button>

        <p className="text-[11px] text-center text-[#717171] mt-3">
          Free trial available for first-time subscribers. Recurring billing, cancel anytime in Settings.
        </p>
      </div>
    </div>
  );
};
