
import "./components/Navbar.css";
import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/ThreeCards";
import Count from "./components/ItemCount.js";
import ItemList from "./components/Items";
import "./components/Items.css";
import ItemDetail from "./components/Details";

function App() {
  return (
    <div>

      <Navbar/>
      <Card/>
      <Count/>
      <ItemList/>
      <ItemDetail/>
      
        
    </div>
  );
}


export default App;
