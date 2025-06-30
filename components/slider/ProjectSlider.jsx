
'use client'
   
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import projectData from './projectSliderData';
import Link from 'next/link'



const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const slideInterval = useRef(null);

  const projectLength = projectData.length;
  const autoScroll = true;
  const intervalTime = 5000;

  // Check if we're on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Responsive breakpoints
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Mouse tracking for premium effects
  useEffect(() => {
    if (!isClient) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  const nextProject = () => {
    setCurrentProject(currentProject === projectLength - 1 ? 0 : currentProject + 1);
  };

  const prevProject = () => {
    setCurrentProject(currentProject === 0 ? projectLength - 1 : currentProject - 1);
  };

  const auto = () => {
    slideInterval.current = setInterval(nextProject, intervalTime);
  };

  useEffect(() => {
    setCurrentProject(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval.current);
  }, [currentProject]);

  // Dynamic styles based on screen size and mouse position
  const containerStyle = {
    position: 'relative',
    width: isMobile ? '100%' : '70%',
    height: isMobile ? '100vh' : '70vh',
    overflow: 'hidden',
    borderRadius: isMobile ? '0' : '24px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: `
      0 32px 64px rgba(0,0,0,0.3),
      0 16px 32px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.3)
    `,
    zIndex: 3,
    transform: (!isClient || isMobile) ? 'none' : `perspective(1000px) rotateX(${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.01}deg) rotateY(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * 0.01}deg)`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const arrowBaseStyle = {
    position: 'absolute',
    width: isMobile ? '48px' : '56px',
    height: isMobile ? '48px' : '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#ffffff',
    cursor: 'pointer',
    zIndex: 999,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: isMobile ? '20px' : '24px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  };

  const arrowHoverStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
  };

  const slideStyle = (index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: `translate3d(${(index - currentProject) * 100}%, 0, 0)`,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: index === currentProject ? 1 : 0,
  });

  const getImageStyle = (index) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: isMobile ? '0' : '24px',
    transition: 'all 0.8s ease-out',
    transform: `scale(${index === currentProject ? 1.05 : 1})`,
  });

  const contentStyle = {
    position: 'absolute',
    top: isMobile ? '50%' : '50%',
    left: isMobile ? '24px' : '64px',
    right: isMobile ? '24px' : 'auto',
    width: isMobile ? 'auto' : '60%',
    maxWidth: isMobile ? 'none' : '600px',
    transform: isMobile ? 'translateY(-50%)' : 'translateY(-50%)',
    background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))',
    backdropFilter: 'blur(20px)',
    padding: isMobile ? '32px 24px' : '48px 40px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#ffffff',
    zIndex: 10,
    boxShadow: `
      0 24px 48px rgba(0,0,0,0.4),
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.2)
    `,
  };

  const titleStyle = {
    fontSize: isMobile ? '28px' : '36px',
    fontWeight: '700',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  };

  const descStyle = {
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '1.6',
    marginBottom: '32px',
    color: 'rgba(255,255,255,0.9)',
    borderBottom: '2px solid rgba(255,255,255,0.3)',
    paddingBottom: '20px',
    fontWeight: '400',
  };

  const buttonStyle = {
    padding: isMobile ? '14px 28px' : '16px 32px',
    border: 'none',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 12px 24px rgba(102, 126, 234, 0.3)',
    transform: 'translateY(0)',
    letterSpacing: '0.5px',
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 16px 32px rgba(102, 126, 234, 0.4)',
    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
  };

  // Add keyframe animations via style tag
  useEffect(() => {
    if (!isClient) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes slideInUp {
        0% {
          opacity: 0;
          transform: translateY(60px) translateY(-50%);
        }
        100% {
          opacity: 1;
          transform: translateY(0) translateY(-50%);
        }
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, [isClient]);

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...arrowBaseStyle,
          right: isMobile ? '16px' : '24px',
        }}
        onClick={nextProject}
        onMouseEnter={(e) => Object.assign(e.target.style, arrowHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, arrowBaseStyle)}
      >
        <AiOutlineArrowRight />
      </div>

      <div
        style={{
          ...arrowBaseStyle,
          left: isMobile ? '16px' : '24px',
        }}
        onClick={prevProject}
        onMouseEnter={(e) => Object.assign(e.target.style, arrowHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, arrowBaseStyle)}
      >
        <AiOutlineArrowLeft />
      </div>

      {projectData.map((slide, index) => (
        <div key={index} style={slideStyle(index)}>
          {index === currentProject && (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <img
                src={slide.image}
                alt="Project slide"
                style={getImageStyle(index)}
              />
              <div style={{
                ...contentStyle,
                animation: index === currentProject ? 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both' : 'none',
              }}>
                <h2 style={titleStyle}>{slide.title}</h2>
                <p style={descStyle}>{slide.desc}</p>
                <Link
                href={'/contact'}
                  style={buttonStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Premium indicator dots */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '24px' : '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 999,
      }}>
        {projectData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentProject(index)}
            style={{
              width: index === currentProject ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: index === currentProject 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: index === currentProject 
                ? '0 4px 12px rgba(102, 126, 234, 0.4)'
                : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;