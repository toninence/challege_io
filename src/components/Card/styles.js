import styled from "styled-components";

//carta-box
export const CardContainer = styled.div`
  margin: 8px 10px;
  box-shadow: 5px 5px 5px #111;
  font-size: .9em;
`;
//carta
export const CardComponent = styled.div`
  color: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
`;
//cara
export const ImageContainer = styled.div`
  width: 100%;
`;

//cara detras
export const TextContainer = styled.div`
  padding: 5px 15px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  color: ${({theme})=> theme.colors.text};
  background-color: ${({theme}) => theme.colors.bgPrimary};
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  border-radius: 5px;

  @supports (object-fit: contain) {
    width: 100%;
    object-fit: contain;
    object-position: top left;
  }
`;

export const Name = styled.h3`
  font-weight: bold;
`;

export const Status = styled.p`
  display: flex;
  align-items: center;
`;
export const Species = styled.span``;
export const Origin = styled.p`
  display: inline-block;
  font-weight: bold;
`;
export const Location = styled.p`
  display: inline-block;
  font-weight: bold;
  :visited {
    color: red;
  }
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: red;
  height: 25px;
`;

