import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'
import { PacmanLoader as Loader } from 'react-spinners'

function ItemListContainer () { 
  const [items, setItems] = useState([]) 
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getProductsByCategory(id)
        .then(prods => setItems(prods))
    } else {
    getProducts()
      .then(prods => setItems(prods))
    }
  }, [id])

  if (!items.length) {
    return (
        <div className='flex justify-center h-96 items-center'>
          <Loader color='yellow' />
        </div>
    )
  }

  return <ItemList items={items}/>
}

export default ItemListContainer

