'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="text-gray-600 hover:text-blue-600 transition-colors p-2"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-8">
              <div className="space-y-6">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 