import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Search,
  TrendingUp,
  PieChart,
  Calculator,
  BarChart3,
  HelpCircle
} from 'lucide-react';

interface GlossaryPageProps {
  isDark: boolean;
}

interface Term {
  term: string;
  definition: string;
  category: 'portfolio' | 'performance' | 'tax' | 'market' | 'risk' | 'trading' | 'compliance';
}

export function GlossaryPage({ isDark }: GlossaryPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const [expandAll, setExpandAll] = useState(false);

  const terms: Term[] = [
    // Portfolio (16 terms)
    { term: 'Portfolio', definition: 'A collection of financial investments like stocks, bonds, ETFs, and other assets owned by an individual or institution.', category: 'portfolio' },
    { term: 'Total Value', definition: 'The current market value of all investments in your portfolio combined.', category: 'portfolio' },
    { term: 'Holdings', definition: 'The individual investments (stocks, ETFs, bonds, etc.) that you own in your portfolio.', category: 'portfolio' },
    { term: 'Position', definition: 'The amount of a particular security you own. A "long position" means you own it; a "short position" means you\'ve sold it without owning it.', category: 'portfolio' },
    { term: 'Allocation', definition: 'How your investments are distributed across different asset classes, sectors, or geographic regions. Example: 60% stocks, 30% bonds, 10% cash.', category: 'portfolio' },
    { term: 'Diversification', definition: 'Spreading investments across different assets, sectors, or regions to reduce risk. "Don\'t put all your eggs in one basket."', category: 'portfolio' },
    { term: 'Asset Allocation', definition: 'The strategy of dividing investments among different asset categories (stocks, bonds, cash, real estate) based on risk tolerance and goals.', category: 'portfolio' },
    { term: 'Rebalancing', definition: 'Adjusting your portfolio back to its target allocation by buying or selling assets. Typically done quarterly or annually.', category: 'portfolio' },
    { term: 'Cost Basis', definition: 'The original price you paid for an investment, including fees and commissions. Used to calculate capital gains or losses.', category: 'portfolio' },
    { term: 'Average Cost', definition: 'If you bought the same investment multiple times at different prices, this is the average price per share you paid.', category: 'portfolio' },
    { term: 'Market Cap', definition: 'Market Capitalization - the total value of a company\'s outstanding shares. Calculated as share price × total shares outstanding.', category: 'portfolio' },
    { term: 'Blue Chip', definition: 'Large, well-established companies with a history of reliable performance and dividends. Examples: Commonwealth Bank, BHP, CSL.', category: 'portfolio' },
    { term: 'Growth Stock', definition: 'Stocks of companies expected to grow faster than the market average, typically reinvesting profits rather than paying dividends.', category: 'portfolio' },
    { term: 'Value Stock', definition: 'Stocks trading below their intrinsic value, often with lower P/E ratios. Considered undervalued by the market.', category: 'portfolio' },
    { term: 'Sector', definition: 'A group of companies in the same industry (e.g., Technology, Healthcare, Financials, Energy, Consumer Goods).', category: 'portfolio' },
    { term: 'Concentration Risk', definition: 'The risk of having too much of your portfolio invested in a single asset, sector, or geographic region.', category: 'portfolio' },

    // Performance (8 terms)
    { term: 'Return', definition: 'The profit or loss on an investment over a period, expressed as a percentage of the original investment.', category: 'performance' },
    { term: 'Performance', definition: 'How well your investments have done over time, measured by gains/losses and compared to benchmarks.', category: 'performance' },
    { term: 'Benchmark', definition: 'A standard (like the ASX 200 or S&P 500) used to measure how well your portfolio is performing relative to the market.', category: 'performance' },
    { term: 'Gain/Loss', definition: 'The difference between what you paid for an investment and its current value (unrealised) or selling price (realised).', category: 'performance' },
    { term: 'Unrealised Gain/Loss', definition: 'Paper gains or losses on investments you still own. Not taxable until you sell.', category: 'performance' },
    { term: 'Realised Gain/Loss', definition: 'Actual gains or losses from investments you\'ve sold. Triggers tax obligations (capital gains tax).', category: 'performance' },
    { term: 'Total Return', definition: 'The complete gain or loss including price changes AND dividends/distributions received.', category: 'performance' },
    { term: 'Compound Interest', definition: 'Earning interest on your interest. The snowball effect that makes long-term investing powerful.', category: 'performance' },

    // Tax (12 terms)
    { term: 'CGT (Capital Gains Tax)', definition: 'Tax on the profit from selling investments. In Australia, get 50% discount if held over 12 months. Rates vary by country and holding period.', category: 'tax' },
    { term: 'Short-term', definition: 'Investments held for less than 12 months. No CGT discount in Australia; taxed at your full marginal rate.', category: 'tax' },
    { term: 'Long-term', definition: 'Investments held for over 12 months. Eligible for 50% CGT discount in Australia.', category: 'tax' },
    { term: 'Wash Sale', definition: 'Selling an investment at a loss and buying it back within 30 days. May be disallowed for tax purposes in some jurisdictions.', category: 'tax' },
    { term: 'Tax Loss Harvesting', definition: 'Strategically selling losing investments to offset capital gains and reduce your tax bill.', category: 'tax' },
    { term: 'Tax Lot', definition: 'A specific batch of shares purchased on a particular date at a particular price. Used to calculate gains/losses when selling.', category: 'tax' },
    { term: 'Capital Gains', definition: 'The profit from selling an investment for more than you paid. Subject to capital gains tax.', category: 'tax' },
    { term: 'Franking Credits', definition: 'Tax credits attached to dividends (mainly in Australia) representing tax already paid by the company. Can reduce your tax bill or result in a refund.', category: 'tax' },
    { term: 'FIFO', definition: 'First In, First Out - a tax accounting method where the first shares you bought are considered the first sold.', category: 'tax' },
    { term: 'LIFO', definition: 'Last In, First Out - a tax accounting method where the most recently purchased shares are considered sold first.', category: 'tax' },
    { term: 'Cost Base Adjustment', definition: 'Changes to your original cost basis from corporate actions (splits, mergers, return of capital) or additional costs.', category: 'tax' },
    { term: 'ATO', definition: 'Australian Taxation Office - the government body responsible for tax collection and administration in Australia.', category: 'tax' },

    // Market (15 terms)
    { term: 'Market Price', definition: 'The current trading price of a security on the exchange. What you\'d pay or receive if you traded right now.', category: 'market' },
    { term: 'Dividend', definition: 'A portion of company profits paid to shareholders, usually quarterly. Provides income without selling shares.', category: 'market' },
    { term: 'Dividend Yield', definition: 'Annual dividend per share divided by current share price, expressed as a percentage. Shows income return.', category: 'market' },
    { term: 'Yield', definition: 'The income return on an investment, expressed as a percentage. For stocks, typically the dividend yield.', category: 'market' },
    { term: 'Volatility', definition: 'How much and how quickly an investment\'s price fluctuates. Higher volatility = higher risk and potential reward.', category: 'market' },
    { term: 'ETF (Exchange-Traded Fund)', definition: 'A fund that trades like a stock and holds a basket of investments. Provides instant diversification at low cost.', category: 'market' },
    { term: 'Index', definition: 'A statistical measure of a market or sector (e.g., ASX 200, S&P 500). Used to track overall market performance.', category: 'market' },
    { term: 'ASX', definition: 'Australian Securities Exchange - Australia\'s primary stock exchange where shares, ETFs, and other securities are traded.', category: 'market' },
    { term: 'NYSE', definition: 'New York Stock Exchange - the world\'s largest stock exchange by market capitalization, located in New York City.', category: 'market' },
    { term: 'NASDAQ', definition: 'National Association of Securities Dealers Automated Quotations - a US exchange known for technology stocks.', category: 'market' },
    { term: 'LSE', definition: 'London Stock Exchange - one of the world\'s oldest and largest stock exchanges, based in the United Kingdom.', category: 'market' },
    { term: 'Bull Market', definition: 'A market condition where prices are rising or expected to rise. Optimistic investor sentiment.', category: 'market' },
    { term: 'Bear Market', definition: 'A market decline of 20% or more from recent highs. Pessimistic investor sentiment.', category: 'market' },
    { term: 'P/E Ratio', definition: 'Price-to-Earnings ratio - share price divided by earnings per share. Measures if a stock is expensive or cheap.', category: 'market' },
    { term: 'Ex-Dividend Date', definition: 'The date after which a stock trades without the upcoming dividend. Buy before this date to receive the dividend.', category: 'market' },

    // Risk (8 terms)
    { term: 'Risk Scoring', definition: 'A numerical assessment of your portfolio\'s risk level based on volatility, concentration, and other factors.', category: 'risk' },
    { term: 'Risk Tolerance', definition: 'How much investment volatility and potential loss you can handle emotionally and financially.', category: 'risk' },
    { term: 'Time Horizon', definition: 'How long you plan to invest before needing the money. Longer horizons can typically handle more risk.', category: 'risk' },
    { term: 'Currency Risk', definition: 'The risk that exchange rate changes will affect the value of foreign investments when converted to your home currency.', category: 'risk' },
    { term: 'Interest Rate Risk', definition: 'The risk that changing interest rates will affect investment values, especially bonds and dividend-paying stocks.', category: 'risk' },
    { term: 'Inflation Risk', definition: 'The risk that your investment returns won\'t keep up with inflation, reducing your purchasing power over time.', category: 'risk' },
    { term: 'Liquidity Risk', definition: 'The risk that you won\'t be able to quickly sell an investment at a fair price when you need the money.', category: 'risk' },
    { term: 'Systematic Risk', definition: 'Market-wide risk that affects all investments (e.g., recession, war). Cannot be diversified away.', category: 'risk' },

    // Trading (10 terms)
    { term: 'Brokerage', definition: 'The fee charged by a broker for buying or selling investments. Can be a flat fee or percentage of the trade.', category: 'trading' },
    { term: 'Spread', definition: 'The difference between the bid price (what buyers will pay) and ask price (what sellers want). Narrower is better.', category: 'trading' },
    { term: 'Liquidity', definition: 'How easily an investment can be bought or sold without affecting its price. High liquidity = easy to trade.', category: 'trading' },
    { term: 'Market Order', definition: 'An instruction to buy or sell immediately at the current market price. Executes quickly but price isn\'t guaranteed.', category: 'trading' },
    { term: 'Limit Order', definition: 'An instruction to buy or sell only at a specific price or better. May not execute if the price isn\'t reached.', category: 'trading' },
    { term: 'Stop Loss', definition: 'An order that automatically sells an investment if it drops to a certain price, limiting your losses.', category: 'trading' },
    { term: 'Dollar Cost Averaging', definition: 'Investing a fixed amount regularly regardless of price. Reduces the risk of investing everything at a market peak.', category: 'trading' },
    { term: 'Day Trading', definition: 'Buying and selling securities within the same trading day. High risk and not recommended for most investors.', category: 'trading' },
    { term: 'Long Position', definition: 'Owning a security with the expectation that its value will increase. "Going long" means buying.', category: 'trading' },
    { term: 'Margin', definition: 'Borrowing money from your broker to invest. Amplifies both gains and losses; very risky.', category: 'trading' },

    // Compliance (10 terms)
    { term: 'ASIC', definition: 'Australian Securities and Investments Commission - Australia\'s corporate, markets, and financial services regulator.', category: 'compliance' },
    { term: 'ASIC RG 244', definition: 'Regulatory Guide 244 - ASIC\'s guidance on giving information, general advice, and scaled advice.', category: 'compliance' },
    { term: 'AML/CTF', definition: 'Anti-Money Laundering and Counter-Terrorism Financing - regulations to prevent financial crimes.', category: 'compliance' },
    { term: 'KYC', definition: 'Know Your Customer - the process of verifying client identities to prevent fraud and money laundering.', category: 'compliance' },
    { term: 'TLS', definition: 'Transport Layer Security - encryption protocol that secures data transmission over the internet. Version 1.3 is the latest.', category: 'compliance' },
    { term: 'AES-256', definition: 'Advanced Encryption Standard with 256-bit keys - military-grade encryption used to protect data at rest.', category: 'compliance' },
    { term: '2FA', definition: 'Two-Factor Authentication - security requiring two forms of verification (e.g., password + SMS code) to access your account.', category: 'compliance' },
    { term: 'Privacy Act 1988', definition: 'Australian legislation governing how personal information is handled, including the Australian Privacy Principles (APPs).', category: 'compliance' },
    { term: 'CDR', definition: 'Consumer Data Right - allows consumers to safely access and share their data with trusted third parties in Australia.', category: 'compliance' },
    { term: 'API', definition: 'Application Programming Interface - allows different software systems to communicate and share data securely.', category: 'compliance' },
  ];

  const categories = [
    { id: 'all', label: 'All Terms', icon: BookOpen, count: terms.length },
    { id: 'portfolio', label: 'Portfolio', icon: PieChart, count: terms.filter(t => t.category === 'portfolio').length },
    { id: 'performance', label: 'Performance', icon: TrendingUp, count: terms.filter(t => t.category === 'performance').length },
    { id: 'tax', label: 'Tax', icon: Calculator, count: terms.filter(t => t.category === 'tax').length },
    { id: 'market', label: 'Market', icon: BarChart3, count: terms.filter(t => t.category === 'market').length },
    { id: 'risk', label: 'Risk', icon: HelpCircle, count: terms.filter(t => t.category === 'risk').length },
    { id: 'trading', label: 'Trading', icon: TrendingUp, count: terms.filter(t => t.category === 'trading').length },
    { id: 'compliance', label: 'Compliance', icon: BookOpen, count: terms.filter(t => t.category === 'compliance').length },
  ];

  const filteredTerms = terms
    .filter(term => {
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  const toggleTerm = (term: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(term)) {
      newExpanded.delete(term);
    } else {
      newExpanded.add(term);
    }
    setExpandedTerms(newExpanded);
  };

  const toggleExpandAll = () => {
    if (expandAll) {
      setExpandedTerms(new Set());
    } else {
      setExpandedTerms(new Set(filteredTerms.map(t => t.term)));
    }
    setExpandAll(!expandAll);
  };

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(var(--theme-primary-rgb), 0.1)' 
                      : 'rgba(var(--theme-primary-rgb), 0.1)',
                    borderColor: 'var(--theme-primary-alpha)',
                    color: 'var(--theme-primary)',
                  }}
                >
                  <BookOpen className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Learn Investment Terms
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Financial{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Glossary
                </span>
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Learn the meaning of common investment and financial terms used throughout the platform
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl border-2"
                style={{
                  background: isDark
                    ? 'rgba(15, 23, 42, 0.6)'
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: 'var(--theme-primary-alpha)',
                }}
              >
                <Search className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`flex-1 bg-transparent outline-none ${
                    isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-all"
                    style={{
                      background: isActive
                        ? 'var(--theme-primary)'
                        : isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: isActive ? 'var(--theme-primary)' : 'var(--theme-primary-alpha)',
                      color: isActive ? 'white' : isDark ? '#94A3B8' : '#64748B',
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.label}</span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(var(--theme-primary-rgb), 0.1)',
                      }}
                    >
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Results Count & Expand/Collapse */}
            <div className="flex items-center justify-between max-w-5xl mx-auto mb-4">
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Showing <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}>{filteredTerms.length}</span> of {terms.length} terms
              </p>
              <button
                onClick={toggleExpandAll}
                className={`text-sm font-medium flex items-center gap-1 hover:underline`}
                style={{ color: 'var(--theme-primary)' }}
              >
                {expandAll ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Collapse All
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Expand All
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Terms List */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-3">
              {filteredTerms.map((term, index) => {
                const isExpanded = expandedTerms.has(term.term);
                return (
                  <motion.div
                    key={term.term}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.02 }}
                    className="backdrop-blur-xl border-2 rounded-xl overflow-hidden cursor-pointer transition-all hover:border-opacity-100"
                    style={{
                      background: isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: isExpanded ? 'var(--theme-primary)' : 'var(--theme-primary-alpha)',
                    }}
                    onClick={() => toggleTerm(term.term)}
                  >
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {term.term}
                        </h3>
                        {isExpanded && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`mt-2 text-sm leading-relaxed ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {term.definition}
                          </motion.p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold capitalize"
                          style={{
                            background: 'rgba(var(--theme-primary-rgb), 0.1)',
                            color: 'var(--theme-primary)',
                          }}
                        >
                          {term.category}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                        ) : (
                          <ChevronDown className="w-5 h-5" style={{ color: 'var(--theme-primary-alpha)' }} />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tip Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 backdrop-blur-xl border-2 rounded-2xl p-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.8)'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(var(--theme-primary-rgb), 0.1)',
                  }}
                >
                  <HelpCircle className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Tip: Hover for quick definitions
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Throughout the dashboard, you can hover over{' '}
                    <span
                      className="border-b-2 border-dotted font-medium"
                      style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-primary)' }}
                    >
                      underlined financial terms
                    </span>{' '}
                    to see quick definitions without leaving the page.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
