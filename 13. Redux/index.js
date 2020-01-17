//Add redux
const redux = require('redux');
//create redux store to hold all states
const createStore = redux.createStore;

//initialize default state
const initialState = {
    counter: 0
}

/* Reducer to implement logic
    @param state: Help to update state
    @param action: will help to decide logic inside funciton 
*/
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        
        return {
            ...state, //copy state first
            counter: state.counter + 1 //udpate state
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state, //copy state first
            counter: state.counter + action.value  //udpate state
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());
// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});
// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());