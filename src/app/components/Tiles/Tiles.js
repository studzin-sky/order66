import React from "react";
import { Button } from "../../styled/styled";

export const Tiles = (props) => {
  const fetchData = (e) => {
    props.onReturnedData(e.target.id);
 /*   const noSpace=e.target.name.replace(/\s/g, '');
    return fetch(`https://www.swapi.tech/api/${props.type}/?name=${noSpace}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));  */
  };

  return props.items.map((item) => {
    return (
      <Button tile key={item.uid} id={item.uid} onClick={fetchData}>
        {item.name}
      </Button>
    );
  });
};
