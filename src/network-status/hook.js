import React from "react";

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

  React.useEffect(() => {
    window.addEventListener("online", setNetworkStatusOnline);
    window.addEventListener("offline", setNetworkStatusOffline);
    return () => {
      window.removeEventListener("online", setNetworkStatusOnline);
      window.removeEventListener("offline", setNetworkStatusOffline);
    };
  }, []);
  return networkStatus;
};
