import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MovieHeader(props) {
    const { columns, sortedBy, onSort } = props;

    const sortColumn = (column) => {
        const sortCol = { ...sortedBy };
        if (sortCol.column === column) {
            sortCol.order = sortCol.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortCol.column = column;
            sortCol.order = 'asc';
        }
        onSort(sortCol);
    };

    const renderSortIcon = (column) => {
        if (column.content && !column.label) return null;
        if (column.path === sortedBy.column) {
            if (sortedBy.order === 'asc')
                return (
                    <span className='material-icons'>keyboard_arrow_up</span>
                );
            return <span className='material-icons'>keyboard_arrow_down</span>;
        }
    };

    return (
        <thead>
            <tr>
                {columns.map((c) => (
                    <th
                        className='pointer'
                        key={uuidv4()}
                        onClick={() => sortColumn(c.path)}
                    >
                        {c.label} {renderSortIcon(c)}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
