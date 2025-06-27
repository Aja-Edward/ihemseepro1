


// 'use client'

// import React, { useState, useEffect } from 'react'
// import { GrLinkedinOption } from 'react-icons/gr'
// import { RiWhatsappFill } from 'react-icons/ri'
// import { FaFacebook } from 'react-icons/fa'
// import { AiOutlineInstagram } from 'react-icons/ai'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { FaTimes } from 'react-icons/fa'
// import Button from './Button'
// import Link from 'next/link'
// import Image from 'next/image'

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('home')
//   const [scrolled, setScrolled] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrollProgress, setScrollProgress] = useState(0)

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY >= 30) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
      
//       // Calculate scroll progress
//       const scrollTop = window.scrollY
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight
//       const scrollPercent = (scrollTop / docHeight) * 100
//       setScrollProgress(scrollPercent)
//     }
    
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value)
//     setIsOpen(false)
//   }

//   const handleToggle = () => {
//     setIsOpen(!isOpen)
//   }

//   const socialLinks = {
//     instagram: '#',
//     facebook: '#',
//     linkedin: '#',
//     whatsapp: 'https://wa.me/+2347035051476',
//   }

//   const navItems = [
//     { id: 'home', label: 'Home', href: '/' },
//     { id: 'servicespage', label: 'Services', href: '/servicespage' },
//     { id: 'projects', label: 'Projects', href: '/projects' },
//     { id: 'about', label: 'About', href: '/about' },
//   ]

//   // Social icon hover styles with brand colors
//   const getSocialIconStyles = (platform, isHovered) => {
//     const brandColors = {
//       facebook: '#1877F2',
//       instagram: 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)',
//       linkedin: '#0A66C2',
//       whatsapp: '#25D366'
//     }

//     return {
//       color: isHovered ? '#ffffff' : '#99a1af',
//       backgroundColor: isHovered ? brandColors[platform] : 'transparent',
//       borderColor: isHovered ? brandColors[platform] : '#4b5563',
//       background: platform === 'instagram' && isHovered ? brandColors[platform] : 
//                  isHovered ? brandColors[platform] : 'transparent',
//       transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//       transition: 'all 0.3s ease'
//     }
//   }

//   return (
//     <>
//       {/* Navbar */}
//       <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-black bg-opacity-90 border-b border-cyan-400 border-opacity-20 shadow-lg' 
//           : 'bg-transparent'
//       }`}>
        
//         <div className="max-w-7xl mx-auto px-4 lg:px-6"
//         style={{padding: '0.75rem 2rem'}}
//         >
//           <div className="flex items-center justify-between h-20"
//           style={{height: '5rem'}}
//           >
            
//             {/* Brand/Logo */}
//             <div className="flex items-center space-x-3"
//             style={{gap: '0.6rem'}}
//             >
//               <div className="relative">
//                 <div className="w-12 h-12 bg-gray-800 rounded-full border flex items-center justify-center overflow-hidden">
//                   <Image
//                     src="/assets/images/ihemseeprologo3.svg"
//                     alt="Ihemsadiele & Sons"
//                     width={100}
//                     height={100}
//                     className="h-20 w-20 object-contain"
                    
//                   />
//                 </div>
//               </div>
      
//               {/* Brand text */}
//               <div className="hidden md:block">
//                 <h1 className="text-xl font-bold text-white"
//                 style={{fontWeight: '700'}}
//                 >
//                   Ihemsadiele
//                 </h1>
//                 <p className="text-xs text-gray-400 -mt-1">& Sons Ltd</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8"
//             style={{gap: '1rem'}}
//             >
//          {navItems.map((item) => (
//   <a
//     key={item.id}
//     href={item.href}
//     onClick={() => onUpdateActiveLink(item.id)}
//     className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
//       activeLink === item.id
//         ? 'text-cyan-400'
//         : 'text-gray-300 hover:text-white'
//     }`}
//     style={{
//       fontWeight: '500',
//       padding: '1rem 0.5rem',
//       fontSize: '1rem',
//       color: activeLink === item.id ? 'oklch(78.9% 0.154 211.53)' : '#d1d5dc'
//     }}
//     onMouseEnter={(e) => {
//       if (activeLink !== item.id) {
//         e.target.style.color = '#ffffff';
//       }
//     }}
//     onMouseLeave={(e) => {
//       if (activeLink !== item.id) {
//         e.target.style.color = '#d1d5dc';
//       }
//     }}
//   >
//     {item.label}
//     {/* Active border bottom with animation */}
//     <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
//       activeLink === item.id 
//         ? 'w-full opacity-100' 
//         : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
//     }`}></span>
//   </a>
// ))}
//             </div>

