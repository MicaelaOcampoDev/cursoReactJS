// import React from 'react';



// export default function Item ({product})  {
//     return (
//         <div>
            
//             <img className="imgDetail" src={product.img} alt= {product.name}/>
//             <p>{product.name} para todo tipo de cabello! </p>
//             <p> {product.description} </p>
//             <p>Precio: {product.price} "Stock: 389 unidades"</p>
//             <button className='buttonVermas'>Ver mas!</button>

            
//         </div>
//     );
// };
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount";
const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    addItem(product, counter);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <ItemCount counter={counter} setCounter={setCounter} />
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;

