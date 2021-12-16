import React from "react";

import "./LoreData.css";

export const LoreData = (props) => {
  //const filteredArray = props.items.filter((item) => item.type === props.type);
  //filtered array with types chosen in searchFilter
  //const renderItems = () => {
    return props.items.map((item) => {
      return (
        <div key={item.uid} className="lore-data">
          <h2>Name: {item.name}</h2>
          <p>Type: {item.description}</p>
        </div>
      );
    });
  };
  // maps the arrays that match the type chosen by the user
  //return renderItems();
//};
