import { create } from 'zustand';

interface LightboxState {
  isLightboxOpen: boolean;
  openLightbox: () => void;
  closeLightbox: () => void;
}

const useLightboxStore = create<LightboxState>((set) => ({
  isLightboxOpen: false,
  openLightbox: () => set(() => ({ isLightboxOpen: true })),
  closeLightbox: () => set(() => ({ isLightboxOpen: false })),
}));

export default useLightboxStore;
