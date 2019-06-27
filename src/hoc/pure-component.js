import React from "react";

export const PureComponent = (YourComponent, additionalPropsToCheck = []) => {
  return class extends React.Component {
    shouldComponentUpdate() {
      return true;
    }

    render() {
      return <YourComponent {...this.props} />;
    }
  };
};
