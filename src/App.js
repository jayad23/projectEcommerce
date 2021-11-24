import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
// Styles
import './App.css';

// Views
import Home from './Views/Home';
import Cart from './Views/Cart';
import NotFound from "./Views/Not Fount/NotFount"
import Logueo from './firebase/Logueo';

//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import Login from './Login/Login';


import firebaseApp from "./Login/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);
function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });

  return (
    
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayOut />}>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/cart" exact element={<Cart/>}/>  
          </Route>
            <Route path="/login"element={<Login/>}/>
            <Route path="/*" element={<NotFound />} />
            <Route path="/logueo" element={usuarioGlobal ? (
              <Home correoUsuario={usuarioGlobal.email} />
            ) : (
              <Logueo />
            )}/>
            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
