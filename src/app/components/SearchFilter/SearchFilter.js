import React from "react";

export const SearchFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeType(event.target.value);
  };



  return (
    <>
      <label>a type You choose</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="people">people</option>
        <option value="planet">planet</option>
        <option value="starship">starship</option>
        <option value='films'>films</option>
        <option value='vehicles'>vehicle</option>
        <option value='species'>species</option>
      </select>
    </>
  );
};
