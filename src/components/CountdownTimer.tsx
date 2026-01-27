import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownTimerProps {
  targetDate: Date;
  isDark: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, isDark }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`relative rounded-2xl border-2 p-6 backdrop-blur-xl ${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/40 border-slate-200/50'
          }`}
          style={{
            boxShadow: '0 8px 32px var(--theme-glow)',
            borderColor: 'var(--theme-primary)',
          }}
        >
          {/* Glowing background effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
            style={{
              background: `radial-gradient(circle at center, var(--theme-primary), transparent 70%)`
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div 
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ 
                color: 'var(--theme-primary)',
                textShadow: '0 0 20px var(--theme-glow)'
              }}
              animate={{ 
                scale: unit.label === 'Sec' ? [1, 1.1, 1] : 1 
              }}
              transition={{ 
                duration: 1,
                repeat: unit.label === 'Sec' ? Infinity : 0
              }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
            <div className={`text-sm font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {unit.label}
            </div>
          </div>

          {/* Corner accent */}
          <div 
            className="absolute top-2 right-2 w-2 h-2 rounded-full"
            style={{
              background: 'var(--theme-primary)',
              boxShadow: '0 0 10px var(--theme-glow-strong)'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}