import React from 'react';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/product">product detail</Link></div>
            <div><Link to="/carrito">shopping cart</Link></div>
        </div>
    );
};

export default NavBar;