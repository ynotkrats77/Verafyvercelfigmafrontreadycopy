import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FileText,
  Download,
  Send,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Share2,
  RefreshCw,
  FileSpreadsheet,
  Mail,
  Printer,
  Archive,
  Globe,
  Flag,
} from 'lucide-react';
// import { TaxReportPDFGenerator, TaxReportData } from '../../utils/pdfGenerator';

interface TaxReportsPageProps {
  isDark: boolean;
}

export function TaxReportsPage({ isDark }: TaxReportsPageProps) {
  const [selectedCountry, setSelectedCountry] = useState<'us' | 'india' | 'australia'>('us');
  const [isGenerating, setIsGenerating] = useState(false);

  // Sample data for PDF generation
  const getSampleTaxData = (country: 'us' | 'india' | 'australia'): TaxReportData => {
    return {
      reportType: country,
      taxYear: country === 'india' ? 'FY 2026-27 (AY 2027-28)' : '2026',
      generatedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      
      personalInfo: {
        fullName: 'John Doe',
        address: '123 Investment Street',
        city: country === 'india' ? 'Mumbai' : country === 'australia' ? 'Sydney' : 'New York',
        state: country === 'india' ? 'Maharashtra' : country === 'australia' ? 'NSW' : 'NY',
        country: country === 'india' ? 'India' : country === 'australia' ? 'Australia' : 'United States',
        postalCode: country === 'india' ? '400001' : country === 'australia' ? '2000' : '10001',
        taxId: country === 'india' ? 'ABCDE1234F' : country === 'australia' ? '123 456 789' : '123-45-6789',
        email: 'john.doe@example.com',
        phone: '+1-555-0123',
      },
      
      portfolioSummary: {
        totalPortfolioValue: 36488.75,
        totalCostBasis: 118495.00,
        totalUnrealizedGainLoss: -82006.25,
        totalRealizedGainLoss: -576.22,
        totalDividendIncome: 248.50,
        totalForeignTaxWithheld: 37.28,
      },
      
      capitalGainsTransactions: [
        {
          date: '2026-03-15',
          ticker: 'DOC',
          description: 'Physicians Realty Trust',
          quantity: 100,
          costBasis: 1800.00,
          proceeds: 1506.28,
          gainLoss: -293.72,
          holdingPeriod: 'short',
          acquiredDate: '2025-11-20',
          soldDate: '2026-03-15',
          stockCountry: 'United States',
        },
        {
          date: '2026-05-22',
          ticker: 'SXL',
          description: 'Sunlands Technology Group',
          quantity: 50,
          costBasis: 3850.00,
          proceeds: 1767.50,
          gainLoss: -2082.50,
          holdingPeriod: 'short',
          acquiredDate: '2026-01-10',
          soldDate: '2026-05-22',
          stockCountry: 'United States',
        },
        {
          date: '2026-08-10',
          ticker: 'VOO',
          description: 'Vanguard S&P 500 ETF',
          quantity: 5,
          costBasis: 2175.00,
          proceeds: 2505.00,
          gainLoss: 330.00,
          holdingPeriod: 'long',
          acquiredDate: '2023-05-15',
          soldDate: '2026-08-10',
          stockCountry: 'United States',
        },
        {
          date: '2026-10-05',
          ticker: 'AAPL',
          description: 'Apple Inc.',
          quantity: 10,
          costBasis: 1740.00,
          proceeds: 1894.50,
          gainLoss: 154.50,
          holdingPeriod: 'long',
          acquiredDate: '2024-03-20',
          soldDate: '2026-10-05',
          stockCountry: 'United States',
        },
        {
          date: '2026-11-12',
          ticker: 'PLTR',
          description: 'Palantir Technologies Inc.',
          quantity: 15,
          costBasis: 1072.50,
          proceeds: 967.50,
          gainLoss: -105.00,
          holdingPeriod: 'short',
          acquiredDate: '2026-08-01',
          soldDate: '2026-11-12',
          stockCountry: 'United States',
        },
      ],
      
      dividendIncome: [
        {
          date: '2026-03-15',
          ticker: 'VOO',
          description: 'Vanguard S&P 500 ETF',
          grossDividend: 92.60,
          foreignTaxWithheld: 13.89,
          netDividend: 78.71,
          stockCountry: 'United States',
          withholdingRate: 15,
        },
        {
          date: '2026-06-15',
          ticker: 'VOO',
          description: 'Vanguard S&P 500 ETF',
          grossDividend: 92.60,
          foreignTaxWithheld: 13.89,
          netDividend: 78.71,
          stockCountry: 'United States',
          withholdingRate: 15,
        },
        {
          date: '2026-04-10',
          ticker: 'VTI',
          description: 'Vanguard Total Stock Market ETF',
          grossDividend: 63.30,
          foreignTaxWithheld: 9.50,
          netDividend: 53.80,
          stockCountry: 'United States',
          withholdingRate: 15,
        },
      ],
      
      foreignAssets: [
        {
          ticker: 'DOC',
          description: 'Physicians Realty Trust',
          country: 'United States',
          costBasis: 90000.00,
          peakValue: 92000.00,
          closingValue: 15062.80,
          income: 0,
        },
        {
          ticker: 'SXL',
          description: 'Sunlands Technology Group',
          country: 'United States',
          costBasis: 14070.00,
          peakValue: 15200.00,
          closingValue: 6433.56,
          income: 0,
        },
        {
          ticker: 'VOO',
          description: 'Vanguard S&P 500 ETF',
          country: 'United States',
          costBasis: 6525.00,
          peakValue: 7800.00,
          closingValue: 7515.00,
          income: 185.20,
        },
        {
          ticker: 'VTI',
          description: 'Vanguard Total Stock Market ETF',
          country: 'United States',
          costBasis: 1840.00,
          peakValue: 2150.00,
          closingValue: 2096.00,
          income: 63.30,
        },
        {
          ticker: 'AAPL',
          description: 'Apple Inc.',
          country: 'United States',
          costBasis: 4350.00,
          peakValue: 5200.00,
          closingValue: 4736.25,
          income: 0,
        },
        {
          ticker: 'PLTR',
          description: 'Palantir Technologies Inc.',
          country: 'United States',
          costBasis: 715.00,
          peakValue: 850.00,
          closingValue: 645.14,
          income: 0,
        },
      ],
      
      // Verafy subscription charges
      verafyCharges: {
        subscriptionPlan: 'Founding Member - Growth Plan',
        monthlyFee: 10,
        annualTotal: 120,
        taxDeductible: true,
      },
      
      // Tax saving opportunities advised this year
      taxSavingOpportunities: [
        {
          date: '2026-03-20',
          opportunity: 'Tax-Loss Harvesting: Realized losses on DOC and SXL to offset gains',
          potentialSaving: 576.22,
          implemented: true,
          notes: 'Losses used to offset short-term gains, saving approx $138 in taxes'
        },
        {
          date: '2026-07-15',
          opportunity: 'Hold AAPL position >12 months for long-term capital gains rate',
          potentialSaving: 37.08,
          implemented: true,
          notes: 'Saved 9% on tax rate by qualifying for LTCG treatment'
        },
        {
          date: '2026-11-05',
          opportunity: 'Defer PLTR sale to 2027 to carry forward loss to next tax year',
          potentialSaving: 25.20,
          implemented: false,
          notes: 'Pending - Could further optimize loss utilization across tax years'
        },
      ],
    };
  };

  const handleDownloadDetailedReport = async (country: 'us' | 'india' | 'australia') => {
    setIsGenerating(true);
    
    try {
      const data = getSampleTaxData(country);
      const generator = new TaxReportPDFGenerator(data);
      
      let pdf;
      let filename;
      
      switch (country) {
        case 'india':
          pdf = generator.generateIndiaReport();
          filename = `India_Tax_Report_FY2026-27_${new Date().getTime()}.pdf`;
          break;
        case 'australia':
          pdf = generator.generateAustraliaReport();
          filename = `Australia_Tax_Report_2025-26_${new Date().getTime()}.pdf`;
          break;
        case 'us':
        default:
          pdf = generator.generateUSReport();
          filename = `US_Tax_Report_2026_${new Date().getTime()}.pdf`;
          break;
      }
      
      generator.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF report. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const countries = [
    {
      id: 'us' as const,
      name: 'United States',
      flag: '🇺🇸',
      taxYear: '2026',
      currency: 'USD',
    },
    {
      id: 'india' as const,
      name: 'India',
      flag: '🇮🇳',
      taxYear: 'FY 2026-27',
      currency: 'INR',
    },
    {
      id: 'australia' as const,
      name: 'Australia',
      flag: '🇦🇺',
      taxYear: '2025-26',
      currency: 'AUD',
    },
  ];

  const usReports = [
    {
      id: 'us-1',
      name: 'Form 1099-B (Proceeds from Broker)',
      type: 'irs-form',
      description: 'Capital gains and losses from securities transactions',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '2.1 MB',
      pages: 8,
      formats: ['PDF', 'TurboTax (TXF)', 'H&R Block'],
      officialForm: 'IRS Form 1099-B',
      includes: [
        'All securities sales for 2026',
        'Short-term and long-term transactions',
        'Cost basis with adjustments',
        'Wash sale adjustments',
        'Gross proceeds',
      ],
      downloadable: true,
    },
    {
      id: 'us-2',
      name: 'Form 1099-DIV (Dividends & Distributions)',
      type: 'irs-form',
      description: 'Dividend income and capital gain distributions',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '856 KB',
      pages: 3,
      formats: ['PDF', 'TurboTax (TXF)', 'CSV'],
      officialForm: 'IRS Form 1099-DIV',
      includes: [
        'Total ordinary dividends: $248.50',
        'Qualified dividends: $248.50',
        'Total capital gain distributions',
        'Non-dividend distributions',
        'Foreign tax paid',
      ],
      downloadable: true,
    },
    {
      id: 'us-3',
      name: 'Form 1099-INT (Interest Income)',
      type: 'irs-form',
      description: 'Interest income from investments',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '324 KB',
      pages: 2,
      formats: ['PDF', 'TurboTax (TXF)'],
      officialForm: 'IRS Form 1099-INT',
      includes: [
        'Interest income: $12.35',
        'Early withdrawal penalty',
        'Foreign tax paid',
        'Tax-exempt interest',
      ],
      downloadable: true,
    },
    {
      id: 'us-4',
      name: 'Form 8949 (Capital Asset Sales)',
      type: 'irs-form',
      description: 'Detailed transaction report for Schedule D',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '1.8 MB',
      pages: 12,
      formats: ['PDF', 'Excel', 'TurboTax (TXF)'],
      officialForm: 'IRS Form 8949',
      includes: [
        'Part I: Short-term transactions',
        'Part II: Long-term transactions',
        'Description of property',
        'Date acquired and sold',
        'Sales price and cost basis',
      ],
      downloadable: true,
    },
    {
      id: 'us-5',
      name: 'Schedule D (Capital Gains & Losses)',
      type: 'irs-form',
      description: 'Summary of capital gains and losses',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '645 KB',
      pages: 3,
      formats: ['PDF', 'TurboTax (TXF)'],
      officialForm: 'IRS Schedule D',
      includes: [
        'Short-term gains/losses: -$576.22',
        'Long-term gains/losses: $0',
        'Net capital gain/loss',
        'Tax-loss carryover: $79,643.64',
        'Capital loss deduction: $3,000',
      ],
      downloadable: true,
    },
    {
      id: 'us-6',
      name: 'Tax-Loss Harvesting Report',
      type: 'summary',
      description: 'Comprehensive tax-loss harvesting analysis and opportunities',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '1.4 MB',
      pages: 9,
      formats: ['PDF', 'Excel'],
      includes: [
        'Available losses: $82,643.64',
        'Multi-year strategy projection',
        'Wash sale risk analysis',
        'Estimated tax savings: $24,793',
        'Implementation timeline',
      ],
      downloadable: true,
    },
  ];

  const indiaReports = [
    {
      id: 'in-1',
      name: 'Capital Gains Statement',
      type: 'itr-schedule',
      description: 'Schedule CG for ITR filing - Capital gains from equity and securities',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '1.2 MB',
      pages: 6,
      formats: ['PDF', 'Excel', 'JSON (ITR Utility)'],
      officialForm: 'Schedule CG (ITR-2)',
      includes: [
        'Short-term capital gains (STCG)',
        'Long-term capital gains (LTCG)',
        'Exempt LTCG under ₹1 lakh',
        'Securities Transaction Tax (STT) paid',
        'Set-off and carry forward of losses',
      ],
      downloadable: true,
      exchangeRate: 83.25,
    },
    {
      id: 'in-2',
      name: 'Form 26AS (Tax Credit Statement)',
      type: 'tax-credit',
      description: 'Annual tax statement showing TDS deducted',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '856 KB',
      pages: 4,
      formats: ['PDF'],
      officialForm: 'Form 26AS',
      includes: [
        'TDS on dividends (if applicable)',
        'TDS on interest income',
        'Advance tax payments',
        'Self-assessment tax',
        'Tax collected at source',
      ],
      downloadable: true,
      exchangeRate: 83.25,
    },
    {
      id: 'in-3',
      name: 'Foreign Income & Assets Schedule',
      type: 'itr-schedule',
      description: 'Schedule FA for reporting foreign assets and income',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '724 KB',
      pages: 5,
      formats: ['PDF', 'JSON (ITR Utility)'],
      officialForm: 'Schedule FA (ITR-2)',
      includes: [
        'Foreign equity shares: $29,600 (₹24,64,200)',
        'Country of investment: United States',
        'Income from foreign sources',
        'Foreign tax credit claimed',
        'Peak balance during the year',
      ],
      downloadable: true,
      exchangeRate: 83.25,
    },
    {
      id: 'in-4',
      name: 'Dividend Income Statement',
      type: 'income-schedule',
      description: 'Schedule OS - Income from other sources (Dividends)',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '445 KB',
      pages: 3,
      formats: ['PDF', 'Excel'],
      officialForm: 'Schedule OS (ITR-2)',
      includes: [
        'Total dividend income: $248.50 (₹20,688)',
        'Dividend from foreign companies',
        'TDS deducted (if any)',
        'Gross vs Net dividend',
      ],
      downloadable: true,
      exchangeRate: 83.25,
    },
    {
      id: 'in-5',
      name: 'Interest Income Statement',
      type: 'income-schedule',
      description: 'Interest income from foreign accounts',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '324 KB',
      pages: 2,
      formats: ['PDF'],
      includes: [
        'Interest income: $12.35 (₹1,028)',
        'Source of interest',
        'TDS details',
      ],
      downloadable: true,
      exchangeRate: 83.25,
    },
  ];

  const australiaReports = [
    {
      id: 'au-1',
      name: 'Capital Gains Tax (CGT) Schedule',
      type: 'ato-schedule',
      description: 'CGT summary for tax return - Capital gains and losses',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '1.5 MB',
      pages: 7,
      formats: ['PDF', 'myTax Pre-fill', 'CSV'],
      officialForm: 'CGT Schedule 2026',
      includes: [
        'Total current year capital gains',
        'Total current year capital losses: $576.22 (A$862.15)',
        'Net capital gain/loss',
        'CGT discount applied (50% for >12 months)',
        'Unapplied capital losses carried forward',
      ],
      downloadable: true,
      exchangeRate: 1.496,
    },
    {
      id: 'au-2',
      name: 'Dividend Income Statement',
      type: 'income-statement',
      description: 'Dividend income with franking credits',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '645 KB',
      pages: 4,
      formats: ['PDF', 'CSV'],
      includes: [
        'Unfranked dividends: $248.50 (A$371.84)',
        'Franked dividends: $0',
        'Franking credits: $0',
        'Foreign dividend income',
        'Foreign income tax offset',
      ],
      downloadable: true,
      exchangeRate: 1.496,
    },
    {
      id: 'au-3',
      name: 'Interest Income Statement',
      type: 'income-statement',
      description: 'Interest income from investments',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '324 KB',
      pages: 2,
      formats: ['PDF'],
      includes: [
        'Gross interest: $12.35 (A$18.48)',
        'TFN withholding tax',
        'Foreign interest income',
      ],
      downloadable: true,
      exchangeRate: 1.496,
    },
    {
      id: 'au-4',
      name: 'Foreign Income & Tax Offset Statement',
      type: 'ato-schedule',
      description: 'Foreign income and tax paid - Foreign income tax offset',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '892 KB',
      pages: 5,
      formats: ['PDF', 'Excel'],
      includes: [
        'Foreign investment income',
        'Foreign tax paid',
        'Assessable foreign income',
        'Foreign income tax offset claimed',
        'Country: United States',
      ],
      downloadable: true,
      exchangeRate: 1.496,
    },
    {
      id: 'au-5',
      name: 'Investment Income Summary',
      type: 'summary',
      description: 'Comprehensive investment income summary for tax return',
      status: 'ready',
      lastUpdated: '2026-06-26',
      fileSize: '1.1 MB',
      pages: 6,
      formats: ['PDF', 'Excel'],
      includes: [
        'Total dividend income',
        'Total interest income',
        'Capital gains/losses',
        'Deductions claimed',
        'Net investment income',
      ],
      downloadable: true,
      exchangeRate: 1.496,
    },
  ];

  const getReportsForCountry = () => {
    switch (selectedCountry) {
      case 'us':
        return usReports;
      case 'india':
        return indiaReports;
      case 'australia':
        return australiaReports;
      default:
        return usReports;
    }
  };

  const taxSoftwareExports = {
    us: [
      { name: 'TurboTax', logo: '🔵', format: 'TXF', supported: true },
      { name: 'H&R Block', logo: '🟢', format: 'TXF', supported: true },
      { name: 'TaxAct', logo: '🟠', format: 'TXF', supported: true },
      { name: 'FreeTaxUSA', logo: '🟣', format: 'CSV', supported: true },
    ],
    india: [
      { name: 'ITR Utility', logo: '🟡', format: 'JSON', supported: true },
      { name: 'ClearTax', logo: '🔵', format: 'Excel/JSON', supported: true },
      { name: 'QuickBooks India', logo: '🟢', format: 'Excel', supported: true },
    ],
    australia: [
      { name: 'myTax (ATO)', logo: '🟢', format: 'Pre-fill', supported: true },
      { name: 'H&R Block Australia', logo: '🔵', format: 'PDF Import', supported: true },
      { name: 'Etax', logo: '🟠', format: 'CSV', supported: true },
    ],
  };

  const stats = [
    {
      label: 'Countries Covered',
      value: '3',
      subtext: 'US, India, Australia',
      icon: Globe,
      color: '#22d3ee',
    },
    {
      label: 'Available Reports',
      value: getReportsForCountry().length.toString(),
      subtext: `For ${countries.find(c => c.id === selectedCountry)?.name}`,
      icon: FileText,
      color: '#10b981',
    },
    {
      label: 'Ready to Export',
      value: getReportsForCountry().filter(r => r.status === 'ready').length.toString(),
      subtext: 'Multiple formats',
      icon: Download,
      color: '#f59e0b',
    },
    {
      label: 'Software Integrations',
      value: taxSoftwareExports[selectedCountry].length.toString(),
      subtext: 'Direct imports',
      icon: FileSpreadsheet,
      color: '#a855f7',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return { bg: '#10b98120', text: '#10b981', icon: CheckCircle };
      case 'draft':
        return { bg: '#f59e0b20', text: '#f59e0b', icon: Clock };
      case 'archived':
        return { bg: '#64748b20', text: '#64748b', icon: Archive };
      default:
        return { bg: '#64748b20', text: '#64748b', icon: AlertCircle };
    }
  };

  const handleDownload = (reportId: string, format: string) => {
    // Generate mock file content based on format
    const report = getReportsForCountry().find(r => r.id === reportId);
    if (!report) return;

    let content = '';
    let filename = '';
    let mimeType = '';

    if (format === 'PDF') {
      // Generate PDF content
      content = generatePDFContent(report, selectedCountry);
      filename = `${report.name.replace(/\s+/g, '_')}_${selectedCountry.toUpperCase()}.pdf`;
      mimeType = 'application/pdf';
      
      // For demo, show alert
      alert(`Downloading: ${filename}\n\nThis would generate a PDF with:\n${report.includes.join('\n')}`);
    } else if (format === 'Excel' || format === 'CSV') {
      content = generateCSVContent(report, selectedCountry);
      filename = `${report.name.replace(/\s+/g, '_')}_${selectedCountry.toUpperCase()}.${format.toLowerCase()}`;
      mimeType = format === 'CSV' ? 'text/csv' : 'application/vnd.ms-excel';
      
      // Create downloadable CSV
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else if (format.includes('TurboTax') || format.includes('TXF')) {
      content = generateTXFContent(report, selectedCountry);
      filename = `${report.name.replace(/\s+/g, '_')}.txf`;
      mimeType = 'text/plain';
      
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else if (format === 'JSON (ITR Utility)' || format === 'JSON') {
      content = generateITRJSONContent(report, selectedCountry);
      filename = `${report.name.replace(/\s+/g, '_')}_ITR.json`;
      mimeType = 'application/json';
      
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      alert(`Format: ${format}\nFile: ${report.name}\nCountry: ${selectedCountry.toUpperCase()}\n\nDownload initiated...`);
    }
  };

  const generatePDFContent = (report: any, country: string) => {
    return `PDF Content for: ${report.name} (${country.toUpperCase()})`;
  };

  const generateCSVContent = (report: any, country: string) => {
    let csv = '';
    
    if (report.id.includes('1099-B') || report.id.includes('8949')) {
      csv = `"Description","Date Acquired","Date Sold","Proceeds","Cost Basis","Gain/Loss","Term"\n`;
      csv += `"TSLA - 5 shares","2025-08-10","2026-01-15","$1,185.50","$1,420.00","-$234.50","Short-term"\n`;
      csv += `"NVDA - 3 shares","2025-09-15","2026-02-20","$1,425.00","$1,536.80","-$111.80","Short-term"\n`;
      csv += `"MSFT - 4 shares","2023-05-20","2026-03-10","$1,456.00","$1,686.00","-$230.00","Long-term"\n`;
      csv += `\n"Summary",,,,,,\n`;
      csv += `"Short-term Loss",,,,,,"-$346.30"\n`;
      csv += `"Long-term Loss",,,,,,"-$230.00"\n`;
      csv += `"Total Loss",,,,,,"-$576.30"\n`;
    } else if (report.id.includes('DIV')) {
      csv = `"Payer","Ordinary Dividends","Qualified Dividends","Capital Gain Distributions"\n`;
      csv += `"VOO","$185.20","$185.20","$0.00"\n`;
      csv += `"VTI","$63.30","$63.30","$0.00"\n`;
      csv += `"Total","$248.50","$248.50","$0.00"\n`;
    } else if (report.id === 'in-1') {
      csv = `"Asset","Purchase Date","Sale Date","Sale Price (INR)","Cost (INR)","Gain/Loss (INR)","Type"\n`;
      csv += `"TSLA - 5 shares","2025-08-10","2026-01-15","₹98,688","₹118,215","-₹19,527","Short-term"\n`;
      csv += `"NVDA - 3 shares","2025-09-15","2026-02-20","₹118,629","₹127,938","-₹9,309","Short-term"\n`;
      csv += `"MSFT - 4 shares","2023-05-20","2026-03-10","₹121,212","₹140,385","-₹19,173","Long-term"\n`;
    } else if (report.id === 'au-1') {
      csv = `"Asset","Purchase Date","Sale Date","Sale Price (AUD)","Cost (AUD)","Gain/Loss (AUD)","Discount Eligible"\n`;
      csv += `"TSLA - 5 shares","2025-08-10","2026-01-15","A$1,773.59","A$2,124.32","-A$350.73","No"\n`;
      csv += `"NVDA - 3 shares","2025-09-15","2026-02-20","A$2,132.40","A$2,299.09","-A$166.69","No"\n`;
      csv += `"MSFT - 4 shares","2023-05-20","2026-03-10","A$2,178.18","A$2,522.66","-A$344.48","Yes (50%)"\n`;
    } else {
      csv = `"${report.name}"\n`;
      csv += `"Country","${country.toUpperCase()}"\n`;
      csv += `"Generated","${new Date().toLocaleDateString()}"\n\n`;
      csv += `"Details"\n`;
      report.includes.forEach((item: string) => {
        csv += `"${item}"\n`;
      });
    }
    
    return csv;
  };

  const generateTXFContent = (report: any, country: string) => {
    // TXF format for TurboTax
    let txf = `V042\nAVerafy AI\nD ${new Date().toLocaleDateString()}\n^\n`;
    
    if (report.id.includes('1099-B') || report.id.includes('8949')) {
      // Short-term transactions
      txf += `TD\nN321\nC1\nL1\nP TSLA - 5 shares\nD 01/15/2026\nD 08/10/2025\n$ 1185.50\n$ 1420.00\n^\n`;
      txf += `TD\nN321\nC1\nL1\nP NVDA - 3 shares\nD 02/20/2026\nD 09/15/2025\n$ 1425.00\n$ 1536.80\n^\n`;
      
      // Long-term transaction
      txf += `TD\nN323\nC1\nL1\nP MSFT - 4 shares\nD 03/10/2026\nD 05/20/2023\n$ 1456.00\n$ 1686.00\n^\n`;
    } else if (report.id.includes('DIV')) {
      txf += `TD\nN322\nC1\nL1\nP Total Dividends\n$ 248.50\n^\n`;
      txf += `TD\nN330\nC1\nL1\nP Qualified Dividends\n$ 248.50\n^\n`;
    } else if (report.id.includes('INT')) {
      txf += `TD\nN319\nC1\nL1\nP Interest Income\n$ 12.35\n^\n`;
    }
    
    return txf;
  };

  const generateITRJSONContent = (report: any, country: string) => {
    const itrData = {
      ITRForm: "ITR2",
      TaxYear: "2026-27",
      PersonalInfo: {
        PAN: "XXXXX9999X",
        Name: "Verafy AI User",
        ResidentialStatus: "Resident"
      },
      ScheduleCG: {
        ShortTermCapitalGains: {
          TotalLoss: -48009,
          LossCarriedForward: 48009,
          Transactions: [
            {
              Asset: "TSLA - 5 shares",
              PurchaseDate: "2025-08-10",
              SaleDate: "2026-01-15",
              SalePrice: 98688,
              Cost: 118215,
              Loss: -19527
            },
            {
              Asset: "NVDA - 3 shares", 
              PurchaseDate: "2025-09-15",
              SaleDate: "2026-02-20",
              SalePrice: 118629,
              Cost: 127938,
              Loss: -9309
            }
          ]
        },
        LongTermCapitalGains: {
          TotalLoss: -19173,
          ExemptUnder112A: 0,
          Transactions: [
            {
              Asset: "MSFT - 4 shares",
              PurchaseDate: "2023-05-20",
              SaleDate: "2026-03-10",
              SalePrice: 121212,
              Cost: 140385,
              Loss: -19173
            }
          ]
        }
      },
      ScheduleFA: {
        ForeignAssets: [
          {
            CountryCode: "US",
            AssetType: "Equity Shares",
            PeakBalance: 2464200,
            ClosingBalance: 2464200,
            Income: 21716
          }
        ]
      },
      ScheduleOS: {
        DividendIncome: 20688,
        InterestIncome: 1028,
        TotalOtherSourceIncome: 21716
      }
    };

    return JSON.stringify(itrData, null, 2);
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
              }}
            >
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tax Reports & Documents
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Generate country-specific tax reports and export to tax software
              </p>
            </div>
          </div>
          <button
            className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              color: '#ffffff',
            }}
          >
            <RefreshCw className="w-5 h-5" />
            Refresh All Reports
          </button>
        </div>
      </div>

      {/* Country Selector */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Globe className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Select Tax Jurisdiction
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedCountry === country.id
                  ? isDark
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-cyan-500 bg-cyan-50'
                  : isDark
                  ? 'border-slate-700 hover:border-slate-600'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{country.flag}</span>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {country.name}
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Tax Year: {country.taxYear}
                  </p>
                </div>
              </div>
              {selectedCountry === country.id && (
                <div className="flex items-center gap-2 text-xs text-cyan-500">
                  <CheckCircle className="w-4 h-4" />
                  Selected
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: `${stat.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
              </div>
              <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </p>
              <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Available Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {countries.find(c => c.id === selectedCountry)?.name} Tax Reports
        </h2>
        <div className="space-y-4">
          {getReportsForCountry().map((report, index) => {
            const statusConfig = getStatusColor(report.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      background: statusConfig.bg,
                    }}
                  >
                    <FileText className="w-6 h-6" style={{ color: statusConfig.text }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {report.name}
                        </h3>
                        <div
                          className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
                          style={{
                            background: statusConfig.bg,
                            color: statusConfig.text,
                          }}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                        </div>
                        {'officialForm' in report && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {report.officialForm}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {report.pages} pages • {report.fileSize}
                        </span>
                      </div>
                    </div>

                    <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {report.description}
                    </p>

                    {('exchangeRate' in report) && (
                      <div className={`text-xs mb-3 px-2 py-1 rounded inline-block ${
                        isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        Exchange Rate: 1 USD = {report.exchangeRate} {countries.find(c => c.id === selectedCountry)?.currency}
                      </div>
                    )}

                    <div className="mb-4">
                      <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Includes:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {report.includes.map((item, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded ${
                              isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                        <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          Updated: {new Date(report.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {report.formats.map((format, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDownload(report.id, format)}
                            className="px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all hover:scale-[1.05]"
                            style={{
                              background: '#22d3ee20',
                              color: '#22d3ee',
                            }}
                          >
                            <Download className="w-4 h-4" />
                            {format}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Tax Software Export */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Export to Tax Software ({countries.find(c => c.id === selectedCountry)?.name})
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Seamlessly import your investment data into popular tax preparation software
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {taxSoftwareExports[selectedCountry].map((software, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{software.logo}</div>
                  <div>
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {software.name}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Format: {software.format}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload('bulk', software.format)}
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all"
                  style={{
                    background: '#10b98120',
                    color: '#10b981',
                  }}
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Detailed Report Generation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Generate Detailed Tax Report ({countries.find(c => c.id === selectedCountry)?.name})
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Create a comprehensive tax report that includes all necessary schedules and can be provided to your accountant or submitted for audit purposes.
        </p>
        <button
          onClick={() => handleDownloadDetailedReport(selectedCountry)}
          className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
            color: '#ffffff',
          }}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              Generate Report
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}