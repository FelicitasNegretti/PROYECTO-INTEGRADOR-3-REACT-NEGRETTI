import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Inicio } from '../pages/Inicio'
import { Historial } from '../pages/Historial'
import { Registrate } from '../pages/Registrate'


function App() {
  
  return (
    <>
  <BrowserRouter>
    <div className='nav'>
    <Link className='navItem' to="/" >Inicio</Link>
    <Link className='navItem' to="/historial" >Historial📋</Link>
    <Link className='navItem' to="/registrate" >Registrate</Link>
    </div>

    <Routes>
      <Route path='/' exact element={< Inicio/>} />
      <Route path='/historial' exact element={< Historial/>} />
      <Route path='/registrate' exact element={< Registrate/>} />  
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
