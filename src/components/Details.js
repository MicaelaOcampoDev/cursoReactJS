import { useEffect , useState } from "react";
import  Item from "./ItemDetailContainer";
import "./Details.css"
import {getDetail} from './ItemDetail';

function ItemDetail(){
    const [products, setProducts]= useState ([]);

    useEffect (() => {
        getDetail ()
         .then ((data) => setProducts (data))
         .catch ((error) => console.error (error));
    }, []);


    return (
        <div>
            
            {products.map ((product)=>(
               <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemDetail;