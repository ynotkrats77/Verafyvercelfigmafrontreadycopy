import { motion, AnimatePresence } from 'motion/react';
import { Send, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ChatScreenshotProps {
  isDark: boolean;
}

export function ChatScreenshot({ isDark }: ChatScreenshotProps) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: '1',
      text: "Hello! I'm Vera, your AI portfolio assistant. How can I help you today?",
      sender: 'ai' as const,
      timestamp: '2:30 PM',
    },
    {
      id: '2',
      text: "Can you analyze my portfolio performance?",
      sender: 'user' as const,
      timestamp: '2:31 PM',
    },
    {
      id: '3',
      text: "I'd be happy to analyze your portfolio! Your portfolio has returned 12.4% YTD, outperforming the ASX 200 by 3.2%. Would you like a detailed breakdown?",
      sender: 'ai' as const,
      timestamp: '2:31 PM',
    },
    {
      id: '4',
      text: "Yes, show me sector allocation",
      sender: 'user' as const,
      timestamp: '2:32 PM',
    },
    {
      id: '5',
      text: "Here's your sector allocation: Technology 35%, Healthcare 22%, Financials 18%, Consumer 15%, Other 10%. Your tech allocation is performing exceptionally well!",
      sender: 'ai' as const,
      timestamp: '2:32 PM',
    },
  ];

  // Simulate progressive chat loading
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < messages.length) {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 800);
          return prev + 1;
        } else {
          // Reset and start over
          setTimeout(() => {
            setVisibleMessages(0);
          }, 3000);
          return prev;
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div 
      className="w-full h-full rounded-2xl border overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-secondary) 50%, var(--theme-primary) 100%)`,
        boxShadow: `0 20px 60px var(--theme-glow-strong)`,
      }}
    >
      <div 
        className="w-full h-full rounded-2xl border overflow-hidden"
        style={{
          background: isDark 
            ? 'rgba(15, 23, 42, 0.6)'
            : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px)',
          borderColor: 'var(--theme-primary-alpha)',
        }}
      >
        {/* Chat Header */}
        <div
          className="px-4 py-3 border-b"
          style={{
            background: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--theme-primary-alpha)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Avatar and Info */}
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg relative"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: `0 4px 12px var(--theme-glow)`,
                }}
              >
                V
                <span 
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2"
                  style={{
                    borderColor: isDark ? 'rgb(30, 41, 59)' : 'white',
                  }}
                />
              </div>
              
              <div>
                <h2 className={`text-sm font-semibold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Vera AI
                </h2>
                <div className="flex items-center gap-1.5">
                  <motion.span 
                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className={`text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Version Badge */}
            <div className="flex items-center gap-2">
              <div
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'var(--theme-primary-alpha)',
                  color: 'var(--theme-primary)',
                  border: '1px solid var(--theme-primary-alpha)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                AI Assistant
              </div>
              
              <button
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: isDark ? 'rgba(100, 116, 139, 0.2)' : 'rgba(148, 163, 184, 0.2)',
                }}
              >
                <Moon className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          className="p-4 space-y-3 overflow-y-auto"
          style={{
            height: 'calc(100% - 120px)',
          }}
        >
          <AnimatePresence mode="sync">
            {messages.slice(0, visibleMessages).map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex flex-col max-w-[75%]">
                  {/* Message Bubble */}
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-3 py-2 rounded-xl text-xs leading-relaxed"
                    style={{
                      background: message.sender === 'ai'
                        ? isDark
                          ? 'rgba(30, 41, 59, 0.8)'
                          : 'rgba(255, 255, 255, 0.8)'
                        : `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                      color: message.sender === 'ai'
                        ? isDark ? 'white' : '#1e293b'
                        : 'white',
                      backdropFilter: 'blur(12px)',
                      border: message.sender === 'ai'
                        ? isDark 
                          ? '1px solid rgba(100, 116, 139, 0.3)'
                          : '1px solid rgba(226, 232, 240, 0.8)'
                        : '1px solid var(--theme-primary-alpha)',
                      boxShadow: message.sender === 'user'
                        ? `0 4px 12px var(--theme-glow)`
                        : isDark
                        ? '0 2px 8px rgba(0, 0, 0, 0.3)'
                        : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {message.text}
                  </motion.div>
                  
                  {/* Timestamp */}
                  <span 
                    className={`text-[10px] mt-1 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                    style={{ color: 'var(--theme-primary)', opacity: 0.7 }}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && visibleMessages < messages.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div 
                className="px-4 py-3 rounded-xl"
                style={{
                  background: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: isDark 
                    ? '1px solid rgba(100, 116, 139, 0.3)'
                    : '1px solid rgba(226, 232, 240, 0.8)',
                }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--theme-primary)' }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div
          className="px-4 py-3 border-t"
          style={{
            background: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--theme-primary-alpha)',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Ask Vera anything..."
                readOnly
                className="w-full px-3 py-2 rounded-full border text-xs"
                style={{
                  background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  borderColor: 'var(--theme-primary-alpha)',
                  color: isDark ? 'white' : '#1e293b',
                  backdropFilter: 'blur(12px)',
                  outline: 'none',
                }}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: `0 4px 12px var(--theme-glow)`,
              }}
            >
              <Send className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}