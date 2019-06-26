import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";

export const withApiCall = (YourComponent) => {
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

const ApiCallHoc = (props) => {
  const apiCall = async () => {
    await sleep(1000);
  };
  return (
    <div>
      {props.isLoading ? "loading..." : null}
      <Button onClick={() => props.makeApiCall(apiCall)}>Make Api Call!</Button>
    </div>
  );
};

export default withApiCall(ApiCallHoc);
