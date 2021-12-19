import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-style: groove;
  border-color: yellow;
  color: yellow;
`;

export const Main = styled.div`
background-color: black;
margin: 20px 20px 20px 20px;
align-items: stretch;
text-align: center;
display: flex;
flex-direction: column;
`
export const Row = styled.div`
margin: 30fr 20px 20px 20px
color: yellow;
background-color: transparent;
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 20px 20px 20px 20px;
  border: 4px groove yellow;
  color: yellow;
  background-color: transparent;
  text-align: center;
`;
