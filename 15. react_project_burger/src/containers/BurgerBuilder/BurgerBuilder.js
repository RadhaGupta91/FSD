import React, {Component} from "react";

import Aux from '../../hoc/Aux1/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES  = {
    salad: 10,
    bacon: 20,
    cheese: 30,
    meat: 30
}
export default class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },  
        totalPrice : 0,
        purchasing : false,
        purchasable : false,
        msg : 'Prepare your Burger'
    }
    
    updatePurchaseHandler = (ingredients) =>{
        const sum = Object.keys (ingredients)
                    .map( igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum,el)=>
                    {
                        return sum = sum+el
                    }
                    );
        this.setState({
            purchasable:sum>0,
            
        })
    }
    addItemaddIngredientHandler =( type) => {
        const oldCount=  this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const itemPrice  = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + itemPrice;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients,
            msg: "You may remove any ingredients..." 
        });
        this.updatePurchaseHandler(updatedIngredients);
    }

    removeItemremoveIngredientHandler = (type) =>{
        const oldCount=  this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const itemPrice  = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - itemPrice;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice,
            msg: "You may add any ingredients..."
        });
        this.updatePurchaseHandler(updatedIngredients);
    }

    purchaseHandler = () =>{
        this.setState({
            purchasing:true, 
        })
    }
    purchaseCancelHandler =() =>{
        this.setState({
            purchasing:false, 
        })
        alert('Thanks for visiting us!');
    }
    purchaseContinueHandler =() =>{
        this.setState({
            purchasing:false, 
        })
        alert('You may continue with your shopping or check your cart');
    }

    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <BuildControls 
                itemPrice = {INGREDIENT_PRICES}
                ingredients={this.state.ingredients}
                msg = {this.state.msg}
                totalPrice ={this.state.totalPrice }
                removeItem = {this.removeItemremoveIngredientHandler}
                addItem = {this.addItemaddIngredientHandler}
                disabled = {this.state.disable}
                ordered={this.purchaseHandler}
                purchasable={this.state.purchasable}
                >
                </BuildControls>
            </div>
        )
    }
}