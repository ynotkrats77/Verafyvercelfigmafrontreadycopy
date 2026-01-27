import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: string;
}

interface ChatPageProps {
  isDark: boolean;
}

export function ChatPage({ isDark }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: '2:30 PM',
    },
    {
      id: '2',
      text: "Hi! Can you tell me about the new iOS 26 features?",
      sender: 'user',
      timestamp: '2:31 PM',
    },
    {
      id: '3',
      text: "iOS 26 introduces the revolutionary Liquid Glass design system with advanced glassmorphism effects, fluid animations, and enhanced AR integration. The interface feels more organic and responsive than ever before!",
      sender: 'ai',
      timestamp: '2:31 PM',
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand your question. Let me help you with that!",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: isDark 
          ? 'linear-gradient(to bottom, rgb(2, 6, 23), rgb(15, 23, 42), rgb(2, 6, 23))'
          : 'linear-gradient(to bottom, rgb(248, 250, 252), rgb(255, 255, 255), rgb(241, 245, 249))',
      }}
    >
      {/* Main Chat Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-4xl h-[90vh] rounded-3xl border overflow-hidden ${
          isDark
            ? 'bg-slate-900/40 border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
            : 'bg-white/40 border-slate-300/50 shadow-2xl shadow-slate-400/20'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Chat Header */}
        <motion.div
          className={`px-6 py-4 border-b backdrop-blur-xl ${
            isDark
              ? 'bg-slate-800/60 border-cyan-500/20'
              : 'bg-white/60 border-slate-200'
          }`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            {/* Avatar and Info */}
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl relative"
                style={{
                  background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))',
                  boxShadow: '0 4px 16px var(--theme-glow)',
                }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                V
                {/* Online indicator */}
                <span 
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2"
                  style={{
                    borderColor: isDark ? 'rgb(30, 41, 59)' : 'white',
                  }}
                />
              </motion.div>
              
              <div>
                <h2 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Vera (Gen 1)
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Version Badge */}
            <div className="flex items-center gap-3">
              <motion.div
                className={`px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-xl ${
                  isDark
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-cyan-100 text-cyan-700 border border-cyan-300'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                iOS 26 · Liquid Glass
              </motion.div>
              
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isDark 
                    ? 'hover:bg-slate-700/50' 
                    : 'hover:bg-slate-200/50'
                }`}
              >
                <Moon className={`w-4 h-4 ${
                  isDark ? 'text-cyan-400' : 'text-slate-600'
                }`} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Messages Area */}
        <div 
          className="flex-1 overflow-y-auto p-6 space-y-4"
          style={{
            maxHeight: 'calc(90vh - 180px)',
          }}
        >
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex flex-col max-w-[70%]">
                  {/* Message Bubble */}
                  <motion.div
                    className={`px-5 py-3 rounded-2xl backdrop-blur-xl ${
                      message.sender === 'ai'
                        ? isDark
                          ? 'bg-slate-800/70 text-white border border-slate-700/50'
                          : 'bg-white/70 text-slate-900 border border-slate-200'
                        : isDark
                        ? 'bg-gradient-to-r from-cyan-600/80 to-cyan-500/80 text-white border border-cyan-400/30'
                        : 'bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 text-white border border-cyan-400/50'
                    }`}
                    style={{
                      boxShadow: message.sender === 'user' 
                        ? '0 4px 16px var(--theme-glow)'
                        : isDark 
                        ? '0 4px 16px rgba(0, 0, 0, 0.3)'
                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </motion.div>
                  
                  {/* Timestamp */}
                  <span 
                    className={`text-xs mt-1.5 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    } ${
                      isDark ? 'text-cyan-400/70' : 'text-cyan-600/70'
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div
          className={`px-6 py-4 border-t backdrop-blur-xl ${
            isDark
              ? 'bg-slate-800/60 border-cyan-500/20'
              : 'bg-white/60 border-slate-200'
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className={`w-full px-5 py-3 rounded-full border backdrop-blur-xl focus:outline-none transition-all ${
                  isDark
                    ? 'bg-slate-900/50 border-cyan-500/30 text-white placeholder-cyan-400/40 focus:border-cyan-500/60 focus:bg-slate-900/70'
                    : 'bg-white/50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:bg-white/70'
                }`}
                style={{
                  boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              />
            </div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-12 h-12 rounded-full p-0 transition-all duration-300 disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))',
                  boxShadow: inputValue.trim() ? '0 4px 16px var(--theme-glow)' : 'none',
                }}
              >
                <Send className="w-5 h-5 text-white" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
