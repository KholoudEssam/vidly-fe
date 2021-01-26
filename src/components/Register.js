import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

export default class Register extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name: '',
        },
        errors: {},
    };
    schema = {
        username: Joi.string().min(3).required().label('Username'),
        password: Joi.string().min(6).required().label('Password'),
        name: Joi.string().min(2).required().label('Name'),
    };

    doSubmit = () => {
        console.log('submitted');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderInput('name', 'Name')}

                {this.renderButton('Register')}
            </form>
        );
    }
}
