import React, { useState } from "react";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Auth from "./Auth";
import Admin from "./Admin/Admin";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const { productItems } = Data;
    const { shopItems } = Sdata;
    const [CartItem, setCartItem] = useState([]);
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id);
        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id
                        ? { ...productExit, qty: productExit.qty + 1 }
                        : item
                )
            );
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
    };
    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id);
        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id));
        } else {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id
                        ? { ...productExit, qty: productExit.qty - 1 }
                        : item
                )
            );
        }
    };

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Header CartItem={CartItem} />}
                />
                <Route
                    exact
                    path="/"
                    element={
                        <Pages
                            productItems={productItems}
                            addToCart={addToCart}
                            shopItems={shopItems}
                        />
                    }
                />
                <Route
                    path="/cart"
                    exact
                    element={
                        <Cart
                            CartItem={CartItem}
                            addToCart={addToCart}
                            decreaseQty={decreaseQty}
                        />
                    }
                />
                <Route path="/login" element={<Auth />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/" exact element={<Footer />} />
            </Routes>
        </Router>
    );
}

export default App;
