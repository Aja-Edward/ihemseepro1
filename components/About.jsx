'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown, Zap, Target, Eye, Award, Users, Shield } from 'lucide-react'
import Banner from './banner/Banner'
import Image from 'next/image'

import Link from 'next/link'

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Uncompromising commitment to electrical safety standards and protocols"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge solutions using the latest electrical technologies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Premium quality workmanship that exceeds industry standards"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Tailored solutions that prioritize client satisfaction and needs"
    }
  ]

  return (
    <div className="relative bg-gray-900"
   
    >
      {/* Banner Section */}
      <Banner
        imagesource={'/assets/images/meter1.svg'}
        title='About Us'
        content='Discover the story behind Ihemsadiele & Sons - Your trusted partner in premium electrical solutions and sustainable energy systems'
      />

      {/* Video Background Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/video/aboutbannervideo.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 z-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }} />
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 z-10 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{paddingInline: '1rem'}}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Content Side */}
              <div className="space-y-8 lg:space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm"
                  style={{padding: '1rem 0.5rem'}}
                  >
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" style={{marginRight: '0.5rem'}}/>
                    <span className="text-sm font-medium text-cyan-300">Premium Electrical Solutions</span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
                    Ihemsadiele
                    <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    style={{marginTop: '0.5rem'}}
                    >
                      & Sons
                    </span>
                  </h1>
                  
                  <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    We are here to <span className="text-cyan-400 font-semibold">electrify your home</span> and make it 
                    <span className="text-blue-400 font-semibold"> comfortable</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1"
                   style={{padding: '2rem 1rem'}}
                  >
                    <span className="flex items-center justify-center">
                      Discover Our Services
                      <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                    style={{padding: '2rem 1rem'}}
                  >
                    <Link  href={'/profile'}>
                      View Profile
                    </Link>
                  
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative z-10 group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
                    <Image
                    width={400} height={300}
                      src="/assets/images/aboutus2.png"
                      alt="Ihemsadiele & Sons"
                      className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-2xl animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-20 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      style={{padding: '5rem 2rem'}}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Mission */}
            <div className="space-y-8"
            style={{marginBlockEnd: '2rem'}}
            >
              <div className="space-y-4"
               style={{marginBlockStart: '1rem'}}
              >
                <div className="flex items-center space-x-3"
                style={{marginBlockStart: '0.75rem'}}
                >
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Mission</h2>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Building Quality. Building Value.
                  <span className="block text-lg text-cyan-300 mt-2" style={{marginBottom: '0.5rem'}}>Building People. ®</span>
                </h3>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  Our mission is to provide comprehensive electrical solutions with unwavering commitment to quality, safety, and customer satisfaction. Through our expertise in house wiring, solar light installation and maintenance, as well as air conditioner system installation, repairs, and maintenance, we aim to create safe, energy-efficient, and comfortable environments for our clients.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-8" style={{marginBlockEnd: '2rem'}}>
              <div className="space-y-4"  style={{marginBlockStart: '1rem'}} >
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-blue-400" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Vision</h2>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Lead. Inspire. Build.
                </h3>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full" />
                <p className="text-gray-300 text-lg leading-relaxed pl-8" style={{paddingLeft: '2rem'}}>
                  Our vision is to be a leading electrical company known for our excellence in service, sustainable practices, and customer-centric approach. We aim to contribute to a greener future by promoting renewable energy solutions and energy-efficient electrical systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-20 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900"
      style={{padding: '5rem'}}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" style={{marginBottom: '4rem'}}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{marginBottom: '1.5rem'}}>Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
              style={{padding: '2rem'}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4" style={{marginBlockStart: '1rem'}}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      style={{padding: '5rem 1rem'}}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-12"
            style={{padding: '3rem'}}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{marginBottom: '1.5rem'}}
              >
                Ready to Electrify Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{marginBottom: '2rem'}}>
                Let us discuss how we can bring premium electrical solutions to your project
              </p>
              <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white text-lg hover:from-cyan-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
              style={{padding: '1rem 3rem'}}
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About