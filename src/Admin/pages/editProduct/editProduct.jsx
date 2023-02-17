import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./editProduct.css";

const API_URL = "http://localhost:9000/";

const EditProduct = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [description, setDescription] = useState("");
  const [stocks, setStocks] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setCategory(res.data.category);
        setImage(res.data.image);
        setImage2(res.data.image2);
        setImage3(res.data.image3);
        setDescription(res.data.description);
        setStocks(res.data.stocks);
        setDiscount(res.data.discount);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !price ||
      !category ||
      !image ||
      !image2 ||
      !image3 ||
      !description ||
      !stocks ||
      !discount
    ) {
      return alert("All fields are required.");
    }
  
    axios
      .put(`${API_URL}/admin/product/${id}/`, {
        name,
        price,
        category,
        image,
        image2,
        image3,
        description,
        stocks,
        discount,
      })
      .then((res) => {
        console.log(res.data);
        alert("Product successfully edited!");
      })
      .catch((err) => {
        setError(err);
        console.error(err);
        alert("Something went wrong. Please try again later.");
      });
  };
  
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="addProduct">
      <h1 className="addProductTitle">Edit Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            key="id"
            value={id}
            disabled
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder={name}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="Price">Price</label>
          <input
            type="number"
            id="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            id="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="Image">Image</label>
          <input
            type="text"
            id="Image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="Image2">Image</label>
            <input
            type="text"
            id="Image2"
            value={image2}
            onChange={(event) => setImage2(event.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label htmlFor="Image3">Image</label>
            <input
            type="text"
            id="Image3"
            value={image3}
            onChange={(event) => setImage3(event.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label htmlFor="Description">Description</label>
            <textarea
            id="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label htmlFor="stocks">Stocks</label>
            <textarea
            id="Stocks"
            value={stocks}
            onChange={(event) => setStocks(event.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label htmlFor="Discount">Discount</label>
            <textarea
            id="Discount"
            value={discount}
            onChange={(event) => setDiscount(event.target.value)}
            />
            </div>
            <button type="submit">Save Changes</button>
            </form>
            </div>
            );
            };
            
            export default EditProduct;
