import React from 'react';
import ReactDOM from 'react-dom';

const item = ["appples","mango","Grapes","Banana"];
const listItem = [];

//Loop on item
for(let i=0;i<item.length;i++)
{
  //add unique key to li so that react will compare dom againsts V-DOM to render all data
  listItem.push(<li key ={i}>{item[i]}</li>)
}

//App(function) component
const App =()=>{
  return(
    <div>
      <List item = {listItem}></List>
    </div>
  )
}

//List(function) component
const List = (props) =>{
  return (
    <ul>{props.item}</ul>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));