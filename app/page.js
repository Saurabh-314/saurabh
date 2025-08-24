import SmoothScroll from "./components/SmoothScroll";
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./components/ScrollToTop";
import ProjectImage from "./components/ProjectImage";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, payment integration with Stripe, and admin dashboard.",
      image: "ecommerce",
      link: "#",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "task-management",
      link: "#",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design principles, smooth animations, and SEO optimization.",
      image: "portfolio",
      link: "#",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions, forecasts, and interactive maps using OpenWeatherMap API and Chart.js for data visualization.",
      image: "weather",
      link: "#",
      tech: ["React", "JavaScript", "Chart.js", "OpenWeatherMap API"]
    },
    {
      title: "Blog CMS",
      description: "A content management system for blogs with rich text editing, user roles, SEO optimization, and analytics dashboard.",
      image: "blog-cms",
      link: "#",
      tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"]
    },
    {
      title: "Social Media Clone",
      description: "A social media platform with features like user profiles, posts, comments, likes, and real-time notifications using WebSockets.",
      image: "social-media",
      link: "#",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"]
    }
  ];

  const skills = [
    "React.js", "Next.js", "Node.js", "JavaScript", "TypeScript", 
    "Tailwind CSS", "SQL", "MongoDB", "AWS", "Git"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50" role="navigation" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-900">
                <a href="#home" aria-label="Go to top of page">SY</a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Go to About section">About</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Go to Projects section">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Go to Contact section">Contact</a>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6" aria-hidden="true">
                <span className="text-2xl font-bold text-blue-600">SY</span>
              </div>
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="text-blue-600">Saurabh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Full Stack Web Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting clean, scalable, and user-friendly web solutions. 
              I love working on challenging projects and continuously learning new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Get in touch - Contact me for opportunities"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-1"
                aria-label="View my work - See my projects"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="about-heading" className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  I&apos;m a passionate Full Stack Web Developer with 1.6 years of professional experience 
                  in building web applications. I specialize in modern web technologies and love creating 
                  solutions that make a difference.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-sm text-gray-600">Available for new opportunities</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-blue-300 hover:shadow-md transition-all duration-200">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Experience:</strong> 1.6 years of professional development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="projects-heading" className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
                  <div className="h-48 relative overflow-hidden">
                    <ProjectImage type={project.image} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:translate-x-1 duration-200"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-16">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to connect!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:saurabhyd1210@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Send email to saurabhyd1210@gmail.com">
                  saurabhyd1210@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <a href="https://github.com/Saurabh-314" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Visit my GitHub profile">
                  github.com/Saurabh-314
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/saurabhyadav1210" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Visit my LinkedIn profile">
                  linkedin.com/in/saurabhyadav1210
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>
              <form className="space-y-6" role="form" aria-labelledby="contact-form-heading">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Your message..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Saurabh Yadav. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
