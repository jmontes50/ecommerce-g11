import useCartStore from "../../store/useCartStore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CheckOutView = () => {
  const { cart } = useCartStore();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const totalCart = cart
    .reduce((acum, item) => {
      return acum + item.cantidad * item.precio;
    }, 0).toFixed(2);

  const onSubmit = (data) => {
    console.log(data); //peticion, POST
    toast.success("Carrito Confirmado!");
  }

  return (
    <div className='max-w-7xl mx-auto px-3 md:px-6 py-6"'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-8">
        <div className="col-span-1 md:col-span-7">
          <h3 className="font-semibold text-lg">Productos</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>P. Unit</th>
                <th>P. Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td>{item.nombre}</td>
                  <td>{item.cantidad} Unids.</td>
                  <td>S/ {`${item.precio.toFixed(2)}`}</td>
                  <td>S/ {`${(item.precio * item.cantidad).toFixed(2)}`}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td colspan="4">TOTAL</td>
                <td>S/ {totalCart}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1 md:col-span-5">
          <h3 className="font-semibold text-lg">Formulario</h3>
          {/* el handleSubmit de react-hook-forms requiere recibir una función para manejar el evento */}
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 flex flex-col gap-2">
              <label className="text-sm text-gray-300">Nombres y Apellidos</label>
              {/* Para que podamos utilizar react-hook-forms en cada Input tenemos que "registrarlo" con el attr register */}
              <input
                type="text"
                placeholder="Juan Perez"
                className="input w-full"
                // register(nombreRegistro, { validaciones })
                {...register("fullname", {
                  required: "Este campo es obligatorio"
                })}
              />
              {errors && (<p className="text-xs text-red-600">{errors?.fullname?.message}</p>)}
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label className="text-sm text-gray-300">Dirección</label>
              <input
                type="text"
                placeholder="Av. arenales"
                className="input w-full"
                {...register("address", {
                  // requerido, minLength:6, maxLength:30
                  required: "La dirección es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La dirección tiene que ser de al menos 6 carácteres"
                  },
                  maxLength: {
                    value: 30,
                    message: "La dirección tiene que ser no mayor de 30 carácteres"
                  },
                })}
              />
              {errors && (<p className="text-xs text-red-600">{errors?.address?.message}</p>)}
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label className="text-sm text-gray-300">Teléfono</label>
              <input type="tel" placeholder="999999999" className="input w-full" />
            </div>
            <button className="btn btn-primary" type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutView;
