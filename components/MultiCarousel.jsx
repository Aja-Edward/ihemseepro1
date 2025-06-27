
'use client'

import { useState, useEffect } from 'react'

// Service data
const services = [
  {
    id: 1,
    title: 'Solar Expert',
    description: 'Professional solar panel installation and maintenance services',
    icon: '☀️',
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-400/10 to-orange-500/10'
  },
  {
    id: 2,
    title: 'AC Installer',
    description: 'Complete air conditioning system installation and repair',
    icon: '❄️',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-400/10 to-cyan-500/10'
  },
  {
    id: 3,
    title: 'House Wiring',
    description: 'Comprehensive electrical wiring for residential properties',
    icon: '⚡',
    gradient: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-400/10 to-pink-500/10'
  },
  {
    id: 4,
    title: 'General Electricals',
    description: 'All types of electrical installations and maintenance',
    icon: '🔧',
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-400/10 to-emerald-500/10'
  },
  {
    id: 5,
    title: 'Solar Battery Repair',
    description: 'Expert repair and maintenance of solar battery systems',
    icon: '🔋',
    gradient: 'from-red-400 to-rose-500',
    bgGradient: 'from-red-400/10 to-rose-500/10'
  },
  {
    id: 6,
    title: 'Power Switcher',
    description: 'Automatic power switching systems installation',
    icon: '🔄',
    gradient: 'from-indigo-400 to-blue-500',
    bgGradient: 'from-indigo-400/10 to-blue-500/10'
  }
]

// Background particles component
const BackgroundParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-cyan-400 opacity-20 rounded-full animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      />
    ))}
  </div>
)

