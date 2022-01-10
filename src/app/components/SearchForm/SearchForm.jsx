import React, { useRef } from "react";
import { SearchFilter } from "../SearchFilter";
import { Button } from "../../styled/styled";
import "./SearchForm.css";

export const SearchForm = (props) => {
  const inputRef = useRef();

  const typeFilter = (type) => {
    props.onReturnedType(type);
    //props.submit.type(type);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.submit(inputRef.current.value);
    e.target.reset();
  };

  // submitHandler needs to send input up to Content

  return (
    <form className="search-form" onSubmit={submitHandler}>
      <div className="new-search__outro">
        <div>
          <label>The name, You have to write</label>
          <input type="text" className="new-search-text" ref={inputRef} />
        </div>
        <SearchFilter selected={props.selected} onChangeType={typeFilter} />
        <Button type="submit">use the force</Button>
      </div>
    </form>
  );
};
