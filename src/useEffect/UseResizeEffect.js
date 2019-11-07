import React, { useState, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import useWindowWidth from './useWindowWidth';

const UseResizeEffect = () => {
    const width = useWindowWidth();

    return (
        <Island title="UseResizeEffect">
            <Text text={width}/>
        </Island>
    );
};

export default UseResizeEffect;
