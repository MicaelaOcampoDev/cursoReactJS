import "./components/Navbar.css";
import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/ThreeCards";
import ItemList from "./components/Items";
import "./components/Items.css";
import ItemDetail from "./pages/Shop/Details";

function App() {
  return (
    <div>

      <Navbar/>
      <Card/>
      <ItemList/>
      <ItemDetail/>
      
        
    </div>
  );
}


export default App;
