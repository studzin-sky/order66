import React from "react";
import { Container } from "../../styled/styled";


export const LoreData = (props) => {
    return props.items.map((item) => {
      return (
        <Container key={item.uid}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </Container>
      );
    });
  };