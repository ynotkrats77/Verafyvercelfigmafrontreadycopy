import { jsPDF } from 'jspdf';

export interface TaxReportData {
  reportType: 'india' | 'us' | 'australia';
  taxYear: string;
  generatedDate: string;
  
  personalInfo: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    taxId: string;
    email: string;
    phone: string;
  };
  
  portfolioSummary: {
    totalPortfolioValue: number;
    totalCostBasis: number;
    totalUnrealizedGainLoss: number;
    totalRealizedGainLoss: number;
    totalDividendIncome: number;
    totalForeignTaxWithheld: number;
  };
  
  capitalGainsTransactions: Array<{
    date: string;
    ticker: string;
    description: string;
    quantity: number;
    costBasis: number;
    proceeds: number;
    gainLoss: number;
    holdingPeriod: 'short' | 'long';
    acquiredDate: string;
    soldDate: string;
    stockCountry: string;
  }>;
  
  dividendIncome: Array<{
    date: string;
    ticker: string;
    description: string;
    grossDividend: number;
    foreignTaxWithheld: number;
    netDividend: number;
    stockCountry: string;
    withholdingRate: number;
    frankingCredits?: number; // For Australia
    unfrankedAmount?: number; // For Australia
  }>;
  
  foreignAssets: Array<{
    ticker: string;
    description: string;
    country: string;
    costBasis: number;
    peakValue: number;
    closingValue: number;
    income: number;
  }>;
  
  // Verafy subscription charges
  verafyCharges?: {
    subscriptionPlan: string;
    monthlyFee: number;
    annualTotal: number;
    taxDeductible: boolean;
  };
  
  // Tax saving opportunities advised
  taxSavingOpportunities?: Array<{
    date: string;
    opportunity: string;
    potentialSaving: number;
    implemented: boolean;
    notes: string;
  }>;
}

export class TaxReportPDFGenerator {
  private doc: jsPDF;
  private data: TaxReportData;
  private pageWidth: number;
  private pageHeight: number;
  private margin: number;
  private currentY: number;
  private pageNum: number;
  private readonly brandColor = { r: 34, g: 211, b: 238 }; // Cyan #22D3EE
  private readonly darkNavy = { r: 15, g: 23, b: 42 }; // Dark navy
  
  constructor(data: TaxReportData) {
    this.doc = new jsPDF('p', 'mm', 'a4');
    this.data = data;
    this.pageWidth = 210;
    this.pageHeight = 297;
    this.margin = 20;
    this.currentY = this.margin;
    this.pageNum = 1;
  }
  
  private addBrandedHeader(sectionTitle: string, userName: string = '') {
    // White background
    this.doc.setFillColor(255, 255, 255);
    this.doc.rect(0, 0, this.pageWidth, this.pageHeight, 'F');
    
    // Logo area
    this.doc.setTextColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Verafy AI', this.margin, 15);
    
    // Colored section header bar
    this.doc.setFillColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.rect(this.margin, 22, this.pageWidth - 2 * this.margin, 18, 'F');
    
    // Section title
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(16);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(sectionTitle, this.margin + 5, 33);
    
    // User name on right
    if (userName) {
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.text(userName, this.pageWidth - this.margin - 5, 30, { align: 'right' });
      this.doc.text('PORTFOLIO TAX PACK', this.pageWidth - this.margin - 5, 37, { align: 'right' });
    }
    
    this.currentY = 50;
    this.doc.setTextColor(0, 0, 0);
  }
  
  private addFooter() {
    const footerY = this.pageHeight - 15;
    
    // Separator line
    this.doc.setDrawColor(200, 200, 200);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin, footerY - 5, this.pageWidth - this.margin, footerY - 5);
    
