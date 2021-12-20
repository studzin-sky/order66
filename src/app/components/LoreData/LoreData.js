import React from "react";
import { Container } from "../../styled/styled";

export const LoreData = (props) => {
  const fetchName = () => {
    console.log(`https://www.swapi.tech/api/${props.type}/${props.id}`)
   /* return fetch(`https://www.swapi.tech/api/${props.type}/?name=${props.name}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err)); */
  }

  return (
    <Container onClick={fetchName}>
      <h2> {props.id}  </h2>
    </Container>
  );
};
