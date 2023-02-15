import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/latest')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className='content grid product'>
        {products.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.image} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>₱{val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart;
