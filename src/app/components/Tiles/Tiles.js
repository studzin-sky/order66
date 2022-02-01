import React from "react";
import { Button } from "../../styled/styled";

export const Tiles = (props) => {
  const fetchData = (e) => {
    console.log(e.target.id);
    props.onReturnedData({
      id: e.target.id, //url is the url to specific object to be used as id
      type: props.type, //creates object on click to send to lore
    });
    props.onClickedTile({
      name: e.target.name,
      type: props.type,
      id: e.target.id, //url is the url to specific object
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
