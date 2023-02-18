import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import axios from "axios";
import Details from "./components/productpage/Details";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import SignUp from "./pages/signinandlogin/SignUp";
import SignIn from "./pages/signinandlogin/SignIn";
import Product from "./Admin/pages/product/Product";

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

                <Route path="/product" element={<Product />} />
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

                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/categories/frame" element={<ProductPage />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Onlineshop;
