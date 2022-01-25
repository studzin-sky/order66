import React, { useState } from "react";

import { Main, Paragraph } from "../../styled/styled";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

export const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickStateManager = (action) => {
    setIsClicked(action); //action on event is true
  };
  return (
    <Main>
      <Header onClickHandler={clickStateManager} />
      {!isClicked ? <Paragraph>Click up and dive into Star Wars Lore</Paragraph> : <Content />}
    </Main>
  );
};
