import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) => {
    set((state) => {
      console.log(state);
      //la función que este dentro de set necesita retornar el cambio que quiere realizar en el store
      return {
        cart: [...state.cart, product]
      }
    })
  }
}))

export default useCartStore;
