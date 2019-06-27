import React from "react";
import { Li } from "./reusable/li";
import { Container } from "./reusable/container";

const AboutMe = () => {
  return (
    <Container>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>Sample</Li>
          <Li>Sample</Li>

          <Li>Sample</Li>

          <Li>Sample</Li>

          <Li>Sample</Li>
          <ul>
            <Li>Sample</Li>

            <Li>Sample</Li>

            <Li>Sample</Li>

            <Li>Sample</Li>
          </ul>
        </ul>
      </h1>
    </Container>
  );
};

export default AboutMe;
