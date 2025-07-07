
'use client'

import React, { useState, useEffect } from 'react';
import { Star, Play, User } from 'lucide-react';
import Link from 'next/link'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Idris Ibrahim",
      role: "CEO",
      company: "Idris Electricals",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "Ihemsadiele and Sons has completely transformed how we handle our workflow. Their intuitive solutions and powerful features make daily tasks a joy.",
      type: "text",
      platform: "G2"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "Sucros Electrical Ltd",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "Working with Ihemsadiele and Sons has streamlined our operations beyond expectation. We’re more efficient than ever.",
      type: "video",
      platform: "Trustpilot"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "The team at Ihemsadiele and Sons delivers reliable, intuitive tools that make our day-to-day work simple and stress-free",
      type: "text",
      platform: "Cenphi"
    },
    {
      id: 4,
      name: "David Park",
      role: "CEO",
      company: "InnovateLab",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "Ihemsadiele and Sons helped us modernize our workflow — the difference is night and day. Highly recommended!",
      type: "video",
      platform: "LinkedIn"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "ScaleTech",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "Simple, powerful, and reliable. Everything we wanted in a solution and more. Our team adopted it instantly.",
      type: "text",
      platform: "Senja"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CTO",
      company: "DevStudio",
      avatar: "/api/placeholder/50/50",
      rating: 5,
      text: "With Ihemsadiele and Sons, we save time and achieve more. Their service is truly a game changer",
      type: "video",
      platform: "Product Hunt"
    }
  ];

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCircularPosition = (index, currentIndex, totalItems) => {
    if (isMobile) {
      // Mobile: show only current testimonial
      const relativeIndex = (index - currentIndex + totalItems) % totalItems;
      return {
        x: 0,
        y: 0,
        opacity: relativeIndex === 0 ? 1 : 0,
        scale: 1,
        zIndex: relativeIndex === 0 ? 10 : 0,
        isVisible: relativeIndex === 0
      };
    }

    // Desktop circular positioning - all testimonials revolve around center
    const angle = (index * (360 / totalItems)) + (currentIndex * -(360 / totalItems)); // Rotate based on current index
    const radius = 280; // Increased radius to accommodate center text
    
    // Calculate position on circle
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    // All testimonials are visible but with varying opacity based on position
    const normalizedAngle = ((angle % 360) + 360) % 360; // Normalize angle to 0-360
    
    let opacity = 0.4; // Base opacity for all cards
    let scale = 0.75; // Base scale for all cards
    let zIndex = 1;
    
    // Highlight the top 3 positions (around 270-90 degrees, with 0 being top)
    if (normalizedAngle >= 315 || normalizedAngle <= 45) {
      // Top area (most prominent)
      opacity = 1;
      scale = 1;
      zIndex = 30;
    } else if ((normalizedAngle >= 45 && normalizedAngle <= 135) || (normalizedAngle >= 225 && normalizedAngle <= 315)) {
      // Side areas
      opacity = 0.7;
      scale = 0.85;
      zIndex = 20;
    } else {
      // Bottom area (least prominent)
      opacity = 0.3;
      scale = 0.7;
      zIndex = 10;
    }
    
    return { x, y, opacity, scale, zIndex, isVisible: true };
  };

  const TestimonialCard = ({ testimonial, index, currentIndex }) => {
    const position = getCircularPosition(index, currentIndex, testimonials.length);
    
    if (!position.isVisible) return null;

    const cardStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${position.scale})`,
      opacity: position.opacity,
      zIndex: position.zIndex,
      transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
      width: isMobile ? '280px' : '300px',
      transformOrigin: 'center center',
      willChange: 'transform, opacity'
    };

    const cardInnerStyle = {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      padding: '20px',
      width: '100%',
      height: 'auto',
      border: '1px solid #f3f4f6'
    };

    return (
      <div style={cardStyle}>
        <div style={cardInnerStyle}>
          {/* Platform Badge */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '12px' 
          }}>
            <div style={{ 
              padding: '4px 10px',
              borderRadius: '20px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              {testimonial.platform}
            </div>
            {testimonial.type === 'video' && (
              <div style={{ 
                padding: '6px',
                borderRadius: '50%',
                backgroundColor: '#fef2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Play style={{ width: '14px', height: '14px', color: '#ef4444' }} />
              </div>
            )}
          </div>

          {/* Rating */}
          <div style={{ 
            display: 'flex', 
            gap: '2px',
            marginBottom: '12px' 
          }}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                style={{ 
                  width: '16px', 
                  height: '16px', 
                  color: '#fbbf24', 
                  fill: '#fbbf24' 
                }} 
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p style={{ 
            marginBottom: '16px',
            lineHeight: '1.5',
            color: '#374151',
            fontSize: '14px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            {testimonial.text}
          </p>

          {/* Author */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              marginRight: '12px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User style={{ width: '20px', height: '20px', color: '#ffffff' }} />
            </div>
            <div>
              <h4 style={{ 
                fontWeight: '600', 
                color: '#111827',
                marginBottom: '2px',
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                {testimonial.name}
              </h4>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '12px',
                margin: '0',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      style={{ 
        padding: isMobile ? '40px 16px' : '80px 24px',
        background: 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px'
        }}
      >
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '48px' : '64px' 
        }}>
          <h2 
            style={{ 
              fontSize: isMobile ? '32px' : '48px',
              marginBottom: '16px',
              lineHeight: '1.2',
              fontWeight: 'bold',
              color: '#111827',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Loved by thousands of customers
          </h2>
          <p 
            style={{ 
              fontSize: isMobile ? '18px' : '20px',
              maxWidth: '640px',
              margin: '0 auto',
              color: '#6b7280',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Join the growing community of businesses that trust our platform to drive their success
          </p>
        </div>

        {/* Rotating Testimonials */}
        <div 
          style={{ 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: isMobile ? '400px' : '700px',
            marginBottom: isMobile ? '32px' : '48px'
          }}
        >
          {/* Central Content - Fixed in Desktop, Normal in Mobile */}

          <div style={{
            position: isMobile ? 'static' : 'absolute',
            top: isMobile ? 'auto' : '50%',
            left: isMobile ? 'auto' : '50%',
            transform: isMobile ? 'none' : 'translate(-50%, -50%)',
            textAlign: 'center',
            display: isMobile ? 'none' : 'block',
            zIndex: 50,
            maxWidth: '200px',
             maxHeight: '200px',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            padding: '16px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              What our customers say
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.2',
              margin: '0',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Real stories from real customers who love using our platform
            </p>
          </div>

          {/* Testimonial Cards - Only show in desktop view with revolution */}
          {!isMobile && testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              currentIndex={currentIndex}
            />
          ))}

          {/* Mobile testimonial display */}
          {isMobile && testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: isMobile ? '32px' : '48px'
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: index === currentIndex ? '#2563eb' : '#d1d5db',
                transform: index === currentIndex ? 'scale(1.25)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: isMobile ? '32px' : '48px',
            textAlign: 'center'
          }}
        >
          <div 
            style={{ 
              padding: '24px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div 
              style={{ 
                fontSize: '36px',
                marginBottom: '8px',
                color: '#2563eb',
                fontWeight: 'bold',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              10,000+
            </div>
            <div style={{ 
              color: '#6b7280',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Happy Customers
            </div>
          </div>
          <div 
            style={{ 
              padding: '24px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div 
              style={{ 
                fontSize: '36px',
                marginBottom: '8px',
                color: '#16a34a',
                fontWeight: 'bold',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              4.9/5
            </div>
            <div style={{ 
              color: '#6b7280',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Average Rating
            </div>
          </div>
          <div 
            style={{ 
              padding: '24px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div 
              style={{ 
                fontSize: '36px',
                marginBottom: '8px',
                color: '#9333ea',
                fontWeight: 'bold',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              99.9%
            </div>
            <div style={{ 
              color: '#6b7280',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Uptime
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center' }}>
          <h3 
            style={{ 
              fontSize: '24px',
              marginBottom: '16px',
              fontWeight: 'bold',
              color: '#111827',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Ready to join them?
          </h3>
          <div 
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              alignItems: 'center'
            }}
          >
            <Link href={'/contact'} 
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'background-color 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
             Get instant quote
            </Link>
            <button 
              style={{
                backgroundColor: 'transparent',
                color: '#374151',
                padding: '12px 32px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'background-color 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;