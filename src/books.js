import img1 from './Images/Image1.jpg';
import img2 from './Images/Image2.jpg';
import img3 from './Images/Image3.jpg';
import img4 from './Images/Image4.jpg';

// Named export
export const books = [
  { 
    id: 1,
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    // imgSrc: 'https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg'
    imgSrc: img1
  },
  {
    id: 2,
    author: 'Dr. Nicole Apelian',
    title: 'Forgotten Home Apothecary',
    // imgSrc: 'https://m.media-amazon.com/images/I/91-E86oM2IL._SY342_.jpg',
    imgSrc: img2
  },
  {
    id: 3,
    author: 'James Clear',
    title: 'Atomic Habits',
    // imgSrc: 'https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg',
    imgSrc: img3
  },
  {
    id: 4,
    author: 'Freida McFadden',
    title: 'The Housemaid',
    // imgSrc: 'https://m.media-amazon.com/images/I/81AHTyq2wVL._SL1500_.jpg',
    imgSrc: img4
  }
];

// or we can use export default books and use any name during import in index.js;