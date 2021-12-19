import React from "react";

import "./Tiles.css";

export const Tiles = (props) => {
  return props.type.map((item) => {
    return (
      <div key={item.uid} className="tiles">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    );
  });
};
