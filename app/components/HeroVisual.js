'use client';

import { motion } from 'framer-motion';

const techBadges = [
  { name: 'React', x: -120, y: -80, delay: 0 },
  { name: 'Next.js', x: 130, y: -60, delay: 0.5 },
  { name: 'Node.js', x: -100, y: 60, delay: 1 },
  { name: 'TypeScript', x: 110, y: 80, delay: 1.5 },
  { name: 'AWS', x: 0, y: -120, delay: 0.8 },
];

const codeLines = [
  { indent: 0, parts: [{ text: 'const', color: '#c084fc' }, { text: ' developer', color: '#f8fafc' }, { text: ' = {', color: '#f8fafc' }] },
  { indent: 1, parts: [{ text: 'name:', color: '#94a3b8' }, { text: " 'Saurabh'", color: '#4ade80' }, { text: ',', color: '#f8fafc' }] },
  { indent: 1, parts: [{ text: 'role:', color: '#94a3b8' }, { text: " 'Full Stack Developer'", color: '#4ade80' }, { text: ',', color: '#f8fafc' }] },
  { indent: 1, parts: [{ text: 'stack:', color: '#94a3b8' }, { text: " ['React', 'Next.js', 'Node.js']", color: '#4ade80' }, { text: ',', color: '#f8fafc' }] },
  { indent: 1, parts: [{ text: 'passion:', color: '#94a3b8' }, { text: " 'Building great products'", color: '#4ade80' }] },
  { indent: 0, parts: [{ text: '};', color: '#f8fafc' }] },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      {/* Code editor window */}
      <motion.div
        className="glass-strong rounded-2xl w-full max-w-md overflow-hidden shadow-2xl shadow-blue-500/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-[#94A3B8] font-mono">developer.ts</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="flex"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <span className="text-[#475569] w-6 select-none">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                {line.parts.map((part, j) => (
                  <span key={j} style={{ color: part.color }}>{part.text}</span>
                ))}
              </span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-[#3B82F6] ml-8 mt-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Floating tech badges */}
      {techBadges.map((badge) => (
        <motion.div
          key={badge.name}
          className="absolute glass px-3 py-1.5 rounded-full text-xs font-medium text-[#F8FAFC] shadow-lg"
          style={{ left: '50%', top: '50%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: badge.x,
            y: badge.y,
          }}
          transition={{ duration: 0.6, delay: 0.8 + badge.delay }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + badge.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {badge.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
