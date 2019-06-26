import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export const Button = ({
  variant = "contained",
  color = "primary",
  ...props
}) => {
  return <MuiButton variant={variant} color={color} {...props} />;
};
