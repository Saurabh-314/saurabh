'use client';

import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';

const statusColors = {
  Live: 'bg-green-500/10 text-green-400 border-green-500/20',
  Production: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

export default function ProjectCard({ project, onOpen, index }) {
  const visibleTech = project.tech.slice(0, 4);
  const remainingTech = project.tech.length - 4;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="project-card-premium group h-full flex flex-col cursor-pointer"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      aria-label={`View details for ${project.title}`}
    >
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        <div className="group-hover:scale-105 transition-transform duration-500 h-full">
          <ProjectImage title={project.shortTitle} accent={project.accent} />
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 featured-badge">
            <span aria-hidden="true">⭐</span> Featured Project
          </div>
        )}

        <div className="absolute top-4 right-4 flex gap-2">
          <span className="meta-pill">{project.category}</span>
        </div>

        <div
          className={`absolute bottom-4 left-4 status-pill ${statusColors[project.status] || statusColors.Production}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#64748B] mb-4">
          <span>{project.year}</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
          <span>{project.role}</span>
        </div>

        <p className="text-[#94A3B8] mb-5 leading-relaxed text-sm flex-1 line-clamp-3">
          {project.cardDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5 group-hover:gap-2.5 transition-all duration-300">
          {visibleTech.map((tech) => (
            <span key={tech} className="tech-badge group-hover:scale-105 transition-transform duration-200">
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="tech-badge opacity-60">+{remainingTech}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta project-cta-primary"
              aria-label={`Visit ${project.title} live website`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="project-cta"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub
            </a>
          )}
          <button
            type="button"
            className="project-cta project-cta-muted"
            onClick={() => onOpen(project)}
          >
            Case Study
            <span className="text-[10px] opacity-60 ml-1">Soon</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
