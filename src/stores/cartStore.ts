import { create } from 'zustand';
import Product from '@/types/product';

interface CartStoreState {
  items: Product[];
  addItem: (product: Product, amount: number) => void;
  clearCart: () => void;
  removeItemsById: (id: number) => void;
}

const useCartStore = create<CartStoreState>((set) => ({
  items: [],
  addItem: (product, amount) =>
    set((state) => ({
      items: [...state.items, ...Array(amount).fill(product)],
    })),
  clearCart: () => set(() => ({ items: [] })),
  removeItemsById: (id: number) =>
    set((state) => ({
      items: [
        ...state.items.filter((item) => {
          if (item.id !== id) return item;
        }),
      ],
    })),
}));

export default useCartStore;
