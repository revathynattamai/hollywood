import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNum } from '../actions'

class InputNum extends Component {
    render() {
        let input;
        return (
            <div id="h01">
    
                <table align="center">
                <tr> Enter the number of letters: <input type="number" ref={node => input = node} min="1" max="30" required onChange={() => this.props.addNum(input)} /></tr>
                <tr>Enter the word: <input type="password" size="30" placeholder="Maximum 30 letter" /></tr>

                </table>

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return state;
  };

const mapDispatchToProps = (dispatch) => {
    return {
        addNum: (input) => {
            dispatch(addNum(input.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputNum);