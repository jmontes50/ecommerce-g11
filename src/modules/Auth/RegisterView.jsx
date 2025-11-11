import { useRef } from 'react'
//useRef me permite crear referencias para elementos similares a un id, con diferentes posibilidades, ej. obtener el value de un input

const RegisterView = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      nombre: nameRef.current.value ,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    console.table(dataUser)
  }

  return (
    <div className='max-w-7xl mx-auto px-3 md:px-6 py-6 flex flex-col items-center'>
      <h2 className='text-xl font-bold'>Registrate</h2>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='mb-2 block'>Nombre</label>
            <input ref={nameRef} type="text" className='input w-full'/>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block'>Email</label>
            <input ref={emailRef} type="email" className='input w-full'/>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block'>Contraseña</label>
            <input ref={passwordRef} type="password" className='input w-full'/>
          </div>
          <button type="submit" className='btn btn-primary' >
            Aceptar
          </button>

        </form>
      </div>
    </div>
  )
}

export default RegisterView
