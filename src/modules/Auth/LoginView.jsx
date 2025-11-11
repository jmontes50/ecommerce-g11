import { useRef } from "react";
import useAuthStore from "../../store/useAuthStore";

const LoginView = () => {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loginUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await loginUser(email, password);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 flex flex-col items-center">
      <h2 className="text-xl font-bold">Ingresa</h2>
      <div className="card bg-base-100 w-96 shadow-sm">
        <form onSubmit={handleSubmit}>
          {/* <div className='mb-3'>
            <label className='mb-2 block'>Nombre</label>
            <input ref={nameRef} type="text" className='input w-full'/>
          </div> */}
          <div className="mb-3">
            <label className="mb-2 block">Email</label>
            <input ref={emailRef} type="email" className="input w-full" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block">Contraseña</label>
            <input ref={passwordRef} type="password" className="input w-full" />
          </div>
          <button type="submit" className="btn btn-primary">
            Aceptar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
