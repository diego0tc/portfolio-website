import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Diego Tejada Cardenas
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-orange-300 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white hover:text-orange-300 transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="text-white hover:text-orange-300 transition-colors">
                Resume
              </Link>
              <Link href="/about" className="text-orange-300 font-medium">
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
            About Me
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 text-center">
            The story behind the data analyst
          </p>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Personal Story */}
            <section className="bg-black/30 rounded-lg border border-orange-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>
                  Welcome to my corner of the data universe! I'm Diego, a data enthusiast 
                  with an unconventional path that combines economics, philosophy, and 
                  analytics to create meaningful insights.
                </p>
                <p>
                  My journey began with a deep curiosity about how decisions are made and 
                  how we can understand the world through patterns and evidence. This led me 
                  to study economics and philosophy, where I developed critical thinking skills 
                  and learned to question assumptions—essential tools for any data analyst.
                </p>
                <p>
                  Today, I'm passionate about transforming complex datasets into clear, 
                  actionable insights that help organizations and individuals make better 
                  decisions. Every chart, dashboard, and analysis tells a story, and I'm 
                  here to help unveil those stories.
                </p>
              </div>
            </section>

            {/* Philosophy & Approach */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">My Approach</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-3">Data</h3>
                  <p className="text-gray-300">
                    Every dataset has a story waiting to be discovered. I believe in 
                    rigorous analysis and letting the data guide the narrative.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-white mb-3">Insights</h3>
                  <p className="text-gray-300">
                    Raw data becomes powerful when transformed into clear, 
                    actionable insights that inform decision-making.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-3">Impact</h3>
                  <p className="text-gray-300">
                    The ultimate goal is real-world impact—using analytics 
                    to drive positive change and better outcomes.
                  </p>
                </div>
              </div>
            </section>

            {/* Background & Interests */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Background & Interests</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Academic Foundation</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Economics:</strong> Understanding markets, behavior, and quantitative analysis</li>
                    <li>• <strong>Philosophy:</strong> Critical thinking, logic, and ethical reasoning</li>
                    <li>• <strong>Analytics:</strong> Transforming theory into practical insights</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Data visualization and storytelling</li>
                    <li>• Business intelligence and dashboards</li>
                    <li>• Statistical analysis and interpretation</li>
                    <li>• Continuous learning in AI and machine learning</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Personal Touch */}
            <section className="bg-black/30 rounded-lg border border-gray-500/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Beyond the Data</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not diving into datasets, you might find me exploring new 
                technologies, reading about behavioral economics, or thinking about 
                how data can be used to solve real-world problems. I believe that 
                the best analysts combine technical skills with curiosity, empathy, 
                and a commitment to making the world a little bit better through 
                evidence-based insights.
              </p>
            </section>

            {/* Contact CTA */}
            <section className="bg-black/30 rounded-lg border border-orange-500/30 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-gray-300 text-lg mb-6">
                Interested in collaborating or discussing data analytics? I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  href="/resume"
                  className="border border-orange-400 hover:bg-orange-400/10 text-orange-400 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Download Resume
                </Link>
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