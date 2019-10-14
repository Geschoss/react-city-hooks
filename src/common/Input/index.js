import React, { memo } from 'react';

const Input = memo(({ onChange, type = 'text' }) => {
    console.log('render Input');

    const handleChange = (e) => onChange(e.target.value);

    return (
        <input type={type} onChange={handleChange} />
    )
});

export default Input;
