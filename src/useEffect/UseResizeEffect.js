import React, { useState, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';

const UseResizeEffect = () => {
    const width = window.innerWidth;

    return (
        <Island title="UseResizeEffect">
            <Text text={width}/>
        </Island>
    );
};

export default UseResizeEffect;
