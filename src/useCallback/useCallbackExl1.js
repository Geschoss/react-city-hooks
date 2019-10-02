import React, { useState } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseCallbackExl1 = () => {
    const [text, setText] = useState('');

    const handleChange = (value) => setText(value.toUpperCase());

    return (
        <Island title="input useCallback">
            <Text text={text}/>
            <Input onChange={handleChange} />
        </Island>
    );
};

export default UseCallbackExl1;
