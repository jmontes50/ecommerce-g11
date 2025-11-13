import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage, removeStorage } from "../utils/localStorageUtils";

const KEY_STORAGE = "cart";
const KEY_USER_ID = "cart_user_id";

//para usar las devtools de zustand con la extension de redux tenemos que envolver la func callback del create
// const useCartStore = create((set) => ({ // sin devtools
const useCartStore = create(devtools((set) => ({
  //buscamos si hay algo en el LS, si no es un array vacio
  cart: getStorage(KEY_STORAGE) || [],
  userId: null,
  //la idea de usar devtools s poder ver c/cambio de forma granular
  //para eso modificaremos cada función...
  addProduct: (product) => {
    set((state) => {
      //1. si existe el producto en el cart
      const indexExists = state.cart.findIndex((item) => item.id === product.id);

      if(indexExists === -1){ //no existe es un producto nuevo, por el -1 retornado
        const updatedCart = [...state.cart, { ...product, cantidad:1 }];
        saveStorage(KEY_STORAGE, updatedCart);

        return {
          cart: updatedCart//al ser nuevo solo le agregamos la cantidad: 1
        }
      } else { //si es mayor que -1 significa que existe ya en cart
        const temporalCart = [...state.cart]; //hacemos una copia del carrito
        temporalCart[indexExists].cantidad++; //en base al indice del findIndex (indexExists) encontramos el prod, he aumentamos la cantidad en +1
        saveStorage(KEY_STORAGE, temporalCart);
        //la función que este dentro de set necesita retornar el cambio que quiere realizar en el store
        return {
          cart: temporalCart,
        }
      }
      //... la modificación es agregar unos argumentos extra dandolé un nombre a cada función
    }, false, "cart/addProductToCart")
  },
  setUserId: (id) => {
    set({ userId: id }, false, "cart/setUserId");
    const currentUserId = Number(getStorage(KEY_USER_ID));
    // console.log({ id, currentUserId });
    if(id !== currentUserId){
      useCartStore.getState().resetCart();
    }
    saveStorage(KEY_USER_ID, id);
  },
  resetCart: () => {
    removeStorage(KEY_STORAGE);
    set({ cart: [] })
  }
})))

export default useCartStore;
