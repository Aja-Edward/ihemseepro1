'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { mobile, tablet } from './responsiveness'

const StyledLink = styled(Link)`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000000;
  ${mobile({
    width: '100%',
  })}
  ${tablet({
    width: '100%',
  })};
`
const Connect = styled.button`
  font-weight: 700;
  color: #ffff;
  border: 1px solid #ffffff;
  padding: 18px;
  font-size: 18px;
  position: relative;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  cursor: pointer;
  ${mobile({
    padding: '10px',
    border: 'none',
    fontSize: '14px',
    width: '100%',
    borderRadius: 10,
  })}
  ${tablet({
    padding: '10px 15px',
    border: 'none',
    fontSize: '14px',
    width: '100%',
    borderRadius: 10,
    zIndex: 2,
  })};
  &::before {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #f9004d;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
    ${mobile({
      borderRadius: 20,
    })}
    ${tablet({
      borderRadius: 20,
    })};
  }
  &:hover {
    color: white;
  }
  &:hover {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
`

const Button = ({ text }) => {
  return (
    <StyledLink href='/contact'>
      <Connect onClick={() => console.log('connect')}>
        {text}
        <BsFillArrowRightCircleFill style={{ marginLeft: '10px' }} />
      </Connect>
    </StyledLink>
  )
}

export default Button
