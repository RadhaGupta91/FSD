
const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    x: 8,
    y: 2,
    result: 0
}


const rootReducer = (state = initialState, action) => {

    if (action.type === "ADDITION") {
        return {
            ...state,
            result: state.x + state.y
        };
    };
    if (action.type === "SUBSTRACTION") {
        return {
            ...state,
            result: state.x - state.y
        };
    };
    if (action.type === "MULTIPLICATION") {
        return {
            ...state,
            result: state.x * state.y
        };
    };
    if (action.type === "DIVISION") {
        return {
            ...state,
            result: state.x / state.y
        };
    };

    return state;
}


const store = createStore(rootReducer);
console.log(store.getState());



store.subscribe(() => {
    console.log('[subscription]', store.getState())
});


store.dispatch({ type: 'ADDITION' });
store.dispatch({ type: 'SUBSTRACTION' });
store.dispatch({ type: 'MULTIPLICATION' });
store.dispatch({ type: 'DIVISION' });


console.log(store.getState());