function OrderForm({ onSubmit }) {
    return (
        <div className='w-full lg:w-2/5 p-8 bg-neutral text-neutral-content shadow-2xl rounded-2xl h-fit'>
            <h2 className='text-2xl font-bold mb-6 text-center uppercase tracking-wider'>Datos de Envío</h2>
            
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label"><span className="label-text text-neutral-content/70">Nombre Completo</span></label>
                    <input type="text" name="name" required placeholder='Ej: Diego de la Vega' 
                        className='input input-bordered w-full text-white' />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text text-neutral-content/70">Email</span></label>
                    <input type="email" name="email" required placeholder='diego@ejemplo.com' 
                        className='input input-bordered w-full text-white' />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text text-neutral-content/70">Teléfono</span></label>
                    <input type="tel" name="phone" required placeholder='+54 9 11 ...' 
                        className='input input-bordered w-full text-white' />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text text-neutral-content/70">Dirección</span></label>
                    <input type="text" name="direction" required placeholder='Calle 123, Ciudad' 
                        className='input input-bordered w-full text-white' />
                </div>

                <button className='btn btn-primary w-full mt-6 text-lg hover:scale-[1.02] transition-transform'>
                    Confirmar Compra 🚀
                </button>
            </form>
        </div>
    )
}
export default OrderForm