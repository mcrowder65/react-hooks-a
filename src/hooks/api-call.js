import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
export const useApiCall = (yourApiCall) => {
  return { isLoading: false };
};

const ApiCallHooks = () => {
  const { isLoading, makeApiCall } = useApiCall(async () => {
    await sleep(500);
  });
  return (
    <div>
      {isLoading && "loading..."}
      <Button onClick={makeApiCall}>Make Api Call!</Button>
    </div>
  );
};

export default ApiCallHooks;
