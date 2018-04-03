import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateValue, errorValue } from '../actions';

class InputNum extends Component {

    onClick(inputNum, inputWord) {
        this.props.updateValue(inputNum, inputWord);
        this.validation(this.props.addNumRed.num, this.props.addNumRed.word);
    }

    inputField() {
        const {addNumRed: { num } } = this.props;
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(<input type="text" key= {i} size="1" />);
        }
    return (<div id="inputbox">{arr}</div>);

    }

    render() {
        let inputNum, inputWord;
        return (
            <div id="h01">
                Enter the number of letters: <input type="number" ref={node => inputNum = node} min="1" max="30" required />
                Enter the word: <input type="password" size="30" placeholder="Maximum 30 letter" ref={node => inputWord = node} />
                <input type="button" value="Submit" onClick={() => this.onClick(inputNum, inputWord)} />
                {this.inputField()}
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
        },
        errorValue: (error) => {
            dispatch(errorValue(error));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputNum);
