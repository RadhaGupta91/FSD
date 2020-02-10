import React, {Component} from "react";
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
]
export default class BuildControls extends Component{
    render(){
        return(
            <div className = {classes.BuildControls}>
            <div><h2>!!!We welcome you!!!</h2><h3>{this.props.msg}</h3></div>
                Total price : {this.props.totalPrice}
            {controls.map(item=>
                <BuildControl 
                label = {item['label']}
                type = {item['label']}
                itemPrice = {this.props.itemPrice[item['type']]}
                totalSlices = {this.props.ingredients[item['type']]}
                removed = {()=>this.props.removeItem(item['type'])}
                added = {()=>this.props.addItem(item['type'])}
                ></BuildControl>)}
            <button 
                className={classes.OrderButton}
                disabled={!this.props.purchasable}
                onClick={this.props.ordered}>ORDER NOW</button>
            </div>
        )
    }
}