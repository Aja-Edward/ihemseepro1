'use client'

import styled from 'styled-components'

const InlineError = ({ error }) => {
  return <ErrorContainer>{error}</ErrorContainer>
}

const ErrorContainer = styled.p`
  margin: 0;
  font-size: medium;
  font-weight: 600;
  color: red;
`

export default InlineError
