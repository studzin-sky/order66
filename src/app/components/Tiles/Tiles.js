import React from "react";
import { Button } from "../../styled/styled";

export const Tiles = (props) => {

  const fetchData = (e) => {
    props.onReturnedData({
      id: e.target.id,
      type: props.type,
    });
    props.onClickedTile(e.target.name);
    console.log(e.target.name);
    console.log(e.target.id);
  };

  return props.items.map((item) => {
    return (
      <Button
        tile
        key={item.uid}
        id={item.uid}
        name={item.name}
        onClick={fetchData}
      >
        {item.name}
      </Button>
    );
  });
};
