
import React from 'react';
import "./Items.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="imgStyle">
            <img className="imgStyle" src={product.img} alt= {product.name}/>
            <p className="paragraph" > {product.name}  </p>
            <button underline="none"><Link to={`/item/${product.id}`} > Mas info </Link></button>
            
            



           
        </div>
    );
};

export default Item;

