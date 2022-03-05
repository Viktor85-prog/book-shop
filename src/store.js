import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers'


export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store
}



// function reducer(state = [], action) {
//     return state
// }

// const createStore1 = () => {
//     const store = createStore(reducer, applyMiddleware(logger))
//     return store

// }

// const store = createStore1()
// // let store = createStore(todos, ['Use Redux'])

// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Read the docs'
// })

