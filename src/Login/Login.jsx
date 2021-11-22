import React, {useState} from 'react'

//Login
import GoogleLogin from 'react-google-login';
//img Login
import UserLogin from "../Assets/undraw_login_re_4vu2.svg"

//Firebase
import firebaseApp from './credenciales'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(firebaseApp)

const Login = () => {
    const [resgistrandome, setResgistrandome] = useState(false)

    async function submitHandler(e){
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        
        console.log(email, password);
        const usuario = await createUserWithEmailAndPassword(auth, email, password);
        console.log(usuario);
        signInWithEmailAndPassword(auth, email, password);
    }

    //Login Google API
    const responseGoogle =  (response) => (
      console.log(response)
      )

    return (


        <div class="flex h-screen bg-gray-200 items-center justify-center">

           <form onSubmit={submitHandler} class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2" 
           action="">
            <div class="flex justify-center py-4">
              <div class="flex bg-gray-100 rounded-full md:p-4 border-2 border-gray-300">
                <img src={UserLogin} alt="User Login" className="w-20 h-20" />
              </div>
            </div>

            <div class="flex justify-center">
              <div class="flex">
                <h2 class="text-gray-600 font-bold md:text-2xl text-xl" > {resgistrandome? "Registrate" : "Inicia Sesión"} </h2>
              </div>
            </div>

            <input  class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  grid grid-cols-1 mt-5 mx-7"
                type="text" 
                name="usuario"             
                placeholder="Escribe tu Usuario"   
                required
                />
        
            <input  class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  grid grid-cols-1 mt-5 mx-7"
                type="email" 
                name="email"             
                placeholder="Escribe tu Email"   
                required
                />
        
            <div class="grid grid-cols-1 mt-5 mx-7">
              <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              type="password"
              name="password" 
              placeholder="Contraseña" />
            </div>
        

        
            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
              <button  class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'> { resgistrandome? " Registrate" : " Iniciar Sesión" } </button>
              <div className="flex justify-center aling-center my-auto">
                <GoogleLogin
                    clientId="989520578565-sbdrbdj5brv88su0nl8s7stb72vid81b.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}  
                />
            </div>  
              <button onClick={()=> setResgistrandome (!resgistrandome)}   class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'> { resgistrandome? "¿Ya tienes cuenta? Inicia Sesión": "¿No tienes cuenta? Registrate" } </button>
            </div>
            

           </form>


        </div>

    )
}

export default Login
