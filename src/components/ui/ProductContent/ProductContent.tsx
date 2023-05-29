import MinusIconVector from '@/components/vectors/MinusIconVector';
import './ProductContent.scss';
import PlusIconVector from '@/components/vectors/PlusIconVector';
import CartIconVector from '@/components/vectors/CartIconVector';
import { useEffect, useState } from 'react';
import useCartStore from '@/stores/cartStore';
import Product from '@/types/product';
import { formatUSD } from '@/lib/utils';

interface IProductContentProps {
  product: Product;
}

function ProductContent({ product }: IProductContentProps) {
  const [quantity, setQuantity] = useState('1');
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(parseInt(value)) || parseInt(value) < 0) {
      setQuantity('1');
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="product-content">
      <div className="product-content__header">
        <span className="product-content__brand">{product.brand}</span>
        <h1 className="product-content__title">{product.title}</h1>
      </div>
      <p className="product-content__description">{product.description}</p>
      <div className="product-content__pricing">
        <div>
          <span className="product-content__pricing--current">
            {formatUSD(product.currentPrice)}
          </span>
          <span className="product-content__pricing--discount">
            {product.discount}%
          </span>
        </div>
        <span className="product-content__pricing--original">
          {formatUSD(product.originalPrice)}
        </span>
      </div>
      <div className="product-content__purchase">
        <div className="product-content__purchase--cartControls">
          <button
            className="product-content__purchase--quantityControl"
            onClick={() => setQuantity(String(Number(quantity) - 1))}
            disabled={parseInt(quantity) <= 0}
          >
            <MinusIconVector />
          </button>
          <input
            type="text"
            name="amount"
            className="product-content__purchase--quantity"
            maxLength={4}
            pattern="/[^0-9.]/g"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            onBlur={validateInput}
          />
          <button
            className="product-content__purchase--quantityControl"
            onClick={() => setQuantity(String(Number(quantity) + 1))}
          >
            <PlusIconVector />
          </button>
        </div>
        <button
          className="btn btn--glow"
          onClick={() => addItem(product, parseInt(quantity))}
        >
          <span>
            <CartIconVector />
            Add to cart
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductContent;
