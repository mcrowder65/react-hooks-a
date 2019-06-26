import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export const Button = ({
  variant = "contained",
  color = "primary",
  style = { width: 500, height: 100, fontSize: 50 },
  ...props
}) => {
  return <MuiButton style={style} variant={variant} color={color} {...props} />;
};
