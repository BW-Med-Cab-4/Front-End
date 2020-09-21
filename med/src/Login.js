import React from 'react';
function Login (){
   
    const onSubmit = evt => {
        evt.preventDefault();
        console.log("Login")
    }
    return(
        <form onSubmit = {onSubmit}> 
            <h3>Login</h3>

            {/* <div className = "form-group">
                <label>First Name</label>
                <input type = "text" className = "form-control"  placeholder = "First Name" />
            </div>

            <div className = "form-group">
                <label>Last Name</label>
                <input type = "text" className = "form-control"  placeholder = "Last Name" />
            </div> */}

            <div className = "form-group">
                <label>Email</label>
                <input type = "email" className = "form-control"  placeholder = "Email" />
            </div>

            <div className = "form-group">
                <label>Password</label>
                <input type = "password" className = "form-control"  placeholder = "Password" />
            </div>

            <button className ="btn btn-primary btn-block">Login</button>
        </form>
    )
}

export default Login;