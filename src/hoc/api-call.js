import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { BigText } from "../reusable/big-text";
import { Container } from "../reusable/container";

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
    <Container>
      {props.isLoading ? <BigText>loading...</BigText> : null}
      <Button onClick={() => props.makeApiCall(apiCall)}>Make Api Call!</Button>
    </Container>
  );
};

export default withApiCall(ApiCallHoc);
