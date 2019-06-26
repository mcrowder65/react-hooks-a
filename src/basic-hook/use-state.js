import React from "react";
import { Button } from "../reusable/button";

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
