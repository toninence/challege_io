import styled from "styled-components"

export const Svg = styled.svg`
width: 20px;
height: 20px;
margin-right: 5px;
fill: ${props => props.green ? "green": "red"};
`;

