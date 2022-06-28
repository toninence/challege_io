import React from 'react'
const { Button, ButtonsContainer } = require('./styles');

interface props {
  prev: string;
  next: string;
  onPrev: ()=>void;
  onNext: ()=>void;

}
const index = ({prev, next, onPrev, onNext}:props) => {
  return (
    <ButtonsContainer>
    {prev && <Button onClick={onPrev}>prev</Button>}
    {next && <Button onClick={onNext}>next</Button>}
    </ButtonsContainer>
  )
}

export default index;