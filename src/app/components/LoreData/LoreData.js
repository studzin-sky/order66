import React, { useState, useEffect } from "react";
import { Container } from "../../styled/styled";
import { LoreType } from "../LoreType";

export const LoreData = (props) => {
  const [loreArray, setLoreArray] = useState([]);
  const errorLore = () => {
    return {
      id: 1,
      title: "Something went wrong!",
    };
  }; // error object displayed when fetch catches error

  const fetchLoreHandler = (tileObject) => {
    if (!tileObject) {
      return setLoreArray({ id: 1, title: "Here you'll find lore" });
    } // displays small info at the beginning
    switch (tileObject.type) {
      case "people":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `name: ${data.name}`,
              val1: `birth year: ${data.birth_year}`,
              val2: `height: ${data.height}`,
              val3: `hair color: ${data.hair_color}`,
              val4: `skin color: ${data.skin_color}`,
              val5: `eye color: ${data.eye_color}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            setLoreArray(errorLore);
          });
      case "planets":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `name: ${data.name}`,
              val1: `diameter: ${data.diameter}`,
              val2: `population: ${data.population}`,
              val3: `climate: ${data.climate}`,
              val4: `terrain: ${data.terrain}`,
              val5: `orbital period: ${data.orbital_period}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            setLoreArray(errorLore);
          });
      case "starships":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `name: ${data.name}`,
              val1: `model & starship class: ${data.model} & ${data.starship_class}`,
              val2: `manufacturer: ${data.manufacturer}`,
              val3: `cost in credits: ${data.cost_in_credits}`,
              val4: `crew + passengers: ${data.crew} + ${data.passengers}`,
              val5: `max atmosphering speed(hyperdrive rating): ${data.max_atmosphering_speed}(${data.hyperdrive_rating})`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            setLoreArray(errorLore);
          });
      case "films":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `title: ${data.title}`,
              val1: `director: ${data.director}`,
              val2: `producer: ${data.producer}`,
              val3: `release date: ${data.release_date}`,
              val4: `episode No.: ${data.episode_id}`,
              val5: `Opening: \n ${data.opening_crawl}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            setLoreArray(errorLore);
          });
      case "vehicles":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `name: ${data.name}`,
              val1: `model: ${data.model}`,
              val2: `vehicle class: ${data.vehicle_class}`,
              val3: `crew + passengers: ${data.crew} + ${data.passengers}`,
              val4: `cargo capacity: ${data.cargo_capacity}`,
              val5: `max atmosphering speed ${data.max_atmosphering_speed}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
            setLoreArray(errorLore);
          });
      case "species":
        return fetch(`${tileObject.id}?format=json`)
          .then((res) => res.json())
          .then((data) => {
            const transformedLore = {
              uid: data.url,
              title: `name: ${data.name}`,
              val1: `classification: ${data.classification}`,
              val2: `designation: ${data.designation}`,
              val3: `hair colors: ${data.hair_colors}`,
              val4: `eye colors: ${data.eye_colors}`,
              val5: `language: ${data.language}`,
            };
            setLoreArray(transformedLore);
          })
          .catch(() => {
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
        uid: 1,
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
