'use client'

import styled from 'styled-components'
// import loading from '../assets/images/loading.gif'

const Loading = () => {
  return (
    <GifContainer>
      <Image src={'assets/images/loading.gif'} alt='gif loading' />
    </GifContainer>
  )
}

export default Loading

const GifContainer = styled.div``

const Image = styled.img``