    // Page number
    this.doc.setFontSize(8);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`Page ${this.pageNum}`, this.margin, footerY);
    
    // Company tagline
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('PRECISION | INTELLIGENCE | GROWTH', this.pageWidth - this.margin, footerY, { align: 'right' });
    
    // Disclaimer
    this.doc.setFont('helvetica', 'italic');
    this.doc.setFontSize(7);
    this.doc.setTextColor(120, 120, 120);
    const disclaimer = 'This report is for informational purposes only. Please consult with a qualified tax professional.';
    this.doc.text(disclaimer, this.pageWidth / 2, footerY + 5, { align: 'center' });
  }
  
  private checkPageBreak(requiredSpace: number) {
    if (this.currentY + requiredSpace > this.pageHeight - 25) {
      this.addFooter();
      this.doc.addPage();
      this.pageNum++;
      this.currentY = this.margin;
    }
  }
  
  private addIntroSection(reportTitle: string) {
    this.doc.setFontSize(11);
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Dear Investor,', this.margin, this.currentY);
    this.currentY += 8;
    
    this.doc.setFont('helvetica', 'normal');
    this.doc.setFontSize(10);
    
    const introText = this.doc.splitTextToSize(
      `We've compiled your ${this.data.taxYear} ${reportTitle} for the investment account listed below. If anything's missing or has changed, please contact us at support@verafy.ai Monday to Friday 9:00am – 5:00pm.`,
      this.pageWidth - 2 * this.margin
    );
    this.doc.text(introText, this.margin, this.currentY);
    this.currentY += introText.length * 5 + 8;
    
    // User info box
    this.doc.setFillColor(240, 240, 240);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, 25, 'F');
    
    this.doc.setFontSize(9);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Account Holder:', this.margin + 5, this.currentY + 7);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(this.data.personalInfo.fullName.toUpperCase(), this.margin + 45, this.currentY + 7);
    
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Tax ID:', this.margin + 5, this.currentY + 14);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(this.data.personalInfo.taxId, this.margin + 45, this.currentY + 14);
    
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Address:', this.margin + 5, this.currentY + 21);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`${this.data.personalInfo.address}, ${this.data.personalInfo.city} ${this.data.personalInfo.postalCode}`, this.margin + 45, this.currentY + 21);
    
    this.currentY += 35;
  }
  
  private addColoredSubheading(text: string, color: { r: number, g: number, b: number } = this.brandColor) {
    this.checkPageBreak(15);
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(color.r, color.g, color.b);
    this.doc.text(text, this.margin, this.currentY);
    this.currentY += 8;
    this.doc.setTextColor(0, 0, 0);
  }
  
  private addParagraph(text: string, fontSize: number = 10, indent: boolean = false) {
    this.checkPageBreak(10);
    this.doc.setFontSize(fontSize);
    this.doc.setFont('helvetica', 'normal');
    const lines = this.doc.splitTextToSize(text, this.pageWidth - 2 * this.margin - (indent ? 10 : 0));
    this.doc.text(lines, this.margin + (indent ? 10 : 0), this.currentY);
    this.currentY += lines.length * (fontSize * 0.5) + 3;
  }
  
  private addInfoBox(title: string, content: string[], type: 'info' | 'warning' | 'success' = 'info') {
    this.checkPageBreak(30);
    
    const colors = {
      info: { bg: [220, 240, 255], border: [100, 180, 255], text: [20, 60, 120] },
      warning: { bg: [255, 243, 205], border: [255, 180, 0], text: [120, 60, 0] },
      success: { bg: [220, 255, 220], border: [80, 200, 120], text: [20, 100, 40] }
    };
    
    const boxHeight = 10 + content.length * 6;
    const color = colors[type];
    
    // Background
    this.doc.setFillColor(...color.bg);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, boxHeight, 'F');
    
    // Border
    this.doc.setDrawColor(...color.border);
    this.doc.setLineWidth(0.5);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, boxHeight);
    
    // Title
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(...color.text);
    this.doc.text(title, this.margin + 5, this.currentY + 6);
    this.currentY += 10;
    
    // Content
    this.doc.setFontSize(9);
    this.doc.setFont('helvetica', 'normal');
    content.forEach(line => {
      const wrappedLines = this.doc.splitTextToSize(line, this.pageWidth - 2 * this.margin - 10);
      this.doc.text(wrappedLines, this.margin + 5, this.currentY);
      this.currentY += wrappedLines.length * 5;
    });
    
    this.currentY += 5;
    this.doc.setTextColor(0, 0, 0);
  }
  
  private addEnhancedTable(config: {
    headers: string[];
    rows: string[][];
    footers?: string[][];
    columnWidths?: number[];
    headerBg?: number[];
    footerBg?: number[];
  }) {
    this.checkPageBreak(20);
    
    const totalWidth = this.pageWidth - 2 * this.margin;
    const colWidths = config.columnWidths || config.headers.map(() => totalWidth / config.headers.length);
    const rowHeight = 7;
    const headerHeight = 9;
    
    // Header
    this.doc.setFillColor(...(config.headerBg || [75, 50, 120]));
    this.doc.rect(this.margin, this.currentY, totalWidth, headerHeight, 'F');
    
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(8);
    this.doc.setFont('helvetica', 'bold');
    
    let xPos = this.margin;
    config.headers.forEach((header, i) => {
      const text = this.doc.splitTextToSize(header, colWidths[i] - 2);
      this.doc.text(text, xPos + 2, this.currentY + 6);
      xPos += colWidths[i];
    });
    
    this.currentY += headerHeight;
    
    // Draw vertical grid lines for header
    this.doc.setDrawColor(255, 255, 255);
    this.doc.setLineWidth(0.3);
    xPos = this.margin;
    config.headers.forEach((_, i) => {
      if (i > 0) {
        this.doc.line(xPos, this.currentY - headerHeight, xPos, this.currentY);
      }
      xPos += colWidths[i];
    });
    
    this.doc.setTextColor(0, 0, 0);
    
    // Rows
    this.doc.setFont('helvetica', 'normal');
    this.doc.setFontSize(8);
    
    config.rows.forEach((row, rowIndex) => {
      this.checkPageBreak(rowHeight);
      
      // Alternating row background
      if (rowIndex % 2 === 0) {
        this.doc.setFillColor(250, 250, 250);
        this.doc.rect(this.margin, this.currentY, totalWidth, rowHeight, 'F');
      }
      
      // Row border
      this.doc.setDrawColor(230, 230, 230);
      this.doc.setLineWidth(0.2);
      this.doc.line(this.margin, this.currentY + rowHeight, this.pageWidth - this.margin, this.currentY + rowHeight);
      
      xPos = this.margin;
      row.forEach((cell, i) => {
        const cellText = this.doc.splitTextToSize(cell, colWidths[i] - 4);
        
        // Right-align numbers
        if (i > 0 && /^[\$₹A\d\.,\-\(\)%]+$/.test(cell.trim())) {
          this.doc.text(cellText, xPos + colWidths[i] - 2, this.currentY + 5, { align: 'right' });
        } else {
          this.doc.text(cellText, xPos + 2, this.currentY + 5);
        }
        xPos += colWidths[i];
      });
      
      this.currentY += rowHeight;
    });
    
    // Footer totals
    if (config.footers) {
      config.footers.forEach(footerRow => {
        this.doc.setFillColor(...(config.footerBg || [220, 220, 220]));
        this.doc.rect(this.margin, this.currentY, totalWidth, headerHeight, 'F');
        
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(9);
        
        xPos = this.margin;
        footerRow.forEach((cell, i) => {
          if (i > 0 && /^[\$₹A\d\.,\-\(\)%]+$/.test(cell.trim())) {
            this.doc.text(cell, xPos + colWidths[i] - 2, this.currentY + 6, { align: 'right' });
          } else {
            this.doc.text(cell, xPos + 2, this.currentY + 6);
          }
          xPos += colWidths[i];
        });
        
        this.currentY += headerHeight;
      });
    }
    
    this.currentY += 5;
  }
  
  private formatCurrency(amount: number, currency: string = 'USD'): string {
    const symbol = currency === 'USD' ? '$' : currency === 'INR' ? '₹' : currency === 'AUD' ? 'A$' : '$';
    return `${symbol}${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  
  private calculateDaysHeld(acquired: string, sold: string): number {
    const acquiredDate = new Date(acquired);
    const soldDate = new Date(sold);
    const diffTime = Math.abs(soldDate.getTime() - acquiredDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  private addExecutiveSummaryIndia() {
    // Calculate tax obligations
    const stcg = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'short');
    const ltcg = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'long');
    const stcgTotal = stcg.reduce((sum, t) => sum + t.gainLoss, 0);
    const ltcgTotal = ltcg.reduce((sum, t) => sum + t.gainLoss, 0);
    
    const stcgTax = stcgTotal > 0 ? stcgTotal * 0.15 : 0;
    const ltcgTaxable = Math.max(0, ltcgTotal - 100000); // ₹1L exemption (approx USD equiv)
    const ltcgTax = ltcgTaxable > 0 ? ltcgTaxable * 0.10 : 0;
    const totalCapitalGainsTax = stcgTax + ltcgTax;
    
    // Dividend tax (at assumed 30% slab)
    const dividendTax = this.data.portfolioSummary.totalDividendIncome * 0.30;
    
    // Foreign tax credit
    const foreignTaxCredit = this.data.portfolioSummary.totalForeignTaxWithheld;
    
    // Net tax obligation
    const totalTaxOwed = totalCapitalGainsTax + dividendTax;
    const netTaxOwed = Math.max(0, totalTaxOwed - foreignTaxCredit);
    
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Executive Summary - Tax Obligations', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`For the period ${this.data.taxYear}`, this.margin, this.currentY);
    this.currentY += 12;
    
    // Big summary box
    const summaryHeight = 80;
    this.doc.setFillColor(245, 250, 255);
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(1);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, summaryHeight, 'FD');
    
    // Title
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.text('YOUR TAX POSITION AT A GLANCE', this.pageWidth / 2, this.currentY + 10, { align: 'center' });
    
    // Tax breakdown
    let yPos = this.currentY + 22;
    this.doc.setFontSize(10);
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFont('helvetica', 'normal');
    
    // STCG Tax
    this.doc.text('Short-Term Capital Gains Tax (15%):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(stcgTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    // LTCG Tax
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Long-Term Capital Gains Tax (10% above ₹1L):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(ltcgTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    // Dividend Tax
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Dividend Income Tax (at your slab rate ~30%):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(dividendTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 10;
    
    // Separator
    this.doc.setDrawColor(200, 200, 200);
    this.doc.line(this.margin + 10, yPos, this.pageWidth - this.margin - 10, yPos);
    yPos += 8;
    
    // Subtotal
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Total Tax Before Credits:', this.margin + 10, yPos);
    this.doc.text(this.formatCurrency(totalTaxOwed, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    // Foreign tax credit
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(0, 150, 0);
    this.doc.text('Less: Foreign Tax Credit (Form 67):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(`-${this.formatCurrency(foreignTaxCredit, 'USD')}`, this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 10;
    
    // Final amount
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin + 10, yPos, this.pageWidth - this.margin - 10, yPos);
    yPos += 8;
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    const taxColor = netTaxOwed > 0 ? [200, 50, 50] : [0, 150, 0];
    this.doc.setTextColor(...taxColor);
    this.doc.text('NET TAX PAYABLE:', this.margin + 10, yPos);
    this.doc.text(this.formatCurrency(netTaxOwed, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    
    this.currentY += summaryHeight + 10;
    this.doc.setTextColor(0, 0, 0);
    
    // Verafy subscription deduction
    if (this.data.verafyCharges) {
      this.addInfoBox(
        'Don\'t Forget: Claim Your Verafy AI Subscription',
        [
          `> Subscription Plan: ${this.data.verafyCharges.subscriptionPlan}`,
          `> Annual Subscription Cost: ${this.formatCurrency(this.data.verafyCharges.annualTotal, 'USD')}`,
          `> Tax Deductible: ${this.data.verafyCharges.taxDeductible ? 'YES - Deduct as investment advisory expense' : 'No'}`,
          'Claim this deduction under "Expenses incurred in relation to income from other sources" in your ITR.'
        ],
        'success'
      );
    }
    
    // Tax saving opportunities
    if (this.data.taxSavingOpportunities && this.data.taxSavingOpportunities.length > 0) {
      this.addColoredSubheading('Tax Optimization Opportunities Advised This Year');
      const headers = ['Date', 'Opportunity', 'Potential Saving', 'Status'];
      const rows = this.data.taxSavingOpportunities.map(opp => [
        opp.date,
        opp.opportunity,
        this.formatCurrency(opp.potentialSaving, 'USD'),
        opp.implemented ? 'DONE' : 'Pending'
      ]);
      
      this.addEnhancedTable({ 
        headers, 
        rows, 
        columnWidths: [30, 80, 40, 30], // Date, Opportunity, Saving, Status
        headerBg: [34, 211, 238] 
      });
    }
    
    this.addFooter();
  }
  
  private addExecutiveSummaryUS() {
    const shortTerm = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'short');
    const longTerm = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'long');
    const shortTotal = shortTerm.reduce((sum, t) => sum + t.gainLoss, 0);
    const longTotal = longTerm.reduce((sum, t) => sum + t.gainLoss, 0);
    
    // Estimated taxes (simplified)
    const shortTax = shortTotal > 0 ? shortTotal * 0.24 : 0; // 24% ordinary rate
    const longTax = longTotal > 0 ? longTotal * 0.15 : 0; // 15% LTCG rate
    const dividendTax = this.data.portfolioSummary.totalDividendIncome * 0.15; // Qualified dividend rate
    
    const totalTaxOwed = shortTax + longTax + dividendTax;
    
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Executive Summary - Tax Obligations', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`For the period ${this.data.taxYear}`, this.margin, this.currentY);
    this.currentY += 12;
    
    const summaryHeight = 70;
    this.doc.setFillColor(245, 250, 255);
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(1);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, summaryHeight, 'FD');
    
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.text('YOUR TAX POSITION AT A GLANCE', this.pageWidth / 2, this.currentY + 10, { align: 'center' });
    
    let yPos = this.currentY + 22;
    this.doc.setFontSize(10);
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFont('helvetica', 'normal');
    
    this.doc.text('Short-Term Capital Gains Tax (24%):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(shortTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Long-Term Capital Gains Tax (15%):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(longTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Qualified Dividend Tax (15%):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(dividendTax, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 10;
    
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin + 10, yPos, this.pageWidth - this.margin - 10, yPos);
    yPos += 8;
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    const taxColor = totalTaxOwed > 0 ? [200, 50, 50] : [0, 150, 0];
    this.doc.setTextColor(...taxColor);
    this.doc.text('ESTIMATED TAX PAYABLE:', this.margin + 10, yPos);
    this.doc.text(this.formatCurrency(totalTaxOwed, 'USD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    
    this.currentY += summaryHeight + 10;
    this.doc.setTextColor(0, 0, 0);
    
    if (this.data.verafyCharges) {
      this.addInfoBox(
        'Don\'t Forget: Claim Your Verafy AI Subscription',
        [
          `> Subscription Plan: ${this.data.verafyCharges.subscriptionPlan}`,
          `> Annual Subscription Cost: ${this.formatCurrency(this.data.verafyCharges.annualTotal, 'USD')}`,
          `> Tax Deductible: ${this.data.verafyCharges.taxDeductible ? 'YES - Deduct as investment advisory expense' : 'No'}`,
          'Claim as miscellaneous itemized deduction or investment expense.'
        ],
        'success'
      );
    }
    
    if (this.data.taxSavingOpportunities && this.data.taxSavingOpportunities.length > 0) {
      this.addColoredSubheading('Tax Optimization Opportunities Advised This Year');
      const headers = ['Date', 'Opportunity', 'Potential Saving', 'Status'];
      const rows = this.data.taxSavingOpportunities.map(opp => [
        opp.date,
        opp.opportunity,
        this.formatCurrency(opp.potentialSaving, 'USD'),
        opp.implemented ? 'DONE' : 'Pending'
      ]);
      
      this.addEnhancedTable({ headers, rows, headerBg: [34, 211, 238] });
    }
    
    this.addFooter();
  }
  
  private addExecutiveSummaryAustralia() {
    const shortTermAU = this.data.capitalGainsTransactions.filter(t => 
      this.calculateDaysHeld(t.acquiredDate, t.soldDate) <= 365
    );
    const longTermAU = this.data.capitalGainsTransactions.filter(t => 
      this.calculateDaysHeld(t.acquiredDate, t.soldDate) > 365
    );
    
    const shortTotal = shortTermAU.reduce((sum, t) => sum + t.gainLoss, 0);
    const longGross = longTermAU.reduce((sum, t) => sum + t.gainLoss, 0);
    const longDiscount = longGross > 0 ? longGross * 0.5 : 0;
    const longNet = longGross - longDiscount;
    
    const totalTaxableGains = shortTotal + longNet;
    const estimatedTax = totalTaxableGains > 0 ? totalTaxableGains * 0.325 : 0; // 32.5% marginal rate
    const foreignTaxOffset = this.data.portfolioSummary.totalForeignTaxWithheld;
    const netTax = Math.max(0, estimatedTax - foreignTaxOffset);
    
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Executive Summary - Tax Obligations', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`For the period ${this.data.taxYear}`, this.margin, this.currentY);
    this.currentY += 12;
    
    const summaryHeight = 75;
    this.doc.setFillColor(245, 250, 255);
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(1);
    this.doc.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, summaryHeight, 'FD');
    
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.text('YOUR TAX POSITION AT A GLANCE', this.pageWidth / 2, this.currentY + 10, { align: 'center' });
    
    let yPos = this.currentY + 22;
    this.doc.setFontSize(10);
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFont('helvetica', 'normal');
    
    this.doc.text('Capital Gains (after 50% discount):', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(totalTaxableGains, 'AUD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 8;
    
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Estimated Tax at 32.5% marginal rate:', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(this.formatCurrency(estimatedTax, 'AUD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 10;
    
    this.doc.setDrawColor(200, 200, 200);
    this.doc.line(this.margin + 10, yPos, this.pageWidth - this.margin - 10, yPos);
    yPos += 8;
    
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(0, 150, 0);
    this.doc.text('Less: Foreign Income Tax Offset:', this.margin + 10, yPos);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(`-${this.formatCurrency(foreignTaxOffset, 'AUD')}`, this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    yPos += 10;
    
    this.doc.setDrawColor(this.brandColor.r, this.brandColor.g, this.brandColor.b);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin + 10, yPos, this.pageWidth - this.margin - 10, yPos);
    yPos += 8;
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    const taxColor = netTax > 0 ? [200, 50, 50] : [0, 150, 0];
    this.doc.setTextColor(...taxColor);
    this.doc.text('ESTIMATED NET TAX PAYABLE:', this.margin + 10, yPos);
    this.doc.text(this.formatCurrency(netTax, 'AUD'), this.pageWidth - this.margin - 10, yPos, { align: 'right' });
    
    this.currentY += summaryHeight + 10;
    this.doc.setTextColor(0, 0, 0);
    
    if (this.data.verafyCharges) {
      this.addInfoBox(
        'Don\'t Forget: Claim Your Verafy AI Subscription',
        [
          `> Subscription Plan: ${this.data.verafyCharges.subscriptionPlan}`,
          `> Annual Subscription Cost: ${this.formatCurrency(this.data.verafyCharges.annualTotal, 'AUD')}`,
          `> Tax Deductible: ${this.data.verafyCharges.taxDeductible ? 'YES - Deduct as investment management expense' : 'No'}`,
          'Claim at D15 "Other deductions" in your tax return.'
        ],
        'success'
      );
    }
    
    if (this.data.taxSavingOpportunities && this.data.taxSavingOpportunities.length > 0) {
      this.addColoredSubheading('Tax Optimization Opportunities Advised This Year');
      const headers = ['Date', 'Opportunity', 'Potential Saving', 'Status'];
      const rows = this.data.taxSavingOpportunities.map(opp => [
        opp.date,
        opp.opportunity,
        this.formatCurrency(opp.potentialSaving, 'AUD'),
        opp.implemented ? 'DONE' : 'Pending'
      ]);
      
      this.addEnhancedTable({ headers, rows, headerBg: [34, 211, 238] });
    }
    
    this.addFooter();
  }
  
  generateIndiaReport(): jsPDF {
    // Page 1: Introduction
    this.addBrandedHeader('Introduction', this.data.personalInfo.fullName.toUpperCase());
    this.addIntroSection('Portfolio Tax Information Pack');
    
    this.addColoredSubheading('Helping you complete your tax return quickly and easily');
    this.addParagraph(
      'To simplify the process of preparing your tax return, we have designed this Portfolio Tax Information Pack to give you information you may need to complete the relevant sections of your tax return. As your individual tax situation is unique and tax legislation or its interpretation may change, we recommend that you seek guidance from your financial adviser or tax professional when completing your tax return.'
    );
    
    this.currentY += 5;
    this.addColoredSubheading('All your investment tax information in one place');
    this.addParagraph('Your Portfolio Tax Information Pack contains all the relevant payment and balance information for the security holdings within your investment portfolio. The pack includes:');
    
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('1.', this.margin + 5, this.currentY);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Capital Gains Summary (STCG & LTCG)', this.margin + 12, this.currentY);
    this.currentY += 5;
    this.addParagraph('Details of all securities sold during the financial year, categorized by holding period for accurate tax treatment under Sections 111A and 112A.', 9, true);
    
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('2.', this.margin + 5, this.currentY);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Dividend Income Summary', this.margin + 12, this.currentY);
    this.currentY += 5;
    this.addParagraph('A complete list of all dividends received on your portfolio during the financial year, including foreign tax withheld details for Foreign Tax Credit claims.', 9, true);
    
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('3.', this.margin + 5, this.currentY);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Schedule FA - Foreign Asset Reporting', this.margin + 12, this.currentY);
    this.currentY += 5;
    this.addParagraph('Complete foreign asset details required for Schedule FA compliance under Section 139(1) of the Income Tax Act.', 9, true);
    
    this.currentY += 8;
    this.addColoredSubheading('Important notes');
    this.addInfoBox(
      'Tax Professional Advice Required',
      [
        'This Portfolio Tax Information Pack has been prepared for general information only. Accordingly, this Pack should not be relied upon as taxation advice.',
        'Each securityholder\'s particular circumstances are different and we recommend that you contact your Chartered Accountant, taxation or other professional adviser for specific advice.',
        'All foreign income and assets must be reported in INR. Use RBI reference exchange rates applicable on transaction dates or year-end dates as appropriate.'
      ],
      'warning'
    );
    
    this.currentY += 5;
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Yours sincerely,', this.margin, this.currentY);
    this.currentY += 8;
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Verafy AI Portfolio Intelligence', this.margin, this.currentY);
    
    this.addFooter();
    
    // Page 2: Executive Summary
    this.addExecutiveSummaryIndia();
    
    // Page 3: Capital Gains Summary
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Capital Gains Summary', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`For the period ${this.data.taxYear}`, this.margin, this.currentY);
    this.currentY += 10;
    
    const stcg = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'short');
    const ltcg = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'long');
    const stcgTotal = stcg.reduce((sum, t) => sum + t.gainLoss, 0);
    const ltcgTotal = ltcg.reduce((sum, t) => sum + t.gainLoss, 0);
    
    // STCG Section
    this.addColoredSubheading('Short-Term Capital Gains - Section 111A');
    this.addParagraph('Holding period less than 24 months. Taxed at 15% under Section 111A.', 9);
    this.currentY += 3;
    
    if (stcg.length > 0) {
      const headers = ['Date Sold', 'Security', 'Qty', 'Acquired', 'Cost Basis (USD)', 'Proceeds (USD)', 'Gain/Loss (USD)', 'Days'];
      const rows = stcg.map(t => [
        t.soldDate,
        `${t.ticker}`,
        t.quantity.toString(),
        t.acquiredDate,
        this.formatCurrency(t.costBasis, 'USD'),
        this.formatCurrency(t.proceeds, 'USD'),
        this.formatCurrency(t.gainLoss, 'USD'),
        this.calculateDaysHeld(t.acquiredDate, t.soldDate).toString()
      ]);
      const footers = [['', '', '', '', '', 'STCG TOTAL:', this.formatCurrency(stcgTotal, 'USD'), '']];
      
      this.addEnhancedTable({
        headers,
        rows,
        footers,
        headerBg: [75, 50, 120],
        footerBg: [220, 220, 220]
      });
    } else {
      this.addParagraph('No short-term capital gains transactions during this period.', 9, true);
      this.currentY += 5;
    }
    
    // LTCG Section
    this.addColoredSubheading('Long-Term Capital Gains - Section 112A');
    this.addParagraph('Holding period more than 24 months. Taxed at 10% on gains exceeding ₹1,00,000 under Section 112A.', 9);
    this.currentY += 3;
    
    if (ltcg.length > 0) {
      const headers = ['Date Sold', 'Security', 'Qty', 'Acquired', 'Cost Basis (USD)', 'Proceeds (USD)', 'Gain/Loss (USD)', 'Days'];
      const rows = ltcg.map(t => [
        t.soldDate,
        `${t.ticker}`,
        t.quantity.toString(),
        t.acquiredDate,
        this.formatCurrency(t.costBasis, 'USD'),
        this.formatCurrency(t.proceeds, 'USD'),
        this.formatCurrency(t.gainLoss, 'USD'),
        this.calculateDaysHeld(t.acquiredDate, t.soldDate).toString()
      ]);
      const footers = [['', '', '', '', '', 'LTCG TOTAL:', this.formatCurrency(ltcgTotal, 'USD'), '']];
      
      this.addEnhancedTable({
        headers,
        rows,
        footers,
        headerBg: [75, 50, 120],
        footerBg: [220, 220, 220]
      });
    } else {
      this.addParagraph('No long-term capital gains transactions during this period.', 9, true);
      this.currentY += 5;
    }
    
    this.addInfoBox(
      'Currency Conversion Note',
      [
        '✓ Convert all USD amounts to INR using RBI reference rates on the transaction date.',
        '✓ For capital gains: Use the exchange rate on the date of sale.',
        '✓ Maintain records of exchange rates used for audit purposes.'
      ],
      'info'
    );
    
    this.addFooter();
    
    // Page 4: Dividend Summary
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Dividend Income Summary', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`For the period ${this.data.taxYear}`, this.margin, this.currentY);
    this.currentY += 10;
    
    this.addParagraph('Dividends from foreign securities are taxed at your applicable income tax slab rate. Report under "Income from Other Sources" in your ITR. You may claim Foreign Tax Credit under Section 90/91 for taxes withheld by foreign governments.');
    this.currentY += 5;
    
    if (this.data.dividendIncome.length > 0) {
      const headers = ['Payment Date', 'Company', 'Country', 'Gross Dividend', 'Foreign Tax', 'Withholding Rate', 'Net Amount'];
      const rows = this.data.dividendIncome.map(d => [
        d.date,
        `${d.ticker}`,
        d.stockCountry,
        this.formatCurrency(d.grossDividend, 'USD'),
        this.formatCurrency(d.foreignTaxWithheld, 'USD'),
        `${d.withholdingRate}%`,
        this.formatCurrency(d.netDividend, 'USD')
      ]);
      const footers = [
        ['', '', 'TOTALS:', this.formatCurrency(this.data.portfolioSummary.totalDividendIncome, 'USD'), this.formatCurrency(this.data.portfolioSummary.totalForeignTaxWithheld, 'USD'), '', this.formatCurrency(this.data.portfolioSummary.totalDividendIncome - this.data.portfolioSummary.totalForeignTaxWithheld, 'USD')]
      ];
      
      this.addEnhancedTable({
        headers,
        rows,
        footers,
        headerBg: [75, 50, 120],
        footerBg: [220, 220, 220]
      });
    }
    
    this.addInfoBox(
      'Foreign Tax Credit (FTC) - Form 67',
      [
        '✓ You can claim credit for foreign taxes paid against your Indian tax liability.',
        '✓ File Form 67 before filing your ITR to claim FTC.',
        `✓ Total foreign tax paid: ${this.formatCurrency(this.data.portfolioSummary.totalForeignTaxWithheld, 'USD')} (convert to INR)`,
        '✓ Attach proof: Form 1042-S (US), broker statements, and dividend payment advices.'
      ],
      'success'
    );
    
    this.addFooter();
    
    // Page 5: Schedule FA
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Schedule FA - Foreign Assets', this.data.personalInfo.fullName.toUpperCase());
    
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text(`As of March 31, ${this.data.taxYear.split('-')[0]}`, this.margin, this.currentY);
    this.currentY += 10;
    
    this.addParagraph('Under Section 139(1) of the Income Tax Act, all resident taxpayers holding foreign assets must report them in Schedule FA of their Income Tax Return.');
    this.currentY += 5;
    
    if (this.data.foreignAssets.length > 0) {
      const headers = ['Security', 'Country', 'Cost Basis', 'Peak Value', 'Closing Value', 'Income'];
      const rows = this.data.foreignAssets.map(a => [
        `${a.ticker} - ${a.description}`,
        a.country,
        this.formatCurrency(a.costBasis, 'USD'),
        this.formatCurrency(a.peakValue, 'USD'),
        this.formatCurrency(a.closingValue, 'USD'),
        this.formatCurrency(a.income, 'USD')
      ]);
      const totals = this.data.foreignAssets.reduce((acc, a) => ({
        cost: acc.cost + a.costBasis,
        peak: acc.peak + a.peakValue,
        closing: acc.closing + a.closingValue,
        income: acc.income + a.income
      }), { cost: 0, peak: 0, closing: 0, income: 0 });
      
      const footers = [
        ['', 'TOTALS:', this.formatCurrency(totals.cost, 'USD'), this.formatCurrency(totals.peak, 'USD'), this.formatCurrency(totals.closing, 'USD'), this.formatCurrency(totals.income, 'USD')]
      ];
      
      this.addEnhancedTable({
        headers,
        rows,
        footers,
        headerBg: [75, 50, 120],
        footerBg: [220, 220, 220]
      });
    }
    
    this.addInfoBox(
      'Schedule FA Reporting Requirements',
      [
        '✓ Report all foreign equity shares and securities.',
        '✓ Peak Value: Highest balance during the year.',
        '✓ Closing Balance: Value as of March 31.',
        '✓ Convert all values to INR using RBI rates as of March 31.',
        '✓ Non-compliance may result in penalties up to ₹10 lakhs.'
      ],
      'warning'
    );
    
    this.addFooter();
    
    return this.doc;
  }
  
  generateUSReport(): jsPDF {
    // Similar enhanced structure for US
    this.addBrandedHeader('Introduction', this.data.personalInfo.fullName.toUpperCase());
    this.addIntroSection('Portfolio Tax Information Pack');
    
    this.addColoredSubheading('Your comprehensive tax reporting package');
    this.addParagraph(
      'This tax pack contains all the information you need to complete your federal tax return, including Form 8949, Schedule D, and Schedule B. We recommend consulting with a CPA or tax professional before filing.'
    );
    
    this.addInfoBox(
      'What\'s Included',
      [
        '1. Form 8949 Support - Detailed transaction history for capital gains and losses',
        '2. Schedule D Summary - Categorized short-term and long-term gains',
        '3. Schedule B - Dividend income reporting',
        '4. FBAR Information - If foreign accounts exceed $10,000'
      ],
      'info'
    );
    
    this.addFooter();
    
    // Executive Summary page
    this.addExecutiveSummaryUS();
    
    // Capital Gains page
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Capital Gains - Form 8949 & Schedule D', this.data.personalInfo.fullName.toUpperCase());
    
    const shortTerm = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'short');
    const longTerm = this.data.capitalGainsTransactions.filter(t => t.holdingPeriod === 'long');
    
    this.addColoredSubheading('Part I - Short-Term Transactions (Held 1 year or less)');
    this.addParagraph('Taxed at ordinary income tax rates. Report on Form 8949 Part I and Schedule D Line 1b.', 9);
    this.currentY += 3;
    
    if (shortTerm.length > 0) {
      const headers = ['Description', 'Date Acquired', 'Date Sold', 'Proceeds', 'Cost Basis', 'Gain/Loss'];
      const rows = shortTerm.map(t => [
        `${t.quantity} shares ${t.ticker}`,
        t.acquiredDate,
        t.soldDate,
        this.formatCurrency(t.proceeds, 'USD'),
        this.formatCurrency(t.costBasis, 'USD'),
        this.formatCurrency(t.gainLoss, 'USD')
      ]);
      const total = shortTerm.reduce((sum, t) => sum + t.gainLoss, 0);
      const footers = [['', '', 'Short-Term Total:', '', '', this.formatCurrency(total, 'USD')]];
      
      this.addEnhancedTable({ headers, rows, footers, headerBg: [75, 50, 120] });
    }
    
    this.addColoredSubheading('Part II - Long-Term Transactions (Held more than 1 year)');
    this.addParagraph('Taxed at preferential rates (0%, 15%, or 20%). Report on Form 8949 Part II and Schedule D Line 8b.', 9);
    this.currentY += 3;
    
    if (longTerm.length > 0) {
      const headers = ['Description', 'Date Acquired', 'Date Sold', 'Proceeds', 'Cost Basis', 'Gain/Loss'];
      const rows = longTerm.map(t => [
        `${t.quantity} shares ${t.ticker}`,
        t.acquiredDate,
        t.soldDate,
        this.formatCurrency(t.proceeds, 'USD'),
        this.formatCurrency(t.costBasis, 'USD'),
        this.formatCurrency(t.gainLoss, 'USD')
      ]);
      const total = longTerm.reduce((sum, t) => sum + t.gainLoss, 0);
      const footers = [['', '', 'Long-Term Total:', '', '', this.formatCurrency(total, 'USD')]];
      
      this.addEnhancedTable({ headers, rows, footers, headerBg: [75, 50, 120] });
    }
    
    this.addFooter();
    
    // Dividends page
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Dividend Income - Schedule B', this.data.personalInfo.fullName.toUpperCase());
    
    this.addParagraph('Report dividend income on Form 1040 Line 3b and Schedule B if total exceeds $1,500.');
    this.currentY += 5;
    
    if (this.data.dividendIncome.length > 0) {
      const headers = ['Date', 'Payer Name', 'Amount'];
      const rows = this.data.dividendIncome.map(d => [
        d.date,
        `${d.ticker} - ${d.description}`,
        this.formatCurrency(d.grossDividend, 'USD')
      ]);
      const footers = [['', 'Total Dividend Income:', this.formatCurrency(this.data.portfolioSummary.totalDividendIncome, 'USD')]];
      
      this.addEnhancedTable({ headers, rows, footers, headerBg: [75, 50, 120] });
    }
    
    this.addFooter();
    
    return this.doc;
  }
  
  generateAustraliaReport(): jsPDF {
    // Enhanced Australia report with franking credits
    this.addBrandedHeader('Introduction', this.data.personalInfo.fullName.toUpperCase());
    this.addIntroSection('Portfolio Tax Information Pack');
    
    this.addColoredSubheading('Australian Tax Reporting Made Easy');
    this.addParagraph(
      'This comprehensive tax pack includes everything you need for your Australian tax return, including franking credits, CGT calculations with 50% discount, and foreign income reporting.'
    );
    
    this.addInfoBox(
      'What\'s Included',
      [
        '1. Capital Gains Tax (CGT) Summary - With 50% discount for assets held >12 months',
        '2. Dividend Income - Including franking credits where applicable',
        '3. Foreign Income - For dividends from international stocks',
        '4. Foreign Income Tax Offset - Credits for foreign tax paid'
      ],
      'info'
    );
    
    this.addFooter();
    
    // Executive Summary page
    this.addExecutiveSummaryAustralia();
    
    // CGT Summary
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Capital Gains Tax Summary', this.data.personalInfo.fullName.toUpperCase());
    
    const shortTermAU = this.data.capitalGainsTransactions.filter(t => 
      this.calculateDaysHeld(t.acquiredDate, t.soldDate) <= 365
    );
    const longTermAU = this.data.capitalGainsTransactions.filter(t => 
      this.calculateDaysHeld(t.acquiredDate, t.soldDate) > 365
    );
    
    this.addParagraph('Assets held for more than 12 months qualify for the 50% CGT discount. Report at Item 18 of your tax return.');
    this.currentY += 5;
    
    if (this.data.capitalGainsTransactions.length > 0) {
      const headers = ['Security', 'Acquired', 'Sold', 'Days Held', 'Cost', 'Proceeds', 'Gain', '50% Discount', 'Net Gain'];
      const rows = this.data.capitalGainsTransactions.map(t => {
        const days = this.calculateDaysHeld(t.acquiredDate, t.soldDate);
        const discount = days > 365 ? t.gainLoss * 0.5 : 0;
        const net = t.gainLoss - discount;
        return [
          t.ticker,
          t.acquiredDate,
          t.soldDate,
          days.toString(),
          this.formatCurrency(t.costBasis, 'AUD'),
          this.formatCurrency(t.proceeds, 'AUD'),
          this.formatCurrency(t.gainLoss, 'AUD'),
          discount > 0 ? this.formatCurrency(discount, 'AUD') : '-',
          this.formatCurrency(net, 'AUD')
        ];
      });
      
      this.addEnhancedTable({ headers, rows, headerBg: [75, 50, 120] });
    }
    
    this.addFooter();
    
    // Dividend Summary with Franking
    this.doc.addPage();
    this.pageNum++;
    this.currentY = this.margin;
    this.addBrandedHeader('Dividend Income Summary', this.data.personalInfo.fullName.toUpperCase());
    
    this.addParagraph('Report dividend income at Item 11 of your tax return. Franking credits (if any) can reduce your tax liability.');
    this.currentY += 5;
    
    if (this.data.dividendIncome.length > 0) {
      const headers = ['Date', 'Company', 'Unfranked', 'Franked', 'Franking Credit', 'Foreign Tax', 'Gross', 'Net'];
      const rows = this.data.dividendIncome.map(d => {
        // For foreign stocks, all dividends are unfranked
        const unfranked = d.grossDividend;
        const franked = 0;
        const frankingCredit = 0;
        
        return [
          d.date,
          d.ticker,
          this.formatCurrency(unfranked, 'AUD'),
          this.formatCurrency(franked, 'AUD'),
          this.formatCurrency(frankingCredit, 'AUD'),
          this.formatCurrency(d.foreignTaxWithheld, 'AUD'),
          this.formatCurrency(d.grossDividend, 'AUD'),
          this.formatCurrency(d.netDividend, 'AUD')
        ];
      });
      
      const footers = [
        ['', 'TOTAL:', this.formatCurrency(this.data.portfolioSummary.totalDividendIncome, 'AUD'), 'A$0.00', 'A$0.00', this.formatCurrency(this.data.portfolioSummary.totalForeignTaxWithheld, 'AUD'), this.formatCurrency(this.data.portfolioSummary.totalDividendIncome, 'AUD'), '']
      ];
      
      this.addEnhancedTable({ headers, rows, footers, headerBg: [75, 50, 120] });
    }
    
    this.addInfoBox(
      'Foreign Income Tax Offset',
      [
        `✓ You paid ${this.formatCurrency(this.data.portfolioSummary.totalForeignTaxWithheld, 'AUD')} in foreign tax`,
        '✓ Claim this at Item 20 "Foreign income tax offset" in your tax return',
        '✓ This offset reduces your Australian tax liability dollar-for-dollar',
        '✓ Note: Foreign dividends do not have franking credits'
      ],
      'success'
    );
    
    this.addFooter();
    
    return this.doc;
  }
  
  save(filename: string) {
    this.doc.save(filename);
  }
}