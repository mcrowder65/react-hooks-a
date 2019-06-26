import React from "react";
import { compose } from "../utils";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const add10 = (additionalNumber) => (num) => num + additionalNumber + 10;

const add30 = compose(
  add10(0),
  add10(0),
  add10(3),
);
const FunctionComposition = () => {
  return (
    <Container>
      <BigText>{add10(0)(3)}</BigText>
    </Container>
  );
};

export default FunctionComposition;
