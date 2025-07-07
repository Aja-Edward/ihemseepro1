'use client'

import ProjectBackground from './ProjectBackground'
import Mycards from './Mycards'
import Overlay from './Overlay'
import ProjectSlider from './slider/ProjectSlider'
import Banner from './banner/Banner'

const Projects = () => {
  const containerStyle = {
    backgroundColor: '#2e3234',
    width: '100%',
    color: '#ffffff',
    justifyContent: 'center',
    paddingTop: '100px',
    marginBottom: '80px'
  }

  const wrapperStyle = {
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10%',
    position: 'relative',
    backgroundImage: `url(${ProjectBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 1,
    boxShadow: '5px 5px 5px 0px rgba(255, 255, 244, 0.75)',
    // Mobile styles (max-width: 768px)
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '0 5%',
      height: '70vh'
    },
    // Tablet styles (max-width: 1024px)
    '@media (max-width: 1024px)': {
      width: '100%',
      padding: '0 5%',
      height: '70vh'
    }
  }

  // For responsive styles, we'll need to use window.innerWidth or CSS classes
  // Since inline styles don't support media queries directly, here's an alternative approach:
  const getResponsiveWrapperStyle = () => {
    const baseStyle = {
      height: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 10%',
      position: 'relative',
      backgroundImage: `url(${ProjectBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      zIndex: 1,
      boxShadow: '5px 5px 5px 0px rgba(255, 255, 244, 0.75)'
    }

    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width <= 768) {
        return {
          ...baseStyle,
          width: '100%',
          padding: '0 5%',
          height: '70vh'
        }
      } else if (width <= 1024) {
        return {
          ...baseStyle,
          width: '100%',
          padding: '0 5%',
          height: '70vh'
        }
      }
    }

    return baseStyle
  }

  return (
    <div style={containerStyle}>
      <Banner
        imagesource={'assets/images/meter1.svg'}
        title='Project Page'
        content='Adiole and Sons has successfully handled many projects in various service areas, including solar, electrical wiring, poultry etc'
      />
      <div style={getResponsiveWrapperStyle()}>
        <ProjectSlider style={{ zIndex: 3 }} />
        <Overlay style={{ zIndex: 2 }} />
        <ProjectBackground videoSource={'assets/video/Projectpage.mp4'} />
        {/* <ProjectSlider /> */}
        {/* <SpinningLogo /> */}
      </div>
      <Mycards />
    </div>
  )
}

export default Projects