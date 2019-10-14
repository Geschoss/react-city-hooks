import React, { useState, createContext } from 'react';
import Island from '../../common/Island';
import noop from '../../utils/noop';

export const SimplyValueDispatch = createContext(noop);


const Form = ({ children, title }) => {
    const [state, setState] = useState({});

    console.log(state);
    return (
        <SimplyValueDispatch.Provider value={setState}>
            <Island title={title}>
                {children}
            </Island>
        </SimplyValueDispatch.Provider>
    )
};

export default Form;
