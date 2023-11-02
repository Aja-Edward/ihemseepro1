'use client'

import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0.8; /* adjust the opacity value as needed */
`

const Overlay = () => {
  return <Container></Container>
}

export default Overlay
