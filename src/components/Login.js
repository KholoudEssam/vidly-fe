import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

export default class Login extends Form {
    state = {
        data: {
            username: '',
            password: '',
        },
        errors: {},
    };
    schema = {
        username: Joi.string().min(3).required().label('Username'),
        password: Joi.string().min(6).required().label('Password'),
    };

    doSubmit = () => {
        console.log('submitted');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}

                {this.renderButton('Login')}
            </form>
        );
    }
}
