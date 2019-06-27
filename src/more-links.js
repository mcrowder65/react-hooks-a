import React from "react";
import { Container } from "./reusable/container";

const AdditionalResources = () => {
  return (
    <Container flexDirection="column">
      <a href="https://www.youtube.com/watch?v=wXLf18DsV-I">
        90% cleaner React with Hooks by Ryan Florence
      </a>
      <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0">
        Function composition by Eric Elliott
      </a>
    </Container>
  );
};

export default AdditionalResources;
