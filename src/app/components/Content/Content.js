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

  const tileErrorArray = [{ uid: 666, name: "Something went wrong!" }];
  //object displayed when error on fetch
  const noLoreArray = [
    { uid: 777, name: "This is not the Lore You're looking for..." },
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
        ...prevHistory.slice(-4), //maximum 5 records kept
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
        uid: movieData.url,
        name: movieData.title,
      };
    });
  // helper function to transform movie data due to swapi error

  const transformedRecord = (data) =>
    data.results.map((record) => {
      return {
        uid: record.url,
        name: record.name,
      };
    });
  //helper function to transform record where uid is the url

  // fetching data from swapi.dev based on the type and name input from SearchForm
  const fetchTile = (subValue) => {
    return fetch(
      `https://swapi.dev/api/${subValue.type}/?search=${subValue.name}&format=json`
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.count === 0
            ? setSwData(noLoreArray) // if nothing found display info
            : subValue.type === "films" // films type has title attribute instead of name
            ? setSwData(transformedMovies(data)) // if type is films use the movies helper function
            : setSwData(transformedRecord(data)) // if it is the rest transform url to uid
      )
      .catch(() => setSwData(tileErrorArray)); // display error message when failed
  };

  const idData = (type) => {
    setTileData(type);
  };
  //manages state from Tiles onClick, sends it to LoreData

  const HistoryLoreData = (hObject) => {
    setTileData(hObject);
  };
  //manages state from History onClick, sends it to LoreData

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
            type={pulledType}
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
