
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Floating particles for light theme
const LightParticles = () => {
  const [particles, setParticles] = useState([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 8
    }))
    setParticles(newParticles)
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)'
          }}
        />
      ))}
    </div>
  )
}

// Animated background elements
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Geometric shapes with dark theme colors */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce backdrop-blur-sm border border-blue-400/30" style={{ animationDuration: '6s' }} />
    <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-lg rotate-45 animate-spin backdrop-blur-sm border border-purple-400/30" style={{ animationDuration: '15s' }} />
    <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse backdrop-blur-sm border border-pink-400/30" style={{ animationDuration: '4s' }} />
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-500/15 rounded-full animate-bounce backdrop-blur-sm border border-indigo-400/20" style={{ animationDuration: '8s', animationDelay: '2s' }} />
    
    {/* Gradient orbs */}
    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '10s' }} />
    <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
    
    {/* Additional glow effects */}
    <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
  </div>
)

const Banner = ({ imagesource, title, content }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  // Function to normalize image source
  const normalizeImageSrc = (src) => {
    if (!src) return null
    
    // If it's already an absolute URL, return as is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    
    // If it starts with a slash, it's already properly formatted
    if (src.startsWith('/')) {
      return src
    }
    
    // Add leading slash for relative paths
    return `/${src}`
  }
  
  const normalizedImageSrc = normalizeImageSrc(imagesource)
  
  return (
    <div className="relative min-h-[50vh] w-full overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #60a5fa 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #a78bfa 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }} />
      </div>
      
      <AnimatedBackground />
      <LightParticles />
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full min-h-[50vh] px-6 lg:px-20"
      style={{padding: '1.5rem'}}
      >
        
        {/* Text content */}
        <div className={`
          flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left
          transform transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          
          {/* Title with gradient and animations */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
           style={{marginBottom: '1.5rem'}}
          >
            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                {title}
              </span>
            </span>
          </h1>
          
          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6 animate-pulse shadow-lg shadow-blue-500/50" 
           style={{marginBottom: '1.5rem'}}
          ></div>
          
          {/* Content text */}
          <p className={`
            text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow-sm
            transform transition-all duration-1000 ease-out delay-300
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
          style={{textAlign: 'left'}}
          >
            {content}
          </p>
          
          {/* Call-to-action button */}
          <div className={`
            mt-8 transform transition-all duration-1000 ease-out delay-500
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
           style={{marginTop: '2rem'}}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden border border-blue-500/30"
            style={{padding: '2rem 1rem', borderRadius: '1rem'}}
            >
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative z-10 flex items-center gap-2 rounded-2xl"
             
              >
                Get Started
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        {/* Image container with enhanced animations */}
        <div className={`
          flex-1 flex justify-center items-center mt-8 lg:mt-0
          transform transition-all duration-1000 ease-out delay-700
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
        `}
        
         style={{marginTop: '2rem'}}>
          
          <div className="relative group">
            {/* Floating backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            
            {/* Image container */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105 border border-gray-700/60"
            style={{padding: '1rem'}}
            >
              {normalizedImageSrc ? (
                <Image
                  src={normalizedImageSrc}
                  alt="Banner illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto max-w-md object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    console.error('Image failed to load:', normalizedImageSrc)
                    // Hide the image container if image fails to load
                    e.target.parentElement.style.display = 'none'
                  }}
                />
              ) : (
                // Fallback placeholder when no image is provided
                <div className="w-full h-64 max-w-md bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center border border-gray-600/30">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Image placeholder</p>
                  </div>
                </div>
              )}
              
              {/* Image overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative elements around image */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-ping shadow-lg shadow-blue-500/50" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      {/* Responsive mobile adjustments */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .banner-title {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .banner-content {
            font-size: 1rem !important;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Banner