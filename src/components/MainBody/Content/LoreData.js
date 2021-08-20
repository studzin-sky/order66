import React from "react";

import "./LoreData.css";

const LoreData = (props) => {
  return (
    <div className="lore-data">
      <h2>Name: {props.items[1].name}</h2>
      <p>Type: {props.items[1].type}</p>
    </div>
  );
};

export default LoreData;
