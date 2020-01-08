import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Person = (props) =>{
    let componentList = props.item.map((data,index)=><li key ={data.name}>{data.name} {data.age} {data.position}</li>);
    return(
        <div>
            
            <ul>
                <ll>**Name**|**Age**|** Position**|</ll>
                {componentList}
            </ul>
        </div>
    )
}

export default Person;