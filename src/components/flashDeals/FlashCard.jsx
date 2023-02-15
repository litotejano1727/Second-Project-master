import React, { useState, useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%", padding:"1px 6px 0 0"}}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black", borderRadius: "50%", padding:"1px 6px 0 0"}}
      onClick={onClick}
    />
  );
}

const FlashCard = ({ addToCart }) => {
  const [count, setCount] = useState(0)
  const [productItems, setProductItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9000")
      .then(response => {
        setProductItems(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const increment = () => {
    setCount(count + 1)
  }

  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

    }
    
    
    return (
      <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img className="flash-product" src={productItems.image} alt='' />
                  <div className='product-like'>
                    <label>{count}</label>
                    <i className='fa fa-heart' onClick={increment} />
              </div>
            </div>
            <div className='text'>
              <p className='title'>{productItems.name}</p>
              <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
              <p className='price'>
                <h4>
                  <span className='price-original'>
                  ₱{productItems.priceOriginal}
                  </span>
                 {productItems.price.toLocaleString()}.00  
                </h4>
                <button onClick={() => addToCart(productItems)}>
                  <i className='fa fa-plus'></i>
                </button>
              </p>
            </div>
            <div className='add-to-cart'>
            </div>
          </div>
        </div>
      )
    })}
  </Slider>
</>
    )
  }
  
  export default FlashCard