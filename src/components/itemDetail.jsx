import ItemCounter from './itemCount'

function ItemDetail ({ detail }) {
    return (
                <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                scr={detail?.url}
                className="max-w-sm rounded-lg shadow-2xl"
                />
            <div>
                <h1 className="text-5xl font-bold">{detail?.title}</h1>
                <p className='mt-3'>${detail?.price}</p>
                <p className="py-6">
                    {detail?.description}
                </p>
                <ItemCounter product={detail} />
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail