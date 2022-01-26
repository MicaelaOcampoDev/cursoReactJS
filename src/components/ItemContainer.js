const Item = ({product}) => {
    return (
        <div>
            <img className="imgStyle" src={product.img} alt= {product.name}/>
            <p>Articulo: {product.name}  </p>
            <p> {product.description} </p>
            <p>Precio: {product.price} </p>
            
        </div>
    );
};

export default Item;