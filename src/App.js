import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Shopcart from "./components/Shopcart";

//styles
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <ProductContextProvider>
        <CartContextProvider>
          <div className={styles.AppHeader}>
            <Navbar />
          </div>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<Shopcart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
