import React, {Component} from "react";

import Heading from "./heading";
import InputNum from "./inputNum";



export class App extends Component {

    render () {

        return (
            <div>
                <Heading />
                <InputNum />
            </div>
        );
    }

}

export default App;
