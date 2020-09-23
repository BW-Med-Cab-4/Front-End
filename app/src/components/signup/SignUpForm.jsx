// import React from 'react'

// function SignupForm (props){
//     const {values, onSubmit, onChange, errors}=props

//     return (
//         <form onSubmit = {onSubmit}>
//             <h3>Sign up</h3>
//             <div className = "form-group">
//                 <label>First Name</label>
//                 <input type = "text"
//                        className = "form-control"
//                        name = "first_name"
//                        value = {values.first_name}
//                        onChange = {onChange}
//                        placeholder = "First Name" />
//             </div>

//             <div className = "form-group">
//                 <label>Last Name</label>
//                 <input type = "text"
//                        className = "form-control"
//                        name = "last_name"
//                        value = {values.last_name}
//                        onChange = {onChange}
//                        placeholder = "Last Name" />
//             </div>

//             <div className = "form-group">
//                 <label>Email</label>
//                 <input type = "email"
//                        className = "form-control"
//                        name = "email"
//                        value = {values.email}
//                        onChange = {onChange}
//                        placeholder = "Email" />
//             </div>

//             <div className= "form-group">
//                 <label>Phone</label>
//                 <input
//                     type='tel'
//                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                     name= 'phone'
//                     className="form-control"
//                     value = {values.phone}
//                     onChange={onChange}
//                     placeholder = 'Phone #'
//                 />
//             </div>

//             <div className = "form-group">
//                 <label>Password</label>
//                 <input type = "password"
//                        className = "form-control"
//                        name = "password"
//                        value = {values.password}
//                        onChange = {onChange}
//                        placeholder = "password" />
//             </div>
//             <button className ="btn btn-primary btn-block">Sign up</button>
//             <p>{errors.first_name}</p>
//             <p>{errors.last_name}</p>
//             <p>{errors.email}</p>
//             <p>{errors.password}</p>
//             <p>{errors.phone}</p>
//         </form>
//     )
// }
// export default SignupForm;
import React from "react";

function SignupForm(props) {
  const { values, onSubmit, onChange, errors } = props;

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign up</h3>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          name="first_name"
          value={values.first_name}
          onChange={onChange}
          placeholder="First Name"
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          name="last_name"
          value={values.last_name}
          onChange={onChange}
          placeholder="Last Name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          className="form-control"
          value={values.phone}
          onChange={onChange}
          placeholder="Phone #"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="password"
        />
      </div>
      <button className="btn btn-primary btn-block">Sign up</button>
      <p>{errors.first_name}</p>
      <p>{errors.last_name}</p>
      <p>{errors.email}</p>
      <p>{errors.password}</p>
      <p>{errors.phone}</p>
    </form>
  );
}
export default SignupForm;
