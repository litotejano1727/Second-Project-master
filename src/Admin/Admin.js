import React from "react";
import TopBar from "./topbar/TopBar";
import "./Admin.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product.jsx/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function Admin() {
    return (
        <>
            <TopBar />
            <div className="containerAdmin">
                <Sidebar />
                <Routes className="childContainer">
                    <Route exact path="/Admin" element={<Home />}/>
                    <Route exact path="/Admin/User" element={<UserList />}/>
                    <Route exact path="/Admin/User/:userId" element={<User />}/>
                    <Route exact path="/Admin/NewUser" element={<NewUser />}/>
                    <Route exact path="/Admin/Products" element={<ProductList />}/>
                    <Route exact path="/Admin/Product/:productrId" element={<Product />}/>
                    <Route exact path="/Admin/Newproduct" element={<NewProduct />}/>
                </Routes>
            </div>
        </>
    );
}

export default Admin;
