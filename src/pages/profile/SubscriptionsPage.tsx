import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Calendar, DollarSign, TrendingUp, Download, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface SubscriptionsPageProps {
  isDark: boolean;
}

export function SubscriptionsPage({ isDark }: SubscriptionsPageProps) {
  const [activeTab, setActiveTab] = useState<'billing' | 'notifications' | 'payment'>('billing');

  const currentPlan = {
    name: 'Standard Plan',
    price: '$10',
    interval: 'month',
    nextBilling: 'Feb 1, 2026',
    status: 'Active',
  };

  const taxTools = {
    name: 'Tax Tools Add-On',
    price: '$10',
    interval: 'year',
    capped: '$50 over 7 years',
    nextBilling: 'Jul 1, 2026',
    status: 'Active',
  };

  const billingHistory = [
    { date: 'Jan 1, 2026', description: 'Standard Plan - Monthly', amount: '$10.00', status: 'Paid', invoice: 'INV-2026-01' },
    { date: 'Dec 1, 2025', description: 'Standard Plan - Monthly', amount: '$10.00', status: 'Paid', invoice: 'INV-2025-12' },
    { date: 'Nov 1, 2025', description: 'Standard Plan - Monthly', amount: '$10.00', status: 'Paid', invoice: 'INV-2025-11' },
    { date: 'Oct 1, 2025', description: 'Standard Plan - Monthly', amount: '$10.00', status: 'Paid', invoice: 'INV-2025-10' },
    { date: 'Sep 1, 2025', description: 'Standard Plan - Monthly', amount: '$10.00', status: 'Paid', invoice: 'INV-2025-09' },
    { date: 'Jul 1, 2025', description: 'Tax Tools Add-On - Yearly', amount: '$10.00', status: 'Paid', invoice: 'INV-2025-07' },
  ];

  const growthStats = {
    verafyCash: {
      earned: 0,
      pending: 0,
      approved: 0,
    },
    referrals: {
      total: 7,
      active: 4,
      pending: 2,
      earned: '$40',
    },
    academy: {
      coursesCompleted: 8,
      hoursLearned: 42,
      streak: 14,
    },
  };

  const emailNotifications = [
    { id: 'price-movement', label: 'Price Movement & News', enabled: true },
    { id: 'tax-deadlines', label: 'Tax Deadlines & Notifications', enabled: true },
    { id: 'portfolio-insights', label: 'Portfolio Insights from Vera', enabled: true },
    { id: 'billing', label: 'Billing & Invoices', enabled: true },
  ];

  const tabs = [
    { id: 'billing', label: 'Billing & History' },
    { id: 'notifications', label: 'Email Notifications' },
    { id: 'payment', label: 'Payment Method' },
  ] as const;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Subscriptions & Billing
        </h1>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
          Manage your plan, track growth programs, and view billing history
        </p>
      </div>

      {/* Growth Programs Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Verafy Cash */}
        <GlassCard isDark={isDark} animate={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ background: 'rgba(251, 191, 36, 0.1)' }}>
              <DollarSign className="w-6 h-6" style={{ color: CHART_COLORS.warning }} />
            </div>
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Verafy Cash
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Content Creation
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.verafyCash.earned}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Earned</p>
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.verafyCash.pending}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pending</p>
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.verafyCash.approved}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Approved</p>
            </div>
          </div>
        </GlassCard>

        {/* Referrals */}
        <GlassCard isDark={isDark} animate={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ background: 'rgba(34, 211, 238, 0.1)' }}>
              <TrendingUp className="w-6 h-6" style={{ color: CHART_COLORS.primary }} />
            </div>
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Referrals
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Invite Friends
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.referrals.total}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total</p>
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.referrals.active}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Active</p>
            </div>
            <div>
              <p className={`text-xl font-bold text-emerald-400`}>
                {growthStats.referrals.earned}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Earned</p>
            </div>
          </div>
        </GlassCard>

        {/* Academy */}
        <GlassCard isDark={isDark} animate={false}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
              <CheckCircle className="w-6 h-6" style={{ color: CHART_COLORS.secondary }} />
            </div>
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Academy
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Learning Progress
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.academy.coursesCompleted}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Courses</p>
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.academy.hoursLearned}h
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Hours</p>
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {growthStats.academy.streak}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Streak</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Current Subscriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Main Plan */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Current Plan
          </h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {currentPlan.name}
              </p>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                {currentPlan.price}/{currentPlan.interval}
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}
            >
              {currentPlan.status}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Next billing: {currentPlan.nextBilling}
            </span>
          </div>
          <div className="flex gap-3">
            <ThemedButton variant="primary" className="flex-1">
              Upgrade Plan
            </ThemedButton>
            <ThemedButton variant="outline">
              Cancel
            </ThemedButton>
          </div>
        </GlassCard>

        {/* Tax Tools Add-On */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Add-Ons
          </h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {taxTools.name}
              </p>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                {taxTools.price}/{taxTools.interval}
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Capped at {taxTools.capped}
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}
            >
              {taxTools.status}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Next billing: {taxTools.nextBilling}
            </span>
          </div>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Features: Capital gains summaries, tax optimization, export-ready reports
          </p>
        </GlassCard>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? isDark
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'bg-cyan-100 text-cyan-600'
                : isDark
                ? 'text-slate-400 hover:bg-slate-800'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Billing History Tab */}
      {activeTab === 'billing' && (
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Billing History
          </h3>
          <div className="space-y-2">
            {billingHistory.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border flex items-center justify-between ${
                  isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.description}
                    </p>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {item.date}
                    </span>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {item.invoice}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.amount}
                  </p>
                  <ThemedButton variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </ThemedButton>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Email Notifications Tab */}
      {activeTab === 'notifications' && (
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Email Notification Preferences
          </h3>
          <div className="space-y-3">
            {emailNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border flex items-center justify-between ${
                  isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: CHART_COLORS.primary }} />
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {notification.label}
                  </span>
                </div>
                <label className="relative inline-block w-11 h-6">
                  <input type="checkbox" defaultChecked={notification.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-700 peer-checked:bg-cyan-500 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer" />
                </label>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Payment Method Tab */}
      {activeTab === 'payment' && (
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Payment Method
          </h3>
          <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(34, 211, 238, 0.1)' }}>
                <CreditCard className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Visa ending in 4242
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Expires 12/2027
                </p>
              </div>
              <ThemedButton variant="outline">
                Update
              </ThemedButton>
            </div>
          </div>
          <div className="mt-4">
            <ThemedButton variant="outline">
              Add Payment Method
            </ThemedButton>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
