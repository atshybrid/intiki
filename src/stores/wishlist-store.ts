import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  items: string[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  hasItem: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (id) => {
        if (!get().items.includes(id)) {
          set({ items: [...get().items, id] });
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i !== id) }),
      toggleItem: (id) => {
        if (get().items.includes(id)) {
          get().removeItem(id);
        } else {
          get().addItem(id);
        }
      },
      hasItem: (id) => get().items.includes(id),
    }),
    { name: "intiki-wishlist" }
  )
);
