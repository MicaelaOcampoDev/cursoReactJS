import Count from "./ItemCount.js"
import React from 'react';
import "./Items.css";

const Item = ({product}) => {
    return (
        <div className="imgStyle">
            <img className="imgStyle" src={product.img} alt= {product.name}/>
            <p className="paragraph" > {product.name}  </p>
            
            <Count/>



           
        </div>
    );
};

export default Item;