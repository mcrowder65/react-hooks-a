import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
export const useApiCall = (yourApiCall) => {
  return { isLoading: false };
};

const ApiCallHooks = () => {
  const { isLoading, makeApiCall } = useApiCall(async () => {
    await sleep(500);
  });
  return (
    <Container>
      {isLoading && <Text>"loading..."</Text>}
      <Button onClick={makeApiCall}>Make Api Call!</Button>
    </Container>
  );
};

export default ApiCallHooks;
