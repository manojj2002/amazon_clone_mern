import React from 'react'
import './newnav.css'
const newnav = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
                <p>All</p>
                <p>Mobiles</p>
                <p>Bestseller</p>
                <p>fashion</p>
                <p>customer services</p>
                <p>electronics</p>
                <p>prime</p>
                <p>Today's deals</p>
                <p>Amazon Pay</p>
            </div>
            <div className='right_data'>
                <img src='./nav.png' height='50px' alt='navata'/>
            </div>
        </div>
    </div>
  )
}

export default newnav
