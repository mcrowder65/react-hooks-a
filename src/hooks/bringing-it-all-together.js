import React from "react";
import { Button } from "../reusable/button";
import { useApiCall } from "./api-call";
import { useNetworkStatus } from "./network-status";
import { sleep } from "mooks";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const BringingItAllTogetherHooks = () => {
  const { isLoading, makeApiCall } = useApiCall(async () => {
    await sleep(500);
  });
  const { networkStatus } = useNetworkStatus();
  return (
    <Container>
      {isLoading && <Text>Loading...</Text>}
      {networkStatus === "online" ? (
        <Button onClick={makeApiCall}>api call</Button>
      ) : null}
    </Container>
  );
};
export default BringingItAllTogetherHooks;
