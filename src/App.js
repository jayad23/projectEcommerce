import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
// Styles
import './App.css';

// Views
import Home from './Views/Home';
import Cart from './Views/Cart';

//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import Formulario from './Login/Formulario';
import Login from './Login/Login';

function App() {



  return (
    
    <BrowserRouter>
      <MainLayOut>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/formulario" exact element={<Formulario/>}/>
          <Route path="/login" exact element={<Login/>}/>
        </Routes>
        </MainLayOut>
    </BrowserRouter>
  );
}

export default App;
