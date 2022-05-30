import styled from "styled-components"

export const Svg = styled.svg`
width: 30px;
fill: ${props => props.selected ? "#fff" : "none"};
stroke-width: 10px;
stroke: #fff;
`;

export const Container = styled.button`
padding: 10px;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
background-color: rgba(0,0,0,.5);
color: #fff;
border: none;
box-shadow: 2px 2px #000;
:hover {
    cursor: pointer;
}
`;
