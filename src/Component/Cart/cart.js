import { Divider } from '@mui/material';
import React from 'react'
import "./cart.css";


const cart = () => {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className="cart_btn2">Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Fitness Gear</h3>
                    <h4>MUNDET WALA Skipping Rope for Men and Women Jumping Rope With Adjustable Height Speed Skipping Rope for Exercise, Gym, Sports Fitness Adjustable Jump Rope (Pencil Skipping Rope)</h4>
                    <Divider />
                    <p className="mrp">M.R.P : ₹1195</p>
                    <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹625.00</span></p>
                    <p>You Save : <span style={{ color: "#B12704" }}>₹570 (47%)</span></p>
                    <div className="discount_box">
                        <h5>Discount:<span style={{ color: "#111" }}>Extra 10% off</span></h5>
                        <h4>FREE DELIVERY :  <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span>Details</h4>
                        <p>Fastest Delivery : <span style={{ color: "#111", fontWeight: 600 }}> Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About The Item <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: 0.4 }}>The rope itself is commonly made of PVC (polyvinyl chloride). PVC ropes are often used for speed and agility training.
                        Adjustable Length: Easily customize the length of the rope to suit your height, ensuring a perfect fit for every user. Ideal for individuals of all ages and fitness levels.

                        The ergonomic handles provide a comfortable and secure grip during your workout sessions. Say goodbye to hand fatigue and hello to a more enjoyable skipping experience.</span></p>




                </div>
            </div>
        </div>
    )
}

export default cart
