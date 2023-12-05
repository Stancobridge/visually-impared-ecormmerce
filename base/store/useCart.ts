import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { productsList } from "../data";

export interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  description: string;
  quantity: number;
}

export interface IUseCart {
  carts: IProduct[];
  addToCart: (productId: string) => void;
  reduceCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create(
  persist<IUseCart>(
    (set, get) => ({
      carts: [],
      clearCart: () => {
        set({ carts: [] });
      },
      addToCart: (productId: string) => {
        const product = productsList.find((cart) => cart.id === productId);
        if (product) {
          const itemExists = get().carts.find(
            (product) => product.id === productId
          );

          if (!itemExists) {
            set((states) => ({
              carts: [...states.carts, { ...product, quantity: 1 }],
            }));
          } else {
            const oldCarts = get().carts.map((product) => {
              if (product.id === productId) {
                product.quantity += 1;
              }

              return product;
            });
            set(() => ({ carts: [...oldCarts] }));
          }
        }
      },
      reduceCart: (productId: string) => {
        const oldCarts = get().carts.map((product) => {
          if (product.id === productId && product.quantity) {
            product.quantity -= 1;
          }

          return product;
        });
        set(() => ({ carts: [...oldCarts] }));
      },
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
