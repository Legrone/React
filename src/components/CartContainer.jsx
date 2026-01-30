import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { createOrder } from '../firebase/db'

function CartContainer () {
    const { cart, getTotal } = useContext(CartContext)
    const total = getTotal()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const direction = form.direction.value

        const user = { name, email, phone, direction }

        createOrder(user, cart, Numbre(total))
    }

    if (cart.length < 1) {
        return(
            <div className='mt-10 text-center'>
                <p className='mb-3'>No tienes productos en el carrito</p>
                <button className='bg-green-400 px-5 py-3 rounded'>ir a ver productos</button>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center mt-20 lg:flex-row'>
            <div className='w-11/12 lg:w-1/3 p-3 h-[500px] overflow-y-auto'>
            {cart.map(prod => <CartItem key={prod.id} id={prod.id} name={prod.name} quantity={prod.count} img={prod.url} />)}
        </div>
        <div className='w-11/12 lg:w-1/3 h-[500px] p-3'>
            <p className='text-3xl mb-10'>Total: ${total}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder='Diego de la Vega' className='border p-1 rounded w-full mb-3' id='name' />
                <input type="email" required placeholder='DiegoVega@gmail.com' className='border p-1 rounded w-full mb-3' id='email' />
                <input type="text" required placeholder='+5401124869957' className='border p-1 rounded w-full mb-3' id='phone' />
                <input type="text" required placeholder='Direccion de envio' className='border p-1 rounded w-full mb-3' id='direction' />
                <button className='bg-white text-black px-5 py-2 w-full rounded cursor-pointer'>finalizar compra</button>
            </form>
    </div>
    </div>
        )
    }

export default CartContainer