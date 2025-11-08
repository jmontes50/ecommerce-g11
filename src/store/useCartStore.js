import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) => {
    set((state) => {
      console.log(state);
      return {
        cart: [...state.cart, product]
      }
    })
  }
}))

export default useCartStore;
