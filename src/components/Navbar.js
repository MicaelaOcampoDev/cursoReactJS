import React from 'react'
import CartIcon from './ShoppingCart.js';



const Navbar = () => {
    return <nav className="Navbar">PACHITA CO.
      <ul>
        <li className="Style1"><a href="https://www.instagram.com/pachita.co/"> Home </a></li>
        <li className="Style1"><a href="https://www.instagram.com/pachita.co/"> Tienda </a></li>
        <li className="Style1"><a href="https://www.instagram.com/pachita.co/"> Quienes somos </a></li>
        <li className="Style1"><a href="https://www.instagram.com/pachita.co/"> Referencias</a></li>
        </ul>
        
        <CartIcon/>
    </nav>
    
}

export default Navbar;