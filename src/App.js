import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './App.css';

// Views
import Home from './Views/Home';
import Cart from './Views/Cart';

//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import { ProductsContextProvider } from './Context/ProductsContext';

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <MainLayOut>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/cart" exact element={<Cart/>}/>
          </Routes>
          </MainLayOut>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
