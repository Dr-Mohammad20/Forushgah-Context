import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../context/CartContextProvider';

//Icons
import shopIcon from '../asset/icons/shop.svg';

//styles
import styles from '../styles/Navbar.module.css';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <Link className={styles.productLink} to="/products">Products</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shopicon"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;