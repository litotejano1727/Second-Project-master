import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Processors",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Graphic Cards",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Motherboards",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Mouse",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Keyboard",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Monitor",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Memory",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Laptops",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "SSD",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Power Supply",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "HDD",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <Link to={value.cateName}>
              <div className='box f_flex' key={index}>
                <img src={value.cateImg} alt='' />
                <span className="cateName">{value.cateName}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories
