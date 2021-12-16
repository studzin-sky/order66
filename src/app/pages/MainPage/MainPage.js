import React from "react";
import "./MainPage.css";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

const DUMMY_DATA = [
  {
    id: "people/1",
    name: "Luke Skywalker",
    type: "people",
  },
  {
    id: "planet/1",
    name: "Naboo",
    type: "planet",
  },
  {
    id: "starship/1",
    name: "Millenium Falcon",
    type: "starship",
  },
  {
    id: "films/1",
    name: "A New Hope",
    type: "films",
  },
  {
    id: "vehicles/1",
    name: "Sand Crawler",
    type: "vehicles",
  },
  {
    id: "species/1",
    name: "Human",
    type: "species",
  },
];

export const MainPage = () => {
  return (
    <div className="outer-body">
      <Header />
      <Content items={DUMMY_DATA} />
    </div>
  );
};
