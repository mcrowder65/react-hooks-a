import React from "react";
import { NetworkStatus } from "./network-status";
import { ApiCall } from "./api-call";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const BringingItAllTogetherRenderProps = () => {
  return (
    <NetworkStatus>
      {({ networkStatus }) => {
        return (
          <ApiCall>
            {({ isLoading, makeApiCall }) => {
              const apiCall = () =>
                makeApiCall(async () => {
                  await sleep(1000);
                });
              return (
                <Container>
                  {isLoading && <Text>loading</Text>}
                  {networkStatus === "online" && (
                    <Button onClick={apiCall}>Make api call!</Button>
                  )}
                </Container>
              );
            }}
          </ApiCall>
        );
      }}
    </NetworkStatus>
  );
};

export default BringingItAllTogetherRenderProps;
