import React from "react";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const Destructuring = () => {
  const obj = ["oranges", "matt"];
  const [value, name] = obj;
  return (
    <Container>
      <BigText>
        {value} {name}
      </BigText>
    </Container>
  );
};

export default Destructuring;
