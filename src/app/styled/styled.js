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

  ${(props) => props.disabledButton && css`
  &:hover {
    cursor: default;
  }`}

  ${(props) => props.force && css`
  &:hover {
    transform: translate(0%, 10%);
    transition: 1.5s;
  }`}

  
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
      padding: 5px 10px 5px 10px;
      font-size: 2rem;
    `}

  ${(props) => props.disabledHeadButton && css`
      padding: 5px 10px 5px 10px;
      font-size: 2rem;
      &:hover {
        cursor: default;
      }`}
`;


    
export const List = styled.li`
&:hover {
  cursor: pointer;
}`;


export const Main = styled.div`
  background-color: black;
  margin: 20px 20px 20px 20px;
  align-items: stretch;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  color: yellow;
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
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
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 750px) {
    min-width: 90%;
  }
`;

export const SearchFormInputOutro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-color: yellow;
  color: yellow;
  padding: 10px 5px;
  background-color: transparent;
  border-style: groove;
  margin-top: 10px;
  @media (max-width: 750px) {
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
  @media (max-width: 750px) {
    max-width: 20%;
  }
`;
