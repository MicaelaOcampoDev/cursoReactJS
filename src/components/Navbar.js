import React from 'react'
import CartIcon from './ShoppingCart.js';



const Navbar = () => {
    return <nav className="Navbar">PACHITA CO.
      <ul>
        <li className="StyleLi"><a href="./App.js"> Home </a></li>
        <li className="StyleLi"><a href="../pages/Shop.js"> Tienda </a></li>
        <li className="StyleLi"><a href="https://www.instagram.com/pachita.co/"> Quienes somos </a></li>
        <li className="StyleLi"><a href="https://www.instagram.com/pachita.co/"> Referencias</a></li>
        </ul>
        
        <CartIcon/>
    </nav>
    
}

export default Navbar;