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
    fetchSwapi(type);
  };

  const submitHandler = (val) => {
    setHistory((prevHistory) => {
      return [
        ...prevHistory,
        {
          name: val,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const fetchSwapi = (type) => {
    switch (type) {
      case "people":
        return fetch('https://www.swapi.tech/api/people/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      case "planet":
        return fetch('https://www.swapi.tech/api/planets/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      case "starship":
        return fetch('https://www.swapi.tech/api/starships/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      case "films":
        return fetch('https://www.swapi.tech/api/films/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      case "vehicles":
        return fetch('https://www.swapi.tech/api/vehicles/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      case "species":
        return fetch('https://www.swapi.tech/api/species/')
        .then(res => res.json())
        .then(data => console.log(data.results))
      default:
    }
  };
  //switch statement to filter types with fetch from swapi

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
