import React from "react";

class RenderProps extends React.Component {
  state = {
    networkStatus: window.navigator.onLine ? "online" : "offline",
  };
  setNetworkStatusOnline = () => {
    this.setState({ networkStatus: "online" });
  };
  setNetworkStatusOffline = () => {
    this.setState({ networkStatus: "offline" });
  };
  componentDidMount() {
    window.addEventListener("online", this.setNetworkStatusOnline);
    window.addEventListener("offline", this.setNetworkStatusOffline);
  }
  componentWillUnmount() {
    window.removeEventListener("online", this.setNetworkStatusOnline);
    window.removeEventListener("offline", this.setNetworkStatusOffline);
  }

  render() {
    return this.props.children({ networkStatus: this.state.networkStatus });
  }
}

export default RenderProps;
