import React, { Component } from 'react';
import { render } from 'react-dom';

import Heading from './heading'; 
import InputNum from './inputNum'; 
import TeBo from './tebo'


export class App extends Component {
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


export default App;