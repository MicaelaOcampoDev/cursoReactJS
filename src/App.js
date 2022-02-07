import "./components/Navbar.css";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/Products";
import ProdDetails from "./pages/ProdDetails";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <CartContext.Provider>  
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/"/>
        <Route index element={<Home/> }/>
        <Route path="/aboutUs" element={<AboutUs/> }/>
        <Route path="/products">
           <Route index element={<ProductsPage/> }/>
           <Route path=":productId" element={<ProdDetails/> }/>
        </Route>
    </Routes>

   </BrowserRouter>
   </CartContext.Provider>  
  );
};


export default App;