//             {/* Social Links & CTA - Desktop */}
//             <div className="hidden lg:flex items-center space-x-4 gap-3" >
//               {/* Social Icons */}
//               <div className="flex items-center space-x-2 gap-2">
//                 {Object.entries(socialLinks).map(([platform, url]) => (
//                   <a
//                     key={platform}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
//                     style={{
//                       '--hover-color': platform === 'facebook' ? '#1877F2' :
//                                      platform === 'instagram' ? '#E4405F' :
//                                      platform === 'linkedin' ? '#0A66C2' :
//                                      platform === 'whatsapp' ? '#25D366' : '#99a1af'
//                     }}
//                     onMouseEnter={(e) => {
//                       const hoverColor = e.currentTarget.style.getPropertyValue('--hover-color');
//                       if (platform === 'instagram') {
//                         e.currentTarget.style.background = 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)';
//                       } else {
//                         e.currentTarget.style.backgroundColor = hoverColor;
//                       }
//                       e.currentTarget.style.borderColor = hoverColor;
//                       e.currentTarget.style.color = '#ffffff';
//                       e.currentTarget.style.transform = 'scale(1.1)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.background = 'transparent';
//                       e.currentTarget.style.borderColor = '#4b5563';
//                       e.currentTarget.style.color = '#99a1af';
//                       e.currentTarget.style.transform = 'scale(1)';
//                     }}
//                   >
//                     {platform === 'linkedin' && <GrLinkedinOption size={16} />}
//                     {platform === 'whatsapp' && <RiWhatsappFill size={16} />}
//                     {platform === 'facebook' && <FaFacebook size={16} />}
//                     {platform === 'instagram' && <AiOutlineInstagram size={16} />}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={handleToggle}
//               className="lg:hidden w-10 h-10 rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
//             >
//               {isOpen ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Progress bar for scroll */}
//         <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
//           <div 
//             className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
//             style={{ width: `${scrollProgress}%` }}
//           ></div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black bg-opacity-80"
//             onClick={handleToggle}
//           ></div>
          
//           {/* Menu Panel */}
//           <div className="absolute top-0 right-0 w-80 max-w-screen h-full bg-gray-900 border-l border-cyan-400 border-opacity-20 shadow-2xl">
            
//             {/* Menu Content */}
//             <div className="flex flex-col h-full p-6"
            
//             style={{padding: '1.5rem'}}
//             >
              
//               {/* Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyan-400 border-opacity-30 flex items-center justify-center">
//                     <Image
//                     width={100}
//                     height={100}
//                       src="/assets/images/ihemseeprologo3.svg"
//                       alt="Logo"
//                       className="w-12 h12 object-fill"
//                     />
//                   </div>
//                   {/* <div>
//                     <h2 className="text-lg font-bold text-white">Ihemsadiele</h2>
//                     <p className="text-xs text-gray-400">& Sons Ltd</p>
//                   </div> */}
//                 </div>
//               </div>

//               {/* Navigation Links */}
//               <nav className="flex-1">
//                 <div className="space-y-2"
//                 style={{marginBlockStart: '1rem'}}
//                 >
//                   {navItems.map((item) => (
//                     <a
//                       key={item.id}
//                       href={item.href}
//                       onClick={() => onUpdateActiveLink(item.id)}
//                       className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative ${
//                         activeLink === item.id
//                           ? 'bg-cyan-600 bg-opacity-20 text-cyan-400 border-l-2 border-cyan-400'
//                           : 'text-gray-300 hover:text-white hover:bg-gray-800 hover:bg-opacity-50'
//                       }`}
//                       style={{padding: '1rem 0.75rem', color: 'white'}}
//                     >
//                       <span className="flex items-center justify-between">
//                         {item.label}
//                         {activeLink === item.id && (
//                           <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
//                         )}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </nav>

//               {/* Social Links */}
//               <div className="border-t border-gray-700 pt-6"
//               style={{padding: '1.5rem'}}
//               >
//                 <p className="text-xs text-gray-400 uppercase tracking-wider mb-4"
                
