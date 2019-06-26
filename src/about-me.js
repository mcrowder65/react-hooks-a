import React from "react";

const Li = ({ children }) => {
  return <li>{children}</li>;
};
const AboutMe = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
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
    </div>
  );
};

export default AboutMe;
