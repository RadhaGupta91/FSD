const initialState = {
    ingredients:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    ingredientsPrices :{
        salad: 10,
        bacon: 20,
        cheese: 30,
        meat: 30
    }, 
    totalPrice : 0,
    purchasing : false,
    purchasable : false,
    msg : 'Prepare your Burger',
    
}

const INGREDIENT_PRICES  = {
    salad: 10,
    bacon: 20,
    cheese: 30,
    meat: 30
}

const reducer = (state=initialState, action) => {
    
      function updatePurchaseHandler(ingredients){
        const sum = Object.keys( ingredients )
                .map( igKey => {
                    return ingredients[igKey];
                } )
                .reduce( ( sum, el ) => {
                    return sum + el;
                }, 0 );
            return {
                purchasable: sum > 0 
            }
        }
    if(action.type == 'purchaseCancelHandler')
    {
        alert('Thanks for visiting us!');
        return {
            purchasing:false,
            ingredientsPrices:state.ingredientsPrices,
            ingredients:state.ingredients,
            totalPrice : state.totalPrice,
            purchasable : state.purchasable,
            msg : state.msg,
        }
        
    }
    if(action.type == 'purchaseContinueHandler')
    {
        alert('You may continue with your shopping or check your cart');
        return {
            purchasing:false,
            ingredientsPrices:state.ingredientsPrices,
            ingredients:state.ingredients,
            totalPrice : state.totalPrice,
            purchasable : state.purchasable,
            msg : state.msg,
        }
    }
    if(action.type == 'purchaseHandler')
    {
        return {
            purchasing:true,
            ingredientsPrices:state.ingredientsPrices,
            ingredients:state.ingredients,
            totalPrice : state.totalPrice,
            purchasable : state.purchasable,
            msg : state.msg,
        }
    }
    if(action.type == 'removeItemremoveIngredientHandler')
    {
        var type = action.ingredients;
        const oldCount=  state.ingredients[type];
        //debugger;   
        if ( oldCount <= 0 ) {
            return{
                purchasing:state.purchasing,
                ingredientsPrices:state.ingredientsPrices,
                ingredients:state.ingredients,
                totalPrice : state.totalPrice,
                purchasable : state.purchasable,
                msg : state.msg,
            }
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const itemPrice  = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice - itemPrice;
        
        return {
            ingredientsPrices:state.ingredientsPrices,
            ingredients:updatedIngredients,
            totalPrice:newPrice,
            msg: "You may add any ingredients...",
            purchasable:updatePurchaseHandler(updatedIngredients)
        }
    }
    if(action.type == 'addItemaddIngredientHandler')
    {
        var type = action.ingredients;
        const oldCount=  state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const itemPrice  = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + itemPrice;
        
        return {
            ingredientsPrices:state.ingredientsPrices,
            totalPrice : newPrice,
            ingredients : updatedIngredients,
            msg: "You may remove any ingredients...",
            purchasable:updatePurchaseHandler(updatedIngredients) 
        }
    }

    return state;
};

export default reducer;