import useCartStore from "../../store/useCartStore"

const CheckOutView = () => {

  const { cart } = useCartStore();

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
                      <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover"/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-1 md:col-span-5">
          <h3 className="font-semibold text-lg">Formulario</h3>
        </div>
      </div>
    </div>
  )
}

export default CheckOutView
