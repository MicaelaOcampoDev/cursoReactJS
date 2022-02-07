import { createContext, useState } from "react";

import Item from "../components/ItemDetailContainer";


export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, qty) => {

        const newItem = { item , qty} ;
        setCart ((prevState) => [...prevState, newItem]);

    };

    console.log (CartProvider);


    const filterItems  = Item.filter((product) => product.id !==1)

    console.log(filterItems)


    const limpiarCarrito = () =>  { 
            if (CartProvider >= 1){
             limpiarCarrito (0); }
    };

    <button onclick={limpiarCarrito}>Vaciar carrito</button>

    return (
         
        <CartContext.Provider value={{cart , addItem, filterItems,limpiarCarrito,}}>

            {children}
        </CartContext.Provider>    

    );

};

export default CartProvider;