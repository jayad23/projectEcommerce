import React, {useState} from 'react'

//Login
import GoogleLogin from 'react-google-login';

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


        <div class="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">

           <form onSubmit={submitHandler} class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2" 
           action="">
            <div class="flex justify-center py-4">
              <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Formulario Registro</h1>
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl" > {resgistrandome? "Registrate" : "Inicia Sesión"} </h1>
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
              <button  class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'> { resgistrandome? "Registrate" : "Iniciar Sesión" } </button>
              <div className="flex justify-center aling-center my-auto">
                <GoogleLogin
                    clientId="989520578565-sbdrbdj5brv88su0nl8s7stb72vid81b.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>  
              <button onClick={()=> setResgistrandome (!resgistrandome)}   class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'> { resgistrandome? "Ya tienes cuenta? Inicia Sesión": "No tienes cuenta? Registrate" } </button>
            </div>
            

           </form>


        </div>

    )
}

export default Login
