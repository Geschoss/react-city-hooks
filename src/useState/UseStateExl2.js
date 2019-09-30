import React, { useState } from "react";
import Island from "../common/Island";

const UseStateExl1 = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <Island title="Simple useState">
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </Island>
  );
};

export default UseStateExl1;
