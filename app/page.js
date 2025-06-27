
// 'use client'

// import { useState, useEffect, useCallback } from 'react'

// // Mock components for demonstration
// import Button from './../components/Button'
// import MultiCarousel from '@components/MultiCarousel'
// import Mycards from '@components/Mycards'
// import Image from 'next/image'
// import Testimonial from '@components/Testimonials'



// const Overlay = ({ className }) => (
//   <div className={`bg-gradient-to-br from-black/60 via-gray-900/40 to-black/70 ${className}`} />
// )




// // Floating particles component
// const FloatingParticles = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     {[...Array(20)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animationDelay: `${Math.random() * 5}s`,
//           animationDuration: `${3 + Math.random() * 4}s`
//         }}
//       />
//     ))}
//   </div>
// )

// // Glowing orbs
// const GlowingOrbs = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
//     <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
//     <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
//   </div>
// )

// export default function HomePage() {
//   const [loopNum, setLoopNum] = useState(0)
//   const [isDeleting, setIsDeleting] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//    const [hasError, setHasError] = useState(false)
//   const toRotate = [
//     'Welcome to:',
//     'Ihemsadiele & Sons Ltd.',
//     'Solar Installation',
//     'Auto Power Switcher',
//     'House Wiring',
//     'AC Installation',
//     'AC Maintenance',
//     'AC Services',
//     'AC Repairs',
//   ]
//   const [text, setText] = useState('')
//   const [delta, setDelta] = useState(300 - Math.random() * 100)
//   const period = 2000

//   // Mouse tracking for parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   const tick = useCallback(() => {
//     let i = loopNum % toRotate.length
//     let fullText = toRotate[i]
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1)
//     setText(updatedText)

