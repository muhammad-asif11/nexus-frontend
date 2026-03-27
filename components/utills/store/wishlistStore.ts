
import { create } from "zustand";

type WishlistItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

type WishlistStore = {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
};

export const useWishlistStore = create<WishlistStore>((set) => ({
  wishlist: [],

  toggleWishlist: (item) =>
    set((state) => {
      const exists = state.wishlist.find((i) => i._id === item._id);

      if (exists) {
        return {
          wishlist: state.wishlist.filter((i) => i._id !== item._id),
        };
      }

      return { wishlist: [...state.wishlist, item] };
    }),
}));