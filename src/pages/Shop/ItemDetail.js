
export const products = [
    {
        id: 1,
        name: 'Shampoo sólido',
        price: "$450",
        description:
          'Decile chau al plastico con este espectacular shampoo solido, una excelente manera de cuidar al medio ambiente y a tu cabello.',
        img: 'http://bridalsmagazine.com/wp-content/uploads/2020/02/shampoo-solido-acondicionador-combo-oferta-natural-D_NQ_NP_888627-MLA40241030187_122019-F.jpg'
        
      },
];

export function getDetail(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => resolve (products),2000);
    });
}