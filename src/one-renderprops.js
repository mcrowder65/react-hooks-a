import React from "react";
import PropTypes from "prop-types";
import { Button } from '@material-ui/core'

class WithMessage extends React.Component {
  componentDidMount() {}
  render() {
    return this.props.children({
      logMessage: (message) => {
        console.log("your message ", message);
      },
    });
  }
}
WithMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
function OneRenderProps() {
  return (
    <WithMessage>
      {({ logMessage }) => {
        return (
          <Button color="primary" variant="contained" onClick={() => logMessage("hello!")}>Log message</Button>
        );
      }}
    </WithMessage>
  );
}

export default OneRenderProps;
