import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table(props) {
    const { columns, data, onSort, sortedBy } = props;

    return (
        <table className='table'>
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortedBy={sortedBy}
            />
            <TableBody data={data} columns={columns} />
        </table>
    );
}
