import React from "react";
import { Li } from "./reusable/li";
import { Container } from "./reusable/container";
import { Text } from "./reusable/text";

const AboutMe = () => {
  return (
    <Container flexDirection="column">
      <Text fontSize={20}>
        Code available at{" "}
        <a href="https://github.com/mcrowder65/react-hooks-a">
          https://github.com/mcrowder65/react-hooks-a
        </a>
      </Text>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>I am Matt Crowder</Li>
          <Li>mcrowder65 </Li>
          <Li>Wife and dog</Li>
          <Li>NoVaJS co organizer</Li>
          <Li>Aspiring public speaker</Li>
          <Li>
            Things I enjoy:
            <ul>
              <Li>lifting</Li>
              <Li>running</Li>
              <Li>programming</Li>
              <Li>talking</Li>
            </ul>
          </Li>
        </ul>
      </h1>
    </Container>
  );
};

export default AboutMe;
