'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, PROJECT_FILTERS } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import AnimatedSection from './AnimatedSection';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.filters.includes(activeFilter));

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#101827]/50"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 id="projects-heading" className="section-heading text-[#F8FAFC] mb-4">
            Production <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
            Real-world applications I&apos;ve built and shipped — from SaaS platforms to mobile apps serving production users.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection delay={0.1} className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-semibold text-[#F8FAFC]">Featured Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection delay={0.15} className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-pill ${activeFilter === filter ? 'filter-pill-active' : ''}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Filtered Projects */}
        {activeFilter !== 'All' && (
          <AnimatedSection delay={0.1} className="mb-8">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-[#F8FAFC]">
                {activeFilter} Projects
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
            </div>
          </AnimatedSection>
        )}

        {activeFilter === 'All' && (
          <AnimatedSection delay={0.15} className="mb-8">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-[#F8FAFC]">All Projects</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
            </div>
          </AnimatedSection>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#94A3B8] py-12">No projects match this filter.</p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
