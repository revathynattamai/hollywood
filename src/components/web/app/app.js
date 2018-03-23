import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Heading from './heading'; 
import InputNum from './inputNum';
export class Hello extends Component {
    render() {
        return (
            <div>
            <Heading />
            <InputNum />
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);