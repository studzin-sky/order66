import React from "react";
import { Container } from "../../styled/styled";

export const History = (props) => {
  return (
    <Container>
      <h3>History:</h3>
      <ul className="history">
        {props.history.map((point) => (
          <li key={point.id}>{point.name}</li>
        ))}
      </ul>
    </Container>
  );
};

//this component is meant to keep track of clicked tiles
