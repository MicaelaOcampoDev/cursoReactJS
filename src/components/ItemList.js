
export const products = [
    {
        id: 1,
        name: 'Shampoo sólido',
        
        img: 'https://faunacosmeticanatural.com/wp-content/uploads/2020/12/diferenciashampoosolidoyjabon-min.jpg'
        
      },
      {
        id: 2,
        name: 'Peine ecológico',
        
        img:'https://www.debambu.online/wp-content/uploads/2019/11/peine-2.jpg'
        
      },
      {
        id: 3,
        name: 'Cepillos de bambú',
        
        img:'https://www.paiscircular.cl/wp-content/uploads/2020/01/cepillo-e1580482772762.jpg'
  
      },
      {
        id: 4,
        name: 'Esponjas vegetales',
        
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/303/317/products/esponja-21-50a3172f7134e488e415983115324701-1024-1024.png'
  
      },
];

export function getProducts(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => resolve (products),2000);
    });
}
