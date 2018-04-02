import React, { Component } from 'react';
import { connect } from 'react-redux'

class TeBo extends Component {
    render() {
        let num = this.props.addNumRed.num;
        var input = document.createElement('input');
        input.setAttribute('id', "input" + i);
        document.getElementById("root").appendChild(input);
    }
}


const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(TeBo);
