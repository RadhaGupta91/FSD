import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    let ingredientsAdded = Object.keys( props.ingredients )
    .map(igKey =>{
            return [...Array( props.ingredients[igKey] )].map((_,i)=>{
                return <BurgerIngredient type={igKey} key={igKey + i}/>
            })
        }
    ).reduce((arr, el) => {
        return arr.concat(el)
    });
    
    if (ingredientsAdded.length === 0) {
        ingredientsAdded = <p>Please start adding ingredients!</p>;
    }

    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsAdded}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default burger;