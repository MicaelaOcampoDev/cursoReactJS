import React from 'react'
 
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
 
const Card = () => {
  const items = [
    {
      id: 1,
      header: 'Shampoo sólido',
      description:
        'Decile chau al plastico con este espectacular shampoo solido, una excelente manera de cuidar al medio ambiente y a tu cabello.',
      image: 'https://faunacosmeticanatural.com/wp-content/uploads/2020/12/diferenciashampoosolidoyjabon-min.jpg'
    },
    {
      id: 2,
      header: 'Peine ecológico',
      description:
        'Un increible peine de bambu que reemplaza en su totalidad al peine de plástico.',
      image:'https://www.debambu.online/wp-content/uploads/2019/11/peine-2.jpg'
      
    },
    {
      id: 3,
      header: 'Cepillos de bambú',
      description:
        'Cumplen la misma función pero son un 99% biodegradables. Una vez terminado su uso, sacas las cerdas y las reciclas. Luego el mango de bambu a tu compost!',
      image:'https://www.paiscircular.cl/wp-content/uploads/2020/01/cepillo-e1580482772762.jpg'

    },
    {
      id: 4,
      header: 'Esponjas vegetales',
      description:
        'Múltiples usos, desde usarla para el baño , para exfoliación o simplemente para lavar tu vajilla!',
      image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/303/317/products/esponja-21-50a3172f7134e488e415983115324701-1024-1024.png'

    },
  ]
  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight='550px'
      imageWidth='700px'
    />
  )
}
 
export default Card;