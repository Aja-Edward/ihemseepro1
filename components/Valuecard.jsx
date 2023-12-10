'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { corevalues } from './data'
import { Mantra } from './data'
import { ourdirectors } from './data'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import '@/styles/homestyles.css'

const Valuecard = () => {
  const Wrapper = styled.div`
    background-color: blue;
  `
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h1>Our Company</h1>
            <p> Adiole and sons</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first' className='nav-title'>
                    Our Core Values
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Mantra</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Our Directors</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {corevalues.map((corevalue, index) => {
                      return <ProjectCard key={index} {...corevalue} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row className='ceopage'>
                    {Mantra.map((owner, index) => {
                      return <ProjectCard key={index} {...owner} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {ourdirectors.map((director, index) => {
                      return <ProjectCard key={index} {...director} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Valuecard
