import React, { useContext } from 'react';
import Input from '../common/Input';

import Form from './Form/Form';
import inputFormWrapper from './Form/inputFormWrapper';

const FormInput = inputFormWrapper(Input);

const UseFormContext = () => {
    return (
        <Form title="UseFormContext">
            <FormInput name="name" label="first" />
            <FormInput name="age" label="age" type="number"/>
        </Form>
    )
};


export default UseFormContext;
