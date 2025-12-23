import { useState } from 'react'

const helados = [ 
{ id: 1, tamaño: "Chico" }, 
{ id: 2, tamaño: "Mediano" }, 
{ id: 3, tamaño: "Grande" }, 
{ id: 4, tamaño: "1/2 Kilo" }, 
{ id: 5, tamaño: "1 Kilo" }, 
{ id: 6, sabor: "Vainilla" }, 
{ id: 7, sabor: "Chocolate" }, 
{ id: 8, sabor: "Frutilla" }, 
{ id: 9, sabor: "Dulce de leche" }, 
{ id: 10, sabor: "Limón" }, 
{ id: 11, sabor: "Menta granizada" }, 
{ id: 12, sabor: "Cookies & Cream" }, 
{ id: 13, sabor: "Banana split" }, 
{ id: 14, sabor: "Tramontana" }, 
{ id: 15, sabor: "Sambayón" },
]; 

function ItemListContainer () { 
  const [items, setItems] = useState([]) 
  
  const getItems = () => new Promise((resolve, reject) => {resolve(helados)}) 
  return ( 
  
<div className ='grid grid-cols-4 p-4'> 
  {helados.map(prod => (<div className="card bg-base-100 w-96 shadow-sm"> <figure> 
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /> 
    </figure> 
    
    <div className="card-body"> 
      <h2 className="card-title">{prod.tamaño}{prod.sabor}</h2> 
      <p>elija con sabiduria</p> <div className="card-actions justify-end"> 
        <button className="btn btn-primary">Buy Now</button> 
        </div> 
      </div> 
    </div>))} 
  </div> ) 
  } 
  
export default ItemListContainer