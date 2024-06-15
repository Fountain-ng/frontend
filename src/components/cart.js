import React from "react";
import { Link } from "react-router-dom";
import GreenNavbar from "./Navbar-Green";
import "../styles/cart.modules.css";


const Cart = () => {
return (
    <>
    <GreenNavbar />
        <section className="cart-real">
            <div
            className="cart-real__container"
            >
                <h1 className="cart-header">CART</h1>
                <p className="cart-description">Your cart is empty</p>
                <Link to="/carabao" className="cart-link">Continue Shopping</Link>
            </div>
        </section>
    </>
);
};


export default Cart;