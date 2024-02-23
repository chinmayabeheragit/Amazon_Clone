import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <header>
            <nav>


                {/* //left navigation */}
                <div className="left">

                    <IconButton
                        className='hamburgur'
                    >
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <div className="navlogo">
                        <NavLink to="/"><img src="\amazon_PNG25.png" alt="" /></NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name="" id="" placeholder='Search Your Amazon Item Here' />
                        <div className="search_icon" >
                            <SearchIcon id="search" />
                        </div>
                    </div>

                </div>

                {/* //right navigation */}
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">sign in</NavLink>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartCheckoutIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className="avatar" />

                </div>

            </nav>
        </header>
    )
}

export default Navbar
