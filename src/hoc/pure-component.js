import React from "react";
export const PureComponent = (additionalPropsToCheck = []) => {
  return (YourComponent) => {
    return class extends React.Component {
      shouldComponentUpdate() {
        return true;
      }

      render() {
        return <YourComponent {...this.props} />;
      }
    };
  };
};
