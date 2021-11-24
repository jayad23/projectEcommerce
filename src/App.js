import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './App.css';

// Views
import Home from './Views/Home';
import Cart from './Views/Cart';
import Checkout from './Pasarela de pagos /Checkout';
//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';

function App() {
  return (
    <BrowserRouter>
      <MainLayOut>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path ="/checkout" exact element={<Checkout/>} />
        </Routes>
        </MainLayOut>
    </BrowserRouter>
  );
}

export default App;
