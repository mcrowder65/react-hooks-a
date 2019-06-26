import React from "react";
import { sleep } from "mooks";
import { Button } from "@material-ui/core";
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
      <Button color="primary" variant="contained" onClick={makeApiCall}>
        Make Api Call!
      </Button>
    </div>
  );
};

export default ApiCallHooks;
