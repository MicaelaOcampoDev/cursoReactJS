import React, { useState } from "react";
import ItemList from '../components/Items';



const CartShopping = ()  => {



    
    const [isProductInCart, setIsProductInCart] = useState (false);


    const handleAddToCart = ()  =>  {
        setIsProductInCart (true);
    };


    return (
        <div>
            {!isProductInCart ? (
                <button onClick= {handleAddToCart}>Añadir al carrito</button>
            ) : (
                <button>Ir al carrito</button>
                
            )}

            
            <p>Detalle de compra:</p>
            <ItemList/>
            <p>Total de la compra : $ 1000</p>
            <button>Terminar compra</button>
        </div>
        
    );
};

export default CartShopping;