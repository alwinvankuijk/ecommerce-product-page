import LogoVector from '@/components/vectors/LogoVector';
import './Navbar.scss';
import CartIconVector from '@/components/vectors/CartIconVector';
import avatar from '@/assets/image-avatar.png';
import MenuIconVector from '@/components/vectors/MenuIconVector';
import MenuCloseVector from '@/components/vectors/MenuCloseVector';
import { useState } from 'react';
import clsx from 'clsx';
import useCartStore from '@/stores/cartStore';
import { AnimatePresence, motion } from 'framer-motion';

interface INavbarProps {
  handleToggleCart: () => void;
  handleCloseCart: () => void;
}

function Navbar({ handleToggleCart, handleCloseCart }: INavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    handleCloseCart();
  };

  return (
    <>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="navbar__overlay"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
      <div className="navbar">
        <div className="wrapper">
          <div className="navbar__content">
            <div className="navbar__section">
              <button
                className="navbar__burger"
                onClick={() => handleOpenMenu()}
              >
                <MenuIconVector />
              </button>
              <LogoVector />
              <div
                className={clsx({
                  navbar__links: true,
                  'navbar__links--closed': !menuOpen,
                })}
              >
                <button
                  className="navbar__close"
                  onClick={() => setMenuOpen(false)}
                >
                  <MenuCloseVector />
                </button>
                <a href="#" className="navbar__link">
                  Collections
                </a>
                <a href="#" className="navbar__link">
                  Men
                </a>
                <a href="#" className="navbar__link">
                  Women
                </a>
                <a href="#" className="navbar__link">
                  About
                </a>
                <a href="#" className="navbar__link">
                  Contact
                </a>
              </div>
            </div>
            <div className="navbar__section">
              <div className="navbar__cart--container">
                <button
                  className="navbar__cart"
                  aria-label="Cart"
                  onClick={() => handleToggleCart()}
                >
                  {cartItems.length !== 0 ? (
                    <span className="navbar__cart--amount">
                      {cartItems.length}
                    </span>
                  ) : null}
                  <CartIconVector />
                </button>
              </div>
              <img
                className="navbar__profile"
                src={avatar}
                alt="Avatar"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
