import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartItem ({ name, quantity, img, id}) {
    const { deleteProduct } = useContext(CartContext)

    const handleDelete = () => deleteProduct(id)

    return (
        <div className='flex justify-around items-center border-b p-3 mb-3'>
            <img src={img} alt={name} style={{width: "200px", height: "70px",}}/>
            <p>{name} x {quantity}</p>
            <button
            className='bg-red-500 px-5 py-2 rounded cursor-pointer'
            onClick={handleDelete}
            >eliminar</button>
        </div>
    )
}

export default CartItem
