import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface TestimonialsProps {
  isDark: boolean;
}

export function Testimonials({ isDark }: TestimonialsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      rating: 5,
      text: "Verafy AI has transformed how I manage my investments. The insights are incredibly accurate and actionable.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      rating: 5,
      text: "The real-time alerts have saved me from costly mistakes. Best investment tool I've used in years.",
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Financial Advisor",
      rating: 5,
      text: "My clients love the personalized recommendations. It's like having an AI assistant that truly understands the market.",
      avatar: "EW",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: isDark
            ? [
                "radial-gradient(circle at 0% 0%, #22D3EE 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, #06B6D4 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, #22D3EE 0%, transparent 50%)",
              ]
            : [
                "radial-gradient(circle at 0% 0%, #67E8F9 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, #22D3EE 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, #67E8F9 0%, transparent 50%)",
              ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`text-3xl md:text-4xl mb-3 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Loved by{" "}
            <span style={{
              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Investors
            </span>
          </h3>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
            See what our users are saying about Verafy AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                className={`backdrop-blur-sm border-2 rounded-2xl p-6 h-full transition-all duration-300 ${
                  isDark
                    ? "bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-900/70"
                    : "bg-white/80 border-slate-200 hover:border-cyan-400 hover:bg-white"
                }`}
                whileHover={{
                  y: -8,
                  boxShadow: isDark
                    ? "0 20px 40px rgba(34, 211, 238, 0.3)"
                    : "0 20px 40px rgba(34, 211, 238, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDark
                        ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                        : "bg-gradient-to-br from-cyan-400 to-blue-400"
                    }`}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial text */}
                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                      isDark
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-cyan-100 text-cyan-600"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}