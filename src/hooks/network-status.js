import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

export const useNetworkStatus = () => {
  return "implement me!";
};

const NetworkStatusHooks = () => {
  const networkStatus = useNetworkStatus();
  return (
    <Container>
      <Text>Network status: {networkStatus}</Text>
    </Container>
  );
};

export default NetworkStatusHooks;
