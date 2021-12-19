import React, { useState } from "react";

import "./Content.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { LoreData } from "../LoreData";
import { History } from "../History/History";
import {Tiles} from "../Tiles/Tiles";

export const Content = (props) => {
  const [pulledType, setPulledType] = useState("people");
  // state changes on chosen type
  const [history, setHistory] = useState([]);
  const [swData, setSwData] = useState(props.items);

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
        return fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then(data => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "planet":
        return fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "starship":
        return fetch("https://www.swapi.tech/api/starships/")
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "films":
        return fetch("https://www.swapi.tech/api/films/")
          .then((res) => res.json())
          .then((data) => {
            const transformedMovies = data.result.map(movieData => {
              return {
                uid: movieData.uid,
                name: movieData.properties.title,
                description: movieData.properties.opening_crawl
              };
            }); 
            setSwData(transformedMovies); 
          })
          .catch(() => setSwData(props.items));
      case "vehicles":
        return fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "species":
        return fetch("https://www.swapi.tech/api/species/")
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      default:
    }
  };
  //switch statement to filter types with fetch from swapi to Tiles

  const pulledTypeVal = pulledType;

  return (
    <div className="content">
      <SearchForm
        submit={submitHandler}
        selected={pulledType}
        onReturnedType={returnedType}
      />
      <Tiles type={swData} />
      <LoreData  items={swData} type={pulledTypeVal} />
      <History history={history}></History>
    </div>
  );
};
