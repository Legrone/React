import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const getQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)

    const isInCart = product => cart.some(item => item.id === product.id)

    const addToCart = product => {
        const cartCopy = [ ...cart]
        if (!isInCart(product)) {
            setCart([ ...cart, product])
        } else {
            const newCart = cartCopy.map(item => {
                if (item.id === product.id) return { ...item, count: item.count + product.count}
                else return item
            })
            setCart(newCart)
        }
    }

    const getTotal = () => {
        const total = cart.reduce((acc, current) => acc + (current.count*current.price), 0)
        return total.toFixed(2)
    }

    const deleteProduct = (id) => {
        const cartCopy = cart.filter(p => p.id !== id)
        setCart(cartCopy)
    }

    return (
        <CartContext.Provider value={{ cart, getQuantity, addToCart, getTotal, deleteProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider 