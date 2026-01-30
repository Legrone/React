import CartWidget from './CartWidget';
import { Link } from 'react-router'

function Navbar({categories}) { 
  return ( 
  <header className="w-full bg-blue-600 p-4 flex items-start justify-between">
    
    <div className="flex flex-col"> 
      <Link className="text-4xl font-bold text-white" to='/'>La Rancheada</Link>
       <p className="text-sm mt-1 text-blue-200"> Esos se están usando ahora, y te queda fachas </p>
    </div>
      <details className="dropdown">
       <summary className = "btn m-1">categorias</summary>
       <ul className = "menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
       {categories.map(cat => (
        <li key={cat.id}>
          <Link to={`/category/${cat.name}`}>{cat.name}</Link>
        </li>
      ))}

        </ul>
      </details>
    
    <CartWidget
    style='bg-[#2563eb] text-black px-8 rounded cursor-pointer' />
     </header> ); 
     
  } 
  
  export default Navbar;