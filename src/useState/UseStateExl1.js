import React, { useState } from "react";
import Island from "../common/Island";

const UseStateExl1 = ({ initialCount = 0 }) => {

  return (
    <Island title="Simple useState">
      Count: {initialCount}
      <button onClick={() => {}}>Reset</button>
      <button onClick={() => {}}>+</button>
      <button onClick={() => {}}>-</button>
    </Island>
  );
};

export default UseStateExl1;
