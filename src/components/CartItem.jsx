function CartItem ({ name, quantity, img}) {
    return (
        <div className='flex justify-around items-center border-b p-3 mb-3'>
            <img scr={img} alt={name} className='w-10 h-10 rounded-full'/>
            <p>{name} x {quantity}</p>
            <button className='bg-red-500 px-5 py-2 rounded cursor-pointer'>eliminar</button>
        </div>
    )
}

export default CartItem