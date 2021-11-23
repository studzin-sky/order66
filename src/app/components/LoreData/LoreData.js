import React from "react";

import "./LoreData.css";

export const LoreData = (props) => {
  const filteredArray = props.items.filter(item => item.type === props.type);
//filtered array with types chosen in searchFilter 
  const renderItems = () => { 
    return filteredArray.map((item) => {
      return (
        <div key={item.id} className="lore-data">
          <h2>Name: {item.name}</h2>
          <p>Type: {item.type}</p>
        </div>
      );
    })
  }
// maps the arrays that match the type chosen by the user
  return renderItems();
};
