import React , {useContext} from "react";

//functions
import { shorten } from "../../helpers/ShortName";

//context
import {CartContext} from "../../context/CartContextProvider";

//Icons
import trashIcon from '../../asset/icons/trash.svg';

//styles
import styles from '../../styles/CartProduct.module.css';

const CartProduct = ({data}) => {

    const {dispatch} = useContext(CartContext);
    const {image , title , quantity , price} = data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="CartImage" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity > 1 ? 
                <button onClick={() => dispatch({type: "DECREASE" , payload: data})}>-</button> :
                <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}>
                    <img src={trashIcon} alt="trash"/>
                </button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default CartProduct;