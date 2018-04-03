let errorValueRed = (state = { error : '' }, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
             state = {
                error: action.payload
            }
            break;
    }
    return state;

}

export default errorValueRed;
