import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Bell, Globe, Shield, Palette } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';

interface SettingsPageProps {
  isDark: boolean;
}

export function SettingsPage({ isDark }: SettingsPageProps) {
  const [activeTab, setActiveTab] = useState<'account' | 'security' | 'notifications' | 'preferences'>('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Palette },
  ] as const;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Settings
        </h1>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? isDark
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-100 text-cyan-600'
                  : isDark
                  ? 'text-slate-400 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Account Tab */}
      {activeTab === 'account' && (
        <div className="space-y-6">
          <GlassCard isDark={isDark}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Amit"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Vohra"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="amit.vohra27@gmail.com"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+61 XXX XXX XXX"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <ThemedButton variant="primary">Save Changes</ThemedButton>
              <ThemedButton variant="outline">Cancel</ThemedButton>
            </div>
          </GlassCard>

          <GlassCard isDark={isDark}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Current Plan
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Standard Plan
                </p>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  $10/month • Renews on Feb 1, 2026
                </p>
              </div>
              <ThemedButton variant="outline">Upgrade Plan</ThemedButton>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <GlassCard isDark={isDark}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Change Password
            </h3>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Current Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  New Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>
            <div className="mt-6">
              <ThemedButton variant="primary">Update Password</ThemedButton>
            </div>
          </GlassCard>

          <GlassCard isDark={isDark}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Two-Factor Authentication
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Add an extra layer of security
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Currently disabled
                </p>
              </div>
              <ThemedButton variant="outline">Enable 2FA</ThemedButton>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Notification Preferences
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Portfolio Alerts', desc: 'Get notified of significant portfolio changes' },
              { label: 'AI Insights', desc: 'Receive daily AI-powered insights' },
              { label: 'Market Updates', desc: 'Stay informed about market movements' },
              { label: 'Tax Reminders', desc: 'Important tax deadlines and opportunities' },
              { label: 'Course Updates', desc: 'New courses and learning materials' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b last:border-0" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
                <label className="relative inline-block w-11 h-6">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-700 peer-checked:bg-cyan-500 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer" />
                </label>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <div className="space-y-6">
          <GlassCard isDark={isDark}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Display Preferences
            </h3>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Theme
                </label>
                <select
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  <option>System Default</option>
                  <option>Light Mode</option>
                  <option>Dark Mode</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Language
                </label>
                <select
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  <option>English (Australia)</option>
                  <option>English (US)</option>
                  <option>English (UK)</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Currency
                </label>
                <select
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  <option>AUD ($)</option>
                  <option>USD ($)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <ThemedButton variant="primary">Save Preferences</ThemedButton>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
