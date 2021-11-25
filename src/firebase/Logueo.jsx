import React, { useState } from "react";


//Login Firebase
import firebaseApp from "./credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

//img Login
import UserLogin from "../Assets/undraw_login_re_4vu2.svg"

//logo Google
import LogoGoogle from "../Assets/google_icon-icons.com_62736.svg"

//Firebase config
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {

    //State registrado
  const [registrandome, setRegistrandome] = useState(false);

  //Auth Firebase
  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const contra = e.target.password.value;

    if (registrandome) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <div>
      
      <div class="flex h-screen bg-gray-200 items-center justify-center">
           <form onSubmit={submitHandler} class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 h-3/4" 
           action="">
            <div class="flex justify-center my-4 mx-auto h-24 w-24">
              <div class="flex bg-gray-100 rounded-full md:p-4 border-2 border-gray-300">
                <img src={UserLogin} alt="User Login" className="w-20 h-20" />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="flex">
                <h2 class="text-gray-600 font-bold md:text-2xl text-xl" > {registrandome? "Registrate" : "Inicia Sesión"} </h2>
              </div>
            </div>
            {registrandome === true ? (<input  class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  grid grid-cols-1 mt-5 mx-7"
                type="text" 
                name="usuario"             
                placeholder="Escribe tu Usuario"   
                required
                />) : null}
            <input  class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  grid grid-cols-1 mt-5 mx-7"
                type="email" 
                name="email"             
                placeholder="Escribe tu Email"   
                required
                />
            <div class="grid grid-cols-1 mt-5 mx-7 ">
              <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              type="password"
              name="password" 
              placeholder="Password"
               />
            </div>
            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
              <button  class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'> { registrandome? " Registrate" : " Iniciar Sesión" } </button> 
              <button onClick={()=> setRegistrandome (!registrandome)}
               class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
               { registrandome? "¿Ya tienes cuenta? Inicia Sesión": "¿No tienes cuenta? Registrate" }
              </button>
              
              <button
                className="flex shadow-xl py-1 px-4 rounded-3xl font-bold text-gray-700 justify-between w-24 "
                type="submit"
                onClick={() => signInWithRedirect(auth, googleProvider)}
                ><img src={LogoGoogle} className="w-6 h-6"/> Login
                </button>
            </div>
           </form>
        </div>
    </div>
  );
};

export default Logueo;
