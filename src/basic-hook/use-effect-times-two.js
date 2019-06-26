import React from "react";
import * as utils from "../utils";
import { Button } from "../reusable/button";

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
    <div>
      {count !== undefined && (
        <>
          <div>Even number occurrences: {evenNumberOccurrences}</div>
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          {count}
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </>
      )}
    </div>
  );
};

export default UseEffectExampleTimesTwo;
