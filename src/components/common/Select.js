import React from 'react';

export default function Select(props) {
    const { name, label, error, onSelect, value, options } = props;
    return (
        <div className='form-group'>
            <label htmlFor={name}> {label} </label>
            <select
                name={name}
                className='form-control'
                onChange={onSelect}
                id={name}
            >
                <option value={value}>test</option>
                {options.map((option) => (
                    <option value={value} key={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    );
}
