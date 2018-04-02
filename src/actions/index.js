export const updateValue = (num, text) => {
    return{
    type: 'ADD_NUMBER',
    payload: {num, text}
    }
}
