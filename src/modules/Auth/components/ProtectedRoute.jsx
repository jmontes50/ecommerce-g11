import useAuthStore from "../../../store/useAuthStore"
import { Navigate } from "react-router-dom"
import isTokenExpired from "../../../utils/jwtUtils";

const ProtectedRoute = (props) => {
  const { isLogged, token } = useAuthStore();

  // console.log("Desde ProtectedRoute:", isLogged)
  const authenticated = isLogged && !isTokenExpired(token);
  return (
    <>
      { authenticated ? props.children : <Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoute;
