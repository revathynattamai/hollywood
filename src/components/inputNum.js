
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateValue, errorValue } from '../actions';

class InputNum extends Component {

    inputField() {
        const { addNumRed: { num, word } } = this.props;
        let arr = [];
        let len = word.length;
        if (num == len) {
            for (let i = 1; i <= num; i++) {
                arr.push(<input type="text" key={i} size="1" />);
            }
            return (<div class="arr">{arr}</div>);
        } else { 
            if (!len) {
                return(
                    <div> Enter word </div>
                )
            }
            return (
                <div>
                    Please provide correct information. The number of letters and the word differs.
                </div>
            )
        }
    }

    hollywood() {
        console.log("Called");
        return (
            <div>
                <h1>hollywood</h1>
            </div>);
    }

    render() {
        let inputNum, inputWord;
        return (
            <div id="h01">
                Enter the number of letters: <input type="number" ref={node => inputNum = node} min="1" max="30" required />
                Enter the word: <input type="password" size="30" placeholder="Maximum 30 letter" ref={node => inputWord = node} />
                <input type="button" className="button" value="Submit" onClick={() => this.props.updateValue(inputNum, inputWord)} />
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
