import React from 'react'
import Page from './Page'
import Details from './Details'
import "./style.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from './Login'
import Registration from './Registration'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Page/>}/>
    
    <Route path='/images' element={<Details/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
