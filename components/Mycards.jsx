import { Container, Row, Col, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { projects } from './data'
import { ProjectCard } from './ProjectCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Button from './Button'

const Mycards = () => {
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Discover our innovative electrical and electronic projects, where
              cutting-edge technology meets expert craftsmanship, delivering
              seamless solutions tailored to your specific needs.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Project 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Project 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Project 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <p>
                    Explore our portfolio of meticulously executed electrical
                    and electronic ventures, showcasing our commitment to
                    precision, reliability, and customer-centric design for an
                    enhanced living and working environment.
                  </p>
                  <Button style={{ border: 'none' }} text='Click here' />
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <p>
                    Embark on a journey through our diverse range of successful
                    electrical and electronic undertakings, highlighting our
                    dedication to excellence, efficiency, and sustainable
                    solutions for a seamless integration of technology into your
                    spaces.
                  </p>
                  <Button text='Learn more' />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image
        className='background-image-right'
        src={'/assets/images/color-sharp2.png'}
        alt='the colors'
        width={100}
        height={100}
      />
    </section>
  )
}

export default Mycards
