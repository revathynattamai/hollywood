let updateValueRed = (state = { num: 0, word:''}, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
             state = {
                num: action.payload.num,
                word: action.payload.text
            }
            break;
    }
    return state;

}

export default updateValueRed;
