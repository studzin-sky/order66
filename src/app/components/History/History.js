import React from "react";

import './History.css';

export const History = (props) => {
  return (
    <>
      <ul className="history">
        {props.history.map((point) => (
          <li key={point.id}>
            {point.name}
          </li>
        ))}
      </ul>
    </>
  );
};

//this component is meant to keep track of search history