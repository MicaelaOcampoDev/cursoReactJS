// import { useEffect , useState } from "react";
// import  Item from "./ItemDetailContainer";
// import "./Details.css"
// import {getDetail} from './ItemDetail';

// function ItemDetail(){
//     const [products, setProducts]= useState ([]);

//     useEffect (() => {
//         getDetail ()
//          .then ((data) => setProducts (data))
//          .catch ((error) => console.error (error));
//     }, []);


//     return (
//         <div>
            
//             {products.map ((product)=>(
//                <Item key={product.id} product={product} />
//             ))}
//         </div>
//     );
// }

// export default ItemDetail;
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