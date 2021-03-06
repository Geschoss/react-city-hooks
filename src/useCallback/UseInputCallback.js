import React, { useState, useCallback } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseInputCallback = () => {
    const [text, setText] = useState('');

    const handleChange = useCallback(
        (value) => setText(value),
        []
    );

    return (
        <Island title="UseInputCallback">
            <Text text={text}/>
            <Input onChange={handleChange} />
        </Island>
    );
};

export default UseInputCallback;
