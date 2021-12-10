import React, { useState } from "react";

import "./Content.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { LoreData } from "../LoreData";
import { Sandbox } from "../Sandbox/sandbox";

export const Content = (props) => {
  const [pulledType, setPulledType] = useState("people");
  const [submitValue, setSubmitValue] = useState("");

  const returnedType = (type) => {
    setPulledType(type);
  };

  const submitHandler = (val) => {
    setSubmitValue(val);
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
      <Sandbox submit={submitValue}></Sandbox>
    </>
  );
};
