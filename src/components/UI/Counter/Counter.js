import React, { useContext } from "react";
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
//引入fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
//npm i --save @fortawesome/free-solid-svg-icons
//npm i --save @fortawesome/free-regular-svg-icons
//npm i --save @fortawesome/react-fontawesome@latest




//计数器组件
const Counter = props => {
    
    const ctx = useContext(CartContext);
    
    const addButtonHandler = () => {
        ctx.addItem(props.meal);
        
    };

    const subButtonHandler = () => {
        ctx.removeItem(props.meal);
    };
    
    return (
        <div className={classes.Counter}>

            {
                (props.meal.amount && props.meal.amount !== 0)? 
                    <>
                        <button 
                            onClick={subButtonHandler}
                            className={classes.Sub}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                    
                    
                : null
            }
            
            
            <button 
                onClick={addButtonHandler}
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;