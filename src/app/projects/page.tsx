import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Diego Tejada Cardenas
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-blue-300 font-medium">
                Projects
              </Link>
              <Link href="/resume" className="text-white hover:text-blue-300 transition-colors">
                Resume
              </Link>
              <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            My Projects
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Exploring data through analytics, visualization, and insights that drive decision-making.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Project - Tableau Dashboard */}
            <div className="md:col-span-2 lg:col-span-3 bg-black/30 rounded-lg border border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Featured: The New Torontonian Parking Lesson
              </h3>
              <p className="text-gray-300 mb-6">
                Interactive Tableau dashboard analyzing parking trends and insights for Toronto newcomers.
              </p>
              
              {/* Placeholder for Tableau Embed */}
              <div className="bg-gray-800/50 rounded-lg p-8 border-2 border-dashed border-blue-400/50 text-center">
                <div className="text-blue-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Tableau Dashboard</h4>
                <p className="text-gray-400 mb-4">
                  Interactive visualization will be embedded here
                </p>
                <div className="text-sm text-blue-400">
                  📊 Ready for Tableau Public embed URL<br/>
                  🖼️ Space for project images<br/>
                  ⚡ Advanced features to be implemented
                </div>
              </div>
            </div>

            {/* Project Placeholder 1 */}
            <div className="bg-black/30 rounded-lg border border-gray-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Data Analysis Project
              </h3>
              <p className="text-gray-300 mb-4">
                Placeholder for additional analytics project.
              </p>
              <div className="text-sm text-gray-500">
                Coming Soon...
              </div>
            </div>

            {/* Project Placeholder 2 */}
            <div className="bg-black/30 rounded-lg border border-gray-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Visualization Study
              </h3>
              <p className="text-gray-300 mb-4">
                Placeholder for data visualization project.
              </p>
              <div className="text-sm text-gray-500">
                Coming Soon...
              </div>
            </div>

            {/* Project Placeholder 3 */}
            <div className="bg-black/30 rounded-lg border border-gray-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Research Project
              </h3>
              <p className="text-gray-300 mb-4">
                Placeholder for research and insights project.
              </p>
              <div className="text-sm text-gray-500">
                Coming Soon...
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-400 border-t border-gray-700">
        <p>&copy; 2025 Diego Tejada Cardenas. All rights reserved.</p>
      </footer>
    </div>
  );
} 