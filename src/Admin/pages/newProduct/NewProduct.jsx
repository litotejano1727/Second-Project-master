import "./newProduct.css"
import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

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
      .then((res) => {
        console.log(res.data);
        setShowSuccessModal(true);
      })
      .catch((err) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };
  return (
    <div className="newProduct">
      {showSuccessModal && (
        <div className="modal">
          <p>Product added successfully!</p>
          <button onClick={() => setShowSuccessModal(false)}>
            Close
          </button>
        </div>
      )}
      {showErrorModal && (
        <div className="modal">
          <p>Error adding product</p>
          <button onClick={() => setShowErrorModal(false)}>Close</button>
        </div>)}

    <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm" onSubmit={handleSubmit}>
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
            <button className="addProductButton" type="submit" >Create</button>
        </form>
    </div>
    </div>
  )
}

export default NewProduct