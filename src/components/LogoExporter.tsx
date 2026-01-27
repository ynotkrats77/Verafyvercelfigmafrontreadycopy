import { Logo } from "./Logo";
import { useState } from "react";
import { Download, FileImage, FileCode } from "lucide-react";
import { Button } from "./ui/button";

type ColorScheme = 'cyan' | 'gradient' | 'monochrome' | 'white';
type Variant = 'full' | 'icon' | 'stacked';

interface ExportConfig {
  variant: Variant;
  colorScheme: ColorScheme;
  format: 'svg' | 'png';
  size?: number;
}

export function LogoExporter({ isDark }: { isDark: boolean }) {
  const [generating, setGenerating] = useState(false);

  // Generate SVG data URL for a logo configuration
  const generateSVG = (variant: Variant, colorScheme: ColorScheme): string => {
    // Create a temporary container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    document.body.appendChild(container);

    // We'll create inline SVGs for each combination
    // This is a simplified version - you'd expand this with all variants

    let svgContent = '';
    const baseStyles = 'font-family: Inter, sans-serif; font-weight: 700;';

    if (variant === 'icon') {
      // Icon variant - just the V
      const color = colorScheme === 'cyan' ? '#22D3EE' 
        : colorScheme === 'white' ? '#FFFFFF'
        : colorScheme === 'monochrome' ? (isDark ? '#FFFFFF' : '#0F172A')
        : 'url(#vGradient)';

      svgContent = `
<svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${colorScheme === 'gradient' ? `
  <defs>
    <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#22D3EE" />
    </linearGradient>
  </defs>` : ''}
  <path d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" fill="${color}"/>
</svg>`;
    } else if (variant === 'full') {
      // Full variant - icon + text
      const iconColor = colorScheme === 'cyan' ? '#22D3EE' 
        : colorScheme === 'white' ? '#FFFFFF'
        : colorScheme === 'monochrome' ? (isDark ? '#FFFFFF' : '#0F172A')
        : 'url(#vGradient)';

      const textColor = colorScheme === 'white' ? '#FFFFFF'
        : colorScheme === 'monochrome' ? (isDark ? '#FFFFFF' : '#0F172A')
        : colorScheme === 'gradient' ? 'url(#textGradient)'
        : (isDark ? '#FFFFFF' : '#0F172A');

      svgContent = `
<svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${colorScheme === 'gradient' ? `
  <defs>
    <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#22D3EE" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#22D3EE" />
    </linearGradient>
  </defs>` : ''}
  <g transform="translate(0, 0)">
    <path d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" fill="${iconColor}"/>
  </g>
  <g transform="translate(120, 0)">
    <text x="0" y="70" fill="${textColor}" style="${baseStyles} font-size: 48px; letter-spacing: 0.02em;">
      <tspan style="transform: scaleX(0.81); transform-origin: left;">verafy ai</tspan>
    </text>
  </g>
</svg>`;
    } else {
      // Stacked variant
      const iconColor = colorScheme === 'cyan' ? '#22D3EE' 
        : colorScheme === 'white' ? '#FFFFFF'
        : colorScheme === 'monochrome' ? (isDark ? '#FFFFFF' : '#0F172A')
        : 'url(#vGradient)';

      const textColor = colorScheme === 'white' ? '#FFFFFF'
        : colorScheme === 'monochrome' ? (isDark ? '#FFFFFF' : '#0F172A')
        : colorScheme === 'gradient' ? 'url(#textGradient)'
        : (isDark ? '#FFFFFF' : '#0F172A');

      svgContent = `
<svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${colorScheme === 'gradient' ? `
  <defs>
    <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#22D3EE" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#22D3EE" />
    </linearGradient>
  </defs>` : ''}
  <g transform="translate(50, 0)">
    <path d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" fill="${iconColor}"/>
  </g>
  <g transform="translate(100, 140)">
    <text x="0" y="0" fill="${textColor}" text-anchor="middle" style="${baseStyles} font-size: 36px; letter-spacing: 0.02em;">
      <tspan x="0" dy="0" style="transform: scaleX(0.81);">verafy ai</tspan>
    </text>
  </g>
</svg>`;
    }

    document.body.removeChild(container);
    return svgContent.trim();
  };

  // Download SVG file
  const downloadSVG = (variant: Variant, colorScheme: ColorScheme) => {
    const svgContent = generateSVG(variant, colorScheme);
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `verafy-logo-${variant}-${colorScheme}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Convert SVG to PNG and download
  const downloadPNG = (variant: Variant, colorScheme: ColorScheme, size: number) => {
    const svgContent = generateSVG(variant, colorScheme);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Determine canvas size based on variant
    const aspectRatio = variant === 'icon' ? 1 
      : variant === 'full' ? 4 
      : 0.833; // stacked

    canvas.width = size;
    canvas.height = size / aspectRatio;

    const img = new Image();
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // For white logo, add transparent background
      // For others on dark theme, you might want a dark background
      if (colorScheme !== 'white') {
        ctx.fillStyle = isDark ? '#0F172A' : '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = `verafy-logo-${variant}-${colorScheme}-${size}px.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
      });
    };

    img.src = url;
  };

  // Download all assets
  const downloadAllAssets = async () => {
    setGenerating(true);

    const variants: Variant[] = ['full', 'icon', 'stacked'];
    const colorSchemes: ColorScheme[] = ['cyan', 'gradient', 'monochrome', 'white'];
    const sizes = [400, 800, 1200]; // 1x, 2x, 3x

    // Generate SVGs
    for (const variant of variants) {
      for (const colorScheme of colorSchemes) {
        await new Promise(resolve => setTimeout(resolve, 100));
        downloadSVG(variant, colorScheme);
      }
    }

    // Generate PNGs at multiple sizes
    for (const variant of variants) {
      for (const colorScheme of colorSchemes) {
        for (const size of sizes) {
          await new Promise(resolve => setTimeout(resolve, 200));
          downloadPNG(variant, colorScheme, size);
        }
      }
    }

    setGenerating(false);
  };

  const logoConfigs: Array<{ variant: Variant; colorScheme: ColorScheme; label: string }> = [
    { variant: 'full', colorScheme: 'cyan', label: 'Full - Cyan' },
    { variant: 'full', colorScheme: 'gradient', label: 'Full - Gradient' },
    { variant: 'full', colorScheme: 'monochrome', label: 'Full - Monochrome' },
    { variant: 'full', colorScheme: 'white', label: 'Full - White' },
    { variant: 'icon', colorScheme: 'cyan', label: 'Icon - Cyan' },
    { variant: 'icon', colorScheme: 'gradient', label: 'Icon - Gradient' },
    { variant: 'icon', colorScheme: 'monochrome', label: 'Icon - Monochrome' },
    { variant: 'icon', colorScheme: 'white', label: 'Icon - White' },
    { variant: 'stacked', colorScheme: 'cyan', label: 'Stacked - Cyan' },
    { variant: 'stacked', colorScheme: 'gradient', label: 'Stacked - Gradient' },
    { variant: 'stacked', colorScheme: 'monochrome', label: 'Stacked - Monochrome' },
    { variant: 'stacked', colorScheme: 'white', label: 'Stacked - White' },
  ];

  return (
    <div className={`min-h-screen p-8 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Logo Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Exporter</span>
          </h1>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Download all logo variants in SVG and PNG formats
          </p>
          
          {/* Download All Button */}
          <div className="mt-8">
            <Button
              onClick={downloadAllAssets}
              disabled={generating}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg"
            >
              {generating ? (
                <>Generating Assets...</>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download All Assets (36 files)
                </>
              )}
            </Button>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              12 SVGs + 24 PNGs (1x, 2x, 3x resolutions)
            </p>
          </div>
        </div>

        {/* Individual Logo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoConfigs.map((config) => (
            <div
              key={`${config.variant}-${config.colorScheme}`}
              className={`backdrop-blur-sm border rounded-xl p-6 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800' 
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              {/* Logo Preview */}
              <div className={`h-32 flex items-center justify-center mb-4 rounded-lg ${
                config.colorScheme === 'white' 
                  ? 'bg-slate-900' 
                  : isDark 
                    ? 'bg-slate-950/50' 
                    : 'bg-slate-100'
              }`}>
                <Logo 
                  variant={config.variant}
                  colorScheme={config.colorScheme}
                  size="md"
                  isDark={isDark}
                />
              </div>

              {/* Label */}
              <h3 className={`text-center font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {config.label}
              </h3>

              {/* Download Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => downloadSVG(config.variant, config.colorScheme)}
                  variant="outline"
                  size="sm"
                  className={`flex-1 ${
                    isDark 
                      ? 'border-slate-700 hover:bg-slate-800' 
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <FileCode className="mr-1 h-4 w-4" />
                  SVG
                </Button>
                <Button
                  onClick={() => downloadPNG(config.variant, config.colorScheme, 800)}
                  variant="outline"
                  size="sm"
                  className={`flex-1 ${
                    isDark 
                      ? 'border-slate-700 hover:bg-slate-800' 
                      : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <FileImage className="mr-1 h-4 w-4" />
                  PNG
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className={`mt-12 p-8 rounded-xl border ${
          isDark 
            ? 'bg-slate-900/50 border-cyan-500/20' 
            : 'bg-white border-cyan-300/40'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Usage Guidelines
          </h2>
          <div className={`space-y-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <p><strong className={isDark ? 'text-white' : 'text-slate-900'}>SVG Format:</strong> Use for web, apps, and scalable graphics. Perfect for responsive designs.</p>
            <p><strong className={isDark ? 'text-white' : 'text-slate-900'}>PNG Format:</strong> Use for social media, email signatures, and documents. Available in 1x (400px), 2x (800px), and 3x (1200px) resolutions.</p>
            <p><strong className={isDark ? 'text-white' : 'text-slate-900'}>Color Schemes:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Cyan:</strong> Primary brand color for most use cases</li>
              <li><strong>Gradient:</strong> Premium look for hero sections and featured content</li>
              <li><strong>Monochrome:</strong> Adapts to light/dark themes automatically</li>
              <li><strong>White:</strong> For dark backgrounds and presentations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}