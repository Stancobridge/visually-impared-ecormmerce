import { create } from "zustand";
import { productsList } from "..";

export interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  description: string;
}

export interface IUseCart {
  carts: IProduct[];
  addToCart: (productId: string) => void;
}

export const useCart = create<IUseCart>((set, get) => ({
  carts: [],
  addToCart: (productId: string) => {
    const product = productsList.find((cart) => cart.id === productId);
    if (product) {
      const itemExists = get().carts.find(
        (product) => product.id === productId
      );

      if (!itemExists) {
        set((states) => ({ carts: [...states.carts, product] }));
      }
    }
  },
}));
