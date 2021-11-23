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
        <Routes>
          <Route element={<MainLayOut />}>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/cart" exact element={<Cart/>}/>  
          </Route>
            <Route path="/login"element={<Login/>}/>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
