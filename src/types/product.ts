import Image from './image';

interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  currentPrice: number;
  discount: number;
  originalPrice: number;
  images: Image[];
}

export default Product;
