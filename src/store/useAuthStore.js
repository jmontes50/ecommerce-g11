import { create } from "zustand";
import { saveStorage, getStorage, removeStorage } from "../utils/localStorageUtils";
import axios from "axios";
import { toast } from "react-toastify";
import useCartStore from "./useCartStore";

const KEY_AUTH = "auth_store";

const useAuthStore = create((set) => ({
  //leemos el LS y si lo obtenemos estamos buscando acceder a la propiedad user, usamos ?. para validar que existe la propiedad
  user: getStorage(KEY_AUTH)?.user || null, //info Usuario nombre, email
  token: getStorage(KEY_AUTH)?.token || null, //JWT
  isLogged: getStorage(KEY_AUTH)?.isLogged || false, //para saber si esta loggueado el usuario

  /**
   * @param { nombre, email, password }
   */
  registerUser: async (userInfo) => {
    try {
      const response = await axios.post("https://simple-api-2ivd.onrender.com/auth/register", userInfo);
      if(response.status === 201){
        console.log(response)
        toast.success("Usuario registrado!!");
        return true; //no estamos usando set, porque el registro
      } else {
        throw new Error("Error al registrar usuario");
      }
    } catch (error) {

    }
  },
  loginUser: async (email, password) => {
    try {
      const response = await axios.post("https://simple-api-2ivd.onrender.com/auth/login", { email, password });
      // console.log(response)
      if(response.status === 200) {
        const { token, usuario } = response.data;
        useCartStore.getState().setUserId(usuario.id);
        //guardar en el LS
        saveStorage(KEY_AUTH, { token: token, user: usuario, isLogged: true});
        // console.log({ usuario })

        toast.success("Bienvenido!");
        //aquí no necesitamos acceder la información del state, así que podemos invocar directamente a set y darle en un objeto cuál es el cambio en el estado
        set({ user: usuario, token: token, isLogged: true })
        return true;
      }else {
        throw new Error("Error al ingresar, intente de nuevo")
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: () => {
    removeStorage(KEY_AUTH);
    set({ user: null, token: null, isLogged: false });
  }
}))

export default useAuthStore;
