import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  try {
    const payload = jwtDecode(token)
    // console.log(payload)
    //validamos que la propiedad exp exista
    if(!payload.exp){
      return true;
    }
    // obtenemos el timestamp de ahora y lo dividimos entre 1000
    const now = new Date() / 1000;
    // comparamos el ahora vs la fecha del .exp
    const isValid = now <= payload.exp;
    return !isValid;
  } catch (error) {
    return true;
  }
}

export default isTokenExpired;
