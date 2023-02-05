import React from "react";
import "../productpage/Breadcrumb.css";

const Breadcrumb = () => {
    return (
        <nav className="nav-links">
            <a href="#!">Home</a> {">"} <a href="#!">Laptop</a>
        </nav>
    );
};

export default Breadcrumb;
