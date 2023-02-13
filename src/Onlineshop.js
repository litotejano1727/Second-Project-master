import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import axios from "axios";
import Details from "./components/productpage/Details";
import { Breadcrumb } from "react-bootstrap";
import "./App.css";
import ProductList from "./Product";
import SignIn from "./signinandlogin/Signin";
import SignUp from "./signinandlogin/Signup";


function Onlineshop() {
    // API testing from here
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:9000")
            .then((response) => {
                setApiResponse(response.apiResponse);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    // to here

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
        <>
            <Header CartItem={CartItem} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Pages
                            productItems={productItems}
                            addToCart={addToCart}
                            shopItems={shopItems}
                        />
                    }
                />

                <Route path="/details" element={<Details />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            CartItem={CartItem}
                            addToCart={addToCart}
                            decreaseQty={decreaseQty}
                        />
                    }
                />
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/productlist" element={<ProductList />} />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />

            </Routes>
            <Footer />
        </>
    );
}

export default Onlineshop;
