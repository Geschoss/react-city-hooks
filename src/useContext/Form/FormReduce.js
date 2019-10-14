import React, { useReducer, createContext } from 'react';
import Island from '../../common/Island';
import noop from '../../utils/noop';
import { merge } from './utils';

export const ValueDispatch = createContext(noop);


const FormReduce = ({ children, title }) => {
    const [state, setState] = useReducer(merge,{});

    console.log(state);
    return (
        <ValueDispatch.Provider value={setState}>
            <Island title={title}>
                {children}
            </Island>
        </ValueDispatch.Provider>
    )
};

export default FormReduce;
