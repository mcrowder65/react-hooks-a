import React from "react";
import { Li } from "./reusable/li";
import { Container } from "./reusable/container";

const AgendaAndGoals = () => {
  return (
    <Container>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>Agenda</Li>
          <ul>
            <Li>
              Building reusable components
              <ul>
                <Li>HOC</Li>
                <Li>Render Props!</Li>
                <Li>Hooks!</Li>
              </ul>
            </Li>
          </ul>
          <Li>Goals</Li>
          <ul>
            <Li>Inspired to write React Hooks!</Li>
            <Li>We will migrate to React 16.8</Li>
          </ul>
        </ul>
      </h1>
    </Container>
  );
};

export default AgendaAndGoals;
