'use client'

import { useState, useEffect } from 'react'
  import Image from 'next/image'

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
        </svg>
      ),
      href: 'https://wa.me/+2347035051476',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-400/10'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.388a5.918 5.918 0 00-2.14 1.393A5.918 5.918 0 00.884 4.02C.7 4.52.578 5.094.544 6.041.009 6.989-.001 7.396-.001 11.017c0 3.621.013 4.028.048 4.976.034.947.156 1.521.34 2.021a5.918 5.918 0 001.393 2.14 5.918 5.918 0 002.14 1.393c.5.184 1.074.306 2.021.34.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.021-.34a5.918 5.918 0 002.14-1.393 5.918 5.918 0 001.393-2.14c.184-.5.306-1.074.34-2.021.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.34-2.021a5.918 5.918 0 00-1.393-2.14A5.918 5.918 0 0018.982.884c-.5-.184-1.074-.306-2.021-.34C16.013.009 15.606-.001 12.017-.001h.002zm-.717 1.442h.718c3.136 0 3.506.012 4.741.066.945.042 1.504.207 1.857.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.302.912.344 1.857.054 1.235.066 1.605.066 4.741 0 3.136-.012 3.506-.066 4.741-.042.945-.207 1.504-.344 1.857a3.097 3.097 0 01-.748 1.15 3.098 3.098 0 01-1.15.748c-.353.137-.912.302-1.857.344-1.235.054-1.605.066-4.741.066-3.136 0-3.506-.012-4.741-.066-.945-.042-1.504-.207-1.857-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.302-.912-.344-1.857-.054-1.235-.066-1.605-.066-4.741 0-3.136.012-3.506.066-4.741.042-.945.207-1.504.344-1.857.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.912-.302 1.857-.344 1.08-.049 1.501-.063 4.741-.063l.002.001zm0 2.45c-3.259 0-5.9 2.641-5.9 5.9 0 3.259 2.641 5.9 5.9 5.9 3.259 0 5.9-2.641 5.9-5.9 0-3.259-2.641-5.9-5.9-5.9zm0 2.441c1.918 0 3.459 1.541 3.459 3.459 0 1.918-1.541 3.459-3.459 3.459-1.918 0-3.459-1.541-3.459-3.459 0-1.918 1.541-3.459 3.459-3.459zm6.791-2.84c-.798 0-1.442.644-1.442 1.442 0 .798.644 1.442 1.442 1.442.798 0 1.442-.644 1.442-1.442 0-.798-.644-1.442-1.442-1.442z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-400/10'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
   
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x / 20}% ${mousePosition.y / 20}%, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)`
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Top Section */}
        <div className="container mx-auto px-6 py-16"
       style={{padding: '1.5rem 4rem'}}
        >
          <div className="grid lg:grid-cols-3 gap-12 items-start"
       
          >

                       
            {/* Logo & Company Info */}
            <div className="lg:col-span-1 space-y-8"
               style={{gap: '2rem'}}
            >
              <div className="group">
                <div className="flex items-center space-x-4 mb-6"
                  style={{gap: '1rem', marginBottom: '1.6rem'}} 
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <Image width={200} height={200} alt='Ihemsadiele logo' src={'/assets/images/ihemseeprologo3.svg'}/>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Ihemsadiele & Sons
                    </h3>
                    <p className="text-gray-400 text-sm">Electrical Solutions Ltd.</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8"
                style={{marginBottom: '2rem'}}
                >
                  Your trusted partner for comprehensive electrical solutions including solar installations, 
                  AC systems, house wiring, and maintenance services. Delivering excellence since 2020.
                </p>
                
                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Solar Expert', 'AC Installation', 'House Wiring', 'General Electrical'].map((service) => (
                    <span 
                      key={service}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
                   style={{padding:'0.25rem 0.75rem'}}
                   >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8"
            style={{gap: '2rem'}}
            >
              <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              style={{marginBottom: '1.5rem'}}
              >
                Get In Touch
              </h4>
              
              <div className="space-y-6"
              style={{gap: '1.5rem'}}
              >
                {/* Phone */}
                <div className="group flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                style={{padding: '1rem', gap: '1rem'}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1" style={{marginBottom: '0.25rem'}}>Phone</p>
                    <p className="text-white font-medium">(+234) 703 505 1476</p>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                
                 style={{padding: '1rem', gap: '1rem', marginBlockStart: ' 2rem'}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1" style={{marginBottom: '0.25rem'}}>Email</p>
                    <p className="text-white font-medium">ihemsadiele22@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              style={{marginBottom: '1.5rem'}}
              >
                Connect With Us
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-700/50 backdrop-blur-sm border border-gray-600/50 ${social.bgColor} ${social.color} transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms`, padding: '1.5rem' }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3" style={{marginBlockStart: '0.75rem'}}>
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </div>
                    
                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8" style={{padding: '1.5rem 2rem'}}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2" style={{marginBlockStart: '0.5rem'}}>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <p className="text-gray-400 text-sm">
                  © 2025 Ihemsadiele & Sons Ltd. All rights reserved.
                </p>
              </div> 

              {/* Credits */}
              <div className="flex items-center space-x-2 text-gray-500 text-sm" style={{marginBlockStart: '0.5rem'}}>
                <span>Powered by</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Sterling Digitals Ltd
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute top-4 right-4">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
      </div>
    </footer>
  )
}

export default Footer