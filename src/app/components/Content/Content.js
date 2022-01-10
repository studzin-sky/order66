import React, { useState } from "react";

import { Row, Column } from "../../styled/styled";
import { SearchForm } from "../SearchForm/SearchForm";
import { LoreData } from "../LoreData";
import { History } from "../History/History";
import { Tiles } from "../Tiles/Tiles";

export const Content = (props) => {
  const [pulledType, setPulledType] = useState("people");
  // state changes on chosen type
  const [history, setHistory] = useState([]);
  const [swData, setSwData] = useState([]);
  const [tileData, setTileData] = useState();

  
   const returnedType = (type) => {
    setPulledType(type);
  };
 
  const submitHandler = (val) => {
    const pulledSearchFormObject = {
      name: val,
      type: pulledType
    };
    fetchTile(pulledSearchFormObject);
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

  const fetchTile = (subValue) => {
    switch (subValue.type) {
      case "people":
        return fetch(`https://www.swapi.tech/api/people/?name=${subValue.name}`)
          .then((res) => res.json())
          .then((data) => setSwData(data.result))
          .catch(() => setSwData(props.items));
      case "planets":
        return fetch(`https://www.swapi.tech/api/planets/?name=${subValue.name}`)
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "starships":
        return fetch(`https://www.swapi.tech/api/starships/?name=${subValue.name}`)
          .then((res) => res.json())
          .then((data) => setSwData(data.results))
          .catch(() => setSwData(props.items));
      case "films":
        return fetch(`https://www.swapi.tech/api/films/?title=${subValue.name}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedMovies = data.result.map((movieData) => {
              return {
                uid: movieData.uid,
                name: movieData.properties.title,
              };
            });
            setSwData(transformedMovies);
          })
          .catch(() => setSwData(props.items));
      case "vehicles":
        return fetch(`https://www.swapi.tech/api/vehicles/?name=${subValue.name}`)
          .then((res) => res.json())
          .then((data) => setSwData(data.result))
          .catch(() => setSwData(props.items));
      case "species":
        return fetch(`https://www.swapi.tech/api/species/`)
          .then((res) => res.json())
          .then((data) => setSwData(data.result))
          .catch(() => setSwData(props.items));
      default:
        break;
    }
  };
  //SWAPI.tech seems to have an error with searching, only people
  //can be searched through, the rest is rendering randomly

  const idData = (type) => {
    setTileData(type);
  };
  const pulledTypeVal = pulledType;

  return (
    <>
      <SearchForm
        submit={submitHandler}
        selected={pulledType}
        onReturnedType={returnedType}
      />
      <Row>
        <Column>
          <Tiles items={swData} type={pulledTypeVal} onReturnedData={idData}/>
        </Column>
        <Column>
          <LoreData item={tileData} />
        </Column>
        <Column>
          <History history={history}></History>
        </Column>
      </Row>
    </>
  );
};
