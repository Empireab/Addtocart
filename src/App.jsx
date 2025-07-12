
import { NavLink } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'

function App() {
  

  return (
    <>
    <nav>
      <NavLink to="/cart"  >
        
  <button> 
    Cart
  </button>
      </NavLink>
</nav>
      <Home/>
    </>
  )
}

export default App
