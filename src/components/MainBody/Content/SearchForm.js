import React from "react";
import SearchFilter from "./SearchFilter";
import Button from './StyledButton';
import "./SearchForm.css";

const SearchForm = (props) => {
  const typeFilter = (type) => {
    console.log(type);
  };

  const submitHandler = () => {
    console.log('props.items');
  };

  const onChangeHandler = (items) => {
    console.log(items.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-search__outro">
        <div>
          <label>The name, You have to write</label>
          <input type="text" className='new-search-text' onChange={onChangeHandler} />
        </div>
        <SearchFilter onTypeFilter={typeFilter} />
        <Button>for action click</Button>
      </div>
    </form>
  );
};

export default SearchForm;
