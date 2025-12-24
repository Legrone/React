import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'

function ItemListContainer () { 
  const [items, setItems] = useState([]) 
  const { categoryName } = useParams()

  useEffect(() => {
    const url = 'https://dummyjson.com/products'
    const urlCategories = `https://dummyjson.com/products/category/${categoryName}`


    fetch(categoryName ? urlCategories : url)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [categoryName])

  const getItems = () => new Promise((resolve, reject) => {resolve(prod)}) 
  return <ItemList items={items}/>
}

export default ItemListContainer

