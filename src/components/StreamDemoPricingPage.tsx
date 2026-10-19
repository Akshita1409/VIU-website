import React, { useState } from 'react';
import { 
  PlaySquare, 
  Ban, 
  Download, 
  Monitor, 
  Rocket, 
  Tv, 
  Check, 
  ShieldCheck, 
  Clock, 
  BellRing, 
  CreditCard, 
  ChevronRight, 
  X, 
  Lock, 
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';

interface StreamDemoPricingPageProps {
  variant: 'A' | 'B';
  onSwitchVariant: (v: 'A' | 'B') => void;
  onOpenAudit: () => void;
  onOpenConsent: () => void;
  onOpenDebrief: () => void;
  onPreviewCatalog: () => void;
  user: {
    name: string;
    email: string;
    secondaryEmails?: string[];
    isPremium: boolean;
  } | null;
  onSubscribe: (planTitle: string, price: string) => void;
  onShowToast: (msg: string) => void;
}

export const StreamDemoPricingPage: React.FC<StreamDemoPricingPageProps> = ({
  variant,
  onSwitchVariant,
  onOpenAudit,
  onOpenConsent,
  onOpenDebrief,
  onPreviewCatalog,
  user,
  onSubscribe,
  onShowToast,
}) => {
  // Plan category tab: 'standard' (30d, 90d, 365d) vs 'bundle' (Hollywood + Asian Max bundle)
  const [categoryTab, setCategoryTab] = useState<'standard' | 'bundle' | 'all'>('standard');
  
  // Selected plan tab inside standard
  // In Variant A: Pre-selected 365-day annual plan (Default Bias Sludge from screenshot 4)
  // In Variant B: Neutral unselected or balanced side-by-side active choice
  const [selectedStandardPlan, setSelectedStandardPlan] = useState<'365' | '90' | '30'>(
    variant === 'A' ? '365' : '30'
  );

  // Selected bundle plan
  const [selectedBundlePlan, setSelectedBundlePlan] = useState<'365-bundle' | '30-bundle'>('365-bundle');

  // Checkout modal simulation
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean;
    planTitle: string;
    recurringText: string;
    price: string;
  } | null>(null);

  const handleStartCheckout = (planTitle: string, recurringText: string, price: string) => {
    setCheckoutModal({
      isOpen: true,
      planTitle,
      recurringText,
      price,
    });
  };

  const handleConfirmCheckout = () => {
    if (!checkoutModal) return;
    onSubscribe(checkoutModal.planTitle, checkoutModal.price);
    setCheckoutModal(null);
    onShowToast(`Successfully started trial for ${checkoutModal.planTitle}!`);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] flex flex-col font-sans select-none antialiased">
      
      {/* Top Academic Research Header Bar */}
      <div className="bg-[#141414] border-b border-[#292929] px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
        {/* Left: Course Disclaimers */}
        <div className="flex items-center gap-2.5">
          <span className="bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
            MGMT 6108
          </span>
          <span className="text-[#e0e0e0] font-semibold text-xs">
            Site: <strong className="text-white">StreamDemo Pricing</strong>
          </span>
          <span className="text-[11px] text-[#888888] hidden md:inline">
            (Modeled after Viu Singapore Premium Billing Architecture)
          </span>
        </div>

        {/* Center: Clean A/B Variant Switcher */}
        <div className="flex items-center bg-[#242424] p-1 rounded-xl border border-[#383838]">
          <button
            onClick={() => onSwitchVariant('A')}
            className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
              variant === 'A'
                ? 'bg-[#FFE600] text-black shadow-md'
                : 'text-[#aaaaaa] hover:text-white'
            }`}
            title="Switch to Variant A (?v=A): Status Quo Sludge baseline"
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
            title="Switch to Variant B (?v=B): Decision-Architected Redesign"
          >
            Variant B (Redesign)
          </button>
        </div>

        {/* Right: Academic Audit Drawer, Consent, and Catalog */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAudit}
            className="flex items-center gap-1.5 bg-[#252525] hover:bg-[#323232] text-white px-3 py-1.5 rounded-xl font-semibold border border-white/10 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse"></span>
            <span>Audit Findings</span>
          </button>

          <button
            onClick={onOpenConsent}
            className="bg-[#252525] hover:bg-[#323232] text-[#cccccc] hover:text-white px-2.5 py-1.5 rounded-xl text-xs font-medium border border-white/10 transition-colors cursor-pointer"
          >
            Consent
          </button>

          <button
            onClick={onOpenDebrief}
            className="bg-[#252525] hover:bg-[#323232] text-[#cccccc] hover:text-white px-2.5 py-1.5 rounded-xl text-xs font-medium border border-white/10 transition-colors cursor-pointer"
          >
            Debrief
          </button>

          <button
            onClick={onPreviewCatalog}
            className="flex items-center gap-1 text-[#FFE600] hover:underline font-semibold text-xs ml-1 cursor-pointer"
            title="Browse full streaming catalog and episode player"
          >
            <span>Preview Shows</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main StreamDemo Brand Header matching Viu Singapore */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* StreamDemo Logo */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center bg-[#FFE600] text-black font-black px-3 py-1 rounded-xl text-lg tracking-wider shadow-sm">
                StreamDemo
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-[9px] font-bold text-white px-1 py-0.2 rounded leading-none uppercase">
                  SG
                </span>
              </div>
              <span className="text-sm font-bold text-gray-500 hidden sm:inline">
                / Pricing & Plans
              </span>
            </div>
          </div>

          {/* User Account / Contact indicator */}
          <div className="flex items-center gap-3 text-xs">
            <div className="hidden sm:block text-right">
              <p className="font-bold text-gray-800">{user?.name || 'Akshita Kumar & Team'}</p>
              <p className="text-[11px] text-gray-500 font-mono">{user?.email}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FFE600] text-black font-bold flex items-center justify-center text-xs shadow-sm">
              SD
            </div>
          </div>
        </div>
      </header>

      {/* Category Tab Selector matching Viu navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 overflow-x-auto no-scrollbar text-sm font-bold">
          <button
            onClick={() => setCategoryTab('standard')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              categoryTab === 'standard'
                ? 'border-[#E5007D] text-[#E5007D]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            StreamDemo Premium (Standard Plans)
          </button>

          <button
            onClick={() => setCategoryTab('bundle')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              categoryTab === 'bundle'
                ? 'border-[#E5007D] text-[#E5007D]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Hollywood & Asian Entertainment Bundles (StreamDemo + Max)
          </button>

          <button
            onClick={() => setCategoryTab('all')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              categoryTab === 'all'
                ? 'border-[#E5007D] text-[#E5007D]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            All Plans Side-by-Side
          </button>
        </div>
      </div>

      {/* Main Pricing Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* TAB 1: STANDARD STREAMDEMO PREMIUM PLANS (Recreating Screenshots 1, 2, and 4) */}
        {(categoryTab === 'standard' || categoryTab === 'all') && (
          <div className="space-y-6">
            
            {/* Standard Plan Switcher Buttons */}
            {categoryTab === 'standard' && (
              <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl w-fit border border-gray-200">
                <button
                  onClick={() => setSelectedStandardPlan('365')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedStandardPlan === '365'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  365 Days Plan (Recommended)
                </button>
                <button
                  onClick={() => setSelectedStandardPlan('90')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedStandardPlan === '90'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  90 Days Plan
                </button>
                <button
                  onClick={() => setSelectedStandardPlan('30')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedStandardPlan === '30'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  30 Days Plan
                </button>
              </div>
            )}

            {/* VARIANT B ETHICAL NUDGE CALLOUT: Trial Protection & Active Choice Guarantee */}
            {variant === 'B' && (
              <div className="bg-[#f0fbf5] border border-[#a3e6cd] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-emerald-950">
                      StreamDemo Trial Protection Guarantee
                    </h3>
                    <p className="text-xs text-emerald-800 leading-relaxed mt-0.5 max-w-2xl">
                      No surprise charges. We send an automated <strong>SMS & Email alert on Day 5</strong> (2 days before trial ends) with a direct 1-click cancel button. You can also self-serve cancel anytime in settings.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-white/80 px-3 py-1.5 rounded-xl border border-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Symmetric 1-Click Cancel</span>
                </div>
              </div>
            )}

            {/* PLAN CARD 1: 365 DAYS PLAN (Exact match to Screenshot 4 - WhatsApp Image 2026-10-19 at 10.17.03 AM.jpeg) */}
            {(categoryTab === 'all' || selectedStandardPlan === '365') && (
              <div className="space-y-3">
                {/* Notice text above card from screenshot */}
                <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                  <p className="font-medium text-gray-800">
                    Enjoy a 7-day FREE trial^, then $107.76 for 365 days (U.P. $131.76). Your subscription will auto-renew every 365 days.
                  </p>
                  <p>
                    You won’t be charged during your free trial. If you don’t wish to continue,{' '}
                    <strong className="text-gray-900 font-semibold">
                      please cancel at least 24 hours before your free trial ends
                    </strong>{' '}
                    to avoid being charged $107.76. Otherwise, $107.76 will be charged automatically when your free trial ends.
                  </p>
                  <p className="italic text-gray-500">
                    ^Free trial eligibility criteria apply. See the Terms & Conditions below* for more information.
                  </p>
                  <p>
                    By proceeding, I agree to the associated{' '}
                    <a href="#" className="underline text-gray-700 hover:text-black">Terms & Conditions</a>.
                  </p>
                </div>

                {/* White Pricing Card from Screenshot 4 */}
                <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                  {/* Magenta Recommended Tag from screenshot */}
                  <div className="space-y-2 max-w-xl">
                    <div className="inline-flex items-center bg-[#E5007D] text-white text-[11px] font-black px-3.5 py-0.5 rounded-sm italic uppercase tracking-wider shadow-xs">
                      Recommended
                    </div>
                    
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                        Only $8.98/month
                      </h2>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mt-0.5">
                        Save 18% on 1 year!
                      </h3>
                    </div>

                    <div className="text-xs text-gray-600 space-y-1 pt-1 leading-relaxed">
                      <p>Recurring payment of $107.76 (U.P. $131.76) charged every 365 days.</p>
                      <p>No lock-in contract or minimum commitment. To avoid being charged for the next billing cycle, please cancel at least 24 hours before your next billing date.</p>
                      <p>Additional bank charges may apply.</p>
                      <p>Terms & conditions apply.</p>
                    </div>
                  </div>

                  {/* Gradient Pill Button from screenshot */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleStartCheckout(
                        'StreamDemo Premium 365 Days Plan',
                        'Recurring payment of $107.76 charged every 365 days after 7-day trial',
                        '$107.76 / year ($8.98/mo)'
                      )}
                      className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
                    >
                      Subscribe now
                    </button>
                    {variant === 'B' && (
                      <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Day 5 SMS reminder included
                      </span>
                    )}
                  </div>
                </div>

                {/* Terms text below card from screenshot */}
                <div className="text-[11px] text-gray-500 space-y-1 leading-relaxed pt-2">
                  <p>
                    This promotion is valid until 31 December 2026 and is applicable only to users who subscribe to the StreamDemo Premium 365 Days Plan via credit card payment. StreamDemo reserves the right to amend the promotion period without prior notice.
                  </p>
                  <p>
                    No refunds will be provided for any partial or unused portion of the StreamDemo Premium 365 Days Plan if you cancel during an active subscription period.
                  </p>
                  <p>
                    {variant === 'A' ? (
                      'As StreamDemo’s merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank.'
                    ) : (
                      'StreamDemo Singapore processes all transactions locally in SGD. Zero international transaction fees. 9% Singapore GST included.'
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* PLAN CARD 2: 90 DAYS PLAN (Exact match to Screenshot 1 - 1792376045510_image.png) */}
            {(categoryTab === 'all' || selectedStandardPlan === '90') && (
              <div className="space-y-3 pt-4">
                <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                  <p className="font-medium text-gray-800">
                    Enjoy a 7-day FREE trial^, then $29.94 for 90 days (U.P. $32.94). Your subscription will auto-renew every 90 days.
                  </p>
                  <p>
                    You won’t be charged during your free trial. If you don’t wish to continue,{' '}
                    <strong className="text-gray-900 font-semibold">
                      please cancel at least 24 hours before your free trial ends
                    </strong>{' '}
                    to avoid being charged $29.94. Otherwise, $29.94 will be charged automatically when your free trial ends.
                  </p>
                  <p className="italic text-gray-500">
                    ^Free trial eligibility criteria apply. See the Terms & Conditions below* for more information.
                  </p>
                  <p>
                    By proceeding, I agree to the associated{' '}
                    <a href="#" className="underline text-gray-700 hover:text-black">Terms & Conditions</a>.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2 max-w-xl">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                        $9.98/month
                      </h2>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mt-0.5">
                        Save 9% off 90 days!
                      </h3>
                    </div>

                    <div className="text-xs text-gray-600 space-y-1 pt-1 leading-relaxed">
                      <p>Recurring payment of $29.94 (U.P. $32.94) charged every 90 days.</p>
                      <p>No lock-in contract or minimum commitment. To avoid being charged for the next billing cycle, please cancel at least 24 hours before your next billing date.</p>
                      <p>Additional bank charges may apply.</p>
                      <p>Terms & conditions apply.</p>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleStartCheckout(
                        'StreamDemo Premium 90 Days Plan',
                        'Recurring payment of $29.94 charged every 90 days after 7-day trial',
                        '$29.94 / 90 days ($9.98/mo)'
                      )}
                      className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
                    >
                      Subscribe now
                    </button>
                    {variant === 'B' && (
                      <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Day 5 SMS reminder included
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 space-y-1 leading-relaxed pt-2">
                  <p>
                    This promotion is valid until 31 December 2026 and is applicable only to users who subscribe to the StreamDemo Premium 90 Days Plan via credit card payment. StreamDemo reserves the right to amend the promotion period without prior notice.
                  </p>
                  <p>
                    No refunds will be provided for any partial or unused portion of the StreamDemo Premium 90 Days Plan if you cancel during an active subscription period.
                  </p>
                  <p>
                    {variant === 'A' ? (
                      'As StreamDemo’s merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank.'
                    ) : (
                      'StreamDemo Singapore processes all transactions locally in SGD. Zero international transaction fees. 9% Singapore GST included.'
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* PLAN CARD 3: 30 DAYS PLAN (Exact match to Screenshot 2 - 1792376061450_image.png) */}
            {(categoryTab === 'all' || selectedStandardPlan === '30') && (
              <div className="space-y-3 pt-4">
                <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                  <p className="font-medium text-gray-800">
                    Enjoy a 7-day FREE trial^, then just $10.98 for 30 days. Your subscription will auto-renew every 30 days.
                  </p>
                  <p>
                    You won’t be charged during your free trial. If you don’t wish to continue,{' '}
                    <strong className="text-gray-900 font-semibold">
                      please cancel at least 24 hours before your free trial ends
                    </strong>{' '}
                    to avoid being charged $10.98. Otherwise, $10.98 will be charged automatically when your free trial ends.
                  </p>
                  <p className="italic text-gray-500">
                    ^Free trial eligibility criteria apply. See the Terms & Conditions below* for more information.
                  </p>
                  <p>
                    By proceeding, I agree to the associated{' '}
                    <a href="#" className="underline text-gray-700 hover:text-black">Terms & Conditions</a>.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2 max-w-xl">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                        $10.98/month
                      </h2>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mt-0.5">
                        Start 30-day Premium!
                      </h3>
                    </div>

                    <div className="text-xs text-gray-600 space-y-1 pt-1 leading-relaxed">
                      <p>Recurring payment of $10.98 charged every 30 days.</p>
                      <p>No lock-in contract or minimum commitment. To avoid being charged for the next billing cycle, please cancel at least 24 hours before your next billing date.</p>
                      <p>Additional bank charges may apply.</p>
                      <p>Terms & conditions apply.</p>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleStartCheckout(
                        'StreamDemo Premium 30 Days Plan',
                        'Recurring payment of $10.98 charged every 30 days after 7-day trial',
                        '$10.98 / month'
                      )}
                      className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
                    >
                      Subscribe now
                    </button>
                    {variant === 'B' && (
                      <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Day 5 SMS reminder included
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 space-y-1 leading-relaxed pt-2">
                  <p>
                    No refunds will be provided for any partial or unused portion of the StreamDemo Premium 30 Days Plan if you cancel during an active subscription period.
                  </p>
                  <p>
                    {variant === 'A' ? (
                      'As StreamDemo’s merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank.'
                    ) : (
                      'StreamDemo Singapore processes all transactions locally in SGD. Zero international transaction fees. 9% Singapore GST included.'
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: HOLLYWOOD & ASIAN ENTERTAINMENT BUNDLES (Exact match to Screenshot 3 - 1792376093143_image.png) */}
        {(categoryTab === 'bundle' || categoryTab === 'all') && (
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                The best hits from Hollywood and Asia at an unbelievable price.
              </h2>
              <p>Stream Hollywood hits, K-dramas, and can’t miss Asian originals with one bundle.</p>
              <div className="pl-2 space-y-0.5">
                <p>Bundle includes:</p>
                <p>• StreamDemo Premium service - Subscribe to StreamDemo Premium streaming service to enjoy ad-free viewing, video download, and priority/exclusive content access!</p>
                <p>• HBO Max Standard Plan (subject to HBO’s Terms of Use)</p>
                <p>• By continuing, I agree to the applicable StreamDemo Terms & Conditions and the HBO Max & StreamDemo Bundle Terms & Conditions.</p>
              </div>
              <p>
                By proceeding, I agree to the associated{' '}
                <a href="#" className="underline text-gray-700 hover:text-black">Terms & Conditions</a>.
              </p>
            </div>

            {/* Two Side-by-Side Cards from Screenshot 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
              {/* Card 1: 30-day Bundle */}
              <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                    $19.98/month - Start 30-day bundle subscription!
                  </h3>
                  <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                    <p>Recurring payment of $19.98 charged every 30 days.</p>
                    <p>Cancel anytime - cancellation takes effect from the next billing cycle. To avoid being charged for the next cycle, please cancel at least 24 hours before the next billing date.</p>
                    <p>Additional bank charges may apply.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleStartCheckout(
                      'StreamDemo + HBO Max 30-Day Bundle',
                      'Recurring payment of $19.98 charged every 30 days',
                      '$19.98 / month'
                    )}
                    className="w-full py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
                  >
                    Subscribe now
                  </button>
                </div>
              </div>

              {/* Card 2: 365-day Bundle (with Magenta Recommended tag) */}
              <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
                <div className="space-y-3">
                  <div className="inline-flex items-center bg-[#E5007D] text-white text-[11px] font-black px-3.5 py-0.5 rounded-sm italic uppercase tracking-wider shadow-xs">
                    Recommended
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                    $15.83/month - Save 20% on a 365-day bundle!
                  </h3>
                  <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                    <p>Recurring payment of $189.98 (U.P. $239.76) charged every 365 days.</p>
                    <p>Cancel anytime - cancellation takes effect from the next billing cycle. To avoid being charged for the next cycle, please cancel at least 24 hours before the next billing date.</p>
                    <p>Additional bank charges may apply.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleStartCheckout(
                      'StreamDemo + HBO Max 365-Day Bundle',
                      'Recurring payment of $189.98 charged every 365 days',
                      '$189.98 / year ($15.83/mo)'
                    )}
                    className="w-full py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
                  >
                    Subscribe now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* THE ICONIC FEATURE STRIP (Exact match to all 4 screenshots) */}
        <section className="bg-[#f2f2f2] border border-gray-200 rounded-2xl p-6 sm:p-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-800 text-xs sm:text-sm font-semibold">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <PlaySquare className="w-5 h-5" />
              </div>
              <span>Unlimited Access</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <Ban className="w-5 h-5" />
              </div>
              <span>No Video Ads</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <Download className="w-5 h-5" />
              </div>
              <span>Video Downloads</span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <span className="font-black text-[10px] border border-gray-700 px-1 rounded">FULL HD</span>
              </div>
              <span>Full HD (1080p)</span>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <Rocket className="w-5 h-5" />
              </div>
              <span>Priority Viewing</span>
            </div>

            {/* Feature 6 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-2xs">
                <Monitor className="w-5 h-5" />
              </div>
              <span>Watch On Multiple Screens</span>
            </div>
          </div>
        </section>

      </main>

      {/* CHECKOUT MODAL SIMULATION */}
      {checkoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200">
            <button
              onClick={() => setCheckoutModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#FFE600] text-black font-extrabold text-xs px-2.5 py-0.5 rounded-lg">
                  StreamDemo SG
                </span>
                <span className="text-xs font-bold text-gray-500">Checkout</span>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900">
                Confirm {checkoutModal.planTitle}
              </h3>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs text-gray-700">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">Price:</span>
                  <span className="font-bold text-base text-gray-900">{checkoutModal.price}</span>
                </div>
                <div className="flex justify-between items-baseline pt-1 border-t border-gray-200">
                  <span className="text-gray-500">Due Today (Trial):</span>
                  <span className="font-bold text-emerald-600">S$0.00</span>
                </div>
                <p className="text-[11px] text-gray-500 pt-1 leading-snug">
                  {checkoutModal.recurringText}
                </p>
              </div>

              {variant === 'B' ? (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Trial Protection Active
                  </p>
                  <p className="text-[11px] leading-snug">
                    We will send an SMS and email notification on <strong>Day 5</strong> before any deduction occurs. You can cancel with 1 click in your account settings.
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 leading-snug">
                  ⚠️ Reminder: You must manually remember to cancel at least 24 hours before your free trial ends to avoid recurring charges.
                </div>
              )}

              <button
                onClick={handleConfirmCheckout}
                className="w-full py-3.5 bg-gradient-to-r from-[#FF9900] via-[#F23B60] to-[#E5007D] hover:brightness-105 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-full shadow-md shadow-pink-500/20 transition-all cursor-pointer text-center"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Modeled Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-[#f8f8f8] py-8 text-center text-xs text-gray-500 space-y-2">
        <p>
          © 2026 StreamDemo Pricing (Singapore) Pte. Ltd. All Rights Reserved.
        </p>
        <p className="text-[11px] text-gray-400">
          Academic prototype recreating the Viu Singapore Premium Member billing experience for SMU MGMT 6108 Decision Architecture research.
        </p>
      </footer>
    </div>
  );
};
