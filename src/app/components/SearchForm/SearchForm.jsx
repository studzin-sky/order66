import React, { useRef } from "react";
import { SearchFilter } from "../SearchFilter";
import { Button, SearchInputDiv, SearchFormInputOutro, SearchFormDiv } from "../../styled/styled";

export const SearchForm = (props) => {
  const inputRef = useRef();

  const typeFilter = (type) => {
    props.onReturnedType(type);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.submit(inputRef.current.value);
    e.target.reset();
  };

  return (
    <SearchFormDiv onSubmit={submitHandler}>
      <SearchFormInputOutro>
        <>
          <label>The name, You have to write</label>
          <SearchInputDiv type="text" ref={inputRef} />
        </>
        <SearchFilter 
          selected={props.selected} 
          onChangeType={typeFilter} 
        />
        <Button type="submit">use the force</Button>
      </SearchFormInputOutro>
    </SearchFormDiv>
  );
};
