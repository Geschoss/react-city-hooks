import React, { useState, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import makeStream from './makeStream';
import log from '../utils/log';

const stream = makeStream(1000);

const Display = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        stream.subscribe((count) => {
            log(count);
            setText(count);
        })
    }, []);

    return (
        <Text text={text} />
    )
};


const UseEffectExl3 = () => {
    const [showDisplay, toggleDisplay] = useState(false)

    return (
        <Island title="Simple useEffect">
            <button onClick={() => toggleDisplay(!showDisplay)}>toggleDisplay</button>
            {showDisplay && <Display />}
        </Island>
    );
};

export default UseEffectExl3;
