import CartWidget from "./CartWidget";

function Navbar() { 
  return ( <header className="w-full bg-blue-600 p-4 flex items-start justify-between">
    
    {/* IZQUIERDA */} 
    <div className="flex flex-col"> 
      <h1 className="text-4xl font-bold text-white">Heladería FTC</h1>
       <p className="text-sm mt-1 text-blue-200"> ¡Bienvenido! Los mejores sabores te esperan 🍦 </p> 
    </div>
    
    {/* MENÚ */}
    <nav className="flex gap-6 text-lg font-semibold mt-2">
       <a href="#" className="text-black hover:text-yellow-300">Tamaños</a>
       <a href="#" className="text-black hover:text-yellow-300">Pote</a>
      <a href="#" className="text-black hover:text-yellow-300">Preenvasado</a>
      <a href="#" className="text-black hover:text-yellow-300">Sabores</a>
    </nav> 
    
    {/* CARRITO */} 
    <CartWidget />
     </header> ); 
     
  } 
  
  export default Navbar;