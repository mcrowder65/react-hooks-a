import React from "react";
import { withNetworkStatus } from "../network-status/hoc";

const withApiCall = (YourComponent) => {
  return class extends React.Component {
    state = {
      isLoading: false,
    };

    makeApiCall = async (yourApiCall) => {
      try {
        this.setState({ isLoading: true });
        await yourApiCall();
      } finally {
        this.setState({ isLoading: false });
      }
    };
    render() {
      return (
        <YourComponent
          {...this.props}
          isLoading={this.state.isLoading}
          makeApiCall={this.makeApiCall}
        />
      );
    }
  };
};
