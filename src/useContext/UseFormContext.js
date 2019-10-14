import React, { useContext } from 'react';
import Input from '../common/Input';
import Form from './Form/Form';
// import Form from './Form/FormReduce';
import simplyFormWrapper from './Form/simplyFormWrapper';
import inputFormWrapper from './Form/inputFormWrapper';

const FormInput = simplyFormWrapper(Input);
// const FormInput = inputFormWrapper(Input);

const UseFormContext = () => {
    return (
        <Form title="UseFormContext">
            <FormInput name="name" label="first" />
            <FormInput name="age" label="age" type="number"/>
        </Form>
    )
};


export default UseFormContext;
