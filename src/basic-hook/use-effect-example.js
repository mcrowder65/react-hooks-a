import React from "react";
import * as utils from "../utils";
import { Button } from "../reusable/button";

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
