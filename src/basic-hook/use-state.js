import React from "react";
import { Button as MuiButton } from "@material-ui/core";
const Button = (props) => {
  return <MuiButton {...props} variant="contained" color="primary" />;
};
const UseStateExample = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      {count}
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
};

export default UseStateExample;