//     if (isDeleting) {
//       setDelta((prevDelta) => prevDelta / 2)
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true)
//       setDelta(period)
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false)
//       setLoopNum(loopNum + 1)
//       setDelta(500)
//     }
//   }, [isDeleting, loopNum, text.length])

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick()
//     }, delta)
//     return () => clearInterval(ticker)
//   }, [delta, text, tick])

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-[#2e3234] to-black flex flex-col items-center w-full text-white relative overflow-hidden">
      
//       {/* Hero Section - Fixed positioning and centering */}
//       <div className="min-h-screen w-full flex justify-center items-center px-4 relative bg-top bg-no-repeat bg-cover z-[4] pt-20 md:pt-16 sm:pt-12" 
//         style={{
//           paddingLeft: window.innerWidth <= 768 ? '1rem' : '1rem',
//           paddingRight: window.innerWidth <= 768 ? '1rem' : '1rem'
//         }}
//       >
        
//         {/* Background Effects */}
//         <GlowingOrbs />
//         <FloatingParticles />
        
//         {/* Animated Grid Background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
//         </div>

//         {/* Hero Content Container */}
//         <div className="max-w-7xl w-full mx-auto backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] relative"
//           style={{
//             maxWidth: window.innerWidth <= 768 ? '100%' : '1280px',
//             borderRadius: window.innerWidth <= 768 ? '1rem' : '1.5rem',
//             margin: window.innerWidth <= 768 ? '0 0.5rem' : '0 auto'
//           }}
//         >
          
//           <Overlay className="absolute inset-0 z-[1]" />
          
//           {/* Parallax Background Element */}
//           <div 
//             className="absolute inset-0 z-[2] opacity-20"
//             style={{
//               transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
//           </div>
          
//           {/* Main Content Grid */}
//           <div className="relative z-[3] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] px-8 lg:px-16 py-16 lg:py-20"
//             style={{
//               padding: window.innerWidth <= 768 ? '2rem 1rem' : '3rem 1rem',
//               alignItems: 'center',
//               justifyContent: 'center',
//               display: 'grid',
//               gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 1fr',
//               gap: window.innerWidth <= 768 ? '2rem' : '3rem'
//             }}
//           >
            
//             {/* Text Content */}
//             <div className="flex flex-col justify-center items-start space-y-8 lg:order-1 order-2"
//               style={{
//                 gap: '2rem',
//                 alignItems: window.innerWidth <= 768 ? 'center' : 'start',
//                 marginLeft: window.innerWidth <= 768 ? '0' : '2rem',
//                 width: '100%',
//                 order: window.innerWidth <= 1024 ? '2' : '1'
//               }}
//             >
              
//               {/* Title */}
//               <div className="space-y-4"
//                 style={{marginTop: '1rem'}}
//               >
//                 <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight"
//                   style={{
//                     backgroundImage: 'linear-gradient(var(--tw-gradient-stops))',
//                     color: 'grey',
//                     paddingBottom: '1rem',
//                     fontSize: window.innerWidth <= 768 ? '1.5rem' : window.innerWidth <= 1024 ? '2rem' : '2.5rem',
//                     lineHeight: window.innerWidth <= 768 ? '1.4' : '1.2',
//                     textAlign: window.innerWidth <= 768 ? 'center' : 'left'
//                   }}
//                 >
//                   <span className="relative block">
//                     {text}
//                     {/* Typing cursor */}
//                     <span className="inline-block w-1 h-[0.7em] bg-cyan-400 ml-1 animate-blink"></span>
//                   </span>
//                 </h1>
                
//                 {/* Subtitle with gradient */}
//                 <div className="space-y-3"
//                   style={{marginTop: '0.75rem'}}
//                 >
//                   <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" style={{height: '1px'}}></div>
//                   <p className="text-cyan-100/80 text-sm font-light tracking-widest uppercase" 
//                     style={{
//                       paddingTop: '2rem', 
//                       paddingBottom: '0.75rem',
//                       textAlign: window.innerWidth <= 768 ? 'center' : 'left',
//                       fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.875rem'
//                     }}
//                   >
//                     Premium Electrical Solutions
//                   </p>
//                 </div>
                
//                 {/* Glowing accent line */}
//                 <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse-slow"
//                   style={{
//                     margin: window.innerWidth <= 768 ? '0 auto' : '0'
//                   }}
//                 ></div>
//               </div>
              
//               {/* Description */}
//               <p className="text-lg lg:text-lg leading-relaxed text-gray-200 font-light max-w-2xl"
//                 style={{
//                   fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
//                   textAlign: window.innerWidth <= 768 ? 'center' : 'left',
//                   lineHeight: '1.6',
//                   maxWidth: '100%'
//                 }}
//               >
//                 Empowering homes and businesses with reliable electrical and
//                 electronic solutions, Ihemsadiele is your trusted partner for
//                 seamless installations, prompt repairs, and comprehensive services.
//               </p>
              
//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 w-[600px] sm:w-auto"
//                 style={{
//                   display: 'flex',
//                   flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
//                   gap: '1rem',
//                   width: window.innerWidth <= 640 ? '100%' : 'auto',
//                   justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
//                   alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
//                 }}
//               >
//                 <div style={{
//                   width: window.innerWidth <= 640 ? '100%' : 'auto',
//                   maxWidth: window.innerWidth <= 640 ? '300px' : 'none',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center'
//                 }}>
//                   <Button text="Connect Here" className='px-6 py-15' />
//                 </div>
//                 <div style={{
//                   width: window.innerWidth <= 640 ? '100%' : 'auto',
//                   maxWidth: window.innerWidth <= 640 ? '300px' : 'none',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center'
//                 }}>
//                   <Button text='Learn More' />
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="flex flex-wrap gap-8 pt-4"
//                 style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   gap: window.innerWidth <= 768 ? '2rem' : '2rem',
//                   paddingTop: '1rem',
//                   justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
//                   width: '100%'
//                 }}
//               >
//                 <div className="text-center"
//                   style={{
//                     textAlign: 'center',
//                     minWidth: window.innerWidth <= 480 ? '80px' : '100px'
//                   }}
//                 >
//                   <div className="text-3xl font-bold text-cyan-400"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '1.875rem' : '1.875rem',
//                       fontWeight: 'bold',
//                       color: '#22d3ee'
//                     }}
//                   >500+</div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wide"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '0.65rem' : '0.75rem',
//                       color: '#9ca3af',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.05em'
//                     }}
//                   >Projects</div>
//                 </div>
//                 <div className="text-center"
//                   style={{
//                     textAlign: 'center',
//                     minWidth: window.innerWidth <= 480 ? '80px' : '100px'
//                   }}
//                 >
//                   <div className="text-3xl font-bold text-cyan-400"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '1.875rem' : '1.875rem',
//                       fontWeight: 'bold',
//                       color: '#22d3ee'
//                     }}
//                   >15+</div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wide"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '0.65rem' : '0.75rem',
//                       color: '#9ca3af',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.05em'
//                     }}
//                   >Years</div>
//                 </div>
//                 <div className="text-center"
//                   style={{
//                     textAlign: 'center',
//                     minWidth: window.innerWidth <= 480 ? '80px' : '100px'
//                   }}
//                 >
//                   <div className="text-3xl font-bold text-cyan-400"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '1.875rem' : '1.875rem',
//                       fontWeight: 'bold',
//                       color: '#22d3ee'
//                     }}
//                   >24/7</div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wide"
//                     style={{
//                       fontSize: window.innerWidth <= 768 ? '0.65rem' : '0.75rem',
//                       color: '#9ca3af',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.05em'
//                     }}
//                   >Support</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Image Container */}
//             <div className="flex justify-center items-center relative lg:order-2 order-1 min-h-[400px] lg:min-h-[600px]"
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 position: 'relative',
//                 order: window.innerWidth <= 1024 ? '1' : '2',
//                 minHeight: window.innerWidth <= 768 ? '300px' : window.innerWidth <= 1024 ? '400px' : '600px',
//                 padding: window.innerWidth <= 768 ? '1rem 0' : '2rem 0'
//               }}
//             >
              
//               {/* Glowing rings around bulb */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-80 h-80 border-2 border-cyan-400/20 rounded-full animate-spin-slow"
//                   style={{
//                     width: window.innerWidth <= 768 ? '200px' : window.innerWidth <= 1024 ? '250px' : '320px',
//                     height: window.innerWidth <= 768 ? '200px' : window.innerWidth <= 1024 ? '250px' : '320px',
//                     border: '2px solid rgba(34, 211, 238, 0.2)',
//                     borderRadius: '50%'
//                   }}
//                 ></div>
//                 <div className="absolute w-96 h-96 border border-blue-500/10 rounded-full animate-spin-reverse"
//                   style={{
//                     position: 'absolute',
//                     width: window.innerWidth <= 768 ? '240px' : window.innerWidth <= 1024 ? '300px' : '384px',
//                     height: window.innerWidth <= 768 ? '240px' : window.innerWidth <= 1024 ? '300px' : '384px',
//                     border: '1px solid rgba(59, 130, 246, 0.1)',
//                     borderRadius: '50%'
//                   }}
//                 ></div>
//               </div>
              
//               {/* Main bulb image */}
//               <div className="relative z-10 transform hover:scale-110 transition-transform duration-500"
//                 style={{
//                   position: 'relative',
//                   zIndex: '10',
//                   transform: 'scale(1)',
//                   transition: 'transform 0.5s ease'
//                 }}
//               >
//                 <div
//                   className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400/20 to-cyan-400/20 rounded-full flex items-center justify-center animate-updown filter drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
//                   style={{
//                     width: window.innerWidth <= 768 ? '180px' : window.innerWidth <= 1024 ? '220px' : '320px',
//                     height: window.innerWidth <= 768 ? '180px' : window.innerWidth <= 1024 ? '220px' : '320px',
//                     background: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(34, 211, 238, 0.2))',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
//                     filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))'
//                   }}
//                 >
                
//                  <>
//       {!hasError ? (
//         <Image
//           src="/assets/images/bluebulb2.png"
//           alt="bluebulb"
//           width={window.innerWidth <= 768 ? 400 : 800}
//           height={window.innerWidth <= 768 ? 400 : 800}
//           onError={() => setHasError(true)}
//           className="object-contain"
//           style={{
//             objectFit: 'contain',
//             width: window.innerWidth <= 768 ? '120px' : window.innerWidth <= 1024 ? '160px' : '200px',
//             height: 'auto'
//           }}
//         />
//       ) : (
//         <div className="w-32 h-48 bg-gradient-to-t from-yellow-400/40 to-yellow-300/60 rounded-t-full relative"
//           style={{
//             width: window.innerWidth <= 768 ? '80px' : '128px',
//             height: window.innerWidth <= 768 ? '120px' : '192px',
//             background: 'linear-gradient(to top, rgba(251, 191, 36, 0.4), rgba(253, 224, 71, 0.6))',
//             borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
//             position: 'relative'
//           }}
//         >
//           <div className="absolute bottom-0 w-full h-8 bg-gray-600/60 rounded-b-lg"
//             style={{
//               position: 'absolute',
//               bottom: '0',
//               width: '100%',
//               height: window.innerWidth <= 768 ? '20px' : '32px',
//               background: 'rgba(75, 85, 99, 0.6)',
//               borderRadius: '0 0 8px 8px'
//             }}
//           />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-300/80 rounded-full animate-pulse"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: window.innerWidth <= 768 ? '40px' : '80px',
//               height: window.innerWidth <= 768 ? '40px' : '80px',
//               background: 'rgba(253, 224, 71, 0.8)',
//               borderRadius: '50%'
//             }}
//           />
//         </div>
//       )}
//     </>
                  
//                 </div>
                
//                 {/* Electric sparks effect */}
//                 <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
//                   style={{
//                     position: 'absolute',
//                     top: '25%',
//                     left: '50%',
//                     width: window.innerWidth <= 768 ? '6px' : '8px',
//                     height: window.innerWidth <= 768 ? '6px' : '8px',
//                     background: '#facc15',
//                     borderRadius: '50%'
//                   }}
//                 ></div>
//                 <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" 
//                   style={{ 
//                     animationDelay: '1s',
//                     position: 'absolute',
//                     top: '33%',
//                     right: '25%',
//                     width: window.innerWidth <= 768 ? '4px' : '4px',
//                     height: window.innerWidth <= 768 ? '4px' : '4px',
//                     background: '#22d3ee',
//                     borderRadius: '50%'
//                   }}
//                 ></div>
//                 <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" 
//                   style={{ 
//                     animationDelay: '2s',
//                     position: 'absolute',
//                     bottom: '33%',
//                     left: '33%',
//                     width: window.innerWidth <= 768 ? '5px' : '6px',
//                     height: window.innerWidth <= 768 ? '5px' : '6px',
//                     background: '#60a5fa',
//                     borderRadius: '50%'
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
          
//           {/* Scroll indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[5] hidden lg:block">
//             <div className="flex flex-col items-center space-y-2 text-cyan-400/70">
//               <span className="text-xs uppercase tracking-widest">Scroll</span>
//               <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center">
//                 <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Other sections */}
//        <Mycards />
      
//       <MultiCarousel />
//      <Testimonial/>
      
//       <style jsx>{`
//         @keyframes updown {
//           0% { transform: translateY(-20px); }
//           50% { transform: translateY(20px); }
//           100% { transform: translateY(-20px); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes grid-move {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         .animate-updown { animation: updown 3s linear infinite; }
//         .animate-float { animation: float 4s ease-in-out infinite; }
//         .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 20s linear infinite; }
//         .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
//         .animate-blink { animation: blink 1s infinite; }
//         .animate-grid-move { animation: grid-move 20s linear infinite; }

//         /* Mobile-specific styles */
//         @media (max-width: 768px) {
//           .animate-updown { animation: updown 4s ease-in-out infinite; }
//           .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
//           .animate-spin-slow { animation: spin-slow 30s linear infinite; }
//           .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
//         }
//       `}</style>
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

// Mock components for demonstration
import Button from './../components/Button'
import MultiCarousel from '@components/MultiCarousel'
import Mycards from '@components/Mycards'
import Image from 'next/image'
import Testimonial from '@components/Testimonials'

const Overlay = ({ className }) => (
  <div className={`bg-gradient-to-br from-black/60 via-gray-900/40 to-black/70 ${className}`} />
)

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>
)

