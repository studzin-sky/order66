import React from "react";
import { Container, List } from "../../styled/styled";

export const History = (props) => {
  const historyClickHandler = (e) => {
    props.onReturnedHData({
      name: e.target.name,
      type: e.target.type,
      id: e.target.id
      //returns object with name, id and type on click to send back to lore
    });
  };

  return (
    <Container>
      <h3>History:</h3>
      <ul>
        {props.history.map((point) => (
          <List
            onClick={historyClickHandler}
            key={point.uid}
            type={point.type}
            id={point.id}
          >
            {point.name}
          </List>
        ))}
      </ul>
    </Container>
  );
};

//this component is meant to keep track of clicked tiles
