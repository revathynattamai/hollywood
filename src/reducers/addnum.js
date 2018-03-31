const addNumRed = (state = { num: 0}, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
             state = {
                num: action.payload
            }
            break;
    }
    return state;

}

export default addNumRed;