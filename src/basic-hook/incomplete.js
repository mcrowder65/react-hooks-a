import React from "react";
import * as utils from "../utils";

const IncompleteCompThatUsesHooks = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((state) => state - 1)}>-1</button>
      <div>{count}</div>
      <button onClick={() => setCount((state) => state + 1)}>+1</button>
    </div>
  );
};

export default IncompleteCompThatUsesHooks;
