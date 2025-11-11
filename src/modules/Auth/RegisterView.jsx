import { useRef } from 'react'

const RegisterView = () => {
  return (
    <div className='max-w-7xl mx-auto px-3 md:px-6 py-6 flex flex-col items-center'>
      <h2 className='text-xl font-bold'>Registrate</h2>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <form onSubmit="">
          <div className='mb-3'>
            <label className='mb-2 block'>Nombre</label>
            <input type="text" className='input w-full'/>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block'>Email</label>
            <input type="email" className='input w-full'/>
          </div>
          <div className='mb-3'>
            <label className='mb-2 block'>Contraseña</label>
            <input type="password" className='input w-full'/>
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
