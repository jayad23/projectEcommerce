import React, {useState} from "react"

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm )
    const [error, setError] = useState({})//State donde almacenamos los errores
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)//Manejar la respuesta

    // Crea una copia del objeto del formulario y actualiza el elemento que cambia
    const handleChange=(e)=>{
        // desestructuto
        const {name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });

    }

    // cuando pierde el foco los elementos del formulario
    //actauliza el estado,
    const handleBlur=(e)=>{
        // llamamos handlechange y ejecuta, y se ejecuta con el error
        handleChange(e);

        //Recibe como parametro validateForm para validar cada una de las variables del formulario osea el input
        setError(validateForm(form));
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        setError(validateForm(form));

        if(Object.keys(error).length === 0){
            alert("Enviando Resgistro");
            // cargamos la pagina loader y hacemos la peticion fetch
            setLoading(true);
        }else{
            return;
        }
    }

    return{
        form, 
        error, 
        loading, 
        response, 
        handleChange, 
        handleSubmit, 
        handleBlur
    }

}
