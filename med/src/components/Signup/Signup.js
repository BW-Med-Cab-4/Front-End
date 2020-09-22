import React, {useState} from "react"
import * as Yup from 'yup'
import formSchema from './FormSchema';
import SignupForm from './SignupForm';
import axios from 'axios'

const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
const initialErrors = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
}
function Signup (){
    const [formValues, setFormValues]=useState(initialFormValues)
    const [formErrors, setFormErrors]=useState(initialErrors)

    const onInputChange = evt => {
        
        Yup.reach(formSchema, evt.target.name)
            .validate(evt.target.value)
            .then(valid => {
                setFormErrors({
                    ...formErrors
                })
            })
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
            })
    }
    const onSubmit = evt => {
        evt.preventDefault()
        console.log('this signup button works')
        const newUser ={
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password:formValues.password.trim(), 
        }
        console.log(newUser)
        axios.post('http://reqres.in/api/users',newUser)
            .then(res =>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return(
        <div>
            <SignupForm values = {formValues} onChange ={onInputChange} onSubmit={onSubmit}/>
        </div>
    )
}
  
export default Signup;