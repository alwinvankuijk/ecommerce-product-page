import { useState } from 'react';
import './Carousel.scss';
import Image from '@/types/image';
import clsx from 'clsx';
import PreviousIconVector from '@/components/vectors/PreviousIconVector';
import NextIconVector from '@/components/vectors/NextIconVector';
import useLightboxStore from '@/stores/lightboxStore';
import { AnimatePresence, motion } from 'framer-motion';

interface ICarouselProps {
  images: Image[];
  showControls?: boolean;
  isClickable?: boolean;
}

function Carousel({ images, isClickable = true }: ICarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, openLightbox] = useLightboxStore((state) => [
    state.isLightboxOpen,
    state.openLightbox,
  ]);

  const handleControllerPrevious = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((currentImage) => currentImage - 1);
    }
  };

  const handleControllerNext = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((currentImage) => currentImage + 1);
    }
  };

  const handleOpenLightbox = () => {
    if (!isLightboxOpen) {
      openLightbox();
    }
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel__image">
          <div className="carousel__controls">
            <button
              className="carousel__controller carousel__controller--previous"
              onClick={handleControllerPrevious}
              aria-label="Previous image"
            >
              <PreviousIconVector />
            </button>
            <button
              className="carousel__controller carousel__controller--next"
              onClick={handleControllerNext}
              aria-label="Next image"
            >
              <NextIconVector />
            </button>
          </div>
          <AnimatePresence>
            <motion.img
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              key={images[currentImage].path}
              src={images[currentImage].path}
              alt="Product image 1"
              onClick={handleOpenLightbox}
              draggable={false}
              style={
                isClickable
                  ? {
                      cursor: 'pointer',
                    }
                  : { cursor: 'default' }
              }
            />
          </AnimatePresence>
        </div>
        <div className="carousel__thumbnails">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                className={clsx({
                  carousel__thumbnail: true,
                  'carousel__thumbnail--current': currentImage === index,
                })}
                onClick={() => {
                  setCurrentImage(index);
                }}
              >
                <img
                  src={image.thumbnailPath}
                  alt={image.altText}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
