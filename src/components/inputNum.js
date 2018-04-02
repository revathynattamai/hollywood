import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateValue } from '../actions';
import { TeBo } from './tebo';


class InputNum extends Component {

    onClick(inputNum, inputWord) {
        this.props.updateValue(inputNum, inputWord);
        //  this.inputField(this.props.addNumRed.num);
    }

    inputField(num) {
        console.log("called");
        for (let i = 1; i <= num; i++) {
                return(
                    <input type="text" size="1" />
            );

        }

    }

    render() {
        let inputNum, inputWord;
        return (
            <div id="h01">
                Enter the number of letters: <input type="number" ref={node => inputNum = node} min="1" max="30" required />
                Enter the word: <input type="password" size="30" placeholder="Maximum 30 letter" ref={node => inputWord = node} />
                <input type="button" value="Submit" onClick={() => this.onClick(inputNum, inputWord)} />
                <TeBo />
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (num, word) => {
            dispatch(updateValue(num.value, word.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputNum);
