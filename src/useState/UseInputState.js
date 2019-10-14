import React, { useState } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';

const UseInputState = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

    return (
        <Island title="UseInputState">
            <Text text={text}/>
            <input onChange={handleChange} />
        </Island>
    );
};

export default UseInputState;
