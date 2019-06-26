import React from "react";
import { sleep } from "mooks";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
export class ApiCall extends React.Component {
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
    return this.props.children({
      isLoading: this.state.isLoading,
      makeApiCall: this.makeApiCall,
    });
  }
}

const RenderPropsApiCall = () => {
  return (
    <ApiCall
      children={(props) => {
        const apiCall = async () => {
          await sleep(1000);
        };
        return (
          <Container>
            {props.isLoading ? <Text>loading...</Text> : null}
            <Button
              color="primary"
              variant="contained"
              onClick={() => props.makeApiCall(apiCall)}
            >
              Make Api Call!
            </Button>
          </Container>
        );
      }}
    />
  );
};

export default RenderPropsApiCall;
