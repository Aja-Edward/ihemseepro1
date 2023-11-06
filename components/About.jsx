'use client'

import styled from 'styled-components'
import ProjectBackground from './ProjectBackground'
import Overlay from './Overlay'
import Banner from './banner/Banner'
import MissionContainer from './MissionContainer'
import Valuecard from './Valuecard'

const Container = styled.div`
  width: 100%;
  justify-content: center;
  padding-top: 100px;
  margin-bottom: 80px;
  background-color: #2e3234;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  position: relative;
  z-index: 1;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 244, 0.1);
`

const About = () => {
  return (
    <Container>
      <Banner
        imagesource={'assets/images/aboutus2.png'}
        title='Ihemsadiele & Sons Ltd.'
        content='We are here to electrify your home and make it comfortable'
      />
      <Wrapper>
        <Overlay />
        <ProjectBackground videoSource={'assets/video/homepage.mp4'} />

        <MissionContainer
          title='Our Mission'
          texttitle=' Building Quality. Building Value.'
          small='Building People.'
          textcontent=' Our mission is to provide comprehensive electrical solutions with unwavering commitment to quality, safety, and customer satisfaction. Through our expertise in house wiring, solar light installation and maintenance, as well as air conditioner system installation, repairs, and maintenance, we aim to create safe, energy-efficient, and comfortable environments for our clients. We strive to be the preferred electrical service provider, delivering exceptional results through our skilled team, advanced technology, and dedication to customer service.'
          copyright='®'
        />
        <MissionContainer
          title='Our Vision'
          texttitle=' Lead. Inspire. Build.'
          textcontent=' Our vision is to be a leading electrical company known for our excellence in service, sustainable practices, and customer-centric approach. We aim to contribute to a greener future by promoting renewable energy solutions and energy-efficient electrical systems. By continuously investing in our team/s professional growth and staying ahead of industry trends, we aspire to become a trusted partner for our clients, ensuring their electrical needs are met with utmost expertise and reliability.'
        />
        <Valuecard />
      </Wrapper>
    </Container>
  )
}

export default About
