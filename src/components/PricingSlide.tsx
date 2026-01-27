import React, { useState, useEffect } from 'react';
import { Check, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

interface Feature {
  name: string;
  starter: boolean;
  standard: boolean;
  pro: boolean;
  highlight?: boolean;
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  annualPrice: string;
  savings: string;
  popular?: boolean;
  color: string;
  features: string[];
}

interface PricingSlideProps {
  isDark: boolean;
}

export function PricingSlide({ isDark }: PricingSlideProps) {
  const [scale, setScale] = useState(1);

  // Auto-scale to fit window while maintaining 16:9
  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;
      
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      
      const newScale = Math.min(scaleX, scaleY) * 0.95;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allFeatures: Feature[] = [
    { name: "Portfolio tracking (50 holdings)", starter: true, standard: true, pro: true },
    { name: "Action Center (5 cards/day)", starter: true, standard: true, pro: true },
    { name: "Basic Vera voice", starter: true, standard: true, pro: true },
    { name: "Performance metrics", starter: true, standard: true, pro: true },
    { name: "Risk scoring", starter: true, standard: true, pro: true },
    { name: "Tax loss detection", starter: true, standard: true, pro: true },
    { name: "Unlimited holdings & portfolios", starter: false, standard: true, pro: true },
    { name: "Full Action Center (unlimited)", starter: false, standard: true, pro: true },
    { name: "Vera's personality", starter: false, standard: true, pro: true },
    { name: "Winners/Losers analysis", starter: false, standard: true, pro: true },
    { name: "Behavioral patterns", starter: false, standard: true, pro: true },
    { name: "Sector analysis", starter: false, standard: true, pro: true },
    { name: "Email & push notifications", starter: false, standard: true, pro: true },
    { name: "Portfolio Optimization", starter: false, standard: false, pro: true, highlight: true },
    { name: "Chat with Vera (500/mo)", starter: false, standard: false, pro: true, highlight: true },
    { name: "Scenario Modeling (20/mo)", starter: false, standard: false, pro: true, highlight: true },
    { name: "Peer comparison", starter: false, standard: false, pro: true },
    { name: "Strategic planner", starter: false, standard: false, pro: true },
    { name: "5 years tax history", starter: false, standard: false, pro: true },
    { name: "ATO-ready tax reports", starter: false, standard: false, pro: true },
    { name: "Advanced tax optimization", starter: false, standard: false, pro: true },
    { name: "Priority phone support", starter: false, standard: false, pro: true }
  ];

  const plans: Plan[] = [
    {
      name: "Starter",
      tagline: "Try Vera for less than a coffee",
      price: "$5",
      originalPrice: "$10",
      annualPrice: "$50/year",
      savings: "save $10",
      color: "from-cyan-400 to-cyan-500",
      features: allFeatures.filter(f => f.starter).map(f => f.name)
    },
    {
      name: "Standard",
      tagline: "Live with Vera every day",
      price: "$10",
      originalPrice: "$20",
      annualPrice: "$100/year",
      savings: "save $20",
      color: "from-blue-400 to-cyan-400",
      features: allFeatures.filter(f => f.standard).map(f => f.name)
    },
    {
      name: "Pro",
      tagline: "Marry Vera",
      price: "$20",
      originalPrice: "$40",
      annualPrice: "$200/year",
      savings: "save $40",
      popular: true,
      color: "from-cyan-400 to-blue-500",
      features: allFeatures.filter(f => f.pro).map(f => f.name)
    }
  ];

  const getFeatureHighlight = (featureName: string) => {
    const feature = allFeatures.find(f => f.name === featureName);
    return feature?.highlight || false;
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 16:9 Container Fixed at 1920x1080 and Scaled */}
      <div 
        style={{ 
          width: 1920, 
          height: 1080, 
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
        className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl border border-slate-800"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-12 flex flex-col">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <div className="w-5 h-5 bg-cyan-400 rounded-sm transform rotate-45" />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wider">GET<span className="text-cyan-400">VERAFYD</span></h1>
            </div>
            
            <h2 className="text-4xl font-light text-white leading-tight mb-2">
              Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">Plans</span>
            </h2>
            
            <p className="text-slate-400 text-lg">
              Founding member pricing - Lock in 50% off forever
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="flex-1 grid grid-cols-3 gap-6 pt-20 pb-2 px-4">
            {plans.map((plan, index) => (
              <div key={plan.name} className="relative">
                {/* Most Popular Badge - Outside the card */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 border-0 px-3 py-1 text-xs font-semibold whitespace-nowrap">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`relative bg-slate-900/50 backdrop-blur-md border-2 rounded-2xl flex flex-col ${
                    plan.popular 
                      ? 'border-cyan-500/70 shadow-2xl shadow-cyan-500/30' 
                      : 'border-cyan-500/20'
                  } transition-all duration-300 cursor-pointer`}
                >
                  
                  {/* Header */}
                  <div className={`p-5 text-center border-b border-slate-800 ${plan.popular ? 'pt-10' : 'pt-5'}`}>
                    <h3 className={`text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                      {plan.name}
                    </h3>
                    <p className="text-slate-400 text-[10px] mb-4">{plan.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="mb-3">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-slate-500 line-through text-sm">{plan.originalPrice}</span>
                      </div>
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-slate-400 text-sm">/mo</span>
                      </div>
                      <p className="text-slate-400 text-[10px] mb-3">
                        or {plan.annualPrice} <span className="text-cyan-400">({plan.savings})</span>
                      </p>
                    </div>

                    {/* Founding Member Badge */}
                    <Badge className="bg-orange-500 text-white text-[9px] px-2 py-0.5 border-0">
                      FOUNDING MEMBER
                    </Badge>
                    <p className="text-cyan-400 text-[9px] mt-1 font-medium">50% off forever</p>
                  </div>

                  {/* Features List */}
                  <div className="p-4 flex-1 overflow-y-auto">
                    <div className="space-y-2">
                      {plan.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-start gap-2"
                        >
                          <div className="mt-0.5 bg-cyan-500/20 rounded-full p-0.5 ring-1 ring-cyan-500/50 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-cyan-400" />
                          </div>
                          <span className="text-slate-200 text-[11px] leading-tight flex items-center gap-1 flex-1">
                            {feature}
                            {getFeatureHighlight(feature) && (
                              <Zap className="w-2 h-2 text-yellow-400 flex-shrink-0" />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-4 pt-2 border-t border-slate-800">
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold text-xs transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-800 text-white border border-cyan-500/30'
                      }`}
                    >
                      Start Free Trial*
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 text-center text-slate-500 text-[10px]">
            wellness-intelligence.com | 2026 Strategy
          </div>
        </div>
      </div>
    </div>
  );
}