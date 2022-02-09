import React from 'react'
import { Link } from 'react-router-dom';
import CartIcon from './ShoppingCart.js';



const Navbar = () => {
    return <nav className="Navbar">PACHITA CO.
      <ul>
        <li className="StyleLi"> <Link to="/"> Home </Link></li>
        <li className="StyleLi"><Link to="/products"> Tienda</Link> </li>
        <li className="StyleLi"> <Link to="/aboutUs"> Acerca de </Link></li>
        <li className="StyleLi"> <Link to="/cart"> Carrito</Link></li>
       
        </ul>
        
        <CartIcon/>
    </nav>
    
}

export default Navbar;