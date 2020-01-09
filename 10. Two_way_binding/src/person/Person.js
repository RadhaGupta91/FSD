import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Person = ( props ) =>{
    return(
        <div>
            <p onClick ={props.click}>{props.click}I'm {props.name} and I am {props.age} year old.</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} type="text"></input>
        </div>
    )
}

export default Person;