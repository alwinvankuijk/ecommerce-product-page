import Image from '@/types/image';
import Carousel from '../Carousel';
import './Lightbox.scss';
import MenuCloseVector from '@/components/vectors/MenuCloseVector';
import useLightboxStore from '@/stores/lightboxStore';

interface ILightboxProps {
  images: Image[];
}

function Lightbox({ images }: ILightboxProps) {
  const closeLightbox = useLightboxStore((state) => state.closeLightbox);

  return (
    <div className="lightbox">
      <div className="wrapper wrapper--narrow">
        <div className="lightbox__button-container">
          <button className="lightbox__close-button" onClick={closeLightbox}>
            <MenuCloseVector />
          </button>
        </div>
        <Carousel images={images} isClickable={false} />
      </div>
    </div>
  );
}

export default Lightbox;
