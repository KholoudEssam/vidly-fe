import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {
    render() {
        const {
            counters,
            handleDelete,
            handleDecrement,
            handleIncrement,
            handleReset,
        } = this.props;
        return (
            <div>
                <button className='btn btn-primary' onClick={handleReset}>
                    Reset
                </button>
                {counters.map((c) => (
                    <Counter
                        key={c.id}
                        counter={c}
                        onDelete={handleDelete}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                ))}
            </div>
        );
    }
}
