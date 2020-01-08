import React from 'react';
import ReactDOM from 'react-dom';

//List(function) component
const List = props =>{
  let listItem = props.items.map((item,index)=>{
  return <li key={index}>{item.name}   | {item.price}</li>
  })
  return(
    <div>
      <strong>List</strong>
      <ul><li><strong>Product</strong> | <strong>Price</strong></li>{listItem}</ul>
      
    </div>
  )
}

//Employee(function) component
const Employee = (props)=>{
  return(
    <div>
      <p><strong>Employee Details</strong></p>
        <strong>Name</strong>: {props.name}  <strong>Age</strong>: {props.age}  <strong>Position</strong>: {props.position}
    </div>
  )
}

//GroceryList(function) component
const GroceryList = (props)=>{
  return(
    <div>
      <ul>
        <ll><strong>GroceryList</strong></ll>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  )
}

//App(function) component
const App = props => {
  const items = [
    { name: 'Bread', price: 2.35 },
    { name: 'Milk', price: 2.0 },
    { name: 'Eggs', price: 3.15 },
    { name: 'Tea', price: 4.0 }
  ];
  return (
    <div>
      <List items={items} />
      <Employee name="Aman" age={21} position="Dev" />
      <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />
    </div>
  );
};

ReactDOM. render(<App/>,document.getElementById("root"));