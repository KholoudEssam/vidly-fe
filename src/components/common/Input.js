import React from 'react';

export default function Input(props) {
    const { name, value, label, type, onInput, error } = props;
    return (
        <div className='form-group'>
            <label htmlFor={name}> {label} </label>
            <input
                name={name}
                value={value}
                onChange={onInput}
                id={name}
                type={type}
                className='form-control'
            />
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    );
}
