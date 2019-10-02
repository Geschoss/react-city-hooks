import React, { useState } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';

const Header = ({ title, text }) => {
    return (<>
        <Text text={title} />
        <Text text={text} />
    </>)
};


const MemoExl2 = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const textChange = (e) => setText(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);

    return (
        <Island title="memo">
            <Header text={text} title={title} />
            <input onChange={textChange} />
            <input onChange={titleChange} />
        </Island>
    );
};

export default MemoExl2;
