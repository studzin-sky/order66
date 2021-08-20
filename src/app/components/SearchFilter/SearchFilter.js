import React, { useState } from "react";

export const SearchFilter = (props) => {
  const [enteredType, setEnteredType] = useState("people");

  const dropdownChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const filteredType = enteredType;

  props.onTypeFilter(filteredType);

  return (
    <div>
      <label>a type You choose</label>
      <select value={enteredType} onChange={dropdownChangeHandler}>
        <option value="people">person</option>
        <option value="planet">planet</option>
        <option value="starship">starship</option>
        <option value='films'>film</option>
        <option value='vehicles'>vehicle</option>
        <option value='species'>species</option>
      </select>
    </div>
  );
};
