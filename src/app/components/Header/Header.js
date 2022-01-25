import React from "react";
import { Button } from '../../styled/styled';

export const Header = (props) => {
  const headerClickHandler = () => {
    props.onClickHandler(true);
  };

  return (
    <Button headButton onClick={headerClickHandler}>
      Star Wars Lore Search Engine
    </Button>
  );
};
