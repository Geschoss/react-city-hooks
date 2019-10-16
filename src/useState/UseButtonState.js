import React, { useState } from 'react';
import Island from '../common/Island';

const UseButtonState = ({ initialCount = 0 }) => {

    return (
        <Island title="UseButtonState">
            Count: {initialCount}

            <button onClick={() => {}}>Reset</button>
            <button onClick={() => {}}>+</button>
            <button onClick={() => {}}>-</button>
        </Island>
    );
};

export default UseButtonState;
