import Navbar from '@/components/ui/Navbar';
import Carousel from './components/ui/Carousel';
import Lightbox from './components/ui/Lightbox';
import useLightboxStore from './stores/lightboxStore';
import ProductContent from './components/ui/ProductContent';
import productOne from './assets/image-product-1.jpg';

const products = [
  {
    id: 1,
    title: 'Fall Limited Edition Sneakers',
    brand: 'Sneaker Company',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    currentPrice: 125,
    discount: 50,
    originalPrice: 250,
    images: [
      {
        id: 1,
        altText: 'Product 1',
        path: productOne,
        thumbnailPath: '/src/assets/image-product-1-thumbnail.jpg',
      },
      {
        id: 2,
        altText: 'Product 2',
        path: '/src/assets/images/image-product-2.jpg',
        thumbnailPath: '/src/assets/image-product-2-thumbnail.jpg',
      },
      {
        id: 3,
        altText: 'Product 3',
        path: '/src/assets/image-product-3.jpg',
        thumbnailPath: '/src/assets/image-product-3-thumbnail.jpg',
      },
      {
        id: 4,
        altText: 'Product 4',
        path: '/src/assets/image-product-4.jpg',
        thumbnailPath: '/src/assets/image-product-4-thumbnail.jpg',
      },
    ],
  },
];

function App() {
  const isLightboxOpen = useLightboxStore((state) => state.isLightboxOpen);

  return (
    <>
      <Navbar />
      <div className="wrapper wrapper--noPaddingOnMobile">
        <div className="section-2-collumns">
          <Carousel images={products[0].images} showControls={false} />
          <ProductContent product={products[0]} />
        </div>
        {isLightboxOpen ? <Lightbox images={products[0].images} /> : null}
      </div>
    </>
  );
}

export default App;
