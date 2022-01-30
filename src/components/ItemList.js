
export const products = [
    {
        id: 1,
        name: 'Shampoo sólido',
        price: "$450",
        description:
          'Decile chau al plastico con este espectacular shampoo solido, una excelente manera de cuidar al medio ambiente y a tu cabello.',
        img: 'https://faunacosmeticanatural.com/wp-content/uploads/2020/12/diferenciashampoosolidoyjabon-min.jpg'
        
      },
      {
        id: 2,
        name: 'Peine ecológico',
        price: "$350",
        description:
          'Un increible peine de bambu que reemplaza en su totalidad al peine de plástico.',
        img:'https://www.debambu.online/wp-content/uploads/2019/11/peine-2.jpg'
        
      },
      {
        id: 3,
        name: 'Cepillos de bambú',
        price: "$250",
        description:
          'Cumplen la misma función pero son un 99% biodegradables. Una vez terminado su uso, sacas las cerdas y las reciclas. Luego el mango de bambu a tu compost!',
        img:'https://www.paiscircular.cl/wp-content/uploads/2020/01/cepillo-e1580482772762.jpg'
  
      },
      {
        id: 4,
        name: 'Esponjas vegetales',
        price: "$150",
        description:
          'Múltiples usos, desde usarla para el baño , para exfoliación o simplemente para lavar tu vajilla!',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/303/317/products/esponja-21-50a3172f7134e488e415983115324701-1024-1024.png'
  
      },
];

export function getProducts(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => resolve (products),2000);
    });
}
