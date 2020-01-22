import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    render () {
        return (
            <div className="AddPerson">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.props.onNameChanged}
                    value={this.props.name} />
                <input 
                    type="number" 
                    placeholder="Age"
                    onChange={this.props.onAgeChanged}
                    value={this.props.age} />
                <input 
                    type="text" 
                    placeholder="City"
                    onChange={this.props.onCityChanged}
                    value={this.props.city} />
                <button onClick={() => this.props.personAdded()}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;