import React, {Component} from "react";
import { connect } from 'react-redux';

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
class BurgerBuilder extends Component{

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


    render(){
        
        return(
            <div>
                <Burger ingredients={this.props.ingredients}></Burger>
                <Modal show={this.props.purchasing} modalClosed={this.props.onPurchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.props.ingredients}
                        price={this.props.totalPrice}
                        purchaseCancelled={this.props.onPurchaseCancelHandler}
                        purchaseContinued={this.props.onPurchaseContinueHandler} />
                </Modal>
                <BuildControls 
                itemPrice = {this.props.ingredientsPrices}
                ingredients={this.props.ingredients}
                msg = {this.props.msg}
                totalPrice ={this.props.totalPrice }
                removeItem = {this.props.onRemoveItemremoveIngredientHandler}
                addItem = {this.props.onAddItemaddIngredientHandler}
                disabled = {this.props.disable}
                ordered={this.props.onPurchaseHandler}
                purchasable={this.props.purchasable}
                >
                </BuildControls>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredientsPrices: state.ingredientsPrices,
        totalPrice : state.totalPrice,
        purchasing : state.purchasing,
        purchasable : state.purchasable,
        msg : state.msg,
        ingredients : state.ingredients,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseCancelHandler: () => dispatch({type: 'purchaseCancelHandler'}),
        onPurchaseContinueHandler: () => dispatch({type: 'purchaseContinueHandler'}),
        onPurchaseHandler: () => dispatch({type: 'purchaseHandler'}),
        onRemoveItemremoveIngredientHandler: (ingredients) => dispatch({type: 'removeItemremoveIngredientHandler',ingredients:ingredients}),
        onAddItemaddIngredientHandler: (ingredients) => dispatch({type: 'addItemaddIngredientHandler',ingredients:ingredients}),
        onUpdatePurchaseHandler: () => dispatch({type: 'updatePurchaseHandler'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);