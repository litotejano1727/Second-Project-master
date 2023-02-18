import React, { useState, useEffect, useRef } from "react";
import "../productpage/Details.css";
import SoldIcon from "../productpage/images/sold.png";
import axios from "axios";

const Details = (props) => {
    const [productItems, setProductItems] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);
    const [width, setWidth] = useState(0);
    const [start, setStart] = useState(0);
    const [change, setChange] = useState(9);

    const [selectedColor, setSelectedColor] = useState("");
    const [infoTitle, setInfoTitle] = useState("");

    const slideRef = useRef();
    const id = props.match && props.match.params ? props.match.params.id : null;

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:9000/details/${id}`)
                .then((response) => {
                    setProductItems(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    const product = productItems[0] || {};

    useEffect(() => {
        if (!slideRef.current) return;
        const scrollWidth = slideRef.current.scrollWidth;
        const childrenElementCount = slideRef.current.childElementCount;
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
    }, [slideIndex]);

    useEffect(() => {
        if (!slideRef.current || !width) return;
        let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
        slideRef.current.scrollLeft =
            slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
    }, [width, slideIndex]);

    function plusSlides(n) {
        setSlideIndex((prev) => prev + n);
        slideShow(slideIndex + n);
    }

    function slideShow(n) {
        if (n > product.image?.length) {
            setSlideIndex(1);
        } else if (n < 1) {
            setSlideIndex(product.image?.length);
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
        if (Math.abs(change) > 0) {
            if (change > 0) {
                slideRef.current.scrollLeft += width;
            } else {
                slideRef.current.scrollLeft -= width;
            }
        }
    }

    return (
        <React.Fragment>
            <section className="prod-details">
                <div className="prod-page-img">
                    <div className="big-images">
                        {product.image?.map((image, index) => (
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
                                <img src={image} alt={`Product ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="small-images" ref={slideRef}>
                        {product.image?.map((image, index) => (
                            <div key={index} className="thumb">
                                <img
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    onClick={() => setSlideIndex(index + 1)}
                                    onTouchEnd={() => setSlideIndex(index + 1)}
                                />
                            </div>
                        ))}
                    </div>
                    {product.sold && (
                        <div className="sold-out">
                            <img src={SoldIcon} alt="Sold Out" />
                        </div>
                    )}
                </div>
                <div className="prod-page-info">
                    <h1>{product.name}</h1>
                    {/* <div className="prod-page-colors">
                        <p>Available colors:</p> */}
                    {/* {product.colors?.map((color, index) => (
                            <span
                                key={index}
                                className={
                                    selectedColor === color ? "selected" : ""
                                }
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            ></span>
                        ))} */}
                </div>
                <div className="prod-page-price">
                    <h2>${product.price}</h2>
                    {/* {product.salePrice && <span>${product.salePrice}</span>} */}
                </div>
                <p>{infoTitle}</p>
                <div className="prod-page-info-text">{product.description}</div>
                <div
                    className="prod-page-info-text"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                    {product.description}
                </div>
                {/* </div> */}
            </section>
        </React.Fragment>
    );
};

export default Details;
