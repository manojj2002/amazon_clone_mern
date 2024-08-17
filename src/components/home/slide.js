import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slide.css";
import { NavLink } from 'react-router-dom';
//const products = require('./productdata');
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};
const slide = ({title,products}) => {
  return (
    <div className='product_section'>
        <div className='product_deal'>
        <h3>{title}</h3>
        <button className='view_btn'>View all</button>
        </div>
        <Divider />
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        >
            {
                products.map((e)=>{
                    return(
                        <NavLink to={`/getproductsone/${e.id}`}>
                        <div className='product_item'>
                            <div className='product_img'>
                                <img src={e.url} alt='product_item'/>
                            </div>
                            <div className='product_details'>
                            <p className='product_name'>{e.title.shortTitle}</p>
                            <p className='product_offer'>{e.discount}</p>
                            <p className='product_explore'>{e.tagline}</p>
                            </div>
                        </div>
                        </NavLink>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default slide
