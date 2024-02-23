import React from 'react'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'
import "./buynow.css";

const buynow = () => {
    return (
        <div className='buynow_section'>
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select All Item</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />
                    <div className="item_container">
                        <img src="https://m.media-amazon.com/images/I/916acEhBkcL._AC_AA300_.jpg" alt="" />
                        <div className="item_details">
                            <h3>Apple Wtach 5 Smartwatch (Black Strap, Freesize)</h3>
                            <h3>Smart Watches</h3>
                            <h3 className="diffrentprice"> ₹10,521</h3>
                            <p className='unusuall'>Usually dispatched in 8 days</p>
                            <p>Eligible for Free Shipping</p>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                            <Option />
                        </div>
                        <h3 className="item_price">₹10,521</h3>
                    </div>
                    <Divider />
                    <Subtotal />
                </div>
                <Right />
            </div>
        </div>
    )
}

export default buynow
