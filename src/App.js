import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './App.css';

// Views
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import Login from './Views/Login/Login';
import Checkout from './Views/Checkout/Checkout';


//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import { ProductsContextProvider } from './Context/ProductsContext';
import Products from './Views/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <MainLayOut>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/cart"  element={ <Cart /> }/>
            <Route path="/products"  element={ <Products /> }/>
            <Route path="/checkout"  element={ <Checkout /> }/>
            <Route path="/login"  element={ <Login /> }/>
          </Routes>
          </MainLayOut>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
