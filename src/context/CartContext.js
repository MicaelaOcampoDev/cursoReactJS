// import { createContext, useState } from "react";

// import Item from "../components/ItemDetailContainer";


// export const CartContext = createContext([]);

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState ([]);

//     const addItem = (item, qty) => {

//         const newItem = { item , qty} ;
//         setCart ((prevState) => [...prevState, newItem]);

//     };

//     console.log (CartProvider);


//     const filterItems  = Item.filter((product) => product.id !==1)

//     console.log(filterItems)


//     const limpiarCarrito = () =>  { 
//             if (CartProvider >= 1){
//              limpiarCarrito (0); }
//     };

//     <button onclick={limpiarCarrito}>Vaciar carrito</button>

//     return (
         
//         <CartContext.Provider value={{cart , addItem, filterItems,limpiarCarrito,}}>

//             {children}
//         </CartContext.Provider>    

//     );

// };

// export default CartProvider;
import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    console.log("Se agregó al carrito:", newItem);
    setCart((prevState) => [...prevState, newItem]);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const clearAll = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);