import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const DisplayChildren = (props) => {
  return <Text>{props.children}</Text>;
};
const Children = () => {
  return (
    <Container>
      <DisplayChildren>children</DisplayChildren>
    </Container>
  );
};

export default Children;
