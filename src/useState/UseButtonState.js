import React, { useState } from 'react';
import Island from '../common/Island';

const UseButtonState = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    return (
        <Island title="UseButtonState">
            Count: {count}

            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </Island>
    );
};

export default UseButtonState;
