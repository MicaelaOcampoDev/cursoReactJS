import { useEffect , useState } from "react";
import  Item from "../Shop/ItemDetailContainer";
import "../Shop/Details.css"
import {getDetail} from '../Shop/ItemDetail';

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