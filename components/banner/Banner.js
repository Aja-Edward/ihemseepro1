'use client'

import styled from 'styled-components'

import { mobile, tablet } from './myresponsiveness'

const Container = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #2e3234;
  display: flex;
  justify-content: space-around;
  background-image: url(${'assets/images/footer-bg.png'});
  background-size: cover;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.4);
  ${mobile({ position: 'relative', height: '40vh' })}
  ${tablet({ position: 'relative', height: '40vh' })}
`
const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex: 1;
  ${mobile({
    width: '70%',
    height: '100%',
    zIndex: 999,
    borderRadius: 20,
    backgroundImage: `url(${'assets/images/footer-bg.png'})`,
    backgroundSize: ' cover',
  })}
  ${tablet({
    width: '70%',
    height: '100%',
    zIndex: 999,
    borderRadius: 20,
    backgroundImage: `url(${'assets/images/footer-bg.png'})`,
    backgroundSize: ' cover',
  })}
`

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  line-height: 90px;
  ${mobile({ width: '80%', color: '#F9004D ', fontSize: '3rem' })}
  ${tablet({ width: '80%', color: '#F9004D', fontSize: '3rem' })}
`
const Text = styled.p`
  font-size: 1.1rem;
  color: #b8b8b8;
  width: 50%;
  text-align: center;
  ${mobile({
    width: '100%',
  })}
  ${tablet({ width: '80%' })}
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  ${mobile({
    display: 'none',
  })}
  ${tablet({
    display: 'none',
  })}
`
const Image = styled.img`
  height: 100%;
  width: 80%;
`
const Image2 = styled.img`
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  top: 2%;
  left: 0;
  ${mobile({ display: 'none' })}
  ${tablet({ display: 'none' })}
`

const Banner = ({ imagesource, title, content }) => {
  return (
    <Container>
      <Image2 src={'assets/images/color-sharp2.png'} />
      <TextContent>
        <Title>{title}</Title>
        <Text>{content}</Text>
      </TextContent>
      <ImageContainer>
        <Image src={imagesource} alt='banner image' />
      </ImageContainer>
    </Container>
  )
}

export default Banner
