import React from "react";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const Destructuring = () => {
  const arr = ["oranges", "matt"];
  const [value, name] = arr;

  return (
    <Container>
      <BigText>
        {value} {name}
      </BigText>
    </Container>
  );
};

export default Destructuring;
