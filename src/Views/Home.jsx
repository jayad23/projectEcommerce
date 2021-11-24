import React, {useState} from 'react'


import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = () => {

    return (
        <>
            <h2>Holi Home</h2>
            <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </>
    )
}

export default Home
