import React from "react";
import * as utils from "../utils";
import { Button } from "../reusable/button";
import { BigText } from "../reusable/big-text";
import { Text } from "../reusable/text";
import { Container } from "../reusable/container";

const UseEffectExampleTimesTwo = () => {
  const [count, setCount] = React.useState();
  const [evenNumberOccurrences, setEvenNumberOccurrences] = React.useState(0);
  const fetchCount = async () => {
    setCount(await utils.fetchCount());
  };
  React.useEffect(() => {
    fetchCount();
  }, []);

  React.useEffect(() => {
    if (count % 2 === 0) {
      setEvenNumberOccurrences(evenNumberOccurrences + 1);
    }
  }, [count]);
  return (
    <Container flexDirection="column">
      {count !== undefined && (
        <>
          <div>
            <Text>Even number occurrences: {evenNumberOccurrences}</Text>
          </div>
          <div>
            <Button onClick={() => setCount(count - 1)}>-1</Button>
            <BigText>{count}</BigText>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default UseEffectExampleTimesTwo;
