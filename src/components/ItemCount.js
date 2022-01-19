import React from 'react';

export default function Count (){
    const [counter, setCounter]= React.useState (0);

    const contarClick = ()  => {
        setCounter (counter +1);
    };


    const restar = ()  => {
         setCounter (counter -1);

    };

    return (
        <div className='count'>
            <h1>Cantidad de articulos: {counter}</h1>
            <button className='but' onClick={contarClick}>+</button>
            <button className='but' onClick={restar}>-</button>
        </div>
    );

}