import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Employee component using props to populate data
const Employee = (props)=>{
    return(
        <ul>
            <li>{props.name}</li> 
            <li>{props.age}</li> 
            <li>{props.position}</li> 
        </ul>
    )
}

//input validation
Employee.prototype = {
    name : PropTypes.string,
    age : PropTypes.number,
    position : PropTypes.string
}

//show default value
Employee.defaultProps = {
    position : 'employee1'
}

//App is function component which will call Employee(function) component 
const App = () =>{
    return(
        <Employee name="aman" age="12" position="SE"></Employee>
        // put name = 23 and run it and check console it will show error
        <Employee name="aman" age="12"></Employee>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));


