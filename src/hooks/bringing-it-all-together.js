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
  const networkStatus = useNetworkStatus();
  return (
    <Container>
      {isLoading && <Text children={"loading"} />}
      {networkStatus === "online" && (
        <>
          <Button onClick={makeApiCall}>
            <Text>Implement me?</Text>
          </Button>
        </>
      )}
    </Container>
  );
};
export default BringingItAllTogetherHooks;
