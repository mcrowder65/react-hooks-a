import React from "react";

const Destructuring = () => {
  // const obj = { value: "oranges", name: "matt" };
  // const value = obj.value;
  // const name = obj.name;
  const [value, name] = ["oranges", "matt"];
  // const { value, name } = obj;
  return (
    <div>
      {value} {name}
    </div>
  );
};

export default Destructuring;
