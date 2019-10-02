import React, { useState, useCallback } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseCallbackExl2 = () => {
    const [text, setText] = useState('');

    const handleChange = useCallback((value) => setText(text + value.toUpperCase()), []);

    return (
        <Island title="input useCallback">
            <Text text={text}/>
            <Input onChange={handleChange} />
        </Island>
    );
};

export default UseCallbackExl2;
