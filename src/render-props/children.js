import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const Inner = (props) => {
  const extraProps = { name: "matt" };
  return <Text>{props.children(extraProps)}</Text>;
};
const Outer = () => {
  return (
    <Container>
      <Inner>{(extraProps) => extraProps.name}</Inner>
    </Container>
  );
};

export default Outer;
