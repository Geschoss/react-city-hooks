import React, { useState, useCallback, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const UseDocumentTitleEffect = () => {
    const [title, setTitle] = useState('React');

    const handleChange = useCallback((value) => setTitle(value), []);

    return (
        <Island title="UseDocumentTitleEffect">
            <Text text={title} />
            <Input onChange={handleChange} />
        </Island>
    )
};


export default UseDocumentTitleEffect;
