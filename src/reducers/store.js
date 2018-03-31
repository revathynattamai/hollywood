import { createStore, combineReducers } from 'redux'
import addNumRed from './addnum';
 
const store = combineReducers({
    addNumRed
})

module.exports = createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());