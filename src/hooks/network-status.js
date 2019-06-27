import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = React.useState(
    window.navigator.onLine ? "online" : "offline",
  );
  const setNetworkStatusOnline = () => {
    setNetworkStatus("online");
  };
  const setNetworkStatusOffline = () => {
    setNetworkStatus("offline");
  };
  const componentDidMount = () => {
    window.addEventListener("online", setNetworkStatusOnline);
    window.addEventListener("offline", setNetworkStatusOffline);
  };
  const componentWillUnmount = () => {
    window.removeEventListener("online", setNetworkStatusOnline);
    window.removeEventListener("offline", setNetworkStatusOffline);
  };
  React.useEffect(() => {
    componentDidMount();
    return componentWillUnmount;
  });
  return { networkStatus };
};

const NetworkStatusHooks = () => {
  const { networkStatus } = useNetworkStatus();
  return (
    <Container>
      <Text>Network status: {networkStatus}</Text>
    </Container>
  );
};

export default NetworkStatusHooks;
