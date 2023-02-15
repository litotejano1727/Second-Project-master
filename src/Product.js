import React, { useState, useEffect } from "react";
import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get("/products");
        return response.data.products;
    } catch (error) {
        console.error(error);
    }
};

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
