import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
            <Routes>
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
