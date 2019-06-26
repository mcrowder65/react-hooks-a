import React from "react";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const Destructuring = () => {
  // const obj = { value: "oranges", name: "matt" };
  // const value = obj.value;
  // const name = obj.name;
  const [value, name] = ["oranges", "matt"];
  // const { value, name } = obj;
  return (
    <Container>
      <BigText>
        {value} {name}
      </BigText>
    </Container>
  );
};

export default Destructuring;
