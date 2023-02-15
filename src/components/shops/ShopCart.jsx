import React, { useState, useEffect } from "react";
import axios from "axios";

const ShopCart = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:9000/laptop")
      .then(res => {
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="box">
          <div className="product mtop">
            <div className="img">
              <span className="discount">{item.discount}% Off</span>
              <img src={item.image} alt={item.name} className="laptop" />
              <div className="product-like">
                <label>{count}</label> <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
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
    </>
  );
};

export default ShopCart;
