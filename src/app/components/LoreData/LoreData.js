import React from "react";
import { Container } from "../../styled/styled";


export const LoreData = (props) => {
  //const filteredArray = props.items.filter((item) => item.type === props.type);
  //filtered array with types chosen in searchFilter
  //const renderItems = () => {
    return props.items.map((item) => {
      return (
        <Container key={item.uid}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </Container>
      );
    });
  };
  // maps the arrays that match the type chosen by the user
  //return renderItems();
//};
