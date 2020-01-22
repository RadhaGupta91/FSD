import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} 
                    onNameChanged = {this.props.onNameChange} 
                    onAgeChanged = {this.props.onAgeChange} 
                    onCityChanged = {this.props.onCityChange} 
                />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        city={person.city} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id}),
        onNameChange: (event) => dispatch({type: actionTypes.NAME_CHANGE, name: event.target.value}),
        onAgeChange: (event) => dispatch({type: actionTypes.AGE_CHANGE, age: event.target.value}),
        onCityChange: (event) => dispatch({type: actionTypes.CITY_CHANGE, city: event.target.value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);