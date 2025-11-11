import { create } from "zustand";
import { devtools } from "zustand/middleware";

//para usar las devtools de zustand con la extension de redux tenemos que envolver la func callback del create
// const useCartStore = create((set) => ({ // sin devtools
const useCartStore = create(devtools((set) => ({
  cart: [],
  //la idea de usar devtools s poder ver c/cambio de forma granular
  //para eso modificaremos cada función...
  addProduct: (product) => {
    set((state) => {
      console.log(state);

      //1. si existe el producto en el cart
      const indexExists = state.cart.findIndex((item) => item.id === product.id);

      if(indexExists === -1){ //no existe es un producto nuevo, por el -1 retornado
        return {
          cart: [...state.cart, { ...product, cantidad:1 }]//al ser nuevo solo le agregamos la cantidad: 1
        }
      } else { //si es mayor que -1 significa que existe ya en cart
        const temporalCart = [...state.cart]; //hacemos una copia del carrito
        temporalCart[indexExists].cantidad++; //en base al indice del findIndex (indexExists) encontramos el prod, he aumentamos la cantidad en +1
        return {
          cart: temporalCart,
        }
      }



      //la función que este dentro de set necesita retornar el cambio que quiere realizar en el store
      return {
        cart: [...state.cart, product]
      }
      //... la modificación es agregar unos argumentos extra dandolé un nombre a cada función
    }, false, "cart/addProductToCart")
  }
})))

export default useCartStore;
