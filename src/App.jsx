import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Description from './components/Description'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = { <Home />}/>
       <Route path='/description/:id' element ={<Description />} />
       <Route path='/cart' element ={<Cart />} />
    </Routes>
    </>
  )
}

export default App
