'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectImage from './ProjectImage';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl glass-strong rounded-2xl overflow-hidden my-8 shadow-2xl shadow-blue-500/10"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Close project details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero image */}
            <div className="h-56 sm:h-64 relative">
              <ProjectImage title={project.shortTitle} accent={project.accent} />
              {project.featured && (
                <div className="absolute top-4 left-4 featured-badge">
                  <span aria-hidden="true">⭐</span> Featured Project
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 lg:p-10 max-h-[70vh] overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="meta-pill">{project.category}</span>
                  <span className={`status-pill ${project.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                  <span className="meta-pill">{project.year}</span>
                  <span className="meta-pill">{project.role}</span>
                </div>
                <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  {project.title}
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">{project.description}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="modal-section">
                  <h3 className="modal-section-title">Problem</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{project.problem}</p>
                </div>
                <div className="modal-section">
                  <h3 className="modal-section-title">Solution</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="modal-section-title mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.highlights.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <svg className="w-4 h-4 text-[#3B82F6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Challenges */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="modal-section">
                  <h3 className="modal-section-title">Architecture</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{project.architecture}</p>
                </div>
                <div className="modal-section">
                  <h3 className="modal-section-title">Challenges Solved</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                        <span className="text-[#8B5CF6] mt-1 shrink-0">▸</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="modal-section-title mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Screenshots placeholder */}
              <div className="mb-8">
                <h3 className="modal-section-title mb-4">Screenshots</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-40 rounded-xl overflow-hidden">
                      <ProjectImage title={`${project.shortTitle} ${i}`} accent={project.accent} />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm !py-2.5 !px-6"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm !py-2.5 !px-6"
                  >
                    GitHub
                  </a>
                )}
                <button type="button" className="btn-secondary text-sm !py-2.5 !px-6 opacity-60 cursor-not-allowed" disabled>
                  Case Study — Coming Soon
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
