import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const Inner = (props) => {
  return <Text>{props.children}</Text>;
};
const Outer = () => {
  return (
    <Container>
      <Inner>These are my children!</Inner>
    </Container>
  );
};

export default Outer;
