'use client';

import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070B14]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <a
              href="#home"
              className="text-xl font-bold gradient-text tracking-tight"
              aria-label="Go to top of page"
            >
              SY
            </a>

            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="nav-link text-[15px]" aria-label="Go to About section">
                About
              </a>
              <a href="#projects" className="nav-link text-[15px]" aria-label="Go to Projects section">
                Projects
              </a>
              <a href="#contact" className="nav-link text-[15px]" aria-label="Go to Contact section">
                Contact
              </a>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="btn-primary text-sm !py-2.5 !px-6"
                aria-label="Get in touch - Contact me"
              >
                Get in Touch
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
