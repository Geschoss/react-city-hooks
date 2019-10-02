import React, { memo } from 'react';

const Input = memo(({ onChange }) => {
    console.log('render Input');

    const handleChange = (e) => onChange(e.target.value);

    return (
        <input onChange={handleChange} />
    )
});

export default Input;
