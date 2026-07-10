'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Opaque overlay — no backdrop-filter (unreliable on mobile) */}
          <motion.div
            className="absolute inset-0 bg-[#070B14]/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Solid drawer panel */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[min(18rem,85vw)] bg-[#101827] border-l border-white/[0.08] shadow-2xl shadow-black/50"
            style={{ WebkitTransform: 'translateZ(0)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b border-white/[0.08] bg-[#101827]">
              <span className="text-lg font-bold gradient-text">SY</span>
              <button
                onClick={closeMenu}
                className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-1"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-5 py-8 bg-[#101827]">
              <div className="space-y-1">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-lg font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors py-3 px-4 rounded-xl hover:bg-white/[0.05]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8 px-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-primary w-full text-center"
                >
                  Get in Touch
                </a>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-2"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mounted && createPortal(menuContent, document.body)}
    </div>
  );
}
