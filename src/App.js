import "./components/Navbar.css";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/Products";

import CartPage from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
     
     



function App() {
  return (
    <CartProvider>  
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/"/>
        <Route index element={<Home/> }/>
        <Route path="/aboutUs" element={<AboutUs/> }/>
        <Route path="/products">
           <Route index element={<ProductsPage/> }/>
           
        </Route>

        <Route path="/cart" element={<CartPage/>} />
    </Routes>

   </BrowserRouter>
   </CartProvider>  
  );
};


export default App;


