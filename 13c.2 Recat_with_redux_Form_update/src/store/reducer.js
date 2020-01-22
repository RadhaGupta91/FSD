import * as actionTypes from './actions';

const initialState = {
    persons: [],
    name: "",
    age : '',
    city : ""
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: state.name,
                age: state.age,
                city: state.city,
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        case actionTypes.NAME_CHANGE:
            return {
                ...state,
                name: action.name
            }
        case actionTypes.AGE_CHANGE:
            return {
                ...state,
                age: action.age
            }
        case actionTypes.CITY_CHANGE:
            return {
                ...state,
                city: action.city
            }
    }
    return state;
};

export default reducer;