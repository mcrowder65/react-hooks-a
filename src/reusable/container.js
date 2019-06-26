import React from "react";
import { theme } from "./theme";

export const Container = ({ children, flexDirection = "row" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        justifyContent: theme.containerJustifyContent,
        alignItems: theme.containerAlignItems,
      }}
    >
      {children}
    </div>
  );
};
