import React from 'react';
import { Link } from 'react-router-dom';
import Like from './common/Like';
import Table from './common/Table';

export default function MoviesTable(props) {
    const { movies, onLike, onDelete, onSort, sortedBy } = props;

    const columns = [
        {
            path: 'title',
            label: 'Title',
            content: (movie) => (
                <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
            ),
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            content: (movie) => (
                <Like
                    isLiked={movie.liked}
                    toggleLike={() => onLike(movie._id)}
                />
            ),
        },
        {
            content: (movie) => (
                <button
                    onClick={() => onDelete(movie._id)}
                    className='btn btn-danger'
                >
                    Delete
                </button>
            ),
        },
    ];

    return (
        <Table
            data={movies}
            columns={columns}
            onSort={onSort}
            sortedBy={sortedBy}
        />
    );
}
