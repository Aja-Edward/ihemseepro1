'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const Contact = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [focusedField, setFocusedField] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleInputBlur = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }))
    setFocusedField('')
  }

  const handleInputFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        // Show success animation
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendMessage(formValues)
    } catch (error) {
      setLoading(false)
      console.error(error.message)
    }
  }

  const isFormValid = formValues.firstName && formValues.lastName && formValues.email && formValues.subject

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+234 703 505 1476",
      description: "Mon-Fri 8:00AM - 6:00PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "info@ihemsadiele.com",
      description: "We'll respond within 24hrs"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Lagos, Nigeria",
      description: "Premium electrical solutions"
    }
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Hero Banner */}
      <section className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <Image
              width={400} height={300}
                src="assets/images/contactus2.png"
                alt="Contact Us"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm mb-4">
                    <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-sm font-medium text-cyan-300">Premium Support</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    Contact Us
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    You can reach us via social media, phone call, email or just by dropping a message in our contact form below
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side - Contact Info & Image */}
            <div className="space-y-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-cyan-300 font-medium mb-1">{item.value}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                  <Image
                  width={400} height={300}
                    src="assets/images/contact-img.svg"
                    alt="Contact illustration"
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
                    
                    {/* Form Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        Get In Touch
                      </h2>
                      <p className="text-gray-400">Let us discuss your electrical project</p>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="firstName"
                              value={formValues.firstName}
                              onChange={handleChange}
                              onFocus={() => handleInputFocus('firstName')}
                              onBlur={() => handleInputBlur('firstName')}
                              className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                                focusedField === 'firstName' || formValues.firstName
                                  ? 'border-cyan-400 focus:ring-cyan-400/20 bg-gray-800/70'
                                  : touched.firstName && !formValues.firstName
                                  ? 'border-red-400 focus:ring-red-400/20'
                                  : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                              }`}
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="lastName"
                              value={formValues.lastName}
                              onChange={handleChange}
                              onFocus={() => handleInputFocus('lastName')}
                              onBlur={() => handleInputBlur('lastName')}
                              className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                                focusedField === 'lastName' || formValues.lastName
                                  ? 'border-cyan-400 focus:ring-cyan-400/20 bg-gray-800/70'
                                  : touched.lastName && !formValues.lastName
                                  ? 'border-red-400 focus:ring-red-400/20'
                                  : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                              }`}
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                            className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                              focusedField === 'email' || formValues.email
                                ? 'border-cyan-400 focus:ring-cyan-400/20 bg-gray-800/70'
                                : touched.email && !formValues.email
                                ? 'border-red-400 focus:ring-red-400/20'
                                : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      {/* Subject and Phone */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formValues.subject}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('subject')}
                            onBlur={() => handleInputBlur('subject')}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                              focusedField === 'subject' || formValues.subject
                                ? 'border-cyan-400 focus:ring-cyan-400/20 bg-gray-800/70'
                                : touched.subject && !formValues.subject
                                ? 'border-red-400 focus:ring-red-400/20'
                                : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                            }`}
                            placeholder="Project subject"
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formValues.phone}
                              onChange={handleChange}
                              onFocus={() => handleInputFocus('phone')}
                              onBlur={() => handleInputBlur('phone')}
                              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 backdrop-blur-sm"
                              placeholder="+234 000 000 0000"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <textarea
                            name="message"
                            rows={4}
                            value={formValues.message}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('message')}
                            onBlur={() => handleInputBlur('message')}
                            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 backdrop-blur-sm resize-none"
                            placeholder="Tell us about your electrical project..."
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={onSubmit}
                        disabled={!isFormValid || loading}
                        className={`group relative w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                          isFormValid && !loading
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1'
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="flex items-center justify-center space-x-2">
                          {loading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-top-white rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-12">
              <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Power Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust us with their electrical needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all duration-300">
                  Get Free Quote
                </button>
                <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact