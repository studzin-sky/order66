import React, { useState, useEffect } from "react";
import { Container } from "../../styled/styled";
import { LoreType } from "../LoreType";

export const LoreData = (props) => {
  const [loreArray, setLoreArray] = useState([]);
  const fetchLoreHandler = (tileObject) => {
    if (!tileObject) {
      return setLoreArray({ id: 1, title: "Here you'll find lore" });
    }
    switch (tileObject.type) {
      case "people":
        return fetch(`https://www.swapi.tech/api/people/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `name: ${data.result.properties.name}`,
              val1: `birth year: ${data.result.properties.birth_year}`,
              val2: `height: ${data.result.properties.height}`,
              val3: `hair color: ${data.result.properties.hair_color}`,
              val4: `skin color: ${data.result.properties.skin_color}`,
              val5: `eye color: ${data.result.properties.eye_color}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      case "planets":
        return fetch(`https://www.swapi.tech/api/planets/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `name: ${data.result.properties.name}`,
              val1: `diameter: ${data.result.properties.diameter}`,
              val2: `population: ${data.result.properties.population}`,
              val3: `climate: ${data.result.properties.climate}`,
              val4: `terrain: ${data.result.properties.terrain}`,
              val5: `orbital period: ${data.result.properties.orbital_period}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      case "starships":
        return fetch(`https://www.swapi.tech/api/starships/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `name: ${data.result.properties.name}`,
              val1: `model & starship class: ${data.result.properties.model} & ${data.result.properties.starship_class}`,
              val2: `manufacturer: ${data.result.properties.manufacturer}`,
              val3: `cost in credits: ${data.result.properties.cost_in_credits}`,
              val4: `crew + passengers: ${data.result.properties.crew} + ${data.result.properties.passengers}`,
              val5: `max atmosphering speed(hyperdrive rating): ${data.result.properties.max_atmosphering_speed}(${data.result.properties.hyperdrive_rating})`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      case "films":
        return fetch(`https://www.swapi.tech/api/films/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `title: ${data.result.properties.title}`,
              val1: `director: ${data.result.properties.director}`,
              val2: `producer: ${data.result.properties.producer}`,
              val3: `release date: ${data.result.properties.release_date}`,
              val4: `episode No.: ${data.result.properties.episode_id}`,
              val5: `Opening: \n ${data.result.properties.opening_crawl}`,
            };

            setLoreArray(transformedLore);
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      case "vehicles":
        return fetch(`https://www.swapi.tech/api/vehicles/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `name: ${data.result.properties.name}`,
              val1: `model: ${data.result.properties.model}`,
              val2: `vehicle class: ${data.result.properties.vehicle_class}`,
              val3: `crew + passengers: ${data.result.properties.crew} + ${data.result.properties.passengers}`,
              val4: `cargo capacity: ${data.result.properties.cargo_capacity}`,
              val5: `max atmosphering speed ${data.result.properties.max_atmosphering_speed}`,
            };

            setLoreArray(transformedLore);
            console.log("fetching...");
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      case "species":
        return fetch(`https://www.swapi.tech/api/species/${tileObject.id}`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.result.uid,
              title: `name: ${data.result.properties.name}`,
              val1: `classification: ${data.result.properties.classification}`,
              val2: `designation: ${data.result.properties.designation}`,
              val3: `hair colors: ${data.result.properties.hair_colors}`,
              val4: `eye colors: ${data.result.properties.eye_colors}`,
              val5: `language: ${data.result.properties.language}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            const errorLore = () => {
              return {
                uid: 1,
                title: "Something went wrong!",
              };
            };
            setLoreArray(errorLore);
          });
      default:
        break;
    }
  };

  useEffect(() => {
    fetchLoreHandler(props.item);
    return () => {
      const cleanObj = {
        id: 1,
        title: "Loading",
      };
      setLoreArray(cleanObj);
    };
  }, [props.item]);
 //Displays Loading on Lore when fetch is in action
  
    return (
      <Container>
        <LoreType lore={loreArray} />
      </Container>
    );
  };
