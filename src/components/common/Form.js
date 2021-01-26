import { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Joi from 'joi-browser';

export default class Form extends Component {
    state = {
        data: {},
        errors: {},
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        if (!error) return;

        return error.details[0].message;
    };

    validate = () => {
        const options = {
            abortEarly: false,
        };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        for (let err of error.details) errors[err.path[0]] = err.message;

        return errors;
    };
    handleChange = ({ target: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else errors[input.name] = '';

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;
        this.doSubmit();
    };
    renderInput(name, label, type = 'text') {
        const { errors, data } = this.state;

        return (
            <Input
                type={type}
                label={label}
                name={name}
                value={data[name]}
                error={errors[name]}
                onInput={this.handleChange}
            />
        );
    }
    renderSelect(name, label, options) {
        const { errors, data } = this.state;
        console.log('fsdfd', data[name]);
        <Select
            name={name}
            label={label}
            options={options}
            value={data[name]}
            error={errors[name]}
            onSelect={this.handleChange}
        />;
    }
    renderButton(label) {
        return (
            <button className='btn btn-primary' disabled={this.validate()}>
                {label}
            </button>
        );
    }
}
