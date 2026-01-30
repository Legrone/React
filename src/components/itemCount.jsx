import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

function ItemCount ({ product }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart({ ...product, count})
        toast('Se agrego ${product.title} al carrito')
    }

    return (
        <div className='p-10 w-[300px] border mt-4 ml-3'>
            <p className='text-center'>{count}</p>
            <button
                ckassName='bg-red-500 px-7 mr-3 py-2 rounded'
                onClick={() => setCount(count -1)}>
            restar
            </button>


            <button
            className='bg-green-500 px-7 py-2 reounded'
            onClick={() => setCount(count + 1)}>
            sumar
            </button>

            <button
            className='bg-green-500 px-7 py-2 reounded'
            onClick={handleAddToCart}>
            agregar al carrito
            </button>
            <Toaster />
        </div>
    )
}

export default ItemCount