import React from 'react';
import { ShieldCheck, Check, X, FileText } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({
  isOpen,
  onClose,
  onAgree,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
      <div className="relative w-full max-w-lg bg-[#181818] border border-[#FFE600]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#FFE600] uppercase tracking-wider">
              MGMT 6108 Research Prototype
            </span>
            <h2 className="text-xl font-bold text-white">Informed Participant Consent</h2>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#cccccc] space-y-3 leading-relaxed mb-6 max-h-72 overflow-y-auto pr-1">
          <p>
            Welcome to the <strong>ViuStream Behavioral Decision Architecture Study</strong>, conducted for <em>MGMT 6108 – Leaders as Decision Architects</em> at Singapore Management University (SMU).
          </p>
          <div className="p-3 bg-[#222222] rounded-xl border border-white/5 space-y-2">
            <p className="font-semibold text-white">Study Purpose:</p>
            <p className="text-[11px] text-[#aaaaaa]">
              This study evaluates user decision-making across two distinct choice architectures: <strong>Variant A (Status Quo with industry-standard commercial sludge)</strong> vs <strong>Variant B (Ethical Decision Architecture with transparent nudges)</strong>.
            </p>
          </div>
          <ul className="space-y-1.5 text-xs text-[#bbbbbb] list-disc list-inside">
            <li><strong>Fictional Simulation:</strong> No real payment, credit cards, or personal data are collected.</li>
            <li><strong>Voluntary Participation:</strong> You may exit or switch variants at any time using the top navigation bar.</li>
            <li><strong>Anonymity:</strong> All interactions and choices are logged strictly anonymously for academic coursework evaluation.</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-[#444444] text-[#aaaaaa] hover:text-white text-xs font-semibold hover:bg-[#272727] transition-colors cursor-pointer"
          >
            Review Later
          </button>
          <button
            onClick={onAgree}
            className="flex-1 py-2.5 rounded-xl bg-[#FFE600] hover:bg-[#fff04d] text-black text-xs font-bold transition-all shadow-lg shadow-[#FFE600]/20 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>I Consent & Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
