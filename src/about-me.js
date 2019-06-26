import React from "react";

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
          <li>I am Matt Crowder</li>
          <li>mcrowder65 </li>
          <li>Wife and dog</li>
          <li>NoVaJS co organizer</li>
          <li>Aspiring public speaker</li>
          <li>
            Things I enjoy:
            <ul>
              <li>lifting</li>
              <li>running</li>
              <li>programming</li>
              <li>talking</li>
            </ul>
          </li>
        </ul>
      </h1>
    </div>
  );
};

export default AboutMe;
