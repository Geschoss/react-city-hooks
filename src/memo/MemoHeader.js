import React, { useState, memo } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import isTextEqual from './isTextEqual';

const Header = ({ title, text }) => {
    return (<>
        <Text text={title} />
        <Text text={text} />
    </>)
};


const MemoHeader = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const textChange = (e) => setText(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);

    return (
        <Island title="MemoHeader">
            <Header text={text} title={title} />
            title
            <input onChange={titleChange} />
            text
            <input onChange={textChange} />
        </Island>
    );
};

export default MemoHeader;
