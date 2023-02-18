import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./productframe.css";

function ProductFrame({ addToCart }) {
    // added curly braces to destructure addToCart from props
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(18);
    const [selectedCategory, setSelectedCategory] = useState("");
    const location = useLocation();
    const [categories, setCategories] = useState([]); // added state for categories
    useEffect(() => {
        axios
            .get("http://localhost:9000/")
            .then((res) => {
                setItems(res.data);
                const uniqueCategories = [
                    ...new Set(res.data.map((item) => item.category)),
                ]; // get unique categories from items data
                setCategories(uniqueCategories);
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");
        if (category) {
            setSelectedCategory(category);
        }
    }, [location.search]);
    const increment = () => {
        setCount(count + 1);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredItems = selectedCategory
        ? items.filter((item) => item.category === selectedCategory) // filter items by selected category
        : items; // if no category is selected, show all items
    const itemsToShow = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage); // use filtered items for pagination
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // reset current page when category is changed
    };
    return (
        <>
            <div className="categorySelect">
                <label htmlFor="category-select">Select a category: </label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">All categories</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="processors">
                {itemsToShow.map((item) => (
                    <div key={item.id} className="box">
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">
                                    -{item.discount} Off
                                </span>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="productImg"
                                />
                                <div className="product-like">
                                    <label>{item.count}</label> <br />
                                    <i
                                        className="fa-regular fa-heart"
                                        onClick={increment}
                                    ></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    <h4>₱{item.price.toLocaleString()}.00 </h4>
                                    <button onClick={() => addToCart(item)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={currentPage === number ? "active" : ""}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </>
    );
}
export default ProductFrame;
