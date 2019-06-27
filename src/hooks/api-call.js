import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
export const useApiCall = (yourApiCall) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const makeApiCall = async () => {
    try {
      setIsLoading(true);
      await yourApiCall();
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, makeApiCall };
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
