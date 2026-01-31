import { Link } from 'react-router'

function EmptyCart () {
    return (
        <div className='mt-10 text-center'>
            <p className='mb-3'>No tienes productos en el carrito</p>
            <Link to="/"className='bg-green-400 px-5 py-3 rounded'>Seguir Comprando</Link>
        </div>
    )
}

export default EmptyCart