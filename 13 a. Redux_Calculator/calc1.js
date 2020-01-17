const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    defaultValue:0
}

//Put complete logic
const rootReducer = (state= intialState,action)=>{

    if(action.type == "ADD")
    {
        return {
            ...state,
            defaultValue:state.defaultValue+action.value
        }
    }
    else if(action.type == "DEL")
    {
        return {
            ...state,
            defaultValue:state.defaultValue-action.value
        }
    }
    else if(action.type == "MUL")
    {
        return {
            ...state,
            defaultValue:state.defaultValue*action.value
        }
    }
    else if(action.type == "DIV")
    {
        return {
            ...state,
            defaultValue:state.defaultValue/action.value
        }
    }
    return state;
}

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(()=>{console.log("Subscription",store.getState());})

//dispatch
console.log("ADD 6");
store.dispatch({type:"ADD",value:6});
console.log("ADD 8 ");
store.dispatch({type:"ADD",value:8});
console.log("DEL 3");
store.dispatch({type:"DEL",value:3});
console.log("MUL 4");
store.dispatch({type:"MUL",value:4});
console.log("DIV by 6");
store.dispatch({type:"DIV",value:6});
console.log(store.getState());
