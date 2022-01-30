
import React from 'react';
import "./Items.css";

const Item = ({product}) => {
    return (
        <div className="imgStyle">
            <img className="imgStyle" src={product.img} alt= {product.name}/>
            <p className="paragraph" >Articulo: {product.name}  </p>
            <p> {product.description} </p>
            <p>Precio: {product.price} </p>
            <button className='buttonVermas'>Ver mas!</button>
           
        </div>
    );
};

export default Item;