import "./newProduct.css"
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
        axios
          .post("http://localhost:9000/addproducts", {
            name: name,
            price: price,
            category: category,
            image: image,
            description: description
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      };

    
  return (
    <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
            <div className="addProductItem">
                <label for="file">Name</label>
                <input
          type="text"
          id="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
            </div>
            <div className="addProductItem">
                <label>Price</label>
                <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
            </div>
            <div className="addProductItem">
                <label>Category</label>
                <input
          type="text"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
            </div>
            <div className="addProductItem">
                <label>Image</label>
                <input
          type="text"
          id="Image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        /></div>
        <div className="addProductItem">
                <label>Description</label>
                <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        /></div>
            <button className="addProductButton">Create</button>
        </form>
    </div>
  )
}

export default NewProduct