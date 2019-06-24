import React from "react";
import { withNetworkStatus } from "./hoc";
import RenderProps from "./render-props";

const withoutHOC = (props) => {
  return <div>HOC: {props.networkStatus}</div>;
};
const HOC = withNetworkStatus(withoutHOC);

const RP = () => {
  return (
    <RenderProps>
      {(props) => {
        return <div>RP: {props.networkStatus}</div>;
      }}
    </RenderProps>
  );
};
const DisplayNetworkStatus = (props) => {
  return (
    <div>
      <HOC />
      <RP />
    </div>
  );
};

export default DisplayNetworkStatus;
