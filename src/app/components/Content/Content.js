import React, { useState } from "react";

import { Row, Column } from "../../styled/styled";
import { SearchForm } from "../SearchForm/SearchForm";
import { LoreData } from "../LoreData";
import { History } from "../History/History";
import { Tiles } from "../Tiles/Tiles";

export const Content = () => {
  const [pulledType, setPulledType] = useState("people");
  // state changes on chosen type
  const [history, setHistory] = useState([]);
  const [swData, setSwData] = useState([]);
  const [tileData, setTileData] = useState();

  const tileErrorArray = [{ url: 666, name: "Something went wrong!" }];
  //object displayed when error on fetch
  const noLoreArray = [
    { url: 777, name: "This is not the Lore You're looking for..." },
  ];
  //object displayed when nothing was found

  const returnedType = (type) => {
    setPulledType(type);
  };

  const submitHandler = (val) => {
    const pulledSearchFormObject = {
      name: val,
      type: pulledType,
    };
    fetchTile(pulledSearchFormObject);
  };

  const historyHandler = (histObject) => {
    setHistory((prevHistory) => {
      return [
        ...prevHistory.slice(-4),
        {
          name: histObject.name, //name of the Tile
          uid: Math.random().toString(),
          type: histObject.type, // type taken from Tile
          id: histObject.id, 
        },
      ];
    });
  };

  const transformedMovies = (data) =>
    data.results.map((movieData) => {
      return {
        url: movieData.url,
        name: movieData.title,
      };
    });
  // helper function to transform movie data due to swapi error

  /*   const transformedPeople = (data) =>
    data.result.map((person) => {
      return {
        uid: person.uid,
        name: person.properties.name,
      };
    }); */
  //helper function to transform people data because the search in swapi is broken

  const fetchTile = (subValue) => {
    return fetch(
      `https://swapi.dev/api/${subValue.type}/?search=${subValue.name}&format=json`
    )
      .then((res) => res.json())
      .then((data) =>
        data.count === 0
          ? setSwData(noLoreArray) // if nothing found display info
          : subValue.type === "films" // films type has title attribute instead of name
          ? setSwData(transformedMovies(data))
          : setSwData(data.results)
      )
      .catch(() => setSwData(tileErrorArray)); // display error message when failed
  };

  /* const fetchTile = (subValue) => {
    //if the user searches and input is empty then Tiles displays objects from type chosen
    if (subValue.name === "")
      fetch(`https://www.swapi.tech/api/${subValue.type}`)
        .then((res) => res.json())
        .then((data) =>
          subValue.type === "films"
            ? setSwData(transformedMovies(data))
            : setSwData(data.results)
        )
        .catch(() => setSwData(tileErrorArray));
    //swapi tech is not working properly so films array is result and the rest is results
    else
      switch (subValue.type) {
        case "people":
          return fetch(
            `https://www.swapi.tech/api/people/?name=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => {
              transformedPeople(data).length === 0
                ? setSwData(noLoreArray)
                : setSwData(transformedPeople(data));
            })
            .catch(() => setSwData(tileErrorArray));
        case "planets":
          return fetch(
            `https://www.swapi.tech/api/planets/?name=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => setSwData(data.results))
            .catch(() => setSwData(tileErrorArray));
        case "starships":
          return fetch(
            `https://www.swapi.tech/api/starships/?name=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => setSwData(data.results))
            .catch(() => setSwData(tileErrorArray));
        case "films":
          return fetch(
            `https://www.swapi.tech/api/films/?title=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => setSwData(transformedMovies(data)))
            .catch(() => setSwData(tileErrorArray));
        case "vehicles":
          return fetch(
            `https://www.swapi.tech/api/vehicles/?name=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => setSwData(data.results))
            .catch(() => setSwData(tileErrorArray));
        case "species":
          return fetch(
            `https://www.swapi.tech/api/species/?name=${subValue.name}`
          )
            .then((res) => res.json())
            .then((data) => setSwData(data.results))
            .catch(() => setSwData(tileErrorArray));
        default:
          break;
      }
  }; */
  //SWAPI.tech seems to have an error with searching, only people
  //can be searched through, the rest is rendering randomly

  const idData = (type) => {
    setTileData(type);
  };
  //manages state from Tiles onClick, sends it to LoreData

  const HistoryLoreData = (hObject) => {
    setTileData(hObject);
  };
  //manages state from History onClick, sends it to LoreData
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
          <Tiles
            items={swData}
            type={pulledTypeVal}
            onReturnedData={idData}
            onClickedTile={historyHandler}
          />
        </Column>
        <Column>
          <LoreData item={tileData} />
        </Column>
        <Column>
          <History history={history} onReturnedHData={HistoryLoreData} />
        </Column>
      </Row>
    </>
  );
};
