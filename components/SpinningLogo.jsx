'use client'
// import logo from '../assets/images/adiole.png'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-color: transparent;
  z-index: 3;
`
const Spinner = styled.div``

const SpinningLogo = () => {
  return (
    <Container color='blue'>
      <Spinner className='myspinner'>
        <Image
        height={100} 
        width={100}
          src={'assets/images/adiole.png'}
          className='App-logo'
          alt='Company pictorial image'
        />
        <p>
          Mr. ADIELE <code>Ready</code> to light up your home.
        </p>
      </Spinner>
    </Container>
  )
}

export default SpinningLogo
