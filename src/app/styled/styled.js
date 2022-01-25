import styled, { css } from "styled-components";

export const Paragraph = styled.p`
color: yellow;
size: 15px;`

export const Button = styled.button`
  background: transparent;
  border-style: groove;
  border-color: yellow;
  color: yellow;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.tile &&
    css` // tiles component style
      margin: 20px 20px 20px 20px;
      border: 4px groove yellow;
      color: yellow;
      background-color: transparent;
      text-align: center;
      &:hover {
        transform: translate(0%, -10%);
        transition: 0.3s ease-out;
      }
    `}
  ${(props) =>
    props.headButton &&
    css` //Header Button style
      background-color: black;
      border-color: yellow;
      color: yellow;
      border-style: groove;
      padding: 5px 10px 5px 10px;
      font-size: 2rem;
      
    `}
`;

export const Main = styled.div`
  background-color: black;
  margin: 20px 20px 20px 20px;
  align-items: stretch;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  margin: 30fr 20px 20px 20px;
  color: yellow;
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 750px) {
    min-width: 90%;
  }
`;

export const Container = styled.div`
  margin: 20px 20px 20px 20px;
  border: 4px groove yellow;
  color: yellow;
  background-color: transparent;
  text-align: center;
`;

export const SearchFormDiv = styled.form`
  width: 70%;
  margin-left: 15%;
`;

export const SearchFormInputOutro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-color: yellow;
  color: yellow;
  background-color: transparent;
  border-style: groove;
  padding: 5px 10px 5px 10px;
  @media (max-width: 750px) {
    width: 80%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SearchInputDiv = styled.input`
  background-color: transparent;
  color: yellow;
  border-color: yellow;
  border-style: groove;
  padding: 5px 5px 5px 5px;
  @media (max-width: 750px) {
    max-width: 20%;
  }
`;
