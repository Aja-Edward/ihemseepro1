'use client'

import React, { useState } from 'react';
import { ChevronRight, Zap, Lightbulb, Settings, Sparkles } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'

// Mock data - replace with your actual projects data
const projects = [
  {
    id: 1,
    title: "Smart Home Lighting",
    description: "Complete home automation system with IoT integration",
    image: "/assets/images/ligningsupplys.jpeg",
    category: "Residential"
  },
  {
    id: 2,
    title: "Industrial Control Systems",
    description: "Advanced PLC-based control systems for manufacturing",
    image: "/assets/images/croatia-2477821_1920.jpg",
    category: "Industrial"
  },
  {
    id: 3,
    title: "Renewable Energy Solutions",
    description: "Solar and wind energy integration systems",
    image: "/assets/images/inverterbattrey.jpeg",
    category: "Green Energy"
  }
];

const ProjectCard = ({ title, description, image, category }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 mx-4 mb-6"
  style={{margin: '1rem'}}
  >
    {/* Gradient overlay for premium look */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
    
    <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Premium floating badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm"
        style={{padding: '0.73rem 0.5rem'}}
        >
          {category}
        </span>
      </div>
    </div>
    
    <div className="relative p-6 z-20"
    style={{padding: '1.5rem',zIndex: '20'}}
    >
      <h4 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-6"
      style={{marginBottom: '1.5rem'}}
      >
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300"
        style={{cursor: 'pointer'}}
        >
          <Link href={'/projects'}>
           Learn more
          </Link>
         
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  </div>
);

const Button = ({ text, variant = 'primary', onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group
      ${variant === 'primary' 
        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700' 
        : 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
      }
    `}
    style={{padding: '1.5rem 1rem'}}
  >
    <span className="relative z-10">{text}</span>
    {variant === 'primary' && (
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    )}
  </button>
);

const Mycards = () => {
  const [activeTab, setActiveTab] = useState('first');

  const tabs = [
    { id: 'first', label: 'All Projects', icon: Settings },
    { id: 'second', label: 'Residential', icon: Lightbulb },
    { id: 'third', label: 'Commercial', icon: Zap }
  ];

  const getActiveTabIndex = () => tabs.findIndex(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="project"
    style={{paddingTop: '5rem', paddingBottom: '5rem'}}
    >
      {/* Ultra premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/40"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Main container with ultra premium styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1"
      style={{padding: '2rem 1rem'}}>
        <div className="flex flex-col justify-center items-center bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 lg:p-16 relative overflow-hidden"
        style={{padding: '2rem'}}
        >
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-blue-50/30 pointer-events-none"></div>
          
          {/* Header Section - Fixed centering and sizing */}
          <div className="text-center mb-16 relative z-10 w-full"
          style={{marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
          >
            <div className="flex items-center justify-center gap-3 mb-6"
            style={{gap: '0.75rem', marginBottom: '1.5rem'}}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Fixed title sizing and centering */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight text-center mx-auto">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">Projects</span>
            </h2>
            
            {/* Fixed paragraph centering */}
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light text-center">
              Discover our innovative electrical and electronic projects, where
              cutting-edge technology meets expert craftsmanship, delivering
              seamless solutions tailored to your specific needs.
            </p>
          </div>

          {/* Fixed Tab Navigation with proper spacing */}
          <div className="flex justify-center mb-12 relative z-10 w-full"
          style={{marginBottom: '3rem'}}
          >
            <div className="relative p-2 bg-gradient-to-r from-gray-100/80 via-white/80 to-gray-100/80 rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-xl max-w-2xl w-full mx-4"
            style={{marginLeft: '1rem', marginRight: '1rem', padding: '1rem'}}
            >
              {/* Enhanced animated background indicator */}
              <div 
                className="absolute top-2 bottom-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-xl shadow-xl transition-all duration-500 ease-in-out border border-blue-300/30"
                style={{
                  left: `${8 + (getActiveTabIndex() * 33.33)}%`,
                  width: 'calc(33.33% - 16px)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-xl"></div>
              </div>
              
              <div className="relative flex rounded-xl overflow-hidden gap-2">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative flex items-center gap-2 px-4 py-3 font-semibold transition-all duration-300 z-10 flex-1 justify-center group rounded-lg
                        ${isActive
                          ? 'text-white drop-shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                        }
                      `}
                    >
                      <IconComponent className={`
                        w-5 h-5 transition-all duration-300
                        ${isActive 
                          ? 'drop-shadow-sm scale-110' 
                          : 'group-hover:scale-110 group-hover:text-blue-600'
                        }
                      `} />
                      <span className={`
                        whitespace-nowrap text-sm font-semibold transition-all duration-300
                        ${isActive 
                          ? 'drop-shadow-sm' 
                          : 'group-hover:text-blue-600'
                        }
                      `}>
                        {tab.label}
                      </span>
                      
                      {/* Hover effect for inactive tabs */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Content with fixed spacing */}
          <div className="min-h-[600px] relative z-10 w-full"
        
          >
            {activeTab === 'first' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'second' && (
              <div className="max-w-5xl mx-auto text-center animate-fade-in px-4">
                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-blue-200/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-black mb-8">Residential Solutions</h3>
                    <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                      Explore our portfolio of meticulously executed electrical and electronic ventures, 
                      showcasing our commitment to precision, reliability, and customer-centric design 
                      for an enhanced living and working environment.
                    </p>
                    <Link href={'/profile'}>
                      <Button text="View Projects" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'third' && (
              <div className="max-w-5xl mx-auto text-center animate-fade-in px-4">
                <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-indigo-200/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-2xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-900 mb-8">Commercial Excellence</h3>
                    <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                      Embark on a journey through our diverse range of successful electrical and 
                      electronic undertakings, highlighting our dedication to excellence, efficiency, 
                      and sustainable solutions for seamless technology integration.
                    </p>
                    <Button text="Learn More" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Mycards;