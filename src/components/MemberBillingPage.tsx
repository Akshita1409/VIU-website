import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Check, 
  X, 
  CreditCard, 
  Smartphone, 
  QrCode, 
  Clock, 
  BellRing, 
  ShieldCheck, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Tv, 
  Sparkles, 
  FileText, 
  ArrowLeft,
  Info,
  Tag,
  Lock,
  ExternalLink,
  ReceiptText
} from 'lucide-react';

interface MemberBillingPageProps {
  onBackToStream: () => void;
  user: {
    name: string;
    email: string;
    secondaryEmails?: string[];
    isPremium: boolean;
  } | null;
  onUpdateSubscription: (isPremium: boolean, planName?: string) => void;
  variant: 'A' | 'B';
  onShowToast: (msg: string) => void;
}

export const MemberBillingPage: React.FC<MemberBillingPageProps> = ({
  onBackToStream,
  user,
  onUpdateSubscription,
  variant,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'plans' | 'payment' | 'history' | 'redeem' | 'faq'>('plans');
  
  // Plan selection
  // Variant A: Pre-selected 365-day annual plan (default effect sludge)
  // Variant B: Monthly or active choice
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    variant === 'A' ? 'annual-365' : 'monthly-standard'
  );

  // Selected payment method
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paynow' | 'singtel' | 'starhub'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelStep, setCancelStep] = useState(1);

  // Variant A: Resetting countdown timer
  const [countdown, setCountdown] = useState(299); // 4m 59s
  useEffect(() => {
    if (variant === 'A') {
      const timer = setInterval(() => {
        setCountdown(prev => (prev > 0 ? prev - 1 : 299));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [variant]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `0${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Singapore Viu Pricing Tiers recreated for StreamDemo Premium
  const plans = [
    {
      id: 'monthly-standard',
      name: 'Monthly Plan',
      duration: '30 Days',
      price: 'S$10.98',
      period: '/ month',
      unitPrice: 'S$10.98/mo',
      savings: null,
      desc: 'Standard recurring monthly membership. Cancel anytime.',
      badge: 'Flexible'
    },
    {
      id: 'quarterly-90',
      name: '3-Month Plan',
      duration: '90 Days',
      price: 'S$26.35',
      originalPrice: 'S$32.94',
      period: '/ 3 months',
      unitPrice: '~S$8.78/mo',
      savings: 'SAVE 20%',
      desc: 'Billed every 90 days. Ideal for binge-watching current seasonal simulcasts.',
      badge: 'Popular'
    },
    {
      id: 'halfyear-180',
      name: '6-Month Plan',
      duration: '180 Days',
      price: 'S$52.70',
      originalPrice: 'S$65.88',
      period: '/ 6 months',
      unitPrice: '~S$8.78/mo',
      savings: 'SAVE 20%',
      desc: 'Billed every 180 days. Continuous HD streaming with 4-hour express access.',
      badge: null
    },
    {
      id: 'annual-365',
      name: 'Annual Plan',
      duration: '365 Days',
      price: 'S$79.06',
      originalPrice: 'S$131.76',
      period: '/ year',
      unitPrice: '~S$6.59/mo',
      savings: 'SAVE 40%',
      desc: 'Billed annually at S$79.06. Best overall value for Asian drama lovers.',
      badge: 'Best Value'
    }
  ];

  const benefits = [
    { feature: 'Commercial Advertisements', free: 'Multiple video ads before & during playback', premium: '100% Ad-Free Streaming' },
    { feature: 'New Episode Access', free: 'Delayed 72 hours for selected titles', premium: 'Express Simulcast as fast as 4 hours after Korea' },
    { feature: 'Video Resolution', free: 'Standard Definition (480p)', premium: 'Full HD 1080p & 4K Ultra HD' },
    { feature: 'Offline Video Downloads', free: 'Not available', premium: 'Unlimited downloads on mobile & tablet' },
    { feature: 'TV & Big Screen Streaming', free: 'Web browser & mobile only', premium: 'Smart TV, Apple TV, Android TV, Chromecast' },
    { feature: 'StreamDemo Originals & Movies', free: 'Limited catalogue', premium: 'Full Unlimited Access to all exclusive Asian titles' },
    { feature: 'Concurrent Screens', free: '1 screen', premium: 'Up to 3 devices simultaneously' },
  ];

  const faqs = [
    {
      q: 'When and how will I be charged for StreamDemo Premium?',
      a: 'If you are starting a 7-day free trial, you will not be charged today (S$0.00). In Variant B, we send you an automated email and SMS reminder on Day 5, and your first billing cycle will begin on Day 7. Subscriptions automatically renew according to your selected billing frequency (Monthly, 90-day, 180-day, or 365-day) until cancelled.'
    },
    {
      q: 'How do I cancel my StreamDemo Premium subscription?',
      a: 'You can cancel anytime by heading to Member Center > Subscription & Billing > Cancel Subscription. Under Variant B, cancellation is processed in 1 click without hidden penalty fees or tricky retention questionnaires, and your VIP benefits will remain active until the end of your current paid billing period.'
    },
    {
      q: 'Which payment methods are accepted in Singapore?',
      a: 'We accept major Credit & Debit cards (Visa, MasterCard, American Express), Singapore digital payment wallets (PayNow, GrabPay, ShopeePay), as well as direct carrier billing via Singtel Postpaid and StarHub TV+ Asian+ bundles.'
    },
    {
      q: 'Can I switch between Monthly and Annual plans?',
      a: 'Yes. Upgrading to a longer-term plan takes effect immediately and pro-rates your remaining days. Downgrading to a shorter cycle takes effect at the end of your existing subscription term.'
    }
  ];

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SMU2026' || promoCode.trim().toUpperCase() === 'STREAMVIP') {
      setAppliedPromo(promoCode.trim().toUpperCase());
      onShowToast(`Promo code ${promoCode.trim().toUpperCase()} applied: Extra 15% discount!`);
    } else {
      onShowToast('Invalid or expired promo code. Try "SMU2026"');
    }
  };

  const handleConfirmSubscription = () => {
    const selected = plans.find(p => p.id === selectedPlanId);
    onUpdateSubscription(true, selected?.name);
    onShowToast(`Successfully subscribed to StreamDemo Premium (${selected?.name})!`);
  };

  const handleExecuteCancel = () => {
    onUpdateSubscription(false);
    setIsCancelModalOpen(false);
    setCancelStep(1);
    onShowToast('Your StreamDemo Premium subscription has been cancelled.');
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f1f1f1] antialiased">
      {/* Top Breadcrumb & Return to Stream Header */}
      <div className="bg-[#161616] border-b border-[#292929] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToStream}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#aaaaaa] hover:text-[#FFE600] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Video Catalog</span>
          </button>
          <span className="text-[#444444]">•</span>
          <span className="text-xs text-[#888888]">
            Member Center / <strong className="text-white">StreamDemo Premium Billing</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#FFE600] text-black font-extrabold text-[10px] px-2 py-0.5 rounded shadow">
            SINGAPORE (SG)
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* User Account Summary & Active Tier Card */}
        <div className="bg-gradient-to-r from-[#1c1c1c] via-[#181818] to-[#141414] border border-[#2f2f2f] rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE600] text-black font-black flex items-center justify-center text-lg shadow-md shadow-[#FFE600]/20">
                SD
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  StreamDemo Member Center
                  <span className="text-xs font-normal text-[#aaaaaa]">• Billing & Plans</span>
                </h1>
                <p className="text-xs text-[#999999]">
                  Account: <span className="text-white font-medium">{user?.name || 'Akshita Kumar & Team'}</span> ({user?.email})
                </p>
              </div>
            </div>

            {user?.secondaryEmails && user.secondaryEmails.length > 0 && (
              <div className="pt-2 text-[11px] text-[#777777]">
                <span>Secondary Contact Emails: </span>
                <span className="text-[#bbbbbb] font-mono">
                  {user.secondaryEmails.join(' • ')}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider block">Current Status</span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                user?.isPremium 
                  ? 'bg-[#FFE600] text-black shadow-lg shadow-[#FFE600]/20' 
                  : 'bg-[#262626] text-[#aaaaaa] border border-white/10'
              }`}>
                <Crown className="w-3.5 h-3.5 fill-current" />
                {user?.isPremium ? 'StreamDemo Premium VIP' : 'Free Member'}
              </span>
            </div>

            {user?.isPremium && (
              <button
                onClick={() => setIsCancelModalOpen(true)}
                className="text-xs text-red-400 hover:text-red-300 underline underline-offset-2 px-2 py-1 cursor-pointer"
              >
                Manage / Cancel
              </button>
            )}
          </div>
        </div>

        {/* Member Center Secondary Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#262626] pb-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'plans'
                ? 'bg-[#FFE600] text-black shadow'
                : 'text-[#aaaaaa] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Subscription Plans & Upgrade
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'payment'
                ? 'bg-[#FFE600] text-black shadow'
                : 'text-[#aaaaaa] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Payment Methods & Telco Partners
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'history'
                ? 'bg-[#FFE600] text-black shadow'
                : 'text-[#aaaaaa] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Invoices & Billing History
          </button>
          <button
            onClick={() => setActiveTab('redeem')}
            className={`px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'redeem'
                ? 'bg-[#FFE600] text-black shadow'
                : 'text-[#aaaaaa] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Redeem Promo Code
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'faq'
                ? 'bg-[#FFE600] text-black shadow'
                : 'text-[#aaaaaa] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Member FAQ & Terms
          </button>
        </div>

        {/* TAB 1: SUBSCRIPTION PLANS & UPGRADE */}
        {activeTab === 'plans' && (
          <div className="space-y-8 animate-fade-in">
            {/* Behavioral Urgency or Protection Banner */}
            {variant === 'A' ? (
              <div className="p-4 bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black/40 rounded-xl">
                    <Clock className="w-6 h-6 text-[#FFE600]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base">
                      LIMITED TIME MEMBER OFFER: 40% OFF ANNUAL PASS
                    </h3>
                    <p className="text-xs text-white/80">
                      Promotional discount will expire shortly. Secure exclusive pricing now.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-xl border border-white/20">
                  <span className="text-[11px] font-semibold text-[#dddddd]">Offer Expires In:</span>
                  <span className="font-mono text-base font-bold text-[#FFE600] tracking-wider">
                    {formatTimer(countdown)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-[#14231b] border border-emerald-500/40 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <BellRing className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-emerald-300">
                      100% Transparent Trial & Reminder Guarantee
                    </h3>
                    <p className="text-xs text-[#cccccc]">
                      First charge of your selected plan on Day 7. We send an SMS and email alert on <strong>Day 5</strong> with a 1-click cancel button.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-black/40 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Surprise Renewals</span>
                </div>
              </div>
            )}

            {/* Plans Grid (Singapore Pricing) */}
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Crown className="w-5 h-5 text-[#FFE600] fill-[#FFE600]" />
                  Select Your StreamDemo Premium Membership Plan
                </h2>
                <p className="text-xs text-[#aaaaaa]">
                  Prices quoted in Singapore Dollars (SGD). Cancel anytime in your Member Center.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {plans.map((p) => {
                  const isSelected = selectedPlanId === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPlanId(p.id)}
                      className={`relative rounded-3xl p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#211c10] border-[#FFE600] shadow-[0_0_25px_rgba(255,230,0,0.15)] scale-[1.01]'
                          : 'bg-[#181818] border-[#2c2c2c] hover:border-[#444444]'
                      }`}
                    >
                      {/* Top Badges */}
                      {p.savings && (
                        <span className="absolute -top-3 right-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          {p.savings}
                        </span>
                      )}
                      {p.badge && !p.savings && (
                        <span className="absolute -top-3 right-4 bg-[#FFE600] text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          {p.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-extrabold text-white text-base">{p.name}</h3>
                          <span className="text-[11px] font-semibold text-[#888888]">{p.duration}</span>
                        </div>

                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-2xl sm:text-3xl font-black text-[#FFE600]">{p.price}</span>
                          <span className="text-xs text-[#aaaaaa]">{p.period}</span>
                        </div>

                        {p.originalPrice && (
                          <p className="text-xs text-[#777777] line-through mt-0.5">U.P. {p.originalPrice}</p>
                        )}

                        <p className="text-xs font-semibold text-emerald-400 mt-1">
                          {p.unitPrice}
                        </p>

                        <p className="text-xs text-[#aaaaaa] mt-3 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-[#aaaaaa]">
                          {isSelected ? '✓ Selected' : 'Click to select'}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#FFE600] bg-[#FFE600] text-black' : 'border-[#555555]'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Checkout & Confirmation Box */}
            <div className="bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#888888] uppercase tracking-wider">Order Summary</span>
                  <span className="text-xs text-[#444444]">•</span>
                  <span className="text-xs text-[#FFE600] font-semibold">
                    {plans.find(p => p.id === selectedPlanId)?.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {plans.find(p => p.id === selectedPlanId)?.price}
                  </span>
                  <span className="text-xs text-[#aaaaaa]">
                    {plans.find(p => p.id === selectedPlanId)?.period}
                  </span>
                  {appliedPromo && (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded font-bold">
                      15% PROMO ACTIVE
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#999999] max-w-xl">
                  {variant === 'A'
                    ? 'Automatic recurring billing upon expiry unless cancelled. Charges processed through PCCW OTT Singapore.'
                    : 'Includes Trial Protection Guarantee. We notify you 2 days prior to any deduction with full self-serve 1-click cancel.'}
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
                <button
                  onClick={handleConfirmSubscription}
                  className="w-full md:w-72 py-4 bg-gradient-to-r from-[#FFE600] via-[#f5d700] to-[#EAB308] hover:brightness-105 text-black font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-[#FFE600]/25 transition-all transform hover:scale-[1.01] cursor-pointer"
                >
                  {variant === 'A'
                    ? 'Subscribe Now to StreamDemo'
                    : 'Start 7-Day Free Trial (Protected)'}
                </button>
                <div className="flex items-center gap-1.5 text-[11px] text-[#888888]">
                  <Lock className="w-3 h-3 text-[#FFE600]" />
                  <span>256-Bit SSL Encrypted Singapore Gateway</span>
                </div>
              </div>
            </div>

            {/* Feature Comparison Table (Free vs StreamDemo Premium) */}
            <div className="bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FFE600]" />
                  Privilege Comparison: Free Member vs StreamDemo Premium
                </h3>
                <p className="text-xs text-[#aaaaaa]">
                  Compare the full streaming benefits included with StreamDemo Premium in Singapore.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#2e2e2e]">
                      <th className="py-3 px-4 font-bold text-[#aaaaaa]">Features & Privileges</th>
                      <th className="py-3 px-4 font-bold text-[#888888]">Free Member</th>
                      <th className="py-3 px-4 font-bold text-[#FFE600] bg-[#FFE600]/10 rounded-t-xl">
                        👑 StreamDemo Premium VIP
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242424]">
                    {benefits.map((b, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">{b.feature}</td>
                        <td className="py-3.5 px-4 text-[#888888]">{b.free}</td>
                        <td className="py-3.5 px-4 font-semibold text-[#FFE600] bg-[#FFE600]/5">
                          {b.premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PAYMENT METHODS & SINGAPORE PARTNERS */}
        {activeTab === 'payment' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Available Singapore Payment Methods</h3>
              <p className="text-xs text-[#aaaaaa] mb-6">
                Select your preferred billing gateway. StreamDemo Premium supports direct card transactions, Singapore digital wallets, and local telco integrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Credit Card */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-[#FFE600] bg-[#221e12]' : 'border-[#2f2f2f] bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <CreditCard className="w-5 h-5 text-[#FFE600]" />
                      <span>Credit / Debit Card</span>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-4 h-4 text-[#FFE600]" />}
                  </div>
                  <p className="text-xs text-[#aaaaaa]">Visa, MasterCard, American Express. Instant activation.</p>
                </div>

                {/* PayNow / Digital Wallets */}
                <div 
                  onClick={() => setPaymentMethod('paynow')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'paynow' ? 'border-[#FFE600] bg-[#221e12]' : 'border-[#2f2f2f] bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <QrCode className="w-5 h-5 text-purple-400" />
                      <span>PayNow / GrabPay / ShopeePay</span>
                    </div>
                    {paymentMethod === 'paynow' && <Check className="w-4 h-4 text-[#FFE600]" />}
                  </div>
                  <p className="text-xs text-[#aaaaaa]">Singapore local QR & digital wallets with instant bank authorization.</p>
                </div>

                {/* Singtel Partner Billing */}
                <div 
                  onClick={() => setPaymentMethod('singtel')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'singtel' ? 'border-[#FFE600] bg-[#221e12]' : 'border-[#2f2f2f] bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <Smartphone className="w-5 h-5 text-red-500" />
                      <span>Singtel Postpaid Bill Integration</span>
                    </div>
                    {paymentMethod === 'singtel' && <Check className="w-4 h-4 text-[#FFE600]" />}
                  </div>
                  <p className="text-xs text-[#aaaaaa]">Charge your StreamDemo Premium pass directly to your monthly Singtel postpaid bill.</p>
                </div>

                {/* StarHub TV+ Partner Billing */}
                <div 
                  onClick={() => setPaymentMethod('starhub')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'starhub' ? 'border-[#FFE600] bg-[#221e12]' : 'border-[#2f2f2f] bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <Tv className="w-5 h-5 text-emerald-400" />
                      <span>StarHub TV+ Asian+ Add-on</span>
                    </div>
                    {paymentMethod === 'starhub' && <Check className="w-4 h-4 text-[#FFE600]" />}
                  </div>
                  <p className="text-xs text-[#aaaaaa]">Link your existing StarHub Hub iD to unlock bundled StreamDemo Premium.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INVOICES & BILLING HISTORY */}
        {activeTab === 'history' && (
          <div className="bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ReceiptText className="w-5 h-5 text-[#FFE600]" />
              Singapore Billing Statements & Payment Receipts
            </h3>
            <p className="text-xs text-[#aaaaaa]">
              Download official receipts for your subscription records. All amounts include 9% Singapore GST.
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#2e2e2e] text-[#888888]">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Invoice #</th>
                    <th className="py-2.5 px-3">Plan Description</th>
                    <th className="py-2.5 px-3">Payment Gateway</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242424] text-[#cccccc]">
                  <tr>
                    <td className="py-3 px-3">18 Oct 2026</td>
                    <td className="py-3 px-3 font-mono text-xs">INV-SG-2026-9812</td>
                    <td className="py-3 px-3">StreamDemo Premium 365-Day VIP</td>
                    <td className="py-3 px-3">Visa ending in 4242</td>
                    <td className="py-3 px-3 font-bold text-white">S$79.06</td>
                    <td className="py-3 px-3">
                      <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded text-[11px]">
                        PAID
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <button 
                        onClick={() => onShowToast('Downloaded simulated PDF tax invoice')}
                        className="text-[#FFE600] hover:underline flex items-center gap-1 text-xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" /> PDF
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: REDEEM PROMO CODE */}
        {activeTab === 'redeem' && (
          <div className="max-w-xl mx-auto bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE600]/15 text-[#FFE600] flex items-center justify-center mx-auto border border-[#FFE600]/30">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Redeem StreamDemo Voucher or Promo Code</h3>
            <p className="text-xs text-[#aaaaaa]">
              Have a partner voucher from Singtel, StarHub, or a student promotional code? Enter it below to redeem your StreamDemo Premium access.
            </p>

            <form onSubmit={handleApplyPromo} className="flex gap-2 max-w-md mx-auto pt-2">
              <input
                type="text"
                placeholder="Enter promo code (e.g. SMU2026)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#121212] border border-[#383838] focus:border-[#FFE600] rounded-xl px-4 py-2.5 text-xs text-white uppercase tracking-wider outline-none"
              />
              <button
                type="submit"
                className="bg-[#FFE600] hover:bg-[#fed700] text-black font-extrabold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-all shadow"
              >
                Apply
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: MEMBER FAQ & TERMS */}
        {activeTab === 'faq' && (
          <div className="bg-[#181818] border border-[#2f2f2f] rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">Frequently Asked Questions & Terms</h3>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div 
                  key={i} 
                  className="bg-[#141414] border border-[#272727] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <span className="font-semibold text-white text-xs sm:text-sm">{f.q}</span>
                    {openFaqIndex === i ? <ChevronUp className="w-4 h-4 text-[#FFE600]" /> : <ChevronDown className="w-4 h-4 text-[#888888]" />}
                  </div>
                  {openFaqIndex === i && (
                    <div className="px-4 pb-4 text-xs text-[#aaaaaa] leading-relaxed border-t border-[#222222] pt-3">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* CANCELLATION MODAL (Illustrating Decision Architecture Differences) */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
          <div className="relative w-full max-w-lg bg-[#181818] border border-[#333333] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => {
                setIsCancelModalOpen(false);
                setCancelStep(1);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {variant === 'A' ? (
              /* Variant A: Sludge Roach Motel Cancellation Maze */
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-red-400 font-bold text-sm">
                  <AlertCircle className="w-5 h-5" />
                  <span>Cancellation Retention Warning (Step {cancelStep} of 3)</span>
                </div>
                {cancelStep === 1 && (
                  <>
                    <h3 className="text-lg font-bold text-white">
                      Are you sure you want to surrender your VIP privileges?
                    </h3>
                    <p className="text-xs text-[#aaaaaa] leading-relaxed">
                      You will immediately lose 4-hour express simulcast access to <em>Lovely Runner</em>, <em>Running Man 2026</em>, and 4K Ultra HD streaming.
                    </p>
                    <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl text-xs text-red-300">
                      ⚠️ Note: Outstanding promotional discounts cannot be reinstated once cancelled.
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setIsCancelModalOpen(false)}
                        className="flex-1 py-2.5 bg-[#FFE600] text-black font-bold text-xs rounded-xl cursor-pointer"
                      >
                        Keep StreamDemo VIP
                      </button>
                      <button
                        onClick={() => setCancelStep(2)}
                        className="flex-1 py-2.5 border border-[#444444] text-[#aaaaaa] hover:text-white text-xs font-semibold rounded-xl cursor-pointer"
                      >
                        Continue to Step 2
                      </button>
                    </div>
                  </>
                )}
                {cancelStep === 2 && (
                  <>
                    <h3 className="text-lg font-bold text-white">
                      Please state your reason for leaving
                    </h3>
                    <div className="space-y-1.5 text-xs text-[#cccccc]">
                      <label className="flex items-center gap-2 p-2 bg-[#1f1f1f] rounded-lg cursor-pointer">
                        <input type="radio" name="reason" defaultChecked /> Too expensive
                      </label>
                      <label className="flex items-center gap-2 p-2 bg-[#1f1f1f] rounded-lg cursor-pointer">
                        <input type="radio" name="reason" /> Finished watching my favorite show
                      </label>
                      <label className="flex items-center gap-2 p-2 bg-[#1f1f1f] rounded-lg cursor-pointer">
                        <input type="radio" name="reason" /> Technical / buffering issues
                      </label>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setIsCancelModalOpen(false)}
                        className="flex-1 py-2.5 bg-[#FFE600] text-black font-bold text-xs rounded-xl cursor-pointer"
                      >
                        Stay with Discount
                      </button>
                      <button
                        onClick={handleExecuteCancel}
                        className="flex-1 py-2.5 border border-red-500 text-red-400 hover:bg-red-950/30 text-xs font-semibold rounded-xl cursor-pointer"
                      >
                        Confirm Cancellation
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Variant B: Symmetric Friction & 1-Click Transparent Cancellation */
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>StreamDemo 1-Click Self-Serve Cancellation</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Cancel StreamDemo Premium
                </h3>
                <p className="text-xs text-[#aaaaaa] leading-relaxed">
                  We believe in zero hassle. If you proceed, your subscription will not renew at the next billing cycle, but you will continue to enjoy full StreamDemo Premium privileges until the end of your current period.
                </p>
                <div className="p-3 bg-[#17221b] border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
                  ✓ No penalty fees • No retention loops • Easy reactivation anytime.
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setIsCancelModalOpen(false)}
                    className="flex-1 py-2.5 border border-[#444444] text-[#aaaaaa] hover:text-white text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleExecuteCancel}
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl cursor-pointer shadow"
                  >
                    Confirm 1-Click Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Official PCCW OTT (Singapore) Modeled Footer */}
      <footer className="mt-16 border-t border-[#222222] bg-[#0a0a0a] py-8 text-center text-xs text-[#666666] space-y-2">
        <p>
          © 2026 StreamDemo OTT (Singapore) Pte. Ltd. All Rights Reserved.
        </p>
        <p className="text-[11px] text-[#555555]">
          Fictional prototype modeled after Viu Premium Singapore for SMU MGMT 6108 Decision Architecture research.
        </p>
      </footer>
    </div>
  );
};
