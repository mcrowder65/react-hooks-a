import React from "react";
import * as utils from "../utils";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const UseEffectExample = () => {
  const [count, setCount] = React.useState();
  const fetchCount = async () => {
    setCount(await utils.fetchCount());
  };
  React.useEffect(() => {
    fetchCount();
  }, []);
  return (
    <Container>
      {count !== undefined && (
        <>
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          <div style={{ margin: 30 }}>
            <BigText>{count}</BigText>
          </div>
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </>
      )}
    </Container>
  );
};

export default UseEffectExample;
