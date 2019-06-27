import React from "react";
import { compose } from "../utils";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const add10 = (num) => num + 10;

const add20 = compose(
  add10,
  add10,
);
const FunctionComposition = () => {
  return (
    <Container>
      <BigText>{add20(3)}</BigText>
    </Container>
  );
};

export default FunctionComposition;
