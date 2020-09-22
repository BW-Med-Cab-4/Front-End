import React, {useState, useEffect} from "react"
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

const initialUsers= []

function Signup (){
    const [users, setUsers] = useState(initialUsers)
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

    // const validate = (name, value) => {
    //     yup
    //       .reach(schema,name)
    //       .validate(value)
    //       .then(valid => {
    //         setFormErrors({
    //           ...formErrors,
    //           [name]: ''
    //         })
    //       })
    //       .catch(err => {
    //         setFormErrors({
    //           ...formErrors,
    //           [name]: err.errors[0]
    //         });
    //       });
    //   }

    // const onInputChange = (name, value) => {
    //     validate(name,value)
    //     setFormValues({
    //         ...formValues,
    //         [name]: value
    //     })
    // }

    const onSubmit = evt => {
        evt.preventDefault()
        console.log('this signup button works')
    
        
        const newUser ={
            email: formValues.email.trim(),
            firstname: formValues.first_name.trim(),
            lastname: formValues.last_name.trim(),
            phone: '3457665432',
            password: formValues.password.trim(), 
        }
        console.log(newUser)
        postNewUser(newUser)
        console.log('hello')
    }
         
    
    
        const postNewUser = newUser => {
        axios.post('https://med-cab-user.herokuapp.com/api/auth/register', newUser)
            .then(res =>{
                setUsers([...users, res.data])
                console.log(res.data)
                setFormValues(initialFormValues)

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

