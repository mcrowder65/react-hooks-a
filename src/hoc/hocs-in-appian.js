import React from "react";

const HocsInAppian = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <li>SkinnableComponent</li>
          <li>PureComponent</li>
          <li>InteractiveComponent</li>
        </ul>
        2/3 of these components are written incorrectly 🤔
      </h1>
    </div>
  );
};

export default HocsInAppian;
