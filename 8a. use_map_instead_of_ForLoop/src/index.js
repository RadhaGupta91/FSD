import React from 'react';
import ReactDOM from 'react-dom';

//Array of object
const item = [
      { name : "Apple",price : 30},
      { name : "Grapes",price : 20},
      { name : "Banana",price : 50}
];

//App (function) component
const App =()=>{
  return(
    <div>
      <List item = {item}></List>
    </div>
  )
}

//List (function) component use props to accses array of object
const List = (props) =>{
    //Use of map to prepare li list instead of forloop
    const listItem = props.item.map((item,index)=>{
        return (
            //add unique key to li so that react will compare dom againsts V-DOM to render all data
            <li key={index}>Fruit is {item.name} && Price is {item.price}</li>
        )
    })

    //Component will return output
    return (
      <ul>{listItem}</ul>
    )
  }
  
ReactDOM.render(<App />, document.getElementById('root'));