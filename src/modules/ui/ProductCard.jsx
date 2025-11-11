import useCartStore from "../../store/useCartStore"
import { toast } from "react-toastify";
// Producto model reference:
// {
//   id: number,
//   nombre: string,
//   descripcion?: string,
//   precio: number,
//   stock: number,
//   sku?: string,
//   activo: boolean,
//   imagen?: string,
//   categoriaId: number
// }

const ProductCard = ({ producto }) => {
  const { nombre, descripcion, precio, imagen, stock } = producto;

  const { cart, addProduct } = useCartStore();
  console.log({ cart });

  const handleAddProduct = () => {
    addProduct(producto);
    toast(`${nombre} se añadio al carrito!`, {
      theme:"dark",
      type:"success"
    });

  }

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <figure className="aspect-square overflow-hidden bg-base-200">
        {/* Ternario de imagen: si existe 'imagen' renderiza <img>, de lo contrario muestra un placeholder tipo 'skeleton' */}
        {imagen ? (
          <img src={imagen} alt={nombre} className="h-full w-full object-cover" />
        ) : (
          <div className="skeleton h-full w-full" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base md:text-lg line-clamp-1">{nombre}</h2>
        {/* Ternario de descripción: si hay 'descripcion' la muestra; si no, no renderiza nada (null) */}
        {descripcion ? (
          <p className="text-sm text-base-content/70 line-clamp-2">{descripcion}</p>
        ) : null}
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold">${precio.toFixed(2)}</span>
          {/* Ternario para clases del badge según stock: 'badge-success' cuando hay stock, 'badge-ghost' si está agotado */}
          <span className={`badge ${stock > 0 ? 'badge-success' : 'badge-ghost'}`}>
            {/* Ternario de texto del badge: cambia entre 'En stock' y 'Agotado' */}
            {stock > 0 ? 'En stock' : 'Agotado'}
          </span>
        </div>
        <div className="card-actions pt-2">
          {/* Botón deshabilitado si no hay stock (condicional booleana simple) */}
          <button
            className="btn btn-primary btn-block"
            disabled={stock <= 0}
            onClick={handleAddProduct}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
