import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import HeroVisual from "./components/HeroVisual";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./components/AnimatedSection";
import HeroContent from "./components/HeroContent";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const skills = [
    "React.js", "Next.js", "Node.js", "JavaScript", "TypeScript",
    "Tailwind CSS", "MySQL", "MongoDB", "Git", "Flutter", "Firebase", 
    "Docker", "Redis"
  ];

  return (
    <div className="min-h-screen bg-[#070B14] relative">
      <BackgroundEffects />
      <SmoothScroll />

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <HeroContent />
                <div className="hidden lg:block">
                  <HeroVisual />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="about-heading"
          >
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-16 lg:mb-20">
                <h2 id="about-heading" className="section-heading text-[#F8FAFC]">
                  About <span className="gradient-text">Me</span>
                </h2>
              </AnimatedSection>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <AnimatedSection direction="left">
                  <div className="glass rounded-2xl p-8 lg:p-10">
                    <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
                      I&apos;m a passionate Full Stack Web Developer with 2.6 years of professional experience
                      in building web applications. I specialize in modern web technologies and love creating
                      solutions that make a difference.
                    </p>
                    <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
                      When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                      projects, or sharing knowledge with the developer community.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true" />
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-[#94A3B8]">Available for new opportunities</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { value: '6', label: 'Projects' },
                      { value: '2.6', label: 'Years Exp.' },
                      { value: '13', label: 'Technologies' },
                    ].map((stat) => (
                      <div key={stat.label} className="glass rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-[#94A3B8] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.15}>
                  <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-8">Skills & Technologies</h3>
                  <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                    {skills.map((skill, index) => (
                      <StaggerItem key={index}>
                        <div className="skill-card text-center text-sm">
                          {skill}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <div className="mt-6 glass rounded-xl p-5 border border-[#3B82F6]/20">
                    <p className="text-sm text-[#93C5FD]">
                      <strong className="text-[#F8FAFC]">Experience:</strong> 2.6 years of professional development
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          <ProjectsSection />

          {/* Contact Section */}
          <section
            id="contact"
            className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 id="contact-heading" className="section-heading text-[#F8FAFC] mb-6">
                  Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                  I&apos;m always interested in hearing about new opportunities and exciting projects.
                  Feel free to reach out if you&apos;d like to connect!
                </p>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="glass rounded-2xl p-6 text-center hover:border-[#3B82F6]/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-2">Email</h3>
                    <a href="mailto:saurabhyd1210@gmail.com" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-sm" aria-label="Send email to saurabhyd1210@gmail.com">
                      saurabhyd1210@gmail.com
                    </a>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass rounded-2xl p-6 text-center hover:border-[#3B82F6]/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-2">GitHub</h3>
                    <a href="https://github.com/Saurabh-314" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-sm" aria-label="Visit my GitHub profile">
                      github.com/Saurabh-314
                    </a>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass rounded-2xl p-6 text-center hover:border-[#3B82F6]/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-2">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/saurabhyadav1210" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-sm" aria-label="Visit my LinkedIn profile">
                      linkedin.com/in/saurabhyadav1210
                    </a>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <AnimatedSection delay={0.2}>
                <div className="glass-strong rounded-2xl p-8 lg:p-10">
                  <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-8">Send me a message</h3>
                  <form className="space-y-6" role="form" aria-labelledby="contact-form-heading">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input"
                          placeholder="Your name"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="your@email.com"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#94A3B8] mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Your message..."
                        required
                        aria-required="true"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full !py-3.5"
                      aria-label="Send message"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold gradient-text">SY</div>

              <div className="flex items-center gap-6">
                <a href="#about" className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">About</a>
                <a href="#projects" className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Projects</a>
                <a href="#contact" className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Contact</a>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://github.com/Saurabh-314" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/saurabhyadav1210" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="mailto:saurabhyd1210@gmail.com" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" aria-label="Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.05] text-center">
              <p className="text-[#94A3B8] text-sm mb-1">
                © {new Date().getFullYear()} Saurabh Yadav. All rights reserved.
              </p>
              <p className="text-[#64748B] text-xs">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>

      <ScrollToTop />
    </div>
  );
}
