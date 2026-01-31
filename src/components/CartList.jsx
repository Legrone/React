import CartItem from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartList({ cart, total }) {
    const { clearCart } = useContext(CartContext)

    return (
        <div className='w-full lg:w-3/5 p-6 bg-base-100 shadow-xl rounded-2xl h-fit'>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Tu Carrito</h2>
            
            <div className='space-y-4 max-h-[400px] overflow-y-auto pr-2'>
                {cart.map(prod => (
                    <CartItem key={prod.id} id={prod.id} name={prod.name} quantity={prod.count} img={prod.url} />
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-medium text-gray-500">Total a pagar:</span>
                    <span className="text-4xl font-black text-primary">${total}</span>
                </div>
                
                <button 
                    className="btn btn-ghost text-error btn-lg hover:bg-error/10" 
                    onClick={clearCart}
                >
                    🗑️ Vaciar carrito
                </button>
            </div>
        </div>
    )
}

export default CartList