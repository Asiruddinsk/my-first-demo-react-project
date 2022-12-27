
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Landpage from './Components/Landpage';



function App() {
  return <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Landpage' element={<Landpage />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      </BrowserRouter>
  </div>
  
  
 
}

export default App;
