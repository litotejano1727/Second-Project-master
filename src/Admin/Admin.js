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
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import EditProduct from "./pages/editProduct/editProduct";
import { Edit } from "@mui/icons-material";

function Admin() {
    return (
        <>
            <TopBar />
            <div className="containerAdmin">
                <Sidebar />
                <Routes className="childContainer">
                    <Route path="/" element={<Home />} />
                    <Route path="/User" element={<UserList />} />
                    <Route path="/User/:userId" element={<User />} />
                    <Route path="/NewUser" element={<NewUser />} />
                    <Route path="/Products" element={<ProductList />} />
                    <Route path="/Product/:id" element={<EditProduct />} />
                    <Route path="/Newproduct" element={<NewProduct />} />
                    <Route
                        path="/admin/product/:id"
                        element={<EditProduct />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default Admin;
