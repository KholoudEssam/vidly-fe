import React, { Component } from 'react';
import Counters from './Counters';
import NavbarCounter from './NavbarCounter';

export default class HomeCounter extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    handleDelete = (id) => {
        const updatedCounters = this.state.counters.filter((c) => c.id !== id);
        this.setState({ counters: updatedCounters });
    };
    handleIncrement = (id) => {
        const counters = this.state.counters.filter((c) => {
            if (c.id === id) c.value++;
            return c;
        });
        this.setState({ counters });
    };
    handleDecrement = (id) => {
        const counters = this.state.counters.filter((c) => {
            if (c.id === id) c.value--;
            return c;
        });
        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    render() {
        const { counters } = this.state;
        return (
            <>
                <NavbarCounter
                    totalCounters={counters.filter((c) => c.value > 0).length}
                />
                <Counters
                    counters={counters}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    handleDelete={this.handleDelete}
                    handleReset={this.handleReset}
                />
            </>
        );
    }
}
