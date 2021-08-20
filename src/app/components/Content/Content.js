import React from "react";

import "./Content.css";
import {SearchForm} from '../SearchForm/SearchForm';
import {LoreData} from '../LoreData';


export const Content = (props) => {

  return (
  <div>
    <SearchForm items={props.items} />
    <LoreData items={props.items} />
  </div>
  );
};
