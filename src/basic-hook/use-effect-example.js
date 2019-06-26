import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import * as utils from "../utils";

const Button = (props) => {
  return <MuiButton {...props} variant="contained" color="primary" />;
};
const UseEffectExample = () => {
  const [count, setCount] = React.useState();
  const fetchCount = async () => {
    setCount(await utils.fetchCount());
  };
  React.useEffect(() => {
    fetchCount();
  }, []);
  return (
    <div>
      {count !== undefined && (
        <>
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          {count}
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </>
      )}
    </div>
  );
};

export default UseEffectExample;
