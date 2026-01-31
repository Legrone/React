import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'
import MyLoader from './MyLoader'

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
    return <MyLoader />
  }

  console.log (items)
  return <ItemList items={items}/>
}

export default ItemListContainer

