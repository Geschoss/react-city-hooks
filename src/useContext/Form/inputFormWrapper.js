import React, { useContext, useCallback } from 'react';

import { ValueDispatch } from './Form';
import Text from '../../common/Text';

const inputFormWrapper = (Component) => ({ label, type, name }) => {
    const setState = useContext(ValueDispatch);

    const handleChange = (value) => setState({ name, value });

    return (<>
            <Text text={label} />
            <Component onChange={handleChange} type={type} />
        </>
    )
};

export default inputFormWrapper;
