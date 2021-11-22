import React, {useState} from 'react'

import Login from '../Login/Login';

//Firebase
// import firebaseApp from './Login/credenciales';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth(firebaseApp);

const Home = () => {

    
    // const [userGlobal, setUserGlobal] = useState(null)

    // onAuthStateChanged(auth, (userFirebase) =>{
    //   if (userFirebase) {
    //     //en caso de que haya inicio de sesion
    //     setUserGlobal(userFirebase);
        
    //   }else{
    //       // En caso de no haya sesión iniciada
    //       setUserGlobal(null);
    //   }
    // })
    // console.log(userGlobal);



    return (
        <>
            {/* {userGlobal? <Formulario/> : <Login/>} */}
        </>
    )
}

export default Home
