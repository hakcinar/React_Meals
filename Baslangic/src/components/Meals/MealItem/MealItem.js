import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-contex'
const MealItem = (props) => {
const cartCtx = useContext(CartContext)
const addToCartHandler = amount =>{
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount:amount,
        price: props.price
    })
}
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div><MealItemForm onAddToCart={addToCartHandler} /></div>
        </li>
    )
}

export default MealItem