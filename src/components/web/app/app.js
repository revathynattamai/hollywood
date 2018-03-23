import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';

import Heading from './heading'; 
import InputNum from './inputNum'; 
import TeBo from './tebo'



export class Hello extends Component {
    render() {
        return (
            <div>
            <Heading />
            <InputNum />
            <TeBo />
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);