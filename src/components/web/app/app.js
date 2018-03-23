import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Heading from './heading'; 

export class Hello extends Component {
    render() {
        return (
            <Heading />
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);