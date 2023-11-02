'use client'

import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import Image from 'next/image'
import 'react-multi-carousel/lib/styles.css'
import dinninglightproject from '@public/assets/images/dinninglightproject.jpg'
import { mobile, tablet } from './responsiveness'

const Container = styled.div`
  position: relative;
  padding: 20px 0 50px 0;
  width: 100%;
  height: 70vh;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: url(${dinninglightproject});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${mobile({ padding: '5px' })}
  ${tablet({ padding: '5px' })}
`
const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 64px;
  text-align: center;
  padding: 20px 20px;
  margin: 30px auto;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: rgba(255, 255, 244, 0.75) 1.95px 1.95px 2.6px;
  ${mobile({
    padding: '5px',
    width: '98%',
    margin: 'auto',
  })}
  ${tablet({ padding: '5px', width: '98%', margin: 'auto' })}
`
const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  ${mobile({
    fontSize: '2.5rem',
  })}
  ${tablet({ fontSize: '2.5rem' })}
`
const Desc = styled.p`
  font-size: 1rem;
  width: 70%;
  color: #b8b8b8;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 14px auto;
  ${mobile({
    width: '100%',
  })}
  ${tablet({ width: '100%' })}
`
const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SmallTitle = styled.h5`
  font-size: 20px;
  font-weight: 500;
`

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Container className='skill'>
      <Image
        src={'/assets/images/color-sharp.png'}
        width={400}
        height={400}
        alt='left background image'
        text='left'
        className='MyImage'
      />
      <Wrapper className='skill-box'>
        <Title>Main Services</Title>
        <Desc>
          "Adiele & Sons Ltd. handles a slew of services including repairs,
          installation and maintenance for solar, air conditioner system, house
          wiring, etc. We also handle poultry business as a way to ensure
          sufficient of food in the country.
        </Desc>
        <Carousel
          responsive={responsive}
          infinite={true}
          className='skill-slider'
        >
          <CarouselItem>
            <Image
              src={'/assets/images/meter1.svg'}
              alt='adieles photo'
              width={100}
              height={100}
            />
            <SmallTitle> Solar Expert</SmallTitle>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={'/assets/images/meter2.svg'}
              alt='wiring the house'
              width={100}
              height={100}
            />
            <SmallTitle> AC Installer</SmallTitle>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={'/assets/images/meter3.svg'}
              alt='the best inverter battrey'
              width={100}
              height={100}
            />
            <SmallTitle> House Wiring</SmallTitle>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={'/assets/images/meter2.svg'}
              alt='the best inverter battrey'
              width={100}
              height={100}
            />
            <SmallTitle> General Electricals</SmallTitle>
          </CarouselItem>
          <CarouselItem>
            <Image
              width={100}
              height={100}
              src={'/assets/images/meter3.svg'}
              alt='the best inverter battrey'
            />
            <SmallTitle>Solar battery repair</SmallTitle>
          </CarouselItem>
        </Carousel>
      </Wrapper>
    </Container>
  )
}

export default MultiCarousel
