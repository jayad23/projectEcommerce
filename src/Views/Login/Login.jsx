import React, { useContext, useState } from 'react'
import { firebase, googleProvider} from '../..//Firebase/Firebase.config'
import "./Login.styles.css"
import ProductsContext from '../../Context/ProductsContext'

const Login = () => {

    const { state, dispatch } = useContext(ProductsContext)
    const [ logged, setLogged ] = useState(false)
    const handleLogin = async (e)=> {
        e.preventDefault()
        try {
            const { user } = await firebase.auth().signInWithPopup(googleProvider)
            console.log(user)
            const { displayName, photoURL, uid} = user
            const infoLogIn = { displayName, photoURL, uid }
            dispatch({type:'LOG_IN', payload: infoLogIn})
            setLogged(!logged)

        } catch (error) {
            console.log(error)
        }
    }

    const handleLogOut = async (e)=> {
        e.preventDefault()
        const logOut = await firebase.auth().signOut(googleProvider)
        console.log(logOut)
    }
    
    console.log(state.loggedUser)

    return (
        <div className="contenedor-login">
            <form onSubmit={ logged ? (e)=>handleLogOut(e) : (e)=> handleLogin(e) }>
                <input type="email" placeholder='E-Mail'/>
                <input type="password" placeholder='Password'/>
                <button type='submit'>{logged ? "Salir" : "Ingresar" }<i className="fab fa-google mx-2"></i></button>
            </form>
        </div>
    )
}

export default Login
