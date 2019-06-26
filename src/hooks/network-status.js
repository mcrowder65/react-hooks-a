import React from "react";

export const useNetworkStatus = () => {
  return "implement me!";
};

const NetworkStatusHooks = () => {
  const networkStatus = useNetworkStatus();
  return <div>Network status: {networkStatus}</div>;
};

export default NetworkStatusHooks;
