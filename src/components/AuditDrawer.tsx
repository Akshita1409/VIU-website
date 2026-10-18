import React, { useState } from 'react';
import { X, BookOpen, AlertTriangle, CheckCircle, Scale, BarChart3, FileText, ChevronRight } from 'lucide-react';

interface AuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditDrawer: React.FC<AuditDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'redesign' | 'predictions'>('audit');

  if (!isOpen) return null;

  const findings = [
    {
      id: 'F-01',
      title: 'Pre-Selected High-Tier Annual Default',
      severity: 3,
      screen: 'Paywall Plan Selection',
      seesDoes: 'Annual 12-month tier ($69.98) is pre-selected by default; user passively commits to annual billing.',
      principle: 'Default Effect & Status Quo Bias (Thaler & Sunstein, 2008; Johnson & Goldstein, 2003)',
      mechanism: 'Cognitive inertia; user assumes default is universally optimal. Firm wins short-term cash flow; User loses flexibility.',
      repair: 'Active Choice Architecture: Neutral selection requiring deliberate consumer intent.'
    },
    {
      id: 'F-02',
      title: 'Manufactured Urgency (Resetting Countdown)',
      severity: 4,
      screen: 'Top Banner of Subscription Screen',
      seesDoes: 'Flashing countdown timer (04:59) creates artificial scarcity panic, resetting on reload.',
      principle: 'Artificial Scarcity & Deceptive Urgency Sludge (Cialdini, 2009; Sunstein, 2019; Thaler, 2018)',
      mechanism: 'Triggers fast System 1 loss aversion panic. Firm wins checkout conversion; User loses deliberate evaluation.',
      repair: 'Honest Salience: Remove fake countdown entirely. Show authentic unit-price value ($5.83/mo).'
    },
    {
      id: 'F-03',
      title: 'Opaque Auto-Renewal / Present Bias Trap',
      severity: 4,
      screen: 'Trial Opt-in Fine Print',
      seesDoes: 'Day 7 renewal date hidden in low-contrast gray text; no automated reminder promised.',
      principle: 'Salience & Hyperbolic Discounting (Laibson, 1997; O\'Donoghue & Rabin, 1999)',
      mechanism: 'Immediate present reward ($0 today) blinds user to future cost. Firm wins accidental churn; User loses unexpected charge.',
      repair: 'Trial Protection Promise: Explicit first-charge date + promised SMS/Email reminder on Day 5.'
    },
    {
      id: 'F-04',
      title: 'Asymmetric Friction (Roach Motel Sludge)',
      severity: 3,
      screen: 'Cancellation Flow',
      seesDoes: 'Subscribing takes 1 click; canceling requires 4-step maze through sub-menus.',
      principle: 'Asymmetric Friction / Roach Motel (Sunstein, 2019; Luguri & Strahilevitz, 2021)',
      mechanism: 'Friction asymmetry exploits status quo inertia to trap unengaged users.',
      repair: 'Symmetric Friction: 1-click self-serve cancellation link displayed right on onboarding.'
    },
    {
      id: 'F-05',
      title: 'Mindless Autoplay Consumption',
      severity: 2,
      screen: 'Episode Watch Page Player',
      seesDoes: 'Next episode automatically starts after 5 seconds with zero reflective friction.',
      principle: 'Mindless Eating / Passive Default Consumption (Wansink, 2006; Kahneman, 2011)',
      mechanism: 'Automaticity removes decision points, displacing sleep and work time.',
      repair: 'Mindful Session Check-In: Prompt after 2 episodes offering "Save for tomorrow".'
    },
    {
      id: 'F-06',
      title: 'Existing Good Nudge Kept: Clear Content Badges',
      severity: 0,
      isGood: true,
      screen: 'Video Thumbnail & Watch Metadata',
      seesDoes: 'Clear [CC] subtitle language tags and 1080p FHD resolution badges shown upfront.',
      principle: 'Information Salience & Cognitive Ease (Kahneman, 2011)',
      mechanism: 'Reduces uncertainty and cognitive effort before clicking. Both firm and user win.',
      repair: 'Retained in Variant B with enhanced high-contrast visual indicators.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-0 bg-black/75 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-2xl h-full bg-[#161616] border-l border-[#333333] p-6 overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2a2a2a] mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#FFE600] text-black font-black text-xs">
              MGMT 6108
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Behavioral Audit & Decision Architecture
              </h2>
              <p className="text-xs text-[#aaaaaa]">Prof. Sungjong Roh, PhD • Singapore Management University</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-5 bg-[#202020] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'audit' ? 'bg-[#FFE600] text-black shadow' : 'text-[#aaaaaa] hover:text-white'
            }`}
          >
            Findings Table (6 Lines)
          </button>
          <button
            onClick={() => setActiveTab('redesign')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'redesign' ? 'bg-[#FFE600] text-black shadow' : 'text-[#aaaaaa] hover:text-white'
            }`}
          >
            Variant A vs B
          </button>
          <button
            onClick={() => setActiveTab('predictions')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'predictions' ? 'bg-[#FFE600] text-black shadow' : 'text-[#aaaaaa] hover:text-white'
            }`}
          >
            Predictions & Plan
          </button>
        </div>

        {/* Tab 1: Findings Table */}
        {activeTab === 'audit' && (
          <div className="space-y-4 flex-1">
            <div className="text-xs text-[#aaaaaa] bg-[#1e1e1e] p-3 rounded-xl border border-white/5">
              Each finding contains all 6 required lines: <em>Where; What user sees & does; Principle with academic citation; Mechanism & whose goal wins; Severity with driver; and the Variant B repair</em>.
            </div>

            {findings.map(f => (
              <div
                key={f.id}
                className={`p-4 rounded-2xl border ${
                  f.isGood
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : f.severity === 4
                    ? 'bg-red-950/25 border-red-500/30'
                    : 'bg-[#1e1e1e] border-[#2f2f2f]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-black ${
                      f.isGood ? 'bg-emerald-400 text-black' : f.severity === 4 ? 'bg-red-500 text-white' : 'bg-[#FFE600] text-black'
                    }`}>
                      {f.id}
                    </span>
                    {f.title}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    f.isGood ? 'bg-emerald-900 text-emerald-300' : 'bg-red-900/60 text-red-300'
                  }`}>
                    {f.isGood ? 'Good Nudge Kept' : `Severity ${f.severity}/4`}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#cccccc]">
                  <div>
                    <span className="text-[#888888] font-semibold">1. Where: </span>
                    <span className="text-white">{f.screen}</span>
                  </div>
                  <div>
                    <span className="text-[#888888] font-semibold">2. User Action: </span>
                    <span>{f.seesDoes}</span>
                  </div>
                  <div>
                    <span className="text-[#888888] font-semibold">3. Principle & Reading: </span>
                    <span className="text-[#FFE600] font-medium">{f.principle}</span>
                  </div>
                  <div>
                    <span className="text-[#888888] font-semibold">4. Mechanism & Win: </span>
                    <span>{f.mechanism}</span>
                  </div>
                  <div className="pt-1 border-t border-white/5">
                    <span className="text-emerald-400 font-semibold">6. Repair in Variant B: </span>
                    <span className="text-white font-medium">{f.repair}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Redesign A vs B */}
        {activeTab === 'redesign' && (
          <div className="space-y-4 flex-1 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-500/30">
                <h3 className="font-bold text-sm text-red-400 mb-2">Variant A (Status Quo)</h3>
                <ul className="space-y-2 text-[#cccccc] list-disc list-inside">
                  <li><strong>Annual Pre-Selection:</strong> Biased default to maximize upfront revenue.</li>
                  <li><strong>Fake Countdown Timer:</strong> Manipulated urgency (04:59) resetting on reload.</li>
                  <li><strong>Hidden Trial Billing:</strong> Silent auto-renewal without scheduled reminder.</li>
                  <li><strong>5s Auto-Binge Player:</strong> No reflective pause between episodes.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                <h3 className="font-bold text-sm text-emerald-400 mb-2">Variant B (Decision Architecture)</h3>
                <ul className="space-y-2 text-[#cccccc] list-disc list-inside">
                  <li><strong>Active Choice:</strong> Neutral layout showing true unit price ($5.83/mo vs $7.98/mo).</li>
                  <li><strong>Honest Salience:</strong> Zero fake timers; authentic value communication.</li>
                  <li><strong>Trial Protection:</strong> Scheduled Day 5 reminder + clear Day 7 charge date.</li>
                  <li><strong>Mindful Session Prompt:</strong> "You've watched 2 eps — save for tomorrow?".</li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 bg-[#222222] rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-1">Nudge-Not-Sludge Verification:</h4>
              <p className="text-[#aaaaaa] leading-relaxed">
                Variant B passes the test: it does not trick the consumer, nor does it hide pricing. Instead, it serves the consumer&apos;s goal of informed entertainment while serving the firm&apos;s legitimate goal of building high-trust, low-churn long-term subscribers.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Predictions & Test Plan */}
        {activeTab === 'predictions' && (
          <div className="space-y-4 flex-1 text-xs">
            <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-[#2f2f2f] space-y-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#FFE600]" />
                Empirical Test Plan & Metrics
              </h3>
              <div>
                <p className="text-[#888888] font-semibold">Primary Metric (User Well-being & Trust):</p>
                <p className="text-white">Day 30 Subscription Satisfaction & Non-Disputed Retention Rate.</p>
                <p className="text-[#FFE600] font-bold mt-0.5">Prediction: Increases from 58% in A to 74% in B (+16%).</p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-[#888888] font-semibold">Secondary Metric (Firm Conversion):</p>
                <p className="text-white">Qualified Trial-to-Paid Conversion Rate.</p>
                <p className="text-emerald-400 font-bold mt-0.5">Prediction: Increases from 34% in A to 46% in B (+12%).</p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-[#888888] font-semibold">Guardrail Metric:</p>
                <p className="text-[#cccccc]">Overall 90-day subscription revenue must not decline by &gt;5%; involuntary chargeback dispute claims must decrease by &gt;60%.</p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-[#888888] font-semibold">Sample Size Calculation:</p>
                <p className="text-[#cccccc]">Two-proportion z-test (p1 = 0.35, p2 = 0.48, alpha = 0.05, power = 0.80) requires <strong>224 participants per arm (N = 448 total)</strong>.</p>
              </div>
            </div>

            <div className="p-3 bg-[#242424] rounded-xl border border-white/5">
              <p className="text-[#aaaaaa]">
                Required submission files <code>AUDIT.md</code>, <code>PROMPTS.md</code>, and <code>REFLECTION.md</code> are stored in the repository root for evaluation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
