import React from "react";

import "./Content.css";
import {SearchForm} from '../SearchForm/SearchForm';
import {LoreData} from '../LoreData';


export const Content = (props) => {
  
  const returnedType = type => {
    console.log(type);
  }

  return (
  <div>
    <SearchForm onReturnedType = {returnedType} />
    <LoreData items={props.items} />
  </div>
  );
};
