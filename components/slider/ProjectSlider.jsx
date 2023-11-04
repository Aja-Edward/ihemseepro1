'use client'

import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import projectData from './projectSliderData'
import { mobile, tablet } from './sliderresponsiveness'
import Link from 'next/link'

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projectLength = projectData.length

  const nextProject = () => {
    setCurrentProject(
      currentProject === projectLength - 1 ? 0 : currentProject + 1
    )
  }

  const prevProject = () => {
    setCurrentProject(
      currentProject === 0 ? projectLength - 1 : currentProject - 1
    )
  }

  const autoScroll = true
  let slideInterval
  let intervalTime = 8000

  const auto = () => {
    slideInterval = setInterval(nextProject, intervalTime)
  }

  useEffect(() => {
    setCurrentProject(0)
  }, [])

  useEffect(() => {
    if (autoScroll === true) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [auto, autoScroll, currentProject, slideInterval])

  const slideUp = keyframes`
0%{
  visibility: none;
  top: 12rem;
}

100% {
   top: 4rem;
   visibility:visible
}

`
  const Container = styled.div`
    z-index: 3;
    width: 70%;
    height: 70vh;
    position: relative;
    overflow: hidden;
    ${mobile({
      width: '100%',
      height: '100%',
      padding: 0,
    })}
    ${tablet({ width: '100%', height: '100%' })}
  `
  const ArrowRight = styled(AiOutlineArrowRight)`
    position: absolute;
    border: 1px solid #fff;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    z-index: 999;
    top: 50%;
    transform: translateX(-50%);
    right: 1.5rem;
    &:hover {
      background: #fff;
      color: #f9004d;
    }
  `

  const ArrowLeft = styled(AiOutlineArrowLeft)`
    position: absolute;
    border: 1px solid #fff;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    width: 1.5rem;
    height: 1.55rem;
    cursor: pointer;
    z-index: 999;
    top: 50%;
    transform: translateX(-50%);
    left: 1.5rem;
    &:hover {
      background: #fff;
      color: #f9004d;
    }
  `

  const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: ${({ currentProject, index }) =>
      `translate3d(${(currentProject - index) * -100}%, 0, 0)`};
    transition: all 0.3s ease-in-out;
    &.slide {
      opacity: 0;
    }
    &.current {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `
  const Wrapper = styled.div`
    ${mobile({ width: '100%', height: '100%' })}
    ${tablet({ width: '100%', height: '100%' })}
  `
  const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: center;
  `
  const Content = styled.div`
    position: absolute;
    text-align: left;
    top: 8rem;
    left: 6rem;
    right: auto;
    background: rgba(0, 0, 0, 0.3);
    width: 70%;
    padding: 3rem;
    z-index: 1;
    color: #fff;
    border-radius: 10px;
    animation: slide-up 1s ease 0.5s;
    animation-fill-mode: forwards;
    visibility: hidden;
    animation: ${slideUp} 1s ease 0.5s forwards;
    visibility: hidden;
    ${mobile({ top: 0, left: 0, width: '100%', height: '100%' })}
    ${tablet({ top: 0, left: 0, width: '100%', height: '100%' })}
  `

  const Title = styled.h2``
  const Desc = styled.p`
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
    margin-bottom: none;
  `
  const Button = styled.button`
    padding: 10px 15px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-top: none;
  `

  return (
    <Container>
      <ArrowRight next onClick={nextProject} />
      <ArrowLeft prev onClick={prevProject} />

      {projectData.map((slide, index) => {
        return (
          <Link href={'/contact'}>
            <Slide
              className={index === currentProject ? 'current ' : 'slide'}
              currentSlide={currentProject}
              key={index}
            >
              {index === currentProject && (
                <Wrapper>
                  <Image src={slide.image} alt='my slide' />

                  <Content>
                    <Title>{slide.title}</Title>
                    <Desc>{slide.desc}</Desc>

                    <Button>Get Started</Button>
                  </Content>
                </Wrapper>
              )}
            </Slide>
          </Link>
        )
      })}
    </Container>
  )
}

export default ProjectSlider
