'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import MultiCarousel from '@/components/MultiCarousel'
import Mycards from '@/components/Mycards'
import { mobile, tablet } from '@/components/Responsiveness'

const Container = styled.div`
  background-color: #2e3234;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  padding-top: 100px;
  margin-bottom: 80px;
`
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  line-height: 5rem;
  text-align: left;
  width: 100%;
  z-index: 3;
  ${mobile({
    zIndex: 4,
    fontSize: '2.6rem',
    lineHeight: '3rem',
    textAlign: 'center',
  })}
  ${tablet({
    zIndex: 4,
    fontSize: '2.6rem',
    lineHeight: '3rem',
    textAlign: 'center',
  })};
`
const Wrapper = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
  background-image: url(${'/assets/images/homebannerimage.jpg'});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 4;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 244, 0.75);
  ${mobile({
    padding: '5 10px',
    height: '70vh',
    position: 'none',
  })}
  ${tablet({
    padding: 10,
    position: 'none',
    height: '70vh',
  })};
`

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
  position: relative;
  z-index: 3;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0, 0.7)',
  })}
  ${tablet({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    height: '100%',
    zIndex: 100,
    textAlign: 'center',
  })};
`
const Span = styled.span``
const Small = styled.span``
const Content = styled.p`
  width: 80%;
  text-align: justify;
  margin-bottom: 15px;
  ${mobile({
    width: '100%',
    textAlign: 'center',
    fontSize: '1.8rem',
    marginTop: '15px',
  })}
  ${tablet({
    width: '100%',
    textAlign: 'center',
    fontSize: '1.8rem',
    marginTop: '15px',
  })};
`

const ImageContainer = styled.div`
  width: 60%;
  height: 90vh;
  position: relative;
  z-index: 3;
  ${mobile({
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  })}
  ${tablet({
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  })};
`
const Show = styled.span`
  color: rgba(255, 255, 255, 0.5);
`
const MyImage = styled.img`
  width: 6%;
  ${mobile({
    width: '10%',
  })}
  ${tablet({
    width: '10%',
  })};
`

const Image = styled.img`
  height: 100%;
  animation: updown 3s linear infinite;
  ${`@keyframes updown`} {
    & 0% {
      transform: translateY(-20px);
    }
    & 50% {
      transform: translateY(20px);
    }
    & 100% {
      transform: translateY(-20px);
    }
  }
  ${mobile({
    height: '90%',
  })}
  ${tablet({
    height: '90%',
  })};
`

export default function HomePage() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = [
    'Adiele & Sons Ltd:',
    'Solar Installation',
    'Auto Power Switcher',
    'House Wiring',
    'AC Installation',
    'AC Maintenance',
    'AC  Services',
    'AC Repairs',
  ]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [delta, text])

  return (
    <Container>
      <Wrapper>
        <Overlay style={{ zIndex: 2 }} />
        <Text>
          <Title>
            <Small>
              {text}
              <Show>
                <MyImage src={'/assets/images/Ballpen.png'} />
              </Show>
            </Small>
          </Title>
          <Content>
            Empowering homes and businesses with reliable electrical and
            electronic solutions, ihemseepro is your trusted partner for
            seamless installations, prompt repairs, and comprehensive services.
            With a focus on quality craftsmanship and customer satisfaction, we
            ensure efficient and sustainable solutions for all your electrical
            and electronic needs.
          </Content>
          <Button text='Connect here' />
        </Text>
        <ImageContainer>
          <Image src={'/assets/images/bulb.png'} alt='ihems bulb' />
        </ImageContainer>
      </Wrapper>
      <MultiCarousel />
      <Mycards />
    </Container>
  )
}
