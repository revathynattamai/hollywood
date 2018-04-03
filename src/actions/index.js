export const updateValue = (num, text) => {
    return{
    type: 'ADD_NUMBER',
    payload: {num, text}
    }
}

export const errorValue = (error) => {
    return{
    type: 'ADD_ERROR',
    payload: error
    }
}
