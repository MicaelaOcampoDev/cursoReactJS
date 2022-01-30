import React from 'react';
import Count from "../../components/ItemCount.js"
export default function Item ({product})  {
    return (
        <div>
            
            <img className="imgDetail" src={product.img} alt= {product.name}/>
            <p>{product.name} para todo tipo de cabello! </p>
            <p> {product.description} </p>
            <p>Precio: {product.price} "Stock: 389 unidades"</p>
            <Count/>

            
        </div>
    );
};

