import NavbarContainer from './components/NavbarContainer'
import ItemListContainer from './components/ItemListContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router'
import CartContainer from './components/CartContainer'

function App() { 
  return ( 
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

