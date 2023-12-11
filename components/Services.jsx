'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Image from 'next/image'
import Overlay from './Overlay'
import MultiCarousel from './MultiCarousel'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { services } from './data'
import { services2ndtab } from './data'
import { services3rdtab } from './data'
import { ProjectCard } from './ProjectCard'
import Banner from './banner/Banner'
import { mobile, tablet } from './responsiveness'

const MyContainer = styled.div`
  width: 100%;
  color: #ffffff;
  justify-content: center;
  padding-top: 100px;
  background-image: url(${'assets/images/lighuphome.jpg'});
  background-image: url('https://cdn.pixabay.com/photo/2016/10/27/09/35/light-1773753_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-bottom: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10%;
  position: relative;
  z-index: 1;
  ${mobile({ padding: '5px', width: '100%' })}
  ${tablet({ padding: '5px', width: '100%' })}
`

const MySection = styled.div`
  height: auto;
  padding: 30px;
  background-color: transparent;
  z-index: 3;
  ${mobile({ padding: 0 })}
`
const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  line-height: 5rem;
  width: 100%;
  z-index: 3;
`
const Text = styled.p`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
  ${mobile({ width: '100%' })}
`
const Services = () => {
  return (
    <MyContainer>
      <Banner
        imagesource={'assets/images/services.png'}
        title='Service Page'
        content='We specialized on ac repairs, maintenance, instalation, solar services and poultry services'
      />
      <MultiCarousel />
      <Wrapper>
        <Overlay style={{ opacity: 0.8 }} />

        <MySection>
          <Container>
            <Row>
              <Col size={12}>
                <Title>Projects</Title>
                <Text>
                  We handle best in class electrical services with top-tier
                  expertise in installations, maintenance, and repairs. Also,
                  our company provide eco-friendly energy through solar
                  installation. We love nature and show that in practice through
                  poultry farm quality service.
                </Text>

                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                  <Nav
                    variant='pills'
                    className='nav-pills mb-5 justify-content-center align-items-center'
                    id='pills-tab'
                  >
                    <Nav.Item>
                      <Nav.Link eventKey='first'>Electrical</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>Solar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='third'>Poultry</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                      <Text>
                        At Ihemseepro, our electrical services offer top-tier
                        expertise in installations, maintenance, and repairs,
                        ensuring reliable and efficient electrical systems that
                        meet industry standards and your specific requirements.
                      </Text>
                      <Row>
                        {services.map((service, index) => {
                          return <ProjectCard key={index} {...service} />
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                      <Text>
                        Ihemseepro \s solar services provide sustainable and
                        eco-friendly energy solutions, integrating
                        state-of-the-art solar technology for cost-effective and
                        reliable power generation, emphasizing our commitment to
                        green energy practices
                      </Text>
                      <Row>
                        {services2ndtab.map((service, index) => {
                          return <ProjectCard key={index} {...service} />
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='third'>
                      <Text>
                        Experience Ihemseepro\s high-quality poultry farm, where
                        we prioritize animal welfare and modern farming
                        techniques, ensuring the production of premium-quality
                        poultry products that meet the highest standards of
                        safety and hygiene.
                      </Text>
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

          <Image
            className='background-image-right'
            src={'/assets/images/color-sharp2.png'}
            height={100}
            width={100}
            alt='adiole and sons background light'
          />
        </MySection>
      </Wrapper>
    </MyContainer>
  )
}

export default Services
