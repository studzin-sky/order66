import React, { useState } from "react";
import { Button } from "../../styled/styled";

export const Header = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const headerClickHandler = () => {
    props.onClickHandler(true);
    setIsEnabled(false);
  };
  //after click the button becomes unactive

  return (
    <Button
      {...(isEnabled
        ? { disabled: false, headButton: true }
        : { disabled: true, disabledHeadButton: true })}
      onClick={headerClickHandler}
    >
      Star Wars Lore Search Engine
    </Button>
  );
};
