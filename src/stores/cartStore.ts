import { create } from 'zustand';
import Product from '@/types/product';

interface CartStoreState {
  items: Product[];
  addItem: (product: Product, amount: number) => void;
}

const useCartStore = create<CartStoreState>((set) => ({
  items: [],
  addItem: (product, amount) =>
    set((state) => ({
      items: [...state.items, ...Array(amount).fill(product)],
    })),
}));

export default useCartStore;
