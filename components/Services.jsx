'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
// import Overlay from './Overlay'
import MultiCarousel from './MultiCarousel'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { services } from './data'
import { services2ndtab } from './data'
import { services3rdtab } from './data'
import { ProjectCard } from './ProjectCard'
import Banner from './banner/Banner'

// Subtle floating particles - much fewer and more refined
const FloatingParticles = () => {
  const [particles, setParticles] = useState([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'linear-gradient(45deg, #64748b, #94a3b8)',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )
}

// Clean service stats
const ServiceStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
  style={{marginBottom: '5rem', gap: '1.5rem'}}
  >
    {[
      { number: '500+', label: 'Projects Completed', icon: '⚡' },
      { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
      { number: '24/7', label: 'Support Available', icon: '🔧' },
      { number: '15+', label: 'Years Experience', icon: '🏆' }
    ].map((stat, index) => (
      <div 
        key={index}
        className="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
      style={{padding: '1.5rem'}}
      >
        <div className="text-2xl mb-3 opacity-70" style={{marginBottom: '0.75rem'}}>{stat.icon}</div>
        <div className="text-2xl font-bold text-gray-900 mb-1" style={{marginBottom: '0.25rem'}}>{stat.number}</div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
      </div>
    ))}
  </div>
)

const Services = () => {
  const [activeTab, setActiveTab] = useState('first')
  
  return (
    <div className="relative min-h-screen w-full">
      {/* Clean, minimal background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Single subtle accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <FloatingParticles />
      
      <div className="relative z-10 pt-24" style={{paddingTop: '6rem'}}>
        <Banner
          imagesource={'assets/images/services.png'}
          title='Premium Services'
          content='We specialize in cutting-edge AC repairs, maintenance, installation, solar services and premium poultry services'
        />
        
     
        
        <div className="flex justify-center items-center flex-col px-6 lg:px-20 mb-24"
        style={{padding: '1.5rem', marginBottom: '5rem'}}
        >
          {/* <Overlay style={{ opacity: 0.9 }} /> */}

          {/* Clean main container */}
          <div className="relative w-full max-w-6xl">
            <div className="relative p-8 lg:p-16 bg-white border border-white/10 rounded-2xl"
            style={{padding: '2rem'}}
            >
              
              <Container className="relative z-10">
                <Row>
                  <Col size={12}>
                    {/* Clean, elegant title */}
                    <div className="text-center mb-16"
                    style={{marginBottom: '4rem'}}
                    >
                      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-grey-900 leading-tight"
                      style={{marginBotton: '1.5rem'}}
                      >
                        Our Premium
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Projects
                        </span>
                      </h2>
                      
                      <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
                      style={{marginBottom: '2rem'}}
                      ></div>
                      
                      <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
                        We deliver world-class electrical services with unmatched expertise in installations, 
                        maintenance, and repairs. Our company provides cutting-edge eco-friendly energy solutions 
                        through premium solar installations.
                      </p>
                    </div>

                    <ServiceStats />

                    {/* Clean tab navigation */}
                    <Tab.Container 
                      id='projects-tabs' 
                      defaultActiveKey='first'
                      onSelect={(key) => setActiveTab(key)}
                    >
                      <div className="flex justify-center mb-16"
                      style={{marginBottom: '4rem'}}
                      >
                        <Nav
                          variant='pills'
                          className='flex flex-wrap gap-3 p-1 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10'
                          id='pills-tab'
                       style={{padding: '0.25rem'}}
                       >
                          <Nav.Item>
                            <Nav.Link 
                              eventKey='first'
                              className={`
                                px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2
                                ${activeTab === 'first' 
                                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }
                              `}
                              style={{padding: '1.5rem, o.75rem'}}

                            >
                              <span>⚡</span>
                              Electrical Excellence
                            </Nav.Link>
                          </Nav.Item>
                          
                          <Nav.Item>
                            <Nav.Link 
                              eventKey='second'
                              className={`
                                px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2
                                ${activeTab === 'second' 
                                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25' 
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }
                              `}
                              style={{padding: '1.5rem, 0.75rem'}}
                            >
                              <span>🌞</span>
                              Solar Solutions
                            </Nav.Link>
                          </Nav.Item>
                          
                          <Nav.Item>
                            <Nav.Link 
                              eventKey='third'
                              className={`
                                px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2
                                ${activeTab === 'third' 
                                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }
                              `}
                              style={{padding: '1.5rem 0.75rem'}}
                            >
                              <span>🐓</span>
                              Premium Poultry
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      
                      {/* Clean tab content */}
                      <Tab.Content className="relative">
                        <Tab.Pane eventKey='first'>
                          <div className="mb-12 text-center" style={{marginBottom: '3rem'}}>
                            <div className="max-w-4xl mx-auto p-6 backdrop-blur-sm"
                            style={{padding: '1.5rem'}}
                            >
                              <p className="text-gray-900 leading-relaxed">
                                At Ihemseepro, our electrical services represent the pinnacle of expertise in 
                                installations, maintenance, and repairs. We ensure reliable and efficient 
                                electrical systems that exceed industry standards.
                              </p>
                            </div>
                          </div>
                          <Row>
                            {services.map((service, index) => {
                              return <ProjectCard key={index} {...service} />
                            })}
                          </Row>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey='second'>
                          <div className="mb-12 text-center"
                          style={{marginBottom: '3rem'}}
                          >
                            <div className="max-w-4xl mx-auto p-6"
                            style={{padding: '1.5rem'}}
                            >
                              <p className="text-gray-900 leading-relaxed">
                                Ihemseepro solar services provide revolutionary sustainable and eco-friendly 
                                energy solutions, integrating cutting-edge solar technology for maximum cost-effectiveness 
                                and reliability.
                              </p>
                            </div>
                          </div>
                          <Row>
                            {services2ndtab.map((service, index) => {
                              return <ProjectCard key={index} {...service} />
                            })}
                          </Row>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey='third'>
                          <div className="mb-12 text-center"
                          style={{marginBottom: '3rem'}}
                          >
                            <div className="max-w-4xl mx-auto p-6"
                            style={{padding: '1.5rem' }}
                            >
                              <p className="text-gray-900 leading-relaxed">
                                Experience Ihemseepro premium poultry farm operations, where we prioritize 
                                exceptional animal welfare and cutting-edge farming techniques, ensuring 
                                superior-quality products.
                              </p>
                            </div>
                          </div>
                          <Row>
                            {services3rdtab.map((service, index) => {
                              return <ProjectCard key={index} {...service} />
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Col>
                </Row>
              </Container>
 
              {/* Single decorative element */}
              <Image
                className='absolute -right-6 -bottom-6 opacity-5'
                src={'/assets/images/color-sharp2.png'}
                height={80}
                width={80}
                alt='Background accent'
              />
            </div>
          </div>
        </div>
          <MultiCarousel />
      </div>
    </div>
  )
}

export default Services