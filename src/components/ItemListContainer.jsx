import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer () { 
  const [items, setItems] = useState([]) 
  const { categoryName } = useParams()

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then(prods => setItems(prods))
    } else {
    getProducts()
      .then(prods => setItems(prods))
    }
  }, [categoryName])

  const getItems = () => new Promise((resolve, reject) => {resolve(prod)}) 
  return <ItemList items={items}/>
}

export default ItemListContainer

