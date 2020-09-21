import React from 'react';
import axios from 'axios'
function Signup(props){
    const {values, onInputChange} = props
    const onSubmit = evt =>{
        evt.preventDefault()
        
        const newUser = {
            first_name: values.first_name.trim(),
            last_name: values.last_name.trim(),
            email: values.email.trim(),
            password: values.password.trim(), 
        }
        axios.post('http://localhost:3000/signup', newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    return (
        <form onSubmit = {onSubmit}>
            <h3>Sign up</h3>

            <div className = "form-group">
                <label>First Name</label>
                <input type = "text" 
                       className = "form-control"
                       name ="first_name"
                       value ={values.first_name}  
                       onInputChange = {onInputChange}
                       placeholder = "First Name" />
            </div>

            <div className = "form-group">
                <label>Last Name</label>
                <input type = "text" 
                       className = "form-control"
                       name ="last_name" 
                       value ={values.last_name}  
                       onInputChange = {onInputChange}
                       placeholder = "Last Name" />
            </div>

            <div className = "form-group">
                <label>Email</label>
                <input type = "email" 
                       className = "form-control"
                       name ="email" 
                       value ={values.email}  
                       onInputChange = {onInputChange}
                       placeholder = "Email" />
            </div>

            <div className = "form-group">
                <label>Password</label>
                <input type = "password" 
                       className = "form-control"
                       name ="password" 
                       value ={values.password}  
                       onInputChange = {onInputChange}
                       placeholder = "Password" />
            </div>

            {/* <div className = "form-group">
                <label>Confirm Password</label>
                <input type = "password" className = "form-control"  placeholder = "Confirm Password" />
            </div> */}
            <button className ="btn btn-primary btn-block">Sign up</button>
        </form>
    )
}
export default Signup;