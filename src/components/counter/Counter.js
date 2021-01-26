import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        const { onDelete, onIncrement, onDecrement } = this.props;
        const { id, value } = this.props.counter;
        return (
            <div className='row'>
                <div className='col-1'>
                    <span className={this.getBadgeClasses(value)}>
                        {this.formatOutput()}
                    </span>
                </div>
                <div className='col'>
                    <button
                        onClick={() => onIncrement(id)}
                        className='btn btn-secondary btn-sm'
                    >
                        +
                    </button>
                    <button
                        onClick={() => onDecrement(id)}
                        className='btn btn-secondary btn-sm m-2'
                        disabled={value === 0 ? 'disable' : ''}
                    >
                        -
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-danger btn-sm'
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses(count) {
        let classes = 'badge m-2 badge-';
        classes += count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatOutput() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
