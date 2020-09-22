import React, { useState }from "react"
import LoginForm from "./LoginForm";

const initialFormValues ={
    email: "",
    password:""
}
function Login (){
    const [formValues, setFormValues]=useState(initialFormValues)

    const onInputChange = evt =>{
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt =>{
        evt.preventDefault()
        console.log("this login button works")
        setFormValues(initialFormValues)
    }

    return(
        <div>
            <LoginForm values = {formValues} onChange ={onInputChange} onSubmit={onSubmit}/>
        </div>
    )
}
    
export default Login;