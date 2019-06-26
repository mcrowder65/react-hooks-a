import React from "react";
import { Typography } from "@material-ui/core";

export const Text = ({ children, fontSize = 50 }) => {
  return <Typography style={{ fontSize }}>{children}</Typography>;
};
