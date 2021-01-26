import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function TableBody(props) {
    const { data, columns } = props;

    const renderCell = (item, column) => {
        if (column.content) return column.content(item);

        //item[column] .. using lodash for nested properties
        return _.get(item, column.path);
    };

    return (
        <tbody>
            {data.map((item) => (
                <tr key={uuidv4()}>
                    {columns.map((column) => (
                        <td key={uuidv4()}>{renderCell(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

TableBody.propType = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
