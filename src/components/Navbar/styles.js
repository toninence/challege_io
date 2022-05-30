import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #191e28;
  display: flex;
  height: 60px;
  justify-content: start;
  align-items: center;
  padding-left: 50px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const Svg = styled.svg`
  /* width: 30px; */
`;

export const Span = styled.span`
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: none;
  fill: #fff;
`;

export const Switch = styled.button`
  width: 160px;
  height: 40px;
  font-size: 1.2em;
  margin-left: auto;
  margin-right: 50px;
  cursor: pointer;
  
`;
