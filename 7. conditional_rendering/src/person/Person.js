import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Person = (props) =>{
    return(
        <div>
            
            <ul>
                <li>{props.name} {props.age} {props.position}</li>
            </ul>
        </div>
    )
}

export default Person;