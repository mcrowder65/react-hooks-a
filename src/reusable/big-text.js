import React from "react";
import { Text } from "./text";

export const BigText = ({ children, fontSize = 100 }) => {
  return <Text fontSize={fontSize}>{children}</Text>;
};
