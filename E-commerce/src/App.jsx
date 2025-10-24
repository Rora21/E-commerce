import React from 'react'
import Nav from './componets/nav' 
import Home from './componets/home'
import Products from './componets/products' 
import About from './componets/about'
import Contact from './componets/Contact'
import Footer from './componets/footer'
import { CartContext } from './componets/CartContext'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
     <Nav />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/CartContext' element={<CartContext/>}/>
     </Routes>
      <Footer/>

    </Router>
  )
}

export default App
