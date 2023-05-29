import useCartStore from '@/stores/cartStore';
import './Cart.scss';
import { formatUSD } from '@/lib/utils';
import MenuCloseVector from '@/components/vectors/MenuCloseVector';
import { motion } from 'framer-motion';
import DeleteIconVector from '@/components/vectors/DeleteIconVector';

interface ICartProps {
  handleCloseCart: () => void;
}

function Cart({ handleCloseCart }: ICartProps) {
  const [cartItems, removeItemsById] = useCartStore((state) => [
    state.items,
    state.removeItemsById,
  ]);

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0, top: '8rem' }}
      animate={{ opacity: 1, top: '6rem' }}
      exit={{ opacity: 0, top: '8rem' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="cart__header">
        <span>Cart</span>
        <button onClick={() => handleCloseCart()}>
          <MenuCloseVector />
        </button>
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__items">
          {cartItems
            .filter((item, index, array) => array.indexOf(item) === index)
            .map((item, idx) => {
              return (
                <div className="cart__item" key={idx}>
                  <div className="cart__item--image">
                    <img
                      src={item.images[0].thumbnailPath}
                      alt={item.images[0].altText}
                      draggable={false}
                    />
                  </div>
                  <div className="cart__item--info">
                    <span className="cart__item--title">{item.title}</span>
                    <span className="cart__item--price">
                      {formatUSD(item.currentPrice)} &times; {cartItems.length}{' '}
                      <span className="cart__item--finalPrice">
                        {formatUSD(item.currentPrice * cartItems.length)}
                      </span>
                    </span>
                  </div>
                  <div className="cart__item--remove">
                    <button onClick={() => removeItemsById(item.id)}>
                      <DeleteIconVector />
                    </button>
                  </div>
                </div>
              );
            })}
          <button className="btn">Checkout</button>
        </div>
      ) : (
        <span className="cart__empty">Your cart is empty.</span>
      )}
    </motion.div>
  );
}

export default Cart;
