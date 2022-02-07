import React from 'react';

export default function Count (){
    const [counter, setCounter]= React.useState (0);

    const contarClick = ()  => {
        setCounter ((prevState)  => prevState +1);
    };


    const restar = ()  => { 
        if (counter >= 1){
         setCounter (counter -1); }

    };


    return (
        <div className='count'>
            
            <button className='but' onClick={contarClick}> +</button>

            <h3> {counter}</h3>

            <button className='but' onClick={restar}>-</button>
        </div>
    );

}


