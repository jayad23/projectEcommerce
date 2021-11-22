import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
// Styles
import './App.css';

// Views
import Home from './Views/Home';
import Cart from './Views/Cart';
import NotFound from "./Views/Not Fount/NotFount"

//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import Login from './Login/Login';

function App() {



  return (
    
    <BrowserRouter>
      <MainLayOut>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/cart" exact element={<Cart/>}/>  
            <Route path="/login"element={<Login/>}/>
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </MainLayOut>
    </BrowserRouter>
  );
}

export default App;
