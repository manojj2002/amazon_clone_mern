import React, { useEffect } from 'react'
import Banner from './banner'
import './home.css'
import Slide from './slide'
import './slide.css'
import { getProducts } from '../redux/actions/action'
import {useDispatch,useSelector} from "react-redux";
const Maincomp = () => {

    const {products} = useSelector(state => state.getproductsdata);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner />
        </div>
        <div className='slide_part'>
        <div className='left_slide'>
            <Slide title='deal of the day' products={products}/>
        </div>
        <div className='right_slide'>
            <h4>Latest launches</h4>
            <img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0e468346-2d86-4cd1-99a0-a8a17866c1fb.jpg' alt=''/>
            <a href='#'>see more</a>
        </div>
        </div>
        <Slide title='Today deals' products={products}/>
        <div className='center_img'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/PDNCEMI/iQOOZ9Lite/D142665625_WLD-New-launch_iQOO-Z9-Lite-5G_Prime-DayPC_Hero_3000x1200_3._CB568879519_.jpg'  alt=''/>
        </div>
        <Slide title='Upto 80% off' products={products}/>
        <Slide title='Best Seller' products={products}/>
    </div>
  )
}

export default Maincomp