const Item = ({product}) => {
    return (
        <div>
            <img className="imgDetail" src={product.img} alt= {product.name}/>
            <p>{product.name} para todo tipo de cabello! </p>
            <p> {product.description} </p>
            <p>Precio: {product.price} "Stock: (5 unidades)"</p>
            
            <button className='buttonbuy'>COMPRAR AHORA</button>

            
        </div>
    );
};

export default Item;