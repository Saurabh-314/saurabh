export default function ProjectImage({ type }) {
  const getProjectSVG = (projectType) => {
    switch (projectType) {
      case 'ecommerce':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-blue-200 rounded w-16 mx-auto"></div>
                <div className="h-2 bg-blue-200 rounded w-12 mx-auto"></div>
                <div className="h-2 bg-blue-200 rounded w-20 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      case 'task-management':
        return (
          <div className="w-full h-full bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-green-200 rounded w-20 mx-auto"></div>
                <div className="h-2 bg-green-200 rounded w-16 mx-auto"></div>
                <div className="h-2 bg-green-200 rounded w-14 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      case 'portfolio':
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-purple-200 rounded w-18 mx-auto"></div>
                <div className="h-2 bg-purple-200 rounded w-14 mx-auto"></div>
                <div className="h-2 bg-purple-200 rounded w-16 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      case 'weather':
        return (
          <div className="w-full h-full bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-cyan-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.004 5.004 0 00-9.78 1.096A4.001 4.001 0 003 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m0-18l-3 3m3-3l3 3" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-cyan-200 rounded w-16 mx-auto"></div>
                <div className="h-2 bg-cyan-200 rounded w-20 mx-auto"></div>
                <div className="h-2 bg-cyan-200 rounded w-12 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      case 'blog-cms':
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-100 to-orange-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-orange-200 rounded w-20 mx-auto"></div>
                <div className="h-2 bg-orange-200 rounded w-14 mx-auto"></div>
                <div className="h-2 bg-orange-200 rounded w-18 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      case 'social-media':
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-pink-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-pink-200 rounded w-18 mx-auto"></div>
                <div className="h-2 bg-pink-200 rounded w-16 mx-auto"></div>
                <div className="h-2 bg-pink-200 rounded w-20 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded w-16 mx-auto"></div>
                <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                <div className="h-2 bg-gray-200 rounded w-14 mx-auto"></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return getProjectSVG(type);
} 