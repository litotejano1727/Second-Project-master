import React, { useState, useEffect, useRef } from "react";
import "../product/product.css";
import axios from "axios";


const Product = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [width, setWidth] = useState(0);
    const [start, setStart] = useState(0);
    const [change, setChange] = useState(9);
    const [product, setProduct] = useState("");   
    const [infoTitle, setInfoTitle] = useState("");

    useEffect(() => {
        axios.get("http://localhost:9000/")
          .then(response => {
            setProduct(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [product]);

useEffect(() => {
    if (product && product.description && product.description.length > 0) {
        setInfoTitle(product.description[0].title);
    }
}, [product]);

    const slideRef = useRef();

    useEffect(() => {
        if (!slideRef.current) return;
        const scrollWidth = slideRef.current.scrollWidth;
        const childrenElementCount = slideRef.current.childElementCount;
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
    }, []);


    function plusSlides(n) {
        setSlideIndex((prev) => prev + n);
        slideShow(slideIndex + n);
    }
    function slideShow(n) {
        if (n > product.image.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(product.image.length);
        }
    }
    function dragStart(e) {
        setStart(e.clientX);
    }
    function dragOver(e) {
        let touch = e.clientX;
        setChange(start - touch);
    }
    function dragEnd(e) {
        if (change > 0) {
            slideRef.current.scrollLeft += width;
        } else {
            slideRef.current.scrollLeft -= width;
        }
    }
    useEffect(
        () => {
            if (!slideRef.current || !width) return;
            let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
            slideRef.current.scrollLeft =
                slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
        },
        [width],
        slideIndex
    );

    return (
        <React.Fragment>
            <section className="prod-details">
                <div className="prod-page-img">
                    <div className="big-images">
                    {product.image && product.image.map((image, index) => (
    <div
        key={index}
        className="mySlides"
        style={{
            display:
                index + 1 === slideIndex
                    ? "block"
                    : "none",
        }}
    >
        <div className="numbertext">
            {index + 1} / {product.image.length}
        </div>
        <img src={image.src} alt="" />
    </div>
))}

                        <a
                            href="#!"
                            className="prev"
                            onClick={() => plusSlides(-1)}
                        >
                            &#10094;
                        </a>
                        <a
                            href="#!"
                            className="next"
                            onClick={() => plusSlides(1)}
                        >
                            &#10095;
                        </a>
                    </div>

                    <div
                        className="slider-img"
                        draggable={true}
                        ref={slideRef}
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        onDragEnd={dragEnd}
                    >
                        {product.image.map((image, index) => (
                            <div
                                key={index}
                                className={`slider-box ${
                                    index + 1 === slideIndex ? "active" : ""
                                }`}
                                onClick={() => setSlideIndex(index + 1)}
                            >
                                <img src={image.src} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="prod-page-details">
                    <strong>{product.name}</strong>
                    <p className="prod-category">
                         {product.category}
                    </p>
                    <p className="prod-price">
                        $
                        {Math.round(
                            product.price -
                                (product.price * product.discount) / 100
                        )}{" "}
                        <del>${product.price}</del>
                    </p>
                    <p className="small-desc">{product.desc}</p>
                   
                        
                    <div className="prod-page-offer">
                        <i className="fa-solid fa-tag" /> {product.discount} %
                        Discount
                    </div>
                    <div className="prod-sold">
                        {/* <img src={SoldIcon} alt="SoldIcon" /> */}
                        <strong>
                            {product.stocks} <span> Products Sold</span>
                        </strong>
                    </div>
                    <div className="cart-btns">
                        <a href="#!" className="add-cart">
                            Add to Cart
                        </a>
                        <a href="#!" className="add-cart buy-now">
                            Buy Now
                        </a>
                    </div>
                </div>
            </section>
            <section className="prod-all-info">
                <ul className="prod-info-menu">
                    {product.description.map((info) => (
                        <li
                            key={info.title}
                            onClick={() => setInfoTitle(info.title)}
                            className={`p-info-list ${
                                info.title === infoTitle ? "active" : ""
                            }`}
                        >
                            {info.title}
                        </li>
                    ))}
                </ul>
                {product.description.map((info) => (
                    <div
                        key={info.title}
                        className={`info-container ${
                            info.title === infoTitle ? "active" : ""
                        }`}
                    >
                        {info.content}
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
};

export default Product;
