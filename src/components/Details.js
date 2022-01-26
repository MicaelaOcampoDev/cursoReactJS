import { useEffect , useState } from "react";
import  Item from "./ItemDetailContainer.js";
import "./Items.css";
import {getDetail} from './ItemDetail.js';

function ItemDetail(){
    const [products, setProducts]= useState ([]);

    useEffect (() => {
        getDetail ()
         .then ((data) => setProducts (data))
         .catch ((error) => console.error (error));
    }, []);


    return (
        <div>
            <h1> Detalle de producto</h1>
            {products.map ((product)=>(
               <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemDetail;