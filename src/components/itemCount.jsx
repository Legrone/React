import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

function ItemCount({ product }) {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(CartContext)
    const handleAddToCart = () => {
        addToCart({ ...product, count })
        toast.success(`Se agregó ${product.name} al carrito`)
    }

    return (
        <div className="w-[320px] border rounded-xl p-5 mt-4 shadow-md bg-black">
        <p className="text-center text-3xl font-semibold mb-4">
            {count}
        </p>
        <div className="flex justify-center gap-4 mb-5">
            <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold
                        disabled:opacity-40 disabled:cursor-not-allowed
                        hover:bg-red-600 transition"
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
            >
            </button>
            <button
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold
                        hover:bg-green-600 transition"
            onClick={() => setCount(count + 1)}
            >
            +
            </button>
        </div>
        <button
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold
                    hover:bg-gray-900 transition"
            onClick={handleAddToCart}
        >
            Agregar al carrito
        </button>
        <Toaster />
        </div>
    )
    }

export default ItemCount