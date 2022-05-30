import React from 'react'
import { Button, ButtonsContainer } from './styles';

const index = ({prev, next, onPrev, onNext}) => {
  return (
    <ButtonsContainer>
    {prev && <Button onClick={onPrev}>prev</Button>}
    {next && <Button onClick={onNext}>next</Button>}
    </ButtonsContainer>
  )
}

export default index;