// Glowing orbs
const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
  </div>
)

export default function HomePage() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasError, setHasError] = useState(false)
  
  // Window size state for responsive behavior
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })
  
 const toRotate = useMemo(() => [
  'Welcome to:',
  'Ihemsadiele & Sons Ltd.',
  'Solar Installation',
  'Auto Power Switcher',
  'House Wiring',
  'AC Installation',
  'AC Maintenance',
  'AC Services',
  'AC Repairs',
], []);


  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  // Handle window resize and set initial window size
  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setWindowSize({
        width,
        height,
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isDesktop: width > 1024
      })
    }

    // Set initial size
    updateWindowSize()

    // Add event listener
    window.addEventListener('resize', updateWindowSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (windowSize.width > 0) { // Only if window size is initialized
        setMousePosition({
          x: (e.clientX / windowSize.width) * 100,
          y: (e.clientY / windowSize.height) * 100
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [windowSize.width, windowSize.height])

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }, [isDeleting, loopNum, text.length, toRotate])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => clearInterval(ticker)
  }, [delta, text, tick])

  // Helper functions for responsive styles
  const getHeroContainerStyles = () => ({
    paddingLeft: windowSize.isMobile ? '1rem' : '1rem',
    paddingRight: windowSize.isMobile ? '1rem' : '1rem'
  })

  const getHeroContentStyles = () => ({
    maxWidth: windowSize.isMobile ? '100%' : '1280px',
    borderRadius: windowSize.isMobile ? '1rem' : '1.5rem',
    margin: windowSize.isMobile ? '0 0.5rem' : '0 auto'
  })

  const getMainContentGridStyles = () => ({
    padding: windowSize.isMobile ? '2rem 1rem' : '3rem 1rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateColumns: windowSize.isDesktop ? '1fr 1fr' : '1fr',
    gap: windowSize.isMobile ? '2rem' : '3rem'
  })

  const getTextContentStyles = () => ({
    gap: '2rem',
    alignItems: windowSize.isMobile ? 'center' : 'start',
    marginLeft: windowSize.isMobile ? '0' : '2rem',
    width: '100%',
    order: windowSize.isDesktop ? '1' : '2'
  })

  const getTitleStyles = () => ({
    backgroundImage: 'linear-gradient(var(--tw-gradient-stops))',
    color: 'grey',
    paddingBottom: '1rem',
    fontSize: windowSize.isMobile ? '1.5rem' : windowSize.isTablet ? '2rem' : '2.5rem',
    lineHeight: windowSize.isMobile ? '1.4' : '1.2',
    textAlign: windowSize.isMobile ? 'center' : 'left'
  })

  const getSubtitleStyles = () => ({
    paddingTop: '2rem', 
    paddingBottom: '0.75rem',
    textAlign: windowSize.isMobile ? 'center' : 'left',
    fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem'
  })

  const getDescriptionStyles = () => ({
    fontSize: windowSize.isMobile ? '1rem' : '1.125rem',
    textAlign: windowSize.isMobile ? 'center' : 'left',
    lineHeight: '1.6',
    maxWidth: '100%'
  })

  const getCtaButtonsStyles = () => ({
    display: 'flex',
    flexDirection: windowSize.width <= 640 ? 'column' : 'row',
    gap: '1rem',
    width: windowSize.width <= 640 ? '100%' : 'auto',
    justifyContent: windowSize.isMobile ? 'center' : 'flex-start',
    alignItems: windowSize.isMobile ? 'center' : 'flex-start'
  })

  const getButtonWrapperStyles = () => ({
    width: windowSize.width <= 640 ? '100%' : 'auto',
    maxWidth: windowSize.width <= 640 ? '300px' : 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })

  const getStatsStyles = () => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: windowSize.isMobile ? '2rem' : '2rem',
    paddingTop: '1rem',
    justifyContent: windowSize.isMobile ? 'center' : 'flex-start',
    width: '100%'
  })

  const getStatItemStyles = () => ({
    textAlign: 'center',
    minWidth: windowSize.width <= 480 ? '80px' : '100px'
  })

  const getStatNumberStyles = () => ({
    fontSize: windowSize.isMobile ? '1.875rem' : '1.875rem',
    fontWeight: 'bold',
    color: '#22d3ee'
  })

  const getStatLabelStyles = () => ({
    fontSize: windowSize.isMobile ? '0.65rem' : '0.75rem',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  })

  const getImageContainerStyles = () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    order: windowSize.isDesktop ? '2' : '1',
    minHeight: windowSize.isMobile ? '300px' : windowSize.isTablet ? '400px' : '600px',
    padding: windowSize.isMobile ? '1rem 0' : '2rem 0'
  })

  const getRingStyles1 = () => ({
    width: windowSize.isMobile ? '200px' : windowSize.isTablet ? '250px' : '320px',
    height: windowSize.isMobile ? '200px' : windowSize.isTablet ? '250px' : '320px',
    border: '2px solid rgba(34, 211, 238, 0.2)',
    borderRadius: '50%'
  })

  const getRingStyles2 = () => ({
    position: 'absolute',
    width: windowSize.isMobile ? '240px' : windowSize.isTablet ? '300px' : '384px',
    height: windowSize.isMobile ? '240px' : windowSize.isTablet ? '300px' : '384px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    borderRadius: '50%'
  })

  const getBulbContainerStyles = () => ({
    width: windowSize.isMobile ? '180px' : windowSize.isTablet ? '220px' : '320px',
    height: windowSize.isMobile ? '180px' : windowSize.isTablet ? '220px' : '320px',
    background: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(34, 211, 238, 0.2))',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
    filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))'
  })

  const getImageStyles = () => ({
    objectFit: 'contain',
    width: windowSize.isMobile ? '120px' : windowSize.isTablet ? '160px' : '200px',
    height: 'auto'
  })

  const getFallbackBulbStyles = () => ({
    width: windowSize.isMobile ? '80px' : '128px',
    height: windowSize.isMobile ? '120px' : '192px',
    background: 'linear-gradient(to top, rgba(251, 191, 36, 0.4), rgba(253, 224, 71, 0.6))',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    position: 'relative'
  })

  const getFallbackBaseStyles = () => ({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: windowSize.isMobile ? '20px' : '32px',
    background: 'rgba(75, 85, 99, 0.6)',
    borderRadius: '0 0 8px 8px'
  })

  const getFallbackGlowStyles = () => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: windowSize.isMobile ? '40px' : '80px',
    height: windowSize.isMobile ? '40px' : '80px',
    background: 'rgba(253, 224, 71, 0.8)',
    borderRadius: '50%'
  })

  const getSparkStyles = (position) => {
    const baseStyles = {
      position: 'absolute',
      borderRadius: '50%'
    }
    
    switch(position) {
      case 1:
        return {
          ...baseStyles,
          top: '25%',
          left: '50%',
          width: windowSize.isMobile ? '6px' : '8px',
          height: windowSize.isMobile ? '6px' : '8px',
          background: '#facc15'
        }
      case 2:
        return {
          ...baseStyles,
          top: '33%',
          right: '25%',
          width: windowSize.isMobile ? '4px' : '4px',
          height: windowSize.isMobile ? '4px' : '4px',
          background: '#22d3ee'
        }
      case 3:
        return {
          ...baseStyles,
          bottom: '33%',
          left: '33%',
          width: windowSize.isMobile ? '5px' : '6px',
          height: windowSize.isMobile ? '5px' : '6px',
          background: '#60a5fa'
        }
      default:
        return baseStyles
    }
  }

  // Don't render until window size is initialized to avoid hydration issues
  if (windowSize.width === 0) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#2e3234] to-black" />
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-[#2e3234] to-black flex flex-col items-center w-full text-white relative overflow-hidden">
      
      {/* Hero Section - Fixed positioning and centering */}
      <div className="min-h-screen w-full flex justify-center items-center px-4 relative bg-top bg-no-repeat bg-cover z-[4] pt-20 md:pt-16 sm:pt-12" 
        style={getHeroContainerStyles()}
      >
        
        {/* Background Effects */}
        <GlowingOrbs />
        <FloatingParticles />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl w-full mx-auto backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] relative"
          style={getHeroContentStyles()}
        >
          
          <Overlay className="absolute inset-0 z-[1]" />
          
          {/* Parallax Background Element */}
          <div 
            className="absolute inset-0 z-[2] opacity-20"
            style={{
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Main Content Grid */}
          <div className="relative z-[3] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] px-8 lg:px-16 py-16 lg:py-20"
            style={getMainContentGridStyles()}
          >
            
            {/* Text Content */}
            <div className="flex flex-col justify-center items-start space-y-8 lg:order-1 order-2"
              style={getTextContentStyles()}
            >
              
              {/* Title */}
              <div className="space-y-4" style={{marginTop: '1rem'}}>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight"
                  style={getTitleStyles()}
                >
                  <span className="relative block">
                    {text}
                    {/* Typing cursor */}
                    <span className="inline-block w-1 h-[0.7em] bg-cyan-400 ml-1 animate-blink"></span>
                  </span>
                </h1>
                
                {/* Subtitle with gradient */}
                <div className="space-y-3" style={{marginTop: '0.75rem'}}>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" style={{height: '1px'}}></div>
                  <p className="text-cyan-100/80 text-sm font-light tracking-widest uppercase" 
                    style={getSubtitleStyles()}
                  >
                    Premium Electrical Solutions
                  </p>
                </div>
                
                {/* Glowing accent line */}
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse-slow"
                  style={{
                    margin: windowSize.isMobile ? '0 auto' : '0'
                  }}
                ></div>
              </div>
              
              {/* Description */}
              <p className="text-lg lg:text-lg leading-relaxed text-gray-200 font-light max-w-2xl"
                style={getDescriptionStyles()}
              >
                Empowering homes and businesses with reliable electrical and
                electronic solutions, Ihemsadiele is your trusted partner for
                seamless installations, prompt repairs, and comprehensive services.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-[600px] sm:w-auto"
                style={getCtaButtonsStyles()}
              >
                <div style={getButtonWrapperStyles()}>
                  <Button text="Connect Here" className='px-6 py-15' />
                </div>
                <div style={getButtonWrapperStyles()}>
                  <Button text='Learn More' />
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4"
                style={getStatsStyles()}
              >
                <div className="text-center" style={getStatItemStyles()}>
                  <div className="text-3xl font-bold text-cyan-400" style={getStatNumberStyles()}>500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide" style={getStatLabelStyles()}>Projects</div>
                </div>
                <div className="text-center" style={getStatItemStyles()}>
                  <div className="text-3xl font-bold text-cyan-400" style={getStatNumberStyles()}>15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide" style={getStatLabelStyles()}>Years</div>
                </div>
                <div className="text-center" style={getStatItemStyles()}>
                  <div className="text-3xl font-bold text-cyan-400" style={getStatNumberStyles()}>24/7</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide" style={getStatLabelStyles()}>Support</div>
                </div>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="flex justify-center items-center relative lg:order-2 order-1 min-h-[400px] lg:min-h-[600px]"
              style={getImageContainerStyles()}
            >
              
              {/* Glowing rings around bulb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border-2 border-cyan-400/20 rounded-full animate-spin-slow"
                  style={getRingStyles1()}
                ></div>
                <div className="absolute w-96 h-96 border border-blue-500/10 rounded-full animate-spin-reverse"
                  style={getRingStyles2()}
                ></div>
              </div>
              
              {/* Main bulb image */}
              <div className="relative z-10 transform hover:scale-110 transition-transform duration-500"
                style={{
                  position: 'relative',
                  zIndex: '10',
                  transform: 'scale(1)',
                  transition: 'transform 0.5s ease'
                }}
              >
                <div
                  className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400/20 to-cyan-400/20 rounded-full flex items-center justify-center animate-updown filter drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                  style={getBulbContainerStyles()}
                >
                
                 <>
      {!hasError ? (
        <Image
          src="/assets/images/bluebulb2.png"
          alt="bluebulb"
          width={windowSize.isMobile ? 400 : 800}
          height={windowSize.isMobile ? 400 : 800}
          onError={() => setHasError(true)}
          className="object-contain"
          style={getImageStyles()}
        />
      ) : (
        <div className="w-32 h-48 bg-gradient-to-t from-yellow-400/40 to-yellow-300/60 rounded-t-full relative"
          style={getFallbackBulbStyles()}
        >
          <div className="absolute bottom-0 w-full h-8 bg-gray-600/60 rounded-b-lg"
            style={getFallbackBaseStyles()}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-300/80 rounded-full animate-pulse"
            style={getFallbackGlowStyles()}
          />
        </div>
      )}
    </>
                  
                </div>
                
                {/* Electric sparks effect */}
                <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                  style={getSparkStyles(1)}
                ></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" 
                  style={{ 
                    animationDelay: '1s',
                    ...getSparkStyles(2)
                  }}
                ></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" 
                  style={{ 
                    animationDelay: '2s',
                    ...getSparkStyles(3)
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[5] hidden lg:block">
            <div className="flex flex-col items-center space-y-2 text-cyan-400/70">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other sections */}
       <Mycards />
      
      <MultiCarousel />
     <Testimonial/>
      
      <style jsx>{`
        @keyframes updown {
          0% { transform: translateY(-20px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-updown { animation: updown 3s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-blink { animation: blink 1s infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .animate-updown { animation: updown 4s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 30s linear infinite; }
          .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        }
      `}</style>
    </div>
  )
}