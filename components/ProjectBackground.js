import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '@/components/responsiveness'

const ProjectBackground = ({ videoSource }) => {
  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    ${mobile({ height: '60vh' })}
  `
  const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src={videoSource} type='video/mp4' />
      </Video>
    </Container>
  )
}

export default ProjectBackground
