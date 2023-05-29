import Navbar from '@/components/ui/Navbar';
import Carousel from './components/ui/Carousel';
import Lightbox from './components/ui/Lightbox';
import useLightboxStore from './stores/lightboxStore';
import ProductContent from './components/ui/ProductContent';
import productOne from './assets/image-product-1.jpg';
import productOneThumbnail from './assets/image-product-1-thumbnail.jpg';
import productTwo from './assets/image-product-2.jpg';
import productTwoThumbnail from './assets/image-product-2-thumbnail.jpg';
import productThree from './assets/image-product-3.jpg';
import productThreeThumbnail from './assets/image-product-3-thumbnail.jpg';
import productFour from './assets/image-product-4.jpg';
import productFourThumbnail from './assets/image-product-4-thumbnail.jpg';
import Cart from './components/ui/Cart';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
        thumbnailPath: productOneThumbnail,
      },
      {
        id: 2,
        altText: 'Product 2',
        path: productTwo,
        thumbnailPath: productTwoThumbnail,
      },
      {
        id: 3,
        altText: 'Product 3',
        path: productThree,
        thumbnailPath: productThreeThumbnail,
      },
      {
        id: 4,
        altText: 'Product 4',
        path: productFour,
        thumbnailPath: productFourThumbnail,
      },
    ],
  },
];

function App() {
  const isLightboxOpen = useLightboxStore((state) => state.isLightboxOpen);
  const [cartOpen, setCartOpen] = useState(false);

  const handleToggleCart = () => {
    setCartOpen((state) => !state);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  return (
    <>
      <Navbar
        handleToggleCart={handleToggleCart}
        handleCloseCart={handleCloseCart}
      />
      <div className="wrapper wrapper--noPaddingOnMobile">
        <div className="section-2-collumns">
          <Carousel images={products[0].images} showControls={false} />
          <ProductContent
            product={products[0]}
            handleOpenCart={handleOpenCart}
          />
        </div>
        {isLightboxOpen ? <Lightbox images={products[0].images} /> : null}
        <AnimatePresence>
          {cartOpen ? <Cart handleCloseCart={handleCloseCart} /> : null}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
