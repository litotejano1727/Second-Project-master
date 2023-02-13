import "./newProduct.css";
import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !category || !image || !description) {
      return alert("All fields are required.");
    }

    axios
      .post("http://localhost:9000/addproducts", {
        name,
        price,
        category,
        image,
        description,
      })
      .then((res) => {
        console.log(res.data);
        alert("Product successfully added!");
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
        setDescription("");
    })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
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
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
