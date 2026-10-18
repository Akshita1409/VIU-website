import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 bg-[#212121] text-white border border-[#FFE600]/40 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md animate-bounce-short select-none text-xs sm:text-sm font-medium">
      <CheckCircle className="w-4 h-4 text-[#FFE600] shrink-0" />
      <span>{message}</span>
    </div>
  );
};
