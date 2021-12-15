import React, { useState } from "react";

import "./Content.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { LoreData } from "../LoreData";
import { History } from "../Sandbox/history";

export const Content = (props) => {
  const [pulledType, setPulledType] = useState("people");
  // state changes on chosen type
  const [history, setHistory] = useState([]);

  const returnedType = (type) => {
    setPulledType(type);
  };

  const submitHandler = (val) => {
    setHistory((prevHistory => {
      return [
        ...prevHistory, {
          name: val, id: Math.random().toString()
        },
      ];
    }));
  };

  const pulledTypeVal = pulledType;

  return (
    <>
      <SearchForm
        submit={submitHandler}
        selected={pulledType}
        onReturnedType={returnedType}
      />
      <LoreData items={props.items} type={pulledTypeVal} />
      <History history={history}></History>
    </>
  );
};
