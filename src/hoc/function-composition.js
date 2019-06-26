import React from "react";
import { compose } from "../utils";

const add10 = (additionalNumber) => (num) => num + additionalNumber + 10;

const add30 = compose(
  add10(0),
  add10(0),
  add10(3),
);
const FunctionComposition = () => {
  return (
    <div>
      <h1>{add10(0)(3)}</h1>
    </div>
  );
};

export default FunctionComposition;
