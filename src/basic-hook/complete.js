import React from "react";
import * as utils from "../utils";

const BasicComponentThatUsesHooks = () => {
  const [count, setCount] = React.useState();
  const fetchCount = async () => {
    const fetchedCount = await utils.fetchCount();
    setCount(fetchedCount);
  };
  React.useEffect(() => {
    fetchCount();
  }, []);

  React.useEffect(() => {
    if (count % 2 === 0) {
      console.log("networkRequest");
    }
  }, [count]);
  return (
    <div>
      {count !== undefined ? (
        <div>
          <button onClick={() => setCount((state) => state - 1)}>-1</button>
          <div>{count}</div>
          <button onClick={() => setCount((state) => state + 1)}>+1</button>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default BasicComponentThatUsesHooks;
