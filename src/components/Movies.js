import React, { Component } from 'react';
import _ from 'lodash';
import MoviesTable from './MoviesTable';
import ListGroup from './common/ListGroup';
import Pagination from './common/Pagination';
import { getMovies } from '../services/movies';
import { getGenres } from '../services/genres';
import { paginate } from '../utils/paginate';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 2,
        selectedGenre: { _id: '', name: 'All Genres' },
        sortedColumn: { column: 'title', order: 'asc' },
    };
    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
        this.setState({ movies: getMovies() });
        this.setState({ genres });
    }
    handleDelete = (id) => {
        const movies = this.state.movies.filter((m) => m._id !== id);
        this.setState({ movies });
    };
    handleLike = (id) => {
        const updatedMovies = [...this.state.movies];
        updatedMovies.forEach((m) => {
            if (m._id === id) m.liked = !m.liked;
        });
        this.setState({ movies: updatedMovies });
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    handleItemSelected = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    handleSort = (sortedColumn) => {
        this.setState({ sortedColumn });
    };
    getPagedData = () => {
        const {
            movies,
            pageSize,
            currentPage,
            selectedGenre,
            sortedColumn,
        } = this.state;
        const filteredMovies =
            selectedGenre && selectedGenre._id
                ? movies.filter((m) => m.genre._id === selectedGenre._id)
                : movies;

        const count = filteredMovies.length;

        const sortedMovies = _.orderBy(
            filteredMovies,
            [sortedColumn.column],
            [sortedColumn.order]
        );

        const displayedMovies = paginate(sortedMovies, pageSize, currentPage);
        return { displayedMovies, count };
    };
    render() {
        const {
            movies,
            genres,
            pageSize,
            currentPage,
            selectedGenre,
            sortedColumn,
        } = this.state;
        const { length: count } = movies;
        if (count === 0) return <p>No Movies in database</p>;
        const { displayedMovies, count: moviesCount } = this.getPagedData();
        return (
            <div className='row mt-5'>
                <div className='col-3'>
                    <ListGroup
                        items={genres}
                        value='_id'
                        viewValue='name'
                        selectedItem={selectedGenre}
                        onItemSelected={this.handleItemSelected}
                    />
                </div>
                <div className='col'>
                    <Link
                        to={`/movie/new`}
                        className='btn btn-primary'
                        style={{ marginBottom: '15px' }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {moviesCount} in the database</p>
                    <MoviesTable
                        movies={displayedMovies}
                        sortedBy={sortedColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        items={moviesCount}
                        itemsPerPage={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}