// Service card component
const ServiceCard = ({ service, index, isActive }) => (
  <div 
    className={`
      relative group cursor-pointer transition-all duration-700 transform mx-4
      ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}
    `}
    style={{
      transform: isActive ? 'scale(1.05)' : 'scale(0.95)',
      opacity: isActive ? 1 : 0.8,
      zIndex: isActive ? 10 : 1
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)'
      e.currentTarget.style.zIndex = '20'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = isActive ? 'scale(1.05)' : 'scale(0.95)'
      e.currentTarget.style.zIndex = isActive ? '10' : '1'
    }}
  >
    {/* Card container */}
    <div 
      className="relative overflow-hidden rounded-3xl bg-gray-800 border border-gray-600 shadow-2xl transition-all duration-500"
      style={{
        padding: '2rem',
        paddingTop: '3rem',
        height: '20rem',
        width: '18rem',
        background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.9), rgba(31, 41, 55, 0.9))',
        backdropFilter: 'blur(8px)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full">
        
        {/* Icon with animation */}
        <div className="mb-6 relative" style={{ paddingTop: '1rem' }}>
          <div 
            className="text-6xl mb-4 transform transition-all duration-500 filter drop-shadow-lg group-hover:scale-125"
            style={{ fontSize: '3rem', marginBottom: '1rem' }}
          >
            {service.icon}
          </div>
          
          {/* Rotating ring around icon */}
          <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-cyan-400 opacity-30 rounded-full animate-spin group-hover:opacity-100 transition-opacity duration-500" 
               style={{ opacity: 0, borderColor: 'rgba(34, 211, 238, 0.3)' }} />
        </div>
        
        {/* Title */}
        <h3 
          className="text-2xl font-bold mb-4 text-white transition-all duration-300"
          style={{
            background: `linear-gradient(to right, #fbbf24, #f97316)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div 
            className="w-12 h-0.5 rounded-full animate-pulse"
            style={{
              background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
              width: '3rem',
              height: '2px',
         

            }}
          />
        </div>
      </div>
      
      {/* Corner accent */}
      <div 
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
      />
    </div>
  </div>
)

// Play/Pause Toggle Slider Component
const PlayPauseSlider = ({ isPlaying, onToggle }) => (
  <div className="flex items-center justify-center mt-8 mb-4"
  style={{ gap: 10, marginTop: '2rem' }}
  >
    <div 
      className="flex items-center rounded-full  shadow-2xl"
      style={{
        background: 'linear-gradient(to right, rgba(31, 41, 55, 0.9), rgba(55, 65, 81, 0.9))',
        backdropFilter: 'blur(8px)',
        borderColor: 'oklch(78.9% 0.154 211.53)',
        gap: '2rem',
        padding: '6px 12px',
        border: '0.5px solid oklch(78.9% 0.154 211.53)'
      }}

    >
      {/* Pause text - only visible when not playing */}
      {!isPlaying && (
        <span className="text-sm font-medium text-gray-400 transition-all duration-300">
          Pause
        </span>
      )}
      
      <button
        onClick={onToggle}
        className="relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out"
        style={{
          background: isPlaying ? 'linear-gradient(to right, #22d3ee, #3b82f6)' : '#4b5563',
          borderRadius: '9999px'
        }}
      >
        <div 
          className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform flex items-center justify-center"
          style={{
            transform: isPlaying ? 'translateX(2.25rem)' : 'translateX(0.25rem)'
          }}
        >
          {isPlaying ? (
            <svg className="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          ) : (
            <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          )}
        </div>
      </button>
      
      {/* Play text - only visible when playing */}
      {isPlaying && (
        <span className="text-sm font-medium text-gray-400 transition-all duration-300">
          Play
        </span>
      )}
    </div>
  </div>
)

const MultiCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const getVisibleServices = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length
      visible.push({ ...services[index], isActive: i === 1 })
    }
    return visible
  }

  return (
    <section 
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827, #1e293b, #000000)',
        minHeight: '100vh', paddingTop: '6rem', paddingBottom: '6rem'
      }}
    >
      
      {/* Background Effects */}
      <BackgroundParticles />
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: 0.05,
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto"
        style={{marginTop: "1rem", marginBottom: "2rem"}}>
          <div className="inline-flex items-center py-3 mb-6" style={{ gap: '0.75rem', padding: '1.5rem 0.75rem', marginBottom: '1.5rem' }}>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-medium tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
          
          <h2 
            className="text-5xl py-3 lg:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(to right, #ffffff, #22d3ee, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '3rem'
            }}
          >
            Main Services
          </h2>
          
          <div 
            className="w-24 h-1 rounded-full mx-auto mb-8 animate-pulse"
            style={{
              background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
              width: '6rem',
              height: '4px'
            }}
          />
          
          <p className="text-xl py-3 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ihemsadiele & Sons Ltd. delivers comprehensive electrical solutions including 
            solar installations, AC systems, house wiring, and maintenance services. 
            Your trusted partner for reliable power solutions.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          
          {/* Services Display */}
          <div 
            className="flex items-center justify-center mb-12"
            style={{ gap: '2rem'}}
          >
            {getVisibleServices().map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isActive={service.isActive}
              />
            ))}
          </div>
          
          {/* Enhanced Navigation Controls Container */}
          <div className="flex items-center justify-center"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3.5rem',
          }}
         >
            <div 
              className="flex items-center px-8 py-4 rounded-2xl shadow-2xl"
              style={{
                background: 'linear-gradient(to right, rgba(31, 41, 55, 0.6), rgba(55, 65, 81, 0.6))',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(34, 211, 238, 0.2)',
                gap: '2rem',
                width: "30%",
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
               }}
            >
              
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="group relative p-3 rounded-xl border transition-all duration-300"
                style={{
                  background: 'linear-gradient(to right, #374151, #4b5563)',
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  padding: '0.7rem',
                  borderRadius: '0.7rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                  e.currentTarget.style.borderColor = '#22d3ee'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)'
                }}
              >
                <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center px-4" style={{ gap: '0.5rem', paddingLeft: '1rem', paddRight: '1rem'  }}>
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === currentIndex ? '#22d3ee' : '#6b7280',
                      transform: index === currentIndex ? 'scale(1.25)' : 'scale(1)',
                      boxShadow: index === currentIndex ? '0 0 10px rgba(34, 211, 238, 0.8)' : 'none',
                      borderRadius: 'calc(infinity * 1px)'
                    }}
                    onMouseEnter={(e) => {
                      if (index !== currentIndex) {
                        e.currentTarget.style.backgroundColor = '#9ca3af'
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== currentIndex) {
                        e.currentTarget.style.backgroundColor = '#6b7280'
                        e.currentTarget.style.transform = 'scale(1)'
                      }
                    }}
                  />
                ))}
              </div>
              
              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="group relative p-3 rounded-xl border transition-all duration-300"
                style={{
                  background: 'linear-gradient(to right, #374151, #4b5563)',
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                   padding: '0.7rem',
                  borderRadius: '0.7rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                  e.currentTarget.style.borderColor = '#22d3ee'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)'
                }}
              >
                <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Play/Pause Slider */}
          <PlayPauseSlider 
            isPlaying={isPlaying} 
            onToggle={() => setIsPlaying(!isPlaying)} 
          />
        </div>
      </div>
    </section>
  )
}

export default MultiCarousel