
import Image from 'next/image'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, category, index }) => {
  // Alternating themes - dark and light
  const isDark = index % 2 === 0
  
  return (
    <Col size={12} sm={6} md={4} className="mb-8"
    style={{marginBottom: '2rem'}}
    >
      <div className={`
        group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2
        ${isDark 
          ? 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50' 
          : 'bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30'
        }
        backdrop-blur-xl shadow-xl hover:shadow-2xl
      `}>
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category badge - always visible */}
          <div className="absolute top-4 left-4"
          style={{top: '1rem', left: '1rem'}}
          >
            <span className={`
              px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider
              ${isDark 
                ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
                : 'bg-purple-500/20 text-white border border-purple-400/30'
              }
              backdrop-blur-sm
            `}>
              {category}
            </span>
          </div>
          
          {/* Hover overlay effect */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${isDark 
              ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
              : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
            }
          `} />
        </div>
        
        {/* Content Container - Always visible */}
        <div className="p-6"
        style={{padding: '1.5rem'}}
        >
          {/* Title - Always visible */}
          <h3 className={`
            text-xl font-bold mb-3 leading-tight
            ${isDark ? 'text-white' : 'text-gray-100'}
          `}
          style={{marginBottom: '0.75rem'}}
          >
            {title}
          </h3>
          
          {/* Description - Always visible */}
          <p className={`
            text-sm leading-relaxed mb-4
            ${isDark ? 'text-gray-800' : 'text-gray-600'}
          `}
          style={{marginBottom: '1rem'}}
          >
            {description}
          </p>
          
          {/* Action Button - Enhanced on hover */}
          <div className="flex items-center justify-between">
            <button className={`
              group/btn relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
              ${isDark 
                ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500 hover:text-white hover:border-blue-500' 
                : 'bg-purple-500/20 text-purple-300 border border-purple-400/30 hover:bg-purple-500 hover:text-white hover:border-purple-500'
              }
              hover:scale-105 hover:shadow-lg
            `}
            style={{borderRadius: '0.75rem'}}
            >
              <span className="relative z-10">Learn More</span>
              
              {/* Button hover effect */}
              <div className={`
                absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-r from-purple-500 to-purple-600'
                }
              `} />
            </button>
            
            {/* Arrow icon with hover animation */}
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110
              ${isDark 
                ? 'bg-slate-700/50 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-300' 
                : 'bg-white/10 text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-300'
              }
            `}>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Premium border effect on hover */}
        <div className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
          ${isDark 
            ? 'shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20' 
            : 'shadow-xl shadow-purple-500/10 ring-1 ring-purple-500/20'
          }
        `} />
        
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`
            absolute inset-0 rounded-2xl
            ${isDark 
              ? 'bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5' 
              : 'bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5'
            }
          `} />
        </div>
      </div>
    </Col>
  )
}