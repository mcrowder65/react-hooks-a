import React from "react";
import { NetworkStatus } from "./network-status";
import { ApiCall } from "./api-call";
import { sleep } from "mooks";
import { Button } from "../reusable/button";

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
                <>
                  {isLoading && "loading"}
                  {networkStatus === "online" && (
                    <Button onClick={apiCall}>Make api call!</Button>
                  )}
                </>
              );
            }}
          </ApiCall>
        );
      }}
    </NetworkStatus>
  );
};

export default BringingItAllTogetherRenderProps;
