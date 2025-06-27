


'use client'

import Link from 'next/link'

const Button = ({ text, className = "", href = '/contact', onClick, variant = 'primary' }) => {
  const baseClasses = `
    relative 
    inline-block
    px-4 py-2 
    sm:px-12 sm:py-5 
    lg:px-16 lg:py-6
    rounded-full 
    overflow-hidden 
    group 
    transition-all duration-500 
    hover:scale-105 
    active:scale-95
    cursor-pointer
    select-none
    font-medium 
    tracking-wide
    text-sm sm:text-base lg:text-lg
    min-w-[180px] sm:min-w-[220px]
    text-center
    ${className}
  `.replace(/\s+/g, ' ').trim()

  const primaryVariant = `
    bg-gradient-to-r from-cyan-500 to-blue-600
    text-white 
    border-2 border-cyan-400/60
    hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
    hover:border-cyan-300
  `

  const secondaryVariant = `
    bg-transparent
    text-cyan-300
    border-2 border-cyan-400/60
    hover:text-white
    hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]
    hover:border-cyan-300
  `

  const variantClasses = variant === 'primary' ? primaryVariant : secondaryVariant

  const contentClasses = `
    relative z-10 
    block
    transition-colors duration-300
    whitespace-nowrap
  `.replace(/\s+/g, ' ').trim()

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
    console.log('connect')
  }

  return (
    <div className={`${baseClasses} ${variantClasses}`} style={{padding: '0.75rem 0.5rem'}}>
      {/* Hover background gradient for secondary variant */}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      )}
      
      {/* Enhanced background for primary variant */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full"></span>
      )}
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 rounded-full border-2 border-cyan-300/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <Link 
        href={href} 
        className={contentClasses}
        onClick={handleClick}
      >
        {text}
      </Link>
    </div>
  )
}

export default Button