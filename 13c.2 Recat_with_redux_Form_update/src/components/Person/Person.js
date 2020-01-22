import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>City: {props.city}</p>
        <p>Age: {props.age}</p>
        <p><h6>Click anywhere in to delete this box</h6></p>
    </div>
);

export default person;