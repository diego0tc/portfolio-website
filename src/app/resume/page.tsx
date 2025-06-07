import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Diego Tejada Cardenas
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white hover:text-green-300 transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="text-green-300 font-medium">
                Resume
              </Link>
              <Link href="/about" className="text-white hover:text-green-300 transition-colors">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Resume
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 text-center">
            Economics & Philosophy background • Data Analytics journey • Impact-driven insights
          </p>

          {/* Download Button */}
          <div className="text-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Download PDF Resume
            </button>
          </div>

          {/* Resume Sections */}
          <div className="space-y-12">
            
            {/* Professional Summary */}
            <section className="bg-black/30 rounded-lg border border-green-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Professional Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Data enthusiast with a unique blend of economics and philosophy background, 
                passionate about transforming complex datasets into actionable insights. 
                Skilled in analytics, visualization, and storytelling with data to drive 
                evidence-based decision making.
              </p>
            </section>

            {/* Experience */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
              
              {/* Job Placeholder 1 */}
              <div className="mb-8 pb-8 border-b border-gray-600">
                <h3 className="text-xl font-bold text-white mb-2">Analytics Role</h3>
                <div className="text-green-400 mb-3">Company Name • Duration</div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Key achievement in data analysis</li>
                  <li>• Project impact and results</li>
                  <li>• Technical skills utilized</li>
                </ul>
              </div>

              {/* Job Placeholder 2 */}
              <div className="mb-8 pb-8 border-b border-gray-600">
                <h3 className="text-xl font-bold text-white mb-2">Previous Role</h3>
                <div className="text-green-400 mb-3">Organization • Duration</div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Major responsibility or project</li>
                  <li>• Quantifiable impact</li>
                  <li>• Skills and tools used</li>
                </ul>
              </div>

            </section>

            {/* Education */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Economics & Philosophy</h3>
                <div className="text-green-400 mb-3">University • Degree Details</div>
                <p className="text-gray-300">
                  Foundation in analytical thinking, critical reasoning, and quantitative methods.
                </p>
              </div>

            </section>

            {/* Skills */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Analytics & Visualization</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Tableau Public</li>
                    <li>• Data Analysis</li>
                    <li>• Statistical Methods</li>
                    <li>• Dashboard Creation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Tools & Technologies</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Excel/Google Sheets</li>
                    <li>• SQL</li>
                    <li>• Python/R</li>
                    <li>• Data Storytelling</li>
                  </ul>
                </div>
              </div>

            </section>

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