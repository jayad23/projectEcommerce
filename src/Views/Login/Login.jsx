import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { firebase, googleProvider} from '../..//Firebase/Firebase.config'
import "./Login.styles.css"
import ProductsContext from '../../Context/ProductsContext'

import imgLogin from "../../Assets/imgLogin.jpg"

const Login = () => {

    const [ emailAndPass, setEmailAndPass ] = useState({email:'', password:''})
    const { state, dispatch } = useContext(ProductsContext)

    const handleLoginGmail = async (e)=> {
        e.preventDefault()
        try {
            const { user } = await firebase.auth().signInWithPopup(googleProvider)
            const { displayName, photoURL, uid} = user
            const infoLogIn = { displayName, photoURL, uid }
            dispatch({type:'LOG_IN_GMAIL', payload: infoLogIn})

        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const handleLoginEmail = async (e)=>{
        e.preventDefault()
        const { email, password } = emailAndPass
        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword( email, password)
            await user.updateProfile({photoURL: imgLogin})
            dispatch({type: 'LOG_IN_EMAIL', payload: user })
            alert(`Bienvenido ${user.displayName}. Ya te encuentras registrado`)

        } catch (error) {
            alert(error)
        }
    }


    const handleLogOutGmail = (e)=>{
        e.preventDefault()
        console.log('Logged Out')
    }
    

    return (
        
            <div className="container-log">

                <div className="img-container">
                    <img src={imgLogin} alt="" />
                </div>

                <div className="contenedor-login">
                    {
                        state.loggedUser ? 
                            <h1>Bienvenido {state.loggedUser.displayName}</h1>
                        :
                        <>
                            <form 
                                onSubmit={(e)=> handleLoginEmail (e)}
                                className="log-in">
                                <input 
                                    onChange={(e) => setEmailAndPass({...emailAndPass, email: e.target.value})}
                                    type="email" placeholder='E-Mail'/>
                                <input 
                                    onChange={(e)=> setEmailAndPass({...emailAndPass, password: e.target.value})}
                                    type="password" placeholder='Password'/>
                                <button type="submit">Ingresar</button> 
                            </form>
                            <form 
                                onSubmit={ (e)=> handleLoginGmail(e) } 
                                className="container-gmail">
                                <button type='submit'>Ingresa  con <i className="fab fa-google"></i></button>
                            </form>
                            <Link to="/register">¿Aun no tienes cuenta?</Link>
                        </>
                    }
                    {
                        state.loggedUser ?
                        <form 
                            onSubmit={ (e)=>handleLogOutGmail(e)} 
                            className="container-gmail">
                            <button type='submit'>S A L I R <i className="fas fa-sign-out-alt"></i></button>
                        </form>
                        :
                        null
                    }
                </div>
            </div>
       
    )
}

export default Login
