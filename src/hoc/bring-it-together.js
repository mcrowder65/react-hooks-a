import React from "react";
import { sleep } from "mooks";
import { compose } from "../utils";
import { withApiCall } from "./api-call";
import { withNetworkStatus } from "./network-status";
import { Button } from "../reusable/button";

const BringItAllTogetherHOC = (props) => {
  const makeApiCall = () => {
    props.makeApiCall(async () => {
      await sleep(1000);
    });
  };
  return (
    <div>
      {props.isLoading ? "loading..." : null}
      {props.networkStatus === "online" && (
        <Button onClick={makeApiCall}>make api call</Button>
      )}
    </div>
  );
};

const enhance = compose(
  withApiCall,
  withNetworkStatus,
);

export default enhance(BringItAllTogetherHOC);
