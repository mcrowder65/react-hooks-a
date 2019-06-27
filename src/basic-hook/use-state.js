import React from "react";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const UseStateExample = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Container>
      <Button onClick={() => setCount((state) => state - 1)}>-1</Button>
      <div style={{ margin: 50 }}>
        <BigText>{count}</BigText>
      </div>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </Container>
  );
};

export default UseStateExample;
