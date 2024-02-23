import React from 'react'
import './NewNavBar.css';

const NewNavBar = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p>All</p>
                    <p>Mobile</p>
                    <p>Bestseller</p>
                    <p>Sell</p>
                    <p>Today's Deals</p>
                    <p>Customer Services</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Amazon Pay</p>
                    <p>Fashion</p>
                </div>
                <div className="right_data">
                    <img src='./nav.jpg' alt="nav_data"></img>
                </div>

            </div>

        </div>
    )
}

export default NewNavBar
