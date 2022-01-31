import { useEffect , useState } from "react";
import {getProducts} from './ItemList.js';
import  Item from "./ItemContainer.js";
import "./Items.css";


function ItemList(){
    const [products, setProducts]= useState ([]);

    useEffect (() => {
        getProducts ()
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

export default ItemList;