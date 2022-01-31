import { useParams } from "react-router-dom";
import ItemDetail from "../components/Details";


const ProdDetails  = () => {
    const {productId}= useParams ();

    return (
        <div>
        <h1> Detalle de productos: {productId} </h1>
        <ItemDetail/> 
    </div> 
    );
};

export default ProdDetails;
