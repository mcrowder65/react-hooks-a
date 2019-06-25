import React from "react";
import { withNetworkStatus } from "../network-status/hoc";

const withApiCall = (YourComponent) => {
  class WithApiCall extends React.Component {
    state = {
      isLoading: false,
    };

    makeApiCall = async (yourApiCall) => {
      try {
        if (this.props.networkStatus === "online") {
          this.setState({ isLoading: true });
          await yourApiCall();
        } else {
          throw new Error("you are offline");
        }
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
  }

  return withNetworkStatus(WithApiCall);
};

const ApiCallHoc = (props) => {};
