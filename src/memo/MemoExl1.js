import React, { useState } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';

const MemoExl1 = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

    return (
        <Island title="memo">
            <Text text="first"/>
            <Text text="second"/>
            <Text text={text}/>
            <input onChange={handleChange} />
        </Island>
    );
};

export default MemoExl1;
