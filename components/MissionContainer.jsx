'use client'

import styled from 'styled-components'
import { mobile, tablet } from '@/components/responsiveness'

const MissionContainer = ({
  title,
  texttitle,
  small,
  textcontent,
  copyright,
}) => {
  const Container = styled.div`
    font-family: benton-sans, Helvetica, sans-serif;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 60vh;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 6;
    ${mobile({ flexDirection: 'column', alignItems: 'center', height: '100%' })}
    ${tablet({ flexDirection: 'column', alignItems: 'center', height: '100%' })}
  `
  const TitleContainer = styled.div`
    flex: 1;
    text-align: left;
    ${mobile({ textAlign: 'center' })}
    ${tablet({ textAlign: 'center' })}
  `
  const Title = styled.h2`
    font-weight: 900;
    font-size: 18px;
    line-height: 32px;
    color: #ffa300;
    ${mobile({ textAlign: 'center', lineHeight: '20px' })}
    ${tablet({ textAlign: 'center', lineHeight: '20px' })}
  `
  const TextContainer = styled.div`
    flex: 2;
    text-align: left;
    margin-left: 30px;
    height: 100%;
    width: 100%;
    ${mobile({
      textAlign: 'center',
      marginLeft: 0,
      display: ' flex',
      justifyContent: ' center',
      alignItems: 'center',
      flexDirection: 'column',
    })}
    ${tablet({
      textAlign: 'center',
      marginLeft: 0,
      display: ' flex',
      justifyContent: ' center',
      alignItems: 'center',
      flexDirection: 'column',
    })}
  `
  const TextTitle = styled.h3`
    font-weight: 700;
    font-size: 44px;
    line-height: 57px;
    color: rgb(0, 61, 165);
    width: 60%;
    ${mobile({ textAlign: 'center', fontSize: '1.7rem' })}
    ${tablet({ textAlign: 'center', fontSize: '1.7rem' })}
  `
  const TextContent = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 31px;
    color: rgb(64, 64, 66);
    width: 90%;
  `
  const Small = styled.span`
    color: #ffa300;
    display: block;
  `
  const Sup = styled.sup`
    color: #ffa300;
  `

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <TextContainer>
        <TextTitle>
          {texttitle}
          <Small>
            {small}
            <Sup>{copyright}</Sup>
          </Small>
        </TextTitle>
        <TextContent>{textcontent}</TextContent>
      </TextContainer>
    </Container>
  )
}

export default MissionContainer
