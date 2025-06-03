export type Product = {
  id: string;
  name: string;
  url: string;
  gender: string;
  price: number;
  category: string;
};

export const productsList: Product[] = [
  {
    id: '1',
    name: 'Обувь 1',
    url: '/images/shoes/shoes1.jpg',
    gender: 'male',
    price: 11,
    category: 'Обувь',
  },
  {
    id: '2',
    name: 'Обувь 2',
    url: '/images/shoes/shoes2.jpg',
    gender: 'female',
    price: 22,
    category: 'Обувь',
  },
  {
    id: '3',
    name: 'Джинсы 1',
    url: '/images/jeans/jeans1.jpg',
    gender: 'male',
    price: 11,
    category: 'Джинсы',
  },
  {
    id: '4',
    name: 'Джинсы 2',
    url: '/images/jeans/jeans2.jpg',
    gender: 'female',
    price: 22,
    category: 'Джинсы',
  },
  {
    id: '5',
    name: 'Рубашка 1',
    url: '/images/shirt/shirt1.jpg',
    gender: 'male',
    price: 11,
    category: 'Рубашки',
  },
  {
    id: '6',
    name: 'Рубашка 2',
    url: '/images/shirt/shirt2.jpg',
    gender: 'female',
    price: 22,
    category: 'Рубашки',
  },
  {
    id: '7',
    name: 'Футболка 1',
    url: '/images/tShirt/tShirt1.jpg',
    gender: 'male',
    price: 11,
    category: 'Футболки',
  },
  {
    id: '8',
    name: 'Футболка 2',
    url: '/images/tShirt/tShirt2.jpg',
    gender: 'female',
    price: 22,
    category: 'Футболки',
  },
  {
    id: '9',
    name: 'Свитер 1',
    url: '/images/sweater/sweater1.jpg',
    gender: 'male',
    price: 11,
    category: 'Свитеры',
  },
  {
    id: '10',
    name: 'Свитер 2',
    url: '/images/sweater/sweater2.jpg',
    gender: 'female',
    price: 22,
    category: 'Свитеры',
  },
  {
    id: '11',
    name: 'Обувь 3',
    url: '/images/shoes/shoes3.jpg',
    gender: 'male',
    price: 33,
    category: 'Обувь',
  },
];
