import React from "react";
import { sleep } from "mooks";
import { compose } from "../utils";
import { withApiCall } from "./api-call";
import { withNetworkStatus } from "./network-status";
import { Button } from "../reusable/button";
import { BigText } from "../reusable/big-text";
import { Container } from "../reusable/container";
import { PureComponent } from "./pure-component";

const BringItAllTogetherHOC = (props) => {
  const makeApiCall = () => {
    props.makeApiCall(async () => {
      await sleep(1000);
    });
  };
  return (
    <Container>
      {props.isLoading ? <BigText>loading...</BigText> : null}
      {props.networkStatus === "online" && (
        <Button onClick={makeApiCall}>make api call</Button>
      )}
    </Container>
  );
};

const enhance = compose(
  withApiCall,
  withNetworkStatus,
  PureComponent,
);

export default enhance(BringItAllTogetherHOC);
