import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default function Pagination(props) {
    const { items, itemsPerPage, currentPage, onPageChange } = props;
    const numberOfPages = Math.ceil(items / itemsPerPage);

    if (numberOfPages === 1) return null;

    const pages = _.range(1, numberOfPages + 1);
    return (
        <nav aria-label='Page navigation example'>
            <ul className='pagination'>
                {pages.map((p) => (
                    <li
                        key={p}
                        className={
                            p === currentPage ? 'page-item active' : 'page-item'
                        }
                        style={{ cursor: 'pointer' }}
                        onClick={() => onPageChange(p)}
                    >
                        <span className='page-link'>{p}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    items: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
