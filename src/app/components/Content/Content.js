import React, {useState} from "react";

import "./Content.css";
import {SearchForm} from '../SearchForm/SearchForm';
import {LoreData} from '../LoreData';


export const Content = (props) => {

  const [pulledType, setPulledType] = useState('people');
  
  const returnedType = type => {
    setPulledType(type);
  }
  
  const pulledTypeVal = pulledType;


  return (
  <div>
    <SearchForm selected = {pulledType} onReturnedType = {returnedType} />
    <LoreData items={props.items} type={pulledTypeVal}/>
  </div>
  );
};
