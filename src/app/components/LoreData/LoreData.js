import React from "react";
import { Container } from "../../styled/styled";

export const LoreData = (props) => {
  const fetchLoreHandler = (tileObject) => {
    switch (tileObject.type) {
      case "people":
        return fetch(`https://www.swapi.tech/api/people/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => { /* console.log(data); */
            const loreObj = data;
            return loreObj;
          })
          .catch((err) => console.log(err));
      case "planets":
        return fetch(`https://www.swapi.tech/api/planets/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const loreObj = {
              id: data.result.uid,
              name: data.result.properties.name,
            };
            return loreObj;
          })
          .catch((err) => console.log(err));
      case "starships":
        return fetch(`https://www.swapi.tech/api/starships/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const loreObj = {
              id: data.result.uid,
              name: data.result.properties.name,
            };
            return loreObj;
          })
          .catch((err) => console.log(err));
      case "films":
        return fetch(`https://www.swapi.tech/api/films/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const loreObj = {
              id: data.result.uid,
              name: data.result.properties.name,
            };
            return loreObj;
          })
          .catch((err) => console.log(err));
      case "vehicles":
        return fetch(`https://www.swapi.tech/api/vehicles/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const loreObj = {
              id: data.result.uid,
              name: data.result.properties.name,
            };
            return loreObj;
          })
          .catch((err) => console.log(err));
      case "species":
        return fetch(`https://www.swapi.tech/api/people/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const loreObj = {
              id: data.result.uid,
              name: data.result.properties.name,
            };
            return loreObj;
          })
          .catch((err) => console.log(err));
      default:
    }
  };
  /* return fetch(`https://www.swapi.tech/api/${props.type}/?name=${props.name}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err)); */
  if (props.item) {
    let loreObject = fetchLoreHandler(props.item);
    console.log(loreObject);
    return (
      <Container>
        <h2>
          {" "}
          {/* {loreObject.result.uid}: {loreObject.result.properties.name} */}
        </h2>
      </Container>
    );
  } else {
    return <Container />;
  }
};
