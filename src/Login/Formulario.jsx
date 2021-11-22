
import React, {useState} from 'react'
import { useForm } from '../Hooks/useForm'

import "./Formulario.style.css"


const initialForm = {
    name: "",
    email: "",
    user: "",
    password:""
}

const validationsForm = (form)=>{
    
    
    
    
    let error = {}

    //Expresiones regulares para los campos a llenar en el form 
    let regexName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    

    //trim nos ayuda a no contar los espacios, osea que valide las letras
    // validamos con los if para revisar que cada text tenga un valor al enviar el form
    if (!form.name.trim()) {
        error.name ="El campo Nombre es`Requerido`";
    } 

    if (!form.email.trim()) {
        error.email ="El campo Email es`Requerido`";
    }
    if (!form.user.trim()) {
        error.user ="El campo Usuario es`Requerido`";
    }

    if (!form.password.trim()) {
        error.password ="El campo Contraseña es`Requerido`";
    }

    return error;
}


const Formulario = () => {
    const {
        form, 
        error, 
        loading, 
        response, 
        handleChange, 
        handleSubmit, 
        handleBlur
    } = useForm(initialForm, validationsForm)



    return (
        <main>

            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name" 
                onBlur={handleBlur}
                placeholder="Escribe tu nombre" 
                onChange={handleChange} 
                value={form.name}
                required
                />

                {error.name && <p> { error.name } </p> }

                <input type="text" 
                name="user" 
                onBlur={handleBlur}
                placeholder="Usuaio" 
                onChange={handleChange} 
                value={form.usuario}
                required
                />
                {error.user && <p> { error.user } </p> }

                <input type="email" 
                name="email" 
                onBlur={handleBlur}
                placeholder="Escribe tu Email" 
                onChange={handleChange} 
                value={form.email}
                required
                />
                { error.email && <p> { error.email } </p> }

                <input type="password" 
                name="password" 
                onBlur={handleBlur}
                placeholder="Escribe Contraseña" 
                onChange={handleChange} 
                value={form.password}
                required
                />
                { error.password && <p> { error.password } </p> }

                

                <input type="submit" value="Enviar!" />
                
            </form>

            <button type="submit">Acceder con Google</button>

        </main>

    )
}




export default Formulario
