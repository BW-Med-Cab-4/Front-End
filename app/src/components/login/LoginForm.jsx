// import React from "react";

// function LoginForm(props) {
//   const { values, onChange, onSubmit } = props;

//   return (
//     <form onSubmit={onSubmit}>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           className="form-control"
//           value={values.email}
//           onChange={onChange}
//           placeholder="Email"
//         />
//       </div>

//       <div className="form-group">
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           className="form-control"
//           value={values.password}
//           onChange={onChange}
//           placeholder="Password"
//         />
//       </div>

//       <button className="btn btn-primary btn-block">Login</button>
//     </form>
//   );
// }
// export default LoginForm;

import React from "react";

function LoginForm(props) {
  const { values, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <h3>Log In</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={values.email}
          onChange={onChange}
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={values.password}
          onChange={onChange}
          placeholder="Password"
        />
      </div>

      <button className="btn btn-primary btn-block">Login</button>
    </form>
  );
}
export default LoginForm;
