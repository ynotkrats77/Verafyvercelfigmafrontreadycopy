import { ArrowRight, Shield, TrendingUp, Zap, BarChart3, Target, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemedButton } from '../components/ui/themed-button';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { ChatScreenshot } from '../components/ChatScreenshot';
import Slider from 'react-slick';
import { useState } from 'react';
import { CountdownTimer } from '../components/CountdownTimer';

interface HomePageProps {
  isDark: boolean;
}

/**
 * Home Page Content
 * 
 * Independent landing page component that renders within Layout.
 * Example of different content using the same Navigation/Footer.
 * Force rebuild: 2025-01-14 20:00 UTC - Components verified and imports fixed
 */
export function HomePage({ isDark }: HomePageProps) {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    arrows: false,
    accessibility: true,
    focusOnSelect: false,
    swipe: true,
    touchMove: true,
    // Fix aria-hidden focus issue by disabling tabbing on hidden slides
    lazyLoad: 'ondemand' as const,
    appendDots: (dots: any) => (
      <div style={{ bottom: '30px' }}>
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button 
        className="w-3 h-3 rounded-full transition-all duration-300"
        style={{
          background: 'var(--theme-primary)',
          opacity: 0.3,
        }}
        aria-label="Carousel navigation"
        tabIndex={-1}
      />
    ),
    beforeChange: (current: number, next: number) => {
      // Remove tabindex from all slides before change
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide) => {
        const interactiveElements = slide.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
        interactiveElements.forEach((el) => {
          el.setAttribute('tabindex', '-1');
        });
      });
    },
    afterChange: (current: number) => {
      // Restore tabindex only for active slide
      const activeSlide = document.querySelector('.slick-active');
      if (activeSlide) {
        const interactiveElements = activeSlide.querySelectorAll('button, a, input');
        interactiveElements.forEach((el) => {
          el.setAttribute('tabindex', '0');
        });
      }
    },
  };

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20">
          <div 
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background: `radial-gradient(circle, var(--theme-primary), transparent 70%)`
            }}
          />
        </div>

        <div className="relative z-10 w-full">
          <Slider {...carouselSettings} className="hero-carousel">
            {/* Slide 1 - Meet Vera (Current Hero) */}
            <div>
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                      style={{
                        borderColor: 'var(--theme-primary)',
                        background: 'var(--theme-primary-alpha)',
                        boxShadow: '0 4px 20px var(--theme-glow)'
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Sparkles className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
                      <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        AI-Powered Portfolio Intelligence
                      </span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Meet{' '}
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{
                          background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        Vera
                      </span>
                    </h1>

                    {/* Subheading */}
                    <p className={`text-xl mb-8 leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      Your AI assistant delivering institutional-grade portfolio insights in plain English.
                      Transform complex financial data into actionable intelligence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <ThemedButton
                        variant="primary"
                        size="lg"
                      >
                        Get Started Free*
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </ThemedButton>
                      
                      <ThemedButton
                        variant="outline"
                        size="lg"
                      >
                        View Pricing
                      </ThemedButton>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap items-center gap-6">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <Shield className="h-5 w-5" style={{ color: 'var(--theme-primary)' }} />
                        <span className="text-sm">ASIC Compliant</span>
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <TrendingUp className="h-5 w-5" style={{ color: 'var(--theme-primary)' }} />
                        <span className="text-sm">Real-time Analytics</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Content - Video/Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div 
                      className={`aspect-square rounded-2xl border-2 overflow-hidden relative ${
                        isDark 
                          ? 'bg-slate-800/50 border-slate-700' 
                          : 'bg-white border-slate-200'
                      }`}
                      style={{
                        boxShadow: isDark ? '0 20px 60px var(--theme-glow)' : '0 20px 60px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* YouTube Shorts Embed */}
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/8okZgJP3qe4?autoplay=1&mute=0&loop=1&playlist=8okZgJP3qe4&controls=1&modestbranding=1&playsinline=1"
                        title="Institutional Intelligence Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          border: 'none',
                          transform: 'scale(1.7)',
                          transformOrigin: 'center'
                        }}
                      />

                      {/* Optional: Overlay gradient for aesthetic effect */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: isDark 
                            ? 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'
                            : 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.2) 100%)'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Slide 2 - AI-Powered Portfolio Management Platform */}
            <div>
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    {/* Heading */}
                    <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Your{' '}
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{
                          background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        AI Powered
                      </span>
                      <br />
                      <span className="text-4xl md:text-5xl">
                        portfolio intelligence
                      </span>
                      <br />
                      <span className="text-4xl md:text-5xl">
                        platform
                      </span>
                    </h1>

                    {/* Subheading */}
                    <p className={`text-xl leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      Future-ready investing for Australian portfolios, powered by Vera, your AI investing assistant.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <ThemedButton
                        variant="primary"
                        size="lg"
                      >
                        Start Free Today
                      </ThemedButton>
                      
                      <ThemedButton
                        variant="outline"
                        size="lg"
                      >
                        Learn More
                      </ThemedButton>
                    </div>

                    {/* View Analytics Demo Button */}
                    <div className="pt-4">
                      <ThemedButton
                        variant="ghost"
                        size="md"
                      >
                        <BarChart3 className="mr-2 h-5 w-5" />
                        View Analytics Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </ThemedButton>
                    </div>

                    {/* ASIC Compliance Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mt-6"
                      style={{
                        borderColor: 'var(--theme-primary)',
                        background: 'var(--theme-primary-alpha)',
                        boxShadow: '0 4px 20px var(--theme-glow)'
                      }}
                    >
                      <Shield className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
                      <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Built to ASIC compliance standards for Australian investors.
                      </span>
                    </motion.div>

                    {/* Bottom Text */}
                    <p className={`text-sm italic pt-4 ${
                      isDark ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      Vera is the AI assistant inside Verafy AI that helps you understand your portfolio in plain language.
                    </p>
                  </motion.div>

                  {/* Right Content - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="aspect-square">
                      <ChatScreenshot isDark={isDark} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Slide 3 - Founding Member Special */}
            <div>
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    {/* Main Heading */}
                    <div>
                      <h1 className={`text-5xl md:text-6xl font-bold leading-tight mb-4 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        Meet{' '}
                        <span 
                          className="bg-clip-text text-transparent"
                          style={{
                            background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          Vera.
                        </span>
                      </h1>
                      <h2 className={`text-4xl md:text-5xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        Then Decide How Much You Want Her.
                      </h2>
                    </div>

                    {/* Subheading */}
                    <p className={`text-xl leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      Everyone starts with a 14-day Pro trial.<br />
                      Experience everything. Then pick your price.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <ThemedButton
                        variant="primary"
                        size="lg"
                      >
                        Start 14-Day Pro Trial
                      </ThemedButton>
                      
                      <ThemedButton
                        variant="outline"
                        size="lg"
                      >
                        Compare Plans
                      </ThemedButton>
                    </div>
                  </motion.div>

                  {/* Right Content - Countdown Timer */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div 
                      className={`aspect-square rounded-2xl border-2 overflow-hidden relative flex flex-col items-center justify-center p-8 ${
                        isDark 
                          ? 'bg-slate-800/50 border-slate-700' 
                          : 'bg-white border-slate-200'
                      }`}
                      style={{
                        boxShadow: isDark ? '0 20px 60px var(--theme-glow)' : '0 20px 60px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Background gradient overlay */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: isDark 
                            ? 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'
                            : 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.2) 100%)'
                        }}
                      />

                      {/* Content - Centered */}
                      <div className="relative z-10 space-y-8 text-center">
                        {/* Founding Member Badge */}
                        <motion.div
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg"
                          style={{
                            background: 'linear-gradient(135deg, #FF8C00, #FFA500)',
                            boxShadow: '0 8px 32px rgba(255, 140, 0, 0.4)',
                            color: '#FFFFFF'
                          }}
                          animate={{
                            boxShadow: [
                              '0 8px 32px rgba(255, 140, 0, 0.4)',
                              '0 8px 48px rgba(255, 140, 0, 0.6)',
                              '0 8px 32px rgba(255, 140, 0, 0.4)',
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        >
                          <Zap className="h-5 w-5" />
                          FOUNDING MEMBER SPECIAL
                          <Zap className="h-5 w-5" />
                        </motion.div>

                        {/* Special Offer Text */}
                        <div>
                          <p className={`text-2xl font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            50% off for life.
                          </p>
                          <p className={`text-lg ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            Lock in before June 30, 2026.
                          </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="max-w-lg mx-auto">
                          <CountdownTimer 
                            targetDate={new Date('2026-06-30T23:59:59')}
                            isDark={isDark}
                          />
                        </div>

                        {/* Pricing Tiers with Tax Pack Add-ons */}
                        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                          {/* Starter - $5 */}
                          <div className={`relative p-6 rounded-xl border-2 flex flex-col items-center ${ 
                            isDark 
                              ? 'bg-slate-800/50 border-slate-600' 
                              : 'bg-white border-slate-300'
                          }`}>
                            <div className={`text-4xl font-bold mb-2`} style={{ color: '#64748b' }}>
                              $5
                            </div>
                            <div className={`text-xs font-semibold uppercase mb-4 ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              Starter
                            </div>
                            
                            {/* Tax Pack Add-On - Orange Separator */}
                            <div className={`w-full border-t-2 pt-4 mt-2 flex items-center justify-center gap-1.5 ${
                              isDark ? 'border-orange-500/30' : 'border-orange-300'
                            }`}>
                              <Check className="w-3.5 h-3.5" style={{ color: '#f97316' }} />
                              <div className="text-center">
                                <div className={`text-xs font-bold leading-tight ${
                                  isDark ? 'text-orange-400' : 'text-orange-600'
                                }`}>
                                  +$30/yr
                                </div>
                                <div className={`text-[10px] font-semibold ${
                                  isDark ? 'text-orange-300' : 'text-orange-700'
                                }`}>
                                  Tax Pack
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Standard - $10 */}
                          <div className={`relative p-6 rounded-xl border-2 flex flex-col items-center ${ 
                            isDark 
                              ? 'bg-slate-800/50 border-blue-500' 
                              : 'bg-white border-blue-400'
                          }`}>
                            {/* Popular Badge */}
                            <div className="absolute -top-3 bg-blue-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                              Popular
                            </div>
                            
                            <div className={`text-4xl font-bold mb-2 mt-2`} style={{ color: '#3b82f6' }}>
                              $10
                            </div>
                            <div className={`text-xs font-semibold uppercase mb-4 ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              Standard
                            </div>
                            
                            {/* Tax Pack Add-On - Orange Separator */}
                            <div className={`w-full border-t-2 pt-4 mt-2 flex items-center justify-center gap-1.5 ${
                              isDark ? 'border-orange-500/30' : 'border-orange-300'
                            }`}>
                              <Check className="w-3.5 h-3.5" style={{ color: '#f97316' }} />
                              <div className="text-center">
                                <div className={`text-xs font-bold leading-tight ${
                                  isDark ? 'text-orange-400' : 'text-orange-600'
                                }`}>
                                  +$20/yr
                                </div>
                                <div className={`text-[10px] font-semibold ${
                                  isDark ? 'text-orange-300' : 'text-orange-700'
                                }`}>
                                  Tax Pack
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Pro - $20 */}
                          <div className={`relative p-6 rounded-xl border-2 flex flex-col items-center ${ 
                            isDark 
                              ? 'bg-slate-800/50 border-purple-500' 
                              : 'bg-white border-purple-400'
                          }`}>
                            {/* Best Value Badge */}
                            <div className="absolute -top-3 bg-purple-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                              Best Value
                            </div>
                            
                            <div className={`text-4xl font-bold mb-2 mt-2`} style={{ color: '#a855f7' }}>
                              $20
                            </div>
                            <div className={`text-xs font-semibold uppercase mb-4 ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              Pro
                            </div>
                            
                            {/* Tax Pack Included */}
                            <div className={`w-full pt-4 mt-2 flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 border ${
                              isDark 
                                ? 'bg-cyan-500/10 border-cyan-500' 
                                : 'bg-cyan-50 border-cyan-400'
                            }`}>
                              <Check className="w-3.5 h-3.5" style={{ color: '#22D3EE' }} />
                              <div className="text-center">
                                <div className={`text-xs font-bold leading-tight`} style={{ color: '#22D3EE' }}>
                                  Tax Pack
                                </div>
                                <div className={`text-[10px] font-semibold`} style={{ color: '#22D3EE' }}>
                                  Included
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                description: "Get instant portfolio analysis powered by advanced AI algorithms",
                icon: Sparkles
              },
              {
                title: "Real-time Data",
                description: "Access live market data and portfolio performance metrics",
                icon: TrendingUp
              },
              {
                title: "Enterprise Security",
                description: "Bank-grade encryption and ASIC compliance for your peace of mind",
                icon: Shield
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <feature.icon 
                  className="h-12 w-12 mb-4" 
                  style={{ color: 'var(--theme-primary)' }} 
                />
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection isDark={isDark} />

      {/* Testimonials Section */}
      <Testimonials isDark={isDark} />

      {/* FAQ Section */}
      <FAQSection isDark={isDark} />
    </>
  );
}