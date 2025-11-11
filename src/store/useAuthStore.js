import { create } from "zustand";
import { saveStorage, getStorage, removeStorage } from "../utils/localStorageUtils";
import axios from "axios";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null, //info Usuario nombre, email
  token: null, //JWT
  isLogged: false, //para saber si esta loggueado el usuario

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
      if(response.status === 200) {
        const { token, usuario } = response.data;
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
  }
}))

export default useAuthStore;
