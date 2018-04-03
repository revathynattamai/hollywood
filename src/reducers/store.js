import { createStore, combineReducers } from 'redux'
import addNumRed from './addnum';
import errorValueRed from './adderror';
 
const store = combineReducers({
    addNumRed,
    errorValueRed
})

module.exports = createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
