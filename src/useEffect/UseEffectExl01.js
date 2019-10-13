import React, { useState, useCallback, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseEffectExl01 = () => {
    const [title, setTitle] = useState('React')

    const handleChange = useCallback((value) => setTitle(value), []);

    return (
        <Island title="Simple useEffect">
            <Text text={title} />
            <Input onChange={handleChange} />
        </Island>
    )
};


export default UseEffectExl01;
