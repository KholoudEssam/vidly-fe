import React from 'react';
import PropTypes from 'prop-types';

export default function ListGroup(props) {
    const { items, value, viewValue, selectedItem, onItemSelected } = props;

    return (
        <ul className='list-group'>
            {items.map((item) => (
                <li
                    key={item[value] || '0'}
                    className={
                        selectedItem[viewValue] === item[viewValue]
                            ? 'list-group-item pointer active'
                            : 'list-group-item pointer'
                    }
                    onClick={() => onItemSelected(item)}
                >
                    {item[viewValue]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.propType = {
    items: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    viewValue: PropTypes.string.isRequired,
    selectedItem: PropTypes.object.isRequired,
    onItemSelected: PropTypes.func.isRequired,
};
