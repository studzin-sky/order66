import React from "react";

import "./Content.css";
import SearchForm from './SearchForm';
import LoreData from './LoreData';


const Content = (props) => {

  return (
  <div>
    <SearchForm items={props.items} />
    <LoreData items={props.items} />
  </div>
  );
};

export default Content;
