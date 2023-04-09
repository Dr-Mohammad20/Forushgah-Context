import React, { useContext } from "react";

//context
import { ProductsContext } from "../context/ProductContextProvider";

//component
import Product from "./Shared/Product";

//styles
import styles from '../styles/Store.module.css';

const Store = () => {
  const Products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {Products.map((item) => (<Product key={item.id} ProductData={item} />))}
    </div>
  );
};

export default Store;
