import React from "react";
import Counter from "../../../UI/Counter/Counter";
import classes from './Checkout.module.css';

const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div>
                <img className={classes.MealImg} 
                    src={props.meal.img}
                    alt="hamburger"
                />
            </div>
            
            <div className={classes.Desc}>
                <div>
                    <h2 className={classes.Title}>{props.meal.title}</h2>
                </div>
                <div className={classes.PriceOuter}>
                    <div>
                        <Counter meal={props.meal}/>
                    </div>
                    <div className={classes.Price}>
                        {props.meal.price * props.meal.amount}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutItem;