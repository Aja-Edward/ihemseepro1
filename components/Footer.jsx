'use client'

import styled from 'styled-components'
import MailchimpForm from './MailchimpForm'
// import logo from '../assets/images/adioleandsonslogo.png'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
// import footerimage from '@/public/assets/images/footer-bg.png'
import Newsletter from './Newsletter'
import { mobile, tablet } from './responsiveness'

const Container = styled.div`
  padding: 0 0 50px 0;
  background-image: url(${'assets/images/footer-bg.png'});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: '  column',
    backgroundPosition: 'center',
  })}
  ${tablet({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: '  column',
    backgroundPosition: 'left',
  })}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: '  column',
    width: '100%',
  })}
  ${tablet({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: '  column',
    width: '100%',
  })}
`
const LogoContainer = styled.div`
  flex: 0.5;
  ${mobile({ display: 'none' })}
  ${tablet({ display: 'none' })}
`
const LogoImage = styled.div``

const Image = styled.img`
  width: 26%;
`
const FormContainer = styled.div`
  flex: 2;
`

const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  font-size: 1.4rem;
  ${mobile({
    justifyContent: 'center',
    width: '100%',
  })}
  ${tablet({
    justifyContent: 'center',
    width: '100%',
  })}
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
    border: ${(props) =>
      props.text === 'linkedin'
        ? '6px solid #0072b1'
        : props.text === 'facebook'
        ? '6px solid #000087'
        : props.text === 'whatsapp'
        ? ' 6px solid #00A884'
        : props.text === 'instagram'
        ? ' 6px solid #fa7e1e'
        : ' 6px solid yellow'};
  }
  &:hover {
    &::before {
      transform: scale(1);
    }
    color: ${(props) =>
      props.text === 'linkedin'
        ? ' #0072b1'
        : props.text === 'facebook'
        ? ' #000087'
        : props.text === 'whatsapp'
        ? '  #00A884'
        : props.text === 'instagram'
        ? '  #fa7e1e'
        : ' yellow'} !important;
  }
`

const ContactInfo = styled.div`
  width: 100%;
  ${mobile({
    justifyContent: 'center',
    width: '100%',
  })}
  ${tablet({ justifyContent: 'center', width: '100%' })}
`
const Tel = styled.p`
  width: 100%;
  display: flex;
`
const Email = styled.p`
  width: 100%;
  display: flex;
`
const Small = styled.div`
  padding: 4px 5px;
  width: 70px;
  border: none;
  border-radius: 5px;
  margin-right: 4px;
  background-color: #f9004d;
  font-weight: bolder;
  transition: 0.4s all ease-in-out;
  &:hover {
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    scale: calc(1.1);
    height: 50px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-radius: 50%;
  }
`

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 10px 50px;
  flex: 0.5;
  ${mobile({})}
  ${tablet({})}
`
const Copyright = styled.p`
  margin: 0 auto;
  font-size: 0.8rem;
  width: 30%;
  color: lightgray;
  ${mobile({ width: '90%' })}
  ${tablet({ width: '90%' })}
`
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <LogoImage>
            <Image
              src={'assets/images/adioleandsonslogo.png'}
              alt='site logo'
            />
          </LogoImage>
        </LogoContainer>
        <FormContainer>
          <Newsletter />
        </FormContainer>
        <ContactInfoContainer>
          <ContactInfo>
            <Tel>
              <Small> Tel: </Small> (+234) 703 505 1476
            </Tel>
            <Email>
              <Small> Email:</Small>
              ajaedward750@gmail.com
            </Email>
          </ContactInfo>
          <Socials>
            <Direct href='' text='linkedin'>
              <GrLinkedinOption size={24} style={{ zIndex: 2 }} />
            </Direct>
            <Direct href='' text='whatsapp'>
              <RiWhatsappFill size={24} style={{ zIndex: 2 }} />
            </Direct>
            <Direct href='' text='facebook'>
              <FaFacebook size={24} style={{ zIndex: 2 }} />
            </Direct>
            <Direct href='' text='instagram'>
              <AiOutlineInstagram size={24} style={{ zIndex: 2 }} />
            </Direct>
          </Socials>
        </ContactInfoContainer>
      </Wrapper>
      <Copyright>
        CopyRight 2023. All Right Reserved by Sterling Digitals Ltd.
      </Copyright>
    </Container>
  )
}

export default Footer
