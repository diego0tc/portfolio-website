'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  // Project data with DRAMATIC styling changes and panoramic backgrounds
  const projects = [
    {
      id: 'shelter-paws',
      title: 'Shelter Paws Analytics',
      description: 'Revolutionary data insights on animal adoption patterns, revealing a world of silent hopes and tracing the paths that guide shelter animals to their forever homes. Advanced machine learning algorithms predict adoption success.',
      type: 'tableau',
      backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      tools: ['Tableau', 'Machine Learning', 'SQL', 'Python'],
      color: '#FF6B35', // BRIGHT ORANGE
      contrastColor: '#FFFFFF',
      link: 'https://public.tableau.com/app/profile/diego.tejada.cardenas'
    },
    {
      id: 'toronto-parking',
      title: 'Toronto Parking Revolution',
      description: 'Game-changing analysis of Toronto\'s parking ecosystem using geospatial intelligence and predictive modeling. Transforming urban mobility through data-driven insights and cost optimization strategies.',
      type: 'tableau',
      backgroundImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      tools: ['Tableau', 'GIS', 'Urban Analytics', 'Predictive Modeling'],
      color: '#6C5CE7', // BRIGHT PURPLE
      contrastColor: '#FFFFFF',
      link: 'https://public.tableau.com/app/profile/diego.tejada.cardenas'
    },
    {
      id: 'economic-analysis',
      title: 'Economic Intelligence Platform',
      description: 'Deep-dive economic analysis combining philosophical inquiry with cutting-edge data science. Uncovering hidden market patterns through advanced statistical modeling and behavioral economics.',
      type: 'analysis',
      backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      tools: ['Python', 'R', 'Statistical Modeling', 'Behavioral Economics'],
      color: '#00B894', // BRIGHT GREEN
      contrastColor: '#FFFFFF'
    },
    {
      id: 'data-philosophy',
      title: 'Philosophy × Data Science',
      description: 'Groundbreaking fusion of philosophical inquiry and modern data analytics. Exploring consciousness, ethics, and meaning through the lens of computational intelligence and pattern recognition.',
      type: 'analysis',
      backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      tools: ['Research', 'AI Ethics', 'Philosophy', 'Data Mining'],
      color: '#E17055', // BRIGHT CORAL
      contrastColor: '#FFFFFF'
    }
  ];

  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.type === filter);
    setFilteredProjects(filtered);
  }, [filter]);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      if (position.top < window.innerHeight - 200 && !isAnimated) {
        setIsAnimated(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);

  return (
    <div className="min-h-screen">
      {/* DRAMATIC Navigation with Panoramic Background */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-teal-900/95 backdrop-blur-lg border-b-4 border-orange-500 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-white font-bold text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              🚀 DIEGO TC - DATA WIZARD 🚀
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-lg">🏠 Home</a>
              <a href="#about" className="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-lg">👨‍💼 About</a>
              <a href="#projects" className="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-lg">🚀 Projects</a>
              <a href="#resume" className="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-lg">📄 Resume</a>
              <a href="#contact" className="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-lg">📧 Contact</a>
            </nav>

            <button className="md:hidden text-orange-300 text-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* SPECTACULAR Hero Section with Panoramic Background */}
      <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
        {/* PANORAMIC Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')"
          }}
        ></div>
        
        {/* DRAMATIC Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-teal-900/80"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* GIANT Animated Title */}
            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text mb-8 opacity-0 transition-opacity duration-2000 animate-pulse">
              DIEGO TEJADA CARDENAS
            </h1>
            
            {/* DRAMATIC Subtitle */}
            <p className="text-2xl md:text-4xl lg:text-5xl text-orange-300 mb-12 font-bold animate-bounce">
              🔥 UNLEASHING DATA'S HIDDEN STORIES 🔥
            </p>
            
            {/* SPECTACULAR Data Mantra */}
            <div className="mb-16 overflow-hidden py-6 bg-black/30 rounded-full">
              <div className="animate-scroll text-2xl md:text-3xl text-yellow-300 font-black">
                🚀 DATA • INSIGHTS • REVOLUTION • INNOVATION • ANALYTICS • IMPACT • 🚀
              </div>
            </div>
            
            {/* BRIGHT Skills badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl flex items-center shadow-2xl transform hover:scale-110 transition-transform">
                <span className="text-3xl mr-4">📊</span>
                <span className="text-white font-bold text-xl">DATA ANALYTICS</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl flex items-center shadow-2xl transform hover:scale-110 transition-transform">
                <span className="text-3xl mr-4">📈</span>
                <span className="text-white font-bold text-xl">TABLEAU DASHBOARDS</span>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-2xl flex items-center shadow-2xl transform hover:scale-110 transition-transform">
                <span className="text-3xl mr-4">💡</span>
                <span className="text-white font-bold text-xl">BUSINESS INSIGHTS</span>
              </div>
            </div>
            
            {/* MASSIVE Call to Action Button */}
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-12 py-6 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all flex items-center mx-auto text-2xl font-bold shadow-2xl transform hover:scale-110 animate-pulse"
            >
              🚀 EXPLORE MY UNIVERSE 🚀
              <svg className="ml-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* VIBRANT About Section with New Panoramic Background */}
      <section id="about" className="py-20 relative">
        {/* NEW Panoramic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-blue-900/90 to-purple-900/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-16 text-center animate-pulse">
            🌟 ABOUT THE DATA WIZARD 🌟
          </h2>
          
          {/* Background + My Approach Cards with BRIGHT colors */}
          <div className="md:flex md:space-x-8 mb-16">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 h-full shadow-2xl transform hover:scale-105 transition-transform">
                <h3 className="text-3xl font-black text-white mb-6">🎯 BACKGROUND</h3>
                <p className="text-white leading-relaxed text-lg font-medium">
                  Hello, I'm Diego Tejada Cárdenas! 🚀 A data enthusiast with an insatiable curiosity for unlocking the secrets hidden within numbers. My journey began with a fervent desire to understand the 'WHY' behind everything—particularly in economics and philosophy.
                </p>
                <p className="text-white leading-relaxed mt-4 text-lg font-medium">
                  Through economics, I discovered the ultimate lens to analyze our world, leading me to the revolutionary field of DATA ANALYTICS! 🔥
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 h-full shadow-2xl transform hover:scale-105 transition-transform">
                <h3 className="text-3xl font-black text-white mb-6">⚡ MY APPROACH</h3>
                <p className="text-white leading-relaxed mb-6 text-lg font-medium">
                  I've mastered the art of DATA ALCHEMY! ✨ This website showcases my revolutionary projects that bridge philosophical thinking with cutting-edge analytics. Every project tells a story of transformation!
                </p>
                
                <h4 className="text-2xl font-black text-yellow-300 mb-4">🌟 WHERE CURIOSITY MEETS DATA:</h4>
                <ul className="list-none text-white space-y-3">
                  <li className="flex items-center text-lg font-medium">🔥 Fusing economics & philosophy with data science</li>
                  <li className="flex items-center text-lg font-medium">🚀 Transforming complex data into compelling narratives</li>
                  <li className="flex items-center text-lg font-medium">💡 Bridging analytical rigor with creative innovation</li>
                  <li className="flex items-center text-lg font-medium">🎯 Uncovering the 'WHY' behind every data pattern</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* COLORFUL Skills Grid */}
          <h3 className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-12 text-center">
            🛠️ SKILLS & SUPERPOWERS 🛠️
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 transform hover:scale-110 transition-transform shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-4xl flex items-center justify-center">📊</div>
                <h4 className="text-2xl font-black text-white ml-4">DATA ANALYSIS</h4>
              </div>
              <ul className="text-white font-medium">
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>Tableau</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>SQL</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>Excel</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>Statistical Analysis</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 transform hover:scale-110 transition-transform shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-4xl flex items-center justify-center">💡</div>
                <h4 className="text-2xl font-black text-white ml-4">ECONOMICS</h4>
              </div>
              <ul className="text-white font-medium">
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>Economic Analysis</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>Market Research</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>Behavioral Economics</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>Policy Analysis</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 transform hover:scale-110 transition-transform shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-4xl flex items-center justify-center">📈</div>
                <h4 className="text-2xl font-black text-white ml-4">VISUALIZATION</h4>
              </div>
              <ul className="text-white font-medium">
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>Dashboard Design</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>Data Storytelling</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>Interactive Reports</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>Business Intelligence</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 transform hover:scale-110 transition-transform shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-4xl flex items-center justify-center">🔧</div>
                <h4 className="text-2xl font-black text-white ml-4">TOOLS</h4>
              </div>
              <ul className="text-white font-medium">
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>Python</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>R</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>JavaScript</li>
                <li className="mb-3 flex items-center"><span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLOSIVE Projects Section with Panoramic Background */}
      <section id="projects" className="py-20 relative">
        {/* ANOTHER Panoramic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text mb-16 text-center animate-pulse">
            🚀 REVOLUTIONARY PROJECTS 🚀
          </h2>
          
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-2xl inline-flex shadow-2xl">
              <button
                onClick={() => setFilter('all')}
                className={`px-8 py-4 rounded-xl text-lg font-black transition-all transform hover:scale-105 ${
                  filter === 'all' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                🌟 ALL PROJECTS
              </button>
              <button
                onClick={() => setFilter('tableau')}
                className={`px-8 py-4 rounded-xl text-lg font-black transition-all transform hover:scale-105 ${
                  filter === 'tableau' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                📊 TABLEAU MAGIC
              </button>
              <button
                onClick={() => setFilter('analysis')}
                className={`px-8 py-4 rounded-xl text-lg font-black transition-all transform hover:scale-105 ${
                  filter === 'analysis' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                🔬 DATA SCIENCE
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <SuperProjectCard
                key={project.id}
                project={project}
                isAnimated={isAnimated}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Following Bolt Pattern Exactly */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          
          <div className="md:flex md:space-x-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-gray-700 rounded-lg p-6 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-300">contact@diego-tc.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-300">Toronto, ON, Canada</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-white font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">L</a>
                    <a href="mailto:contact@diego-tc.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">M</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Send Message 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-2xl mb-6 md:mb-0">Diego Tc - Analytics</div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:contact@diego-tc.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
              <a href="#resume" className="text-gray-400 hover:text-white transition-colors">Resume</a>
            </div>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Diego Tejada Cardenas. All rights reserved.</p>
            <p className="mt-2">Designed and built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-fadeIn {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

// SUPER DRAMATIC Project Card Component
interface SuperProjectCardProps {
  project: any;
  isAnimated: boolean;
  delay: number;
}

function SuperProjectCard({ project, isAnimated, delay }: SuperProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`transition-all duration-700 transform ${
        isAnimated 
          ? 'translate-y-0 opacity-100 rotate-0' 
          : 'translate-y-32 opacity-0 rotate-3'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="relative overflow-hidden rounded-3xl transition-all duration-700 h-[600px] group cursor-pointer shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 hover:rotate-1"
        style={{ backgroundColor: project.color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${project.backgroundImage}')`,
            opacity: isHovered ? 0.2 : 0.6,
            transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1)',
            filter: isHovered ? 'saturate(1.5) contrast(1.2)' : 'saturate(1)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/50 to-transparent" />
        
        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center mb-6">
              <span 
                className="px-6 py-3 rounded-full text-lg font-black shadow-lg transform hover:scale-110 transition-transform"
                style={{ 
                  backgroundColor: project.contrastColor,
                  color: project.color
                }}
              >
                {project.type === 'tableau' ? '📊 TABLEAU POWER' : '🔬 DATA SCIENCE'}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight transform hover:scale-105 transition-transform">
              {project.title}
            </h3>
            
            <p className={`mb-6 text-gray-100 text-lg leading-relaxed transition-all duration-500 ${
              isHovered ? 'opacity-100 text-white' : 'opacity-90'
            }`}>
              {project.description}
            </p>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-black mb-4 text-yellow-300">🛠️ TECH ARSENAL:</h4>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool: string, index: number) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-xl text-sm font-black border-2 transform hover:scale-110 transition-transform shadow-lg"
                    style={{ 
                      backgroundColor: `${project.color}dd`,
                      borderColor: project.contrastColor,
                      color: project.contrastColor
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={`transition-all duration-700 transform ${
              isHovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('/projects', '_blank')}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-black transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  style={{ 
                    backgroundColor: project.contrastColor,
                    color: project.color
                  }}
                >
                  🚀 EXPLORE PROJECT
                </button>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-black border-4 transition-all duration-300 transform hover:scale-110 hover:bg-white/20 shadow-2xl"
                    style={{ 
                      borderColor: project.contrastColor,
                      color: project.contrastColor
                    }}
                  >
                    📊 LIVE TABLEAU
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
