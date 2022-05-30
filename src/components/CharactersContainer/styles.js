import styled from 'styled-components';


export const CardsContainer = styled.div`
width: 90%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`;

export const Div = styled.div`
background-color: ${({theme})=>theme.colors.bgPrimary};
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
min-height: 100vh;
width: 100%;
top: 60px;
`;

export const Title = styled.h1`
font-size: 2.8em;
color: #fff;
text-shadow: 3px 4px #000;
font-family: 'Creepster', cursive;
`;