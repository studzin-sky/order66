import React from "react";
import { Button } from "../../styled/styled";

export const Tiles = (props) => {
  const fetchData = (e) => {
    props.onReturnedData({
      id: e.target.id,
      type: props.type, //creates object on click to send to lore
    });
    props.onClickedTile({
      name: e.target.name,
      type: props.type,
      id: e.target.id,
    }); //created object to deal with switch on click
  };

  return props.items.map((item) => {
    return (
      <Button
        tile
        {...(item.uid === 777
          ? { disabled: true, title: "You found nothing", disabledButton: true }
          : { disabled: false })}
        // if nothing found then disable button and a message
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
