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
        toast.success("Usuario registrado!!");
        return true; //no estamos usando set, porque el registro
      } else {
        throw new Error("Error al registrar usuario");
      }
    } catch (error) {

    }
  }
}))

export default useAuthStore;
