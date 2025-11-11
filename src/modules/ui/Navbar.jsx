import useCartStore from "../../store/useCartStore";
import useAuthStore from "../../store/useAuthStore";
import { Link } from "react-router-dom";

// Navbar responsivo usando DaisyUI
// - Mobile: muestra un botón hamburguesa con menú desplegable
// - Desktop (>= lg): muestra el menú horizontal centrado
// - Lado derecho: avatar de usuario con dropdown de opciones
const Navbar = () => {
  const { cart } = useCartStore();
  const { isLogged } = useAuthStore();

  const totalCart = cart.reduce((acumulator, item) => {
    return acumulator + item.cantidad;
  }, 0);

  return (
    <div className="navbar bg-base-100 border-b">
      {/* Sección izquierda: logo + menú móvil */}
      <div className="navbar-start">
        {/* Menú hamburguesa (solo visible en mobile, se oculta en lg+) */}
        <div className="dropdown lg:hidden">
          {/* Botón que abre el dropdown del menú */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-square"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          {/* Items del menú en mobile (dropdown) */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {isLogged && (
              <li className="indicator">
                <Link to="/cart">Carrito</Link>
                <span className="indicator-item badge badge-xs badge-primary">
                  {totalCart}
                </span>
              </li>
            )}
            {/* si no esta logueado mostrará estos Links */}
            {!isLogged && (
              <>
                <li>
                  <Link to="/register">Registrate</Link>
                </li>
                <li>
                  <Link to="/login">Ingresa</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Marca/Logo que navega al home */}
        <Link to="/" className="btn btn-ghost text-xl">
          Ecommerce
        </Link>
      </div>

      {/* Sección central: menú horizontal (solo visible en desktop lg+) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Enlaza a rutas simples, actualmente estático */}
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* <li className="indicator">
            <Link to="/cart">Carrito</Link>
            <span className="indicator-item badge badge-xs badge-primary">
              {totalCart}
            </span>
          </li>
          <li>
            <Link to="/register">Registrate</Link>
          </li>
          <li>
            <Link to="/login">Ingresa</Link>
          </li> */}
          {isLogged && (
              <li className="indicator">
                <Link to="/cart">Carrito</Link>
                <span className="indicator-item badge badge-xs badge-primary">
                  {totalCart}
                </span>
              </li>
            )}
            {/* si no esta logueado mostrará estos Links */}
            {!isLogged && (
              <>
                <li>
                  <Link to="/register">Registrate</Link>
                </li>
                <li>
                  <Link to="/login">Ingresa</Link>
                </li>
              </>
            )}
        </ul>
      </div>

      {/* Sección derecha: acciones de usuario (avatar con opciones) */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {/* Avatar/placeholder del usuario que abre el menú */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar placeholder"
            aria-label="Abrir opciones de usuario"
          >
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span>U</span>
            </div>
          </div>
          {/* Opciones del usuario (estático) */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Perfil</a>
            </li>
            <li>
              <a>Pedidos</a>
            </li>
            <li>
              <a>Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
