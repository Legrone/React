import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import EmptyCart from './EmptyCart'
import OrderForm from './OrderForm'
import CartList from './CartList'
import toast, {Toaster} from 'react-hot-toast'

function CartContainer () {
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const total = getTotal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const user = Object.fromEntries(data.entries())

        const orderId = await createOrder(user, cart, Number(total))
        
        toast(`EL ID de tu orden es ${orderId}`)
    }

    if (cart.length < 1) return <EmptyCart />

    return (
        <main className='min-h-screen bg-base-200 py-10 px-4'>
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start'>
                <CartList cart={cart} total={total}/>
                <OrderForm onSubmit={handleSubmit} />
                <Toaster />
            </div>
        </main>
    )
}

export default CartContainer