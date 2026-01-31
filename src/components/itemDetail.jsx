import ItemCounter from './itemCount'

function ItemDetail({ detail }) {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
    
          <div className="flex justify-center items-center">
            <img
              src={detail.url}
              alt={detail.name}
              className="w-full max-w-sm rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {detail.name}
            </h1>

            <p className="text-3xl font-semibold text-green-600">
              ${detail.price}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {detail.description}
            </p>

            <div className="pt-4">
              <ItemCounter product={detail} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemDetail