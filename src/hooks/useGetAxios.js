import { useState, useEffect } from "react";
import axios from "axios";

//una regla para crear custom Hooks es que la función debe tener el prefijo 'use'
const useGetAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //obj:hacer una petición inicial de datos
  useEffect(() => {
    const requestData = async () => {
      try {
        const response = await axios.get(url);
        // console.log(response)
        setData(response.data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    requestData();
    //
  }, [url]);

  return { data, error }
};

export default useGetAxios;
