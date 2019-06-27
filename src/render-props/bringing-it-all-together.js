import React from "react";
import { NetworkStatus } from "./network-status";
import { ApiCall } from "./api-call";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const BringingItAllTogetherRenderProps = () => {
  return (
    <NetworkStatus
      children={(extraProps) => {
        return (
          <ApiCall
            children={(moreExtraProps) => {
              const apiCall = () =>
                moreExtraProps.makeApiCall(async () => {
                  await sleep(1000);
                });
              return (
                <Container>
                  {moreExtraProps.isLoading && <Text>loading</Text>}
                  {extraProps.networkStatus === "online" && (
                    <Button onClick={apiCall}>Make api call!</Button>
                  )}
                </Container>
              );
            }}
          />
        );
      }}
    />
  );
};

export default BringingItAllTogetherRenderProps;
