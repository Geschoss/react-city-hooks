import React, { useState, useCallback } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseInputCallback2 = () => {
    const [text, setText] = useState('');
    const [prefix, setPrefix] = useState('pref_');

    const handleChangePrefix = useCallback(
        (value) => setPrefix(value),
        []
    );

    const handleChange = useCallback(
        (value) => setText(prefix + value),
        [prefix]
    );

    return (
        <Island title="input useCallback">
            <Text text={text}/>
            text:
            <Input onChange={handleChange} />
            prefix:
            <Input onChange={handleChangePrefix} />
        </Island>
    );
};

export default UseInputCallback2;
