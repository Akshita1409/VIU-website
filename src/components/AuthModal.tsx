import React, { useState } from 'react';
import { X, Mail, Lock, User, Check, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: { name: string; email: string; isPremium: boolean }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onLogin({
      name: name || email.split('@')[0],
      email: email,
      isPremium: true // give VIP by default for great UX
    });
    onClose();
  };

  const handleQuickDemoLogin = () => {
    onLogin({
      name: 'Viu Member VIP',
      email: 'member@viu.com',
      isPremium: true
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-md bg-[#181818] border border-[#333333] rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#272727] hover:bg-[#383838] text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo / Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-[#FFE600] text-black font-black px-3 py-1 rounded-xl text-xl mb-3 shadow">
            VIU
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {isSignUp ? 'Create your Viu account' : 'Welcome to Viu'}
          </h2>
          <p className="text-xs text-[#aaaaaa] mt-1">
            Sync your watchlist, history and resume watching across any device.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-[#aaaaaa] mb-1">Full Name</label>
              <div className="flex items-center bg-[#242424] border border-[#383838] rounded-xl px-3 py-2 text-sm text-white">
                <User className="w-4 h-4 text-[#717171] mr-2 shrink-0" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rachel Tan"
                  className="bg-transparent w-full focus:outline-none"
                  required={isSignUp}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#aaaaaa] mb-1">Email Address</label>
            <div className="flex items-center bg-[#242424] border border-[#383838] rounded-xl px-3 py-2 text-sm text-white">
              <Mail className="w-4 h-4 text-[#717171] mr-2 shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#aaaaaa] mb-1">Password</label>
            <div className="flex items-center bg-[#242424] border border-[#383838] rounded-xl px-3 py-2 text-sm text-white">
              <Lock className="w-4 h-4 text-[#717171] mr-2 shrink-0" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#FFE600] hover:bg-[#fff04d] text-black font-bold text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-[#FFE600]/20"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {/* Demo Fast Sign-in */}
        <div className="mt-4 pt-4 border-t border-[#2b2b2b]">
          <button
            onClick={handleQuickDemoLogin}
            className="w-full py-2 bg-[#2a2a2a] hover:bg-[#333333] border border-[#3f3f3f] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>⚡ 1-Click VIP Demo Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Switch mode */}
        <p className="text-xs text-center text-[#aaaaaa] mt-4">
          {isSignUp ? 'Already have a Viu account?' : 'New to Viu?'}{' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#FFE600] font-bold hover:underline cursor-pointer ml-1"
          >
            {isSignUp ? 'Sign In' : 'Sign Up Free'}
          </button>
        </p>
      </div>
    </div>
  );
};
