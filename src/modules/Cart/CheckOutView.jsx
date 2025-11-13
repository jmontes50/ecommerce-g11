import useCartStore from "../../store/useCartStore"

const CheckOutView = () => {

  const { cart } = useCartStore();

  return (
    <div className='text-3xl font-bold'>
      CheckOutView
    </div>
  )
}

export default CheckOutView
