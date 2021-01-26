import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { getMovie } from '../services/movies';
import { getGenres } from '../services/genres';

export default class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: '',
        },
        genre: [],
        errors: {},
    };
    schema = {
        title: Joi.string().min(2).required().label('Title'),
        numberInStock: Joi.number()
            .min(0)
            .max(100)
            .required()
            .label('Number In Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate'),
        // numberInStock: Joi.string().min(6).required().label('Number In Stock'),
    };

    componentDidMount() {
        this.setState({ genre: getGenres() });

        const { match, history } = this.props;
        if (!match.params.id) return;

        const movie = getMovie(match.params.id);
        if (movie.length === 0) return history.replace('/not-found');

        this.setState({ data: this.mapMovieToView(movie[0]) });
    }
    mapMovieToView = (movie) => {
        const obj = {
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        };
        console.log(obj);
        return obj;
    };
    doSubmit = () => {
        this.props.history.replace('/movies');
    };
    render() {
        const { genre } = this.state;

        return (
            <div>
                <h2>Movie Form </h2>
                <form
                    onSubmit={this.handleSubmit}
                    style={{ marginTop: '30px' }}
                >
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', genre)}

                    {this.renderInput(
                        'numberInStock',
                        'Number In Stock',
                        'number'
                    )}
                    {this.renderInput('dailyRentalRate', 'Rate')}

                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}
