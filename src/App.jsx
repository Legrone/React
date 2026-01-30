import NavbarContainer from './components/NavbarContainer'
import ItemListContainer from './components/ItemListContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router'
import CartContainer from './components/CartContainer'
import ItemDetailContainer from './components/itemDetailContainer';

function App() { 
  return ( 
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

