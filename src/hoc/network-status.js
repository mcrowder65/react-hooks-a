import React from "react";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

export const withNetworkStatus = (YourComponent) => {
  return class extends React.Component {
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
      return (
        <YourComponent
          {...this.props}
          networkStatus={this.state.networkStatus}
        />
      );
    }
  };
};

const NetworkStatusHOC = (props) => {
  return (
    <Container>
      <BigText>Network status: {props.networkStatus}</BigText>
    </Container>
  );
};
export default withNetworkStatus(NetworkStatusHOC);