//                 style={{marginBottom: '1rem'}}
//                 >Connect With Us</p>
//                 <div className="flex space-x-3">
//                   {Object.entries(socialLinks).map(([platform, url]) => (
//                     <a
//                       key={platform}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
//                       style={{
//                         '--hover-color': platform === 'facebook' ? '#1877F2' :
//                                        platform === 'instagram' ? '#E4405F' :
//                                        platform === 'linkedin' ? '#0A66C2' :
//                                        platform === 'whatsapp' ? '#25D366' : '#99a1af'
//                       }}
//                       onMouseEnter={(e) => {
//                         const hoverColor = e.currentTarget.style.getPropertyValue('--hover-color');
//                         if (platform === 'instagram') {
//                           e.currentTarget.style.background = 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)';
//                         } else {
//                           e.currentTarget.style.backgroundColor = hoverColor;
//                         }
//                         e.currentTarget.style.borderColor = hoverColor;
//                         e.currentTarget.style.color = '#ffffff';
//                         e.currentTarget.style.transform = 'scale(1.1)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.backgroundColor = 'transparent';
//                         e.currentTarget.style.background = 'transparent';
//                         e.currentTarget.style.borderColor = '#4b5563';
//                         e.currentTarget.style.color = '#99a1af';
//                         e.currentTarget.style.transform = 'scale(1)';
//                       }}
//                     >
//                       {platform === 'linkedin' && <GrLinkedinOption size={18} />}
//                       {platform === 'whatsapp' && <RiWhatsappFill size={18} />}
//                       {platform === 'facebook' && <FaFacebook size={18} />}
//                       {platform === 'instagram' && <AiOutlineInstagram size={18} />}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA Button */}
             
//                 <Link className="mt-6"
//               style={{marginBottom: '1.5rem'}} href={'/contact'}>
//                 <Button text="Let's Connect" className="w-full"/>
//                 </Link>
                
           
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Navbar



'use client'

