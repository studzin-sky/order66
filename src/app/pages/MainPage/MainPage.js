import React from "react";
import "./MainPage.css";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

const DUMMY_DATA = [
  {
    uid: "people/1",
    name: "Luke Skywalker",
    type: "people",
  },
  {
    uid: "planet/1",
    name: "Naboo",
    type: "planet",
  },
  {
    uid: "starship/1",
    name: "Millenium Falcon",
    type: "starship",
  },
  {
    uid: "films/1",
    name: "A New Hope",
    type: "films",
  },
  {
    uid: "vehicles/1",
    name: "Sand Crawler",
    type: "vehicles",
  },
  {
    uid: "species/1",
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
