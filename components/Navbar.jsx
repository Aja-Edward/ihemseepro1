'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'
import styled from 'styled-components'
import { mobile, tablet } from './responsiveness'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: ${(props) => (props.scrolled ? '0px 10px' : '10px 15px')};
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 0.32 ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  ${mobile({})}
  ${tablet({})};
`
const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
`
const Brand = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  position: relative;
`
const Image = styled.img`
  width: 50px;
  position: absolute;
  top: 6px;
  left: 5px;
`
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${mobile({
    display: (props) => (props.isOpen ? 'flex' : 'none'),
    width: '100%',
    height: 500,
    position: 'absolute',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '100px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0.9 )',
    padding: 40,
    TransitionEvent: 'all 3s ease',
  })}
  ${tablet({
    display: (props) => (props.isOpen ? 'flex' : 'none'),
    flexDirection: 'column',
    width: '100%',
    height: 500,
    position: 'absolute',
    top: '100px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0.9 )',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
    TransitionEvent: 'all 3s ease',
  })};
`
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  ${mobile({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    borderBottom: '2px solid #ffffff',
    paddingLeft: 0,
    paddingBottom: 10,
  })}
  ${tablet({
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    borderBottom: '2px solid #ffffff',
    paddingLeft: 0,
    paddingBottom: 10,
  })};
`
const Links = styled.li`
  list-style-type: none;
`

const Connect = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 0;
  border-bottom: ${(props) =>
    props.className === 'active' ? '4px solid #fff' : 'transparent'};
  color: ${(props) => (props.className === 'active' ? '#F9004D' : '#fff')};
  opacity: ${(props) => props.className === 'active' && 1};

  ${mobile({
    marginTop: '15px',
    justifyContent: 'left',
    alignItems: 'left',
  })}
  ${tablet({
    marginTop: '15px',
    justifyContent: 'left',
    alignItems: 'left',
  })};
`
const ConnectButton = styled.div`
  ${mobile({
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  })}
  ${tablet({
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  })};
`

const Socials = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  font-size: 1.4rem;
  ${mobile({
    justifyContent: 'flex-start',
    marginBottom: 15,
  })}
  ${tablet({
    justifyContent: 'flex-start',
    marginBottom: 15,
  })};
`
const Direct = styled.a`
  text-decoration: none;
  background-color: rgba(217, 217, 217, 0) !important;
  display: flex;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-left: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  & $(scrolled) {
    color: ${(props) =>
      props.text === 'linkedin'
        ? '#0072b1'
        : props.text === 'facebook'
        ? '#3b5998'
        : props.text === 'whatsapp'
        ? '#00A884'
        : props.text === 'instagram'
        ? '#fa7e1e'
        : 'red'};
  }
  color: #ffffff;
  transition: all 0.5s ease;
  &::before {
    content: '';
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      transform: scale(1);
    }
    color: black;
  }
`
const NavButtonLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  height: 60px;
  width: 60px;
  cursor: pointer;
  ${mobile({ visibility: 'visible' })}
  ${tablet({ visibility: 'visible' })}
`
const ToggleIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9999;
  display: ${(props) => (props.isOpen ? 'none' : 'block')};
  ${mobile({ display: (props) => (props.isOpen ? 'none' : 'block') })}
  ${tablet({ display: (props) => (props.isOpen ? 'none' : 'block') })};
`

const CloseIcon = styled.div`
  position: absolute;
  top: 15;
  right: 15;
  z-index: 9999;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
    setIsOpen(!isOpen)
  }

  const socialLink = {
    whatsapp:
      'https://wa.me/+2347035051476/?text=Hello%2C%20I%20need%20your%20service%20let%20chat%20',
  }

  return (
    <Container className={scrolled ? 'scrolled' : ''}>
      <BrandContainer>
        <Brand>
          <Image src={'assets/images/adioleandsonslogo.png'} alt='ihems logo' />
        </Brand>
      </BrandContainer>

      <NavWrapper isOpen={isOpen}>
        <List>
          <Connect
            href={'/'}
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => onUpdateActiveLink('home')}
          >
            <Links>Home</Links>
          </Connect>
          <Connect
            href={'/servicespage'}
            className={activeLink === 'servicespage' ? 'active' : ''}
            onClick={() => onUpdateActiveLink('servicespage')}
          >
            <Links>Services</Links>
          </Connect>

          <Connect
            href={'/projects'}
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => onUpdateActiveLink('projects')}
          >
            <Links>Projects</Links>
          </Connect>
          <Connect
            href={`/about`}
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => onUpdateActiveLink('about')}
          >
            <Links>About</Links>
          </Connect>
        </List>
        <Socials>
          <Direct href='' text='linkedin'>
            <GrLinkedinOption size={24} style={{ zIndex: 2 }} />
          </Direct>
          <Direct href={socialLink.whatsapp} text='whatsapp' target='_blank'>
            <RiWhatsappFill size={24} style={{ zIndex: 2 }} />
          </Direct>
          <Direct href='' text='facebook'>
            <FaFacebook size={24} style={{ zIndex: 2 }} />
          </Direct>
          <Direct href='' text='instagram'>
            <AiOutlineInstagram size={24} style={{ zIndex: 2 }} />
          </Direct>
        </Socials>
        <ConnectButton>
          <Button text='Lets Connect' />
        </ConnectButton>
      </NavWrapper>
      <NavButtonLink onClick={handleClick}>
        <ToggleIcon isOpen={isOpen}>
          <GiHamburgerMenu size={24} />
        </ToggleIcon>
        <CloseIcon isOpen={isOpen}>
          <FaTimes size={24} />
        </CloseIcon>
      </NavButtonLink>
    </Container>
  )
}

export default Navbar

Direct.shouldForwardProp = (prop) => prop !== 'text'
ToggleIcon.shouldForwardProp = (prop) => prop !== 'isOpen'
CloseIcon.shouldForwardProp = (prop) => prop !== 'isOpen'
