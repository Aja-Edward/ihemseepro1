'use client'

import styled from 'styled-components'
import ProjectBackground from './ProjectBackground'
import Mycards from './Mycards'
import Overlay from './Overlay'
import ProjectSlider from './slider/ProjectSlider'
import Banner from './banner/Banner'
import { mobile, tablet } from './responsiveness'

const Container = styled.div`
  background-color: #2e3234;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  padding-top: 100px;
  margin-bottom: 80px;
`
const Wrapper = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
  background-image: url(${ProjectBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 244, 0.75);
  ${mobile({
    width: '100%',
    padding: '0 5%',
    height: '70vh',
  })}
  ${tablet({ width: '100%', padding: '0 5%', height: '70vh' })}
`

const Projects = () => {
  return (
    <Container>
      <Banner
        imagesource={'assets/images/meter1.svg'}
        title='Project Page'
        content='Adiole and Sons has successfully handled many projects in various service areas, including solar, electrical wiring, poultry etc'
      />
      <Wrapper>
        <ProjectSlider style={{ zIndex: 3 }} />
        <Overlay style={{ zIndex: 2 }} />
        <ProjectBackground videoSource={'assets/video/Projectpage.mp4'} />
        <projectSlider />
        {/* <SpinningLogo /> */}
      </Wrapper>
      <Mycards />
    </Container>
  )
}

export default Projects
