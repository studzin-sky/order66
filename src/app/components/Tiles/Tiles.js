import React from "react";
import { Button } from "../../styled/styled";

export const Tiles = (props) => {
  const fetchData = (e) => {
    props.onReturnedData({
      id: e.target.id,
      type: props.type,
    });
  };

  return props.items.map((item) => {
    return (
      <Button tile key={item.uid} id={item.uid} onClick={fetchData}>
        {item.name}
      </Button>
    );
  });
};
