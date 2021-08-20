import React from "react";

import "./LoreData.css";

export const LoreData = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <div key={item.id} className="lore-data">
          <h2>Name: {item.name}</h2>
          <p>Type: {item.type}</p>
        </div>
      );
    })
  }
  return renderItems();
};