import React, { useState, useEffect } from 'react'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Function to handle mobile menu link clicks
  const handleMobileNavClick = (itemId, href) => {
    setActiveLink(itemId)
    setIsOpen(false)
    // Small delay to ensure menu closes before navigation
    setTimeout(() => {
      window.location.href = href
    }, 150)
  }

  const socialLinks = {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    whatsapp: 'https://wa.me/+2347035051476',
  }

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'servicespage', label: 'Services', href: '/servicespage' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'about', label: 'About', href: '/about' },
  ]

  // Social icon hover styles with brand colors
  const getSocialIconStyles = (platform, isHovered) => {
    const brandColors = {
      facebook: '#1877F2',
      instagram: 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)',
      linkedin: '#0A66C2',
      whatsapp: '#25D366'
    }

    return {
      color: isHovered ? '#ffffff' : '#99a1af',
      backgroundColor: isHovered ? brandColors[platform] : 'transparent',
      borderColor: isHovered ? brandColors[platform] : '#4b5563',
      background: platform === 'instagram' && isHovered ? brandColors[platform] : 
                 isHovered ? brandColors[platform] : 'transparent',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black bg-opacity-90 border-b border-cyan-400 border-opacity-20 shadow-lg' 
          : 'bg-transparent'
      }`}>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-6"
        style={{padding: '0.75rem 2rem'}}
        >
          <div className="flex items-center justify-between h-20"
          style={{height: '5rem'}}
          >
            
            {/* Brand/Logo */}
            <div className="flex items-center space-x-3"
            style={{gap: '0.6rem'}}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gray-800 rounded-full border flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/images/ihemseeprologo3.svg"
                    alt="Ihemsadiele & Sons"
                    width={100}
                    height={100}
                    className="h-20 w-20 object-contain"
                    
                  />
                </div>
              </div>
      
              {/* Brand text */}
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white"
                style={{fontWeight: '700'}}
                >
                  Ihemsadiele
                </h1>
                <p className="text-xs text-gray-400 -mt-1">& Sons Ltd</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8"
            style={{gap: '1rem'}}
            >
         {navItems.map((item) => (
  <a
    key={item.id}
    href={item.href}
    onClick={() => onUpdateActiveLink(item.id)}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
      activeLink === item.id
        ? 'text-cyan-400'
        : 'text-gray-300 hover:text-white'
    }`}
    style={{
      fontWeight: '500',
      padding: '1rem 0.5rem',
      fontSize: '1rem',
      color: activeLink === item.id ? 'oklch(78.9% 0.154 211.53)' : '#d1d5dc'
    }}
    onMouseEnter={(e) => {
      if (activeLink !== item.id) {
        e.target.style.color = '#ffffff';
      }
    }}
    onMouseLeave={(e) => {
      if (activeLink !== item.id) {
        e.target.style.color = '#d1d5dc';
      }
    }}
  >
    {item.label}
    {/* Active border bottom with animation */}
    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
      activeLink === item.id 
        ? 'w-full opacity-100' 
        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
    }`}></span>
  </a>
))}
            </div>

            {/* Social Links & CTA - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 gap-3" >
              {/* Social Icons */}
              <div className="flex items-center space-x-2 gap-2">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    style={{
                      '--hover-color': platform === 'facebook' ? '#1877F2' :
                                     platform === 'instagram' ? '#E4405F' :
                                     platform === 'linkedin' ? '#0A66C2' :
                                     platform === 'whatsapp' ? '#25D366' : '#99a1af'
                    }}
                    onMouseEnter={(e) => {
                      const hoverColor = e.currentTarget.style.getPropertyValue('--hover-color');
                      if (platform === 'instagram') {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)';
                      } else {
                        e.currentTarget.style.backgroundColor = hoverColor;
                      }
                      e.currentTarget.style.borderColor = hoverColor;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = '#4b5563';
                      e.currentTarget.style.color = '#99a1af';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {platform === 'linkedin' && <GrLinkedinOption size={16} />}
                    {platform === 'whatsapp' && <RiWhatsappFill size={16} />}
                    {platform === 'facebook' && <FaFacebook size={16} />}
                    {platform === 'instagram' && <AiOutlineInstagram size={16} />}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggle}
              className="lg:hidden w-10 h-10 rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
            >
              {isOpen ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Progress bar for scroll */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-80"
            onClick={handleToggle}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-80 max-w-screen h-full bg-gray-900 border-l border-cyan-400 border-opacity-20 shadow-2xl">
            
            {/* Menu Content */}
            <div className="flex flex-col h-full p-6"
            
            style={{padding: '1.5rem'}}
            >
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyan-400 border-opacity-30 flex items-center justify-center">
                    <Image
                    width={100}
                    height={100}
                      src="/assets/images/ihemseeprologo3.svg"
                      alt="Logo"
                      className="w-12 h12 object-fill"
                    />
                  </div>
                  {/* <div>
                    <h2 className="text-lg font-bold text-white">Ihemsadiele</h2>
                    <p className="text-xs text-gray-400">& Sons Ltd</p>
                  </div> */}
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <div className="space-y-2"
                style={{marginBlockStart: '1rem'}}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMobileNavClick(item.id, item.href)}
                      className={`w-full text-left block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                        activeLink === item.id
                          ? 'bg-cyan-600 bg-opacity-20 text-cyan-400 border-l-2 border-cyan-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800 hover:bg-opacity-50'
                      }`}
                      style={{padding: '1rem 0.75rem', color: 'white'}}
                    >
                      <span className="flex items-center justify-between">
                        {item.label}
                        {activeLink === item.id && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </nav>

              {/* Social Links */}
              <div className="border-t border-gray-700 pt-6"
              style={{padding: '1.5rem'}}
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-4"
                
                style={{marginBottom: '1rem'}}
                >Connect With Us</p>
                <div className="flex space-x-3">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                      style={{
                        '--hover-color': platform === 'facebook' ? '#1877F2' :
                                       platform === 'instagram' ? '#E4405F' :
                                       platform === 'linkedin' ? '#0A66C2' :
                                       platform === 'whatsapp' ? '#25D366' : '#99a1af'
                      }}
                      onMouseEnter={(e) => {
                        const hoverColor = e.currentTarget.style.getPropertyValue('--hover-color');
                        if (platform === 'instagram') {
                          e.currentTarget.style.background = 'linear-gradient(45deg, #F56040, #E4405F, #C13584, #833AB4)';
                        } else {
                          e.currentTarget.style.backgroundColor = hoverColor;
                        }
                        e.currentTarget.style.borderColor = hoverColor;
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = '#4b5563';
                        e.currentTarget.style.color = '#99a1af';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {platform === 'linkedin' && <GrLinkedinOption size={18} />}
                      {platform === 'whatsapp' && <RiWhatsappFill size={18} />}
                      {platform === 'facebook' && <FaFacebook size={18} />}
                      {platform === 'instagram' && <AiOutlineInstagram size={18} />}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div 
                className="mt-6"
                style={{marginBottom: '1.5rem'}}
                onClick={() => {
                  setIsOpen(false)
                  setTimeout(() => {
                    window.location.href = '/contact'
                  }, 150)
                }}
              >
                <Button text="Let's Connect" className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar