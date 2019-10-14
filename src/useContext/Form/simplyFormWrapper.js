import React, { useContext } from 'react';

import { SimplyValueDispatch } from './Form';
import Text from '../../common/Text';

const simplyFormWrapper = (Component) => ({ label, type }) => {
    const setState = useContext(SimplyValueDispatch);

    return (<>
            <Text text={label} />
            <Component onChange={setState} type={type} />
        </>
    )
};

export default simplyFormWrapper;
