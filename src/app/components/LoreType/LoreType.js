import React from "react";
import ReactDOM from "react-dom";

export const LoreType = (props) => {
    console.log(props.lore);
  return (
    <>
      <h1>{props.lore.title}</h1>
      <p>{props.lore.val1}</p>
      <p>{props.lore.val2}</p>
      <p>{props.lore.val3}</p>
      <p>{props.lore.val4}</p>
      <p>{props.lore.val5}</p>
    </>
  );
};
