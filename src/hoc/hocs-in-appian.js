import React from "react";
import { Container } from "../reusable/container";
import { Li } from "../reusable/li";
import { Text } from "../reusable/text";

const HocsInAppian = () => {
  return (
    <Container>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>SkinnableComponent</Li>
          <Li>PureComponent</Li>
          <Li>InteractiveComponent</Li>
        </ul>
        <Text>2/3 of these components are written incorrectly 🤔</Text>
      </h1>
    </Container>
  );
};

export default HocsInAppian;
