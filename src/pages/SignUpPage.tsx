import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Calendar, Phone, Mail, Lock } from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';

interface SignUpPageProps {
  isDark: boolean;
  onSwitchToSignIn?: () => void;
}

export function SignUpPage({ isDark, onSwitchToSignIn }: SignUpPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', formData);
  };

  const handleTabSwitch = (tab: 'signin' | 'signup') => {
    setActiveTab(tab);
    if (tab === 'signin' && onSwitchToSignIn) {
      onSwitchToSignIn();
    }
  };

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <div 
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background: `radial-gradient(circle, var(--theme-primary), transparent 70%)`
            }}
          />
        </div>

        {/* Sign Up Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-lg"
        >
          <div 
            className="backdrop-blur-xl border-2 rounded-3xl overflow-hidden"
            style={{
              background: isDark 
                ? 'rgba(15, 23, 42, 0.7)'
                : 'rgba(255, 255, 255, 0.85)',
              borderColor: 'var(--theme-primary-alpha)',
              boxShadow: `0 25px 50px -12px var(--theme-glow-strong)`,
            }}
          >
            {/* Header */}
            <div className="p-8 pb-6">
              <motion.h1 
                className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Join Today
              </motion.h1>
              <motion.p 
                className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Create your account to get started
              </motion.p>
            </div>

            {/* Tabs */}
            <div className="px-8 mb-6">
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl" style={{
                background: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(226, 232, 240, 0.5)',
              }}>
                <button
                  onClick={() => handleTabSwitch('signin')}
                  className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'signin'
                      ? 'text-white shadow-lg'
                      : isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'
                  }`}
                  style={activeTab === 'signin' ? {
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    boxShadow: `0 4px 12px var(--theme-glow)`,
                  } : {}}
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleTabSwitch('signup')}
                  className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'signup'
                      ? 'text-white shadow-lg'
                      : isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'
                  }`}
                  style={activeTab === 'signup' ? {
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    boxShadow: `0 4px 12px var(--theme-glow)`,
                  } : {}}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Date of Birth*
                </label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className={`w-full px-4 py-3 pr-10 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: 'var(--theme-primary)' }} />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Phone*
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+61 412345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 pr-10 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: 'var(--theme-primary)' }} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Email*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="john.smith@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 pr-10 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: 'var(--theme-primary)' }} />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="MyP@ssw0rd!2025"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full px-4 py-3 pr-10 rounded-xl border-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                    style={{ outline: 'none' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                    ) : (
                      <Eye className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                    )}
                  </button>
                </div>
                <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Password must be 8-64 characters and include uppercase, lowercase, number & special character
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className={`p-4 rounded-xl ${isDark ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  By clicking, I consent to the{' '}
                  <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--theme-primary)' }}>
                    Verafy Terms And Conditions
                  </a>{' '}
                  of use and the collection and processing of my personal information in accordance with the{' '}
                  <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--theme-primary)' }}>
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Security Verification */}
              <div>
                <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Security Verification
                </label>
                <div 
                  className="flex items-center justify-center p-6 rounded-xl border-2"
                  style={{
                    background: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.8)',
                    borderColor: 'var(--theme-primary-alpha)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="human-check-signup"
                      className="w-6 h-6 rounded border-2 cursor-pointer"
                      style={{
                        accentColor: 'var(--theme-primary)',
                      }}
                    />
                    <label 
                      htmlFor="human-check-signup" 
                      className={`text-sm cursor-pointer ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                    >
                      I am human
                    </label>
                    <div className="ml-2">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                        }}
                      >
                        <Lock className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`text-[10px] text-center mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Privacy - Terms
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <ThemedButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                >
                  Sign Up
                </ThemedButton>
              </div>

              {/* Additional Links */}
              <div className="text-center pt-2">
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => handleTabSwitch('signin')}
                    className="font-semibold hover:underline"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